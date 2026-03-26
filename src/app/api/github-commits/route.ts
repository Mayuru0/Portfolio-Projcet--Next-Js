import { NextResponse } from "next/server";

export const revalidate = 3600; // cache 1 hour

export async function GET() {
  try {
    const res = await fetch(
      "https://api.github.com/users/Mayuru0/events/public?per_page=30",
      {
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
          ...(process.env.GITHUB_TOKEN
            ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
            : {}),
        },
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      return NextResponse.json({ commits: [] }, { status: 200 });
    }

    const events = await res.json();
    const commits: { sha: string; message: string; repo: string; date: string }[] = [];

    for (const event of events) {
      if (event.type !== "PushEvent") continue;
      for (const c of event.payload?.commits ?? []) {
        commits.push({
          sha: c.sha.slice(0, 7),
          message: c.message.split("\n")[0],
          repo: (event.repo.name as string).replace("Mayuru0/", ""),
          date: event.created_at,
        });
        if (commits.length >= 8) break;
      }
      if (commits.length >= 8) break;
    }

    return NextResponse.json({ commits });
  } catch {
    return NextResponse.json({ commits: [] }, { status: 200 });
  }
}
