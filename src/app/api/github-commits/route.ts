import { NextResponse } from "next/server";

export const revalidate = 3600; // cache 1 hour

const GITHUB_USERNAME = "Mayuru0";

const GRAPHQL_QUERY = `
  query($login: String!) {
    user(login: $login) {
      contributionsCollection {
        totalCommitContributions
        totalPullRequestContributions
        totalRepositoriesWithContributedCommits
      }
    }
  }
`;

export async function GET() {
  try {
    const token = process.env.GITHUB_TOKEN;

    if (!token) {
      return NextResponse.json({ totalCommits: null, commits: [] }, { status: 200 });
    }

    // GraphQL — total contributions
    const gqlRes = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        query: GRAPHQL_QUERY,
        variables: { login: GITHUB_USERNAME },
      }),
      next: { revalidate: 3600 },
    });

    let totalCommits: number | null = null;
    if (gqlRes.ok) {
      const gqlData = await gqlRes.json();
      totalCommits =
        gqlData?.data?.user?.contributionsCollection?.totalCommitContributions ?? null;
    }

    // REST — recent commits list
    const restRes = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=30`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
          Authorization: `Bearer ${token}`,
        },
        next: { revalidate: 3600 },
      }
    );

    const commits: { sha: string; message: string; repo: string; date: string }[] = [];
    if (restRes.ok) {
      const events = await restRes.json();
      for (const event of events) {
        if (event.type !== "PushEvent") continue;
        for (const c of event.payload?.commits ?? []) {
          commits.push({
            sha: c.sha.slice(0, 7),
            message: c.message.split("\n")[0],
            repo: (event.repo.name as string).replace(`${GITHUB_USERNAME}/`, ""),
            date: event.created_at,
          });
          if (commits.length >= 8) break;
        }
        if (commits.length >= 8) break;
      }
    }

    return NextResponse.json({ totalCommits, commits });
  } catch {
    return NextResponse.json({ totalCommits: null, commits: [] }, { status: 200 });
  }
}
