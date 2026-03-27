"use client";

import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { VscCircleFilled, VscGitCommit } from "react-icons/vsc";

interface Commit {
  sha: string;
  message: string;
  repo: string;
  date: string;
}

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 30) return `${days}d ago`;
  return `${Math.floor(days / 30)}mo ago`;
}

const SVG_URL =
  "https://raw.githubusercontent.com/Mayuru0/Portfolio-Projcet--Next-Js/output/github-contribution-grid-snake-dark.svg";

const GITHUB_URL = "https://github.com/Mayuru0";

export default function GitHubSnake() {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [commits, setCommits] = useState<Commit[]>([]);

  useEffect(() => {
    fetch("/api/github-commits")
      .then((r) => r.json())
      .then((data) => setCommits(data.commits ?? []))
      .catch(() => {});
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10">

      {/* Section header */}
      <div className="flex items-center gap-3 mb-6">
        <FaGithub className="text-white/25" size={13} />
        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/20">
          Open Source Activity
        </span>
        <div className="flex-1 h-px bg-white/[0.04]" />
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-1.5 text-[10px] font-mono text-white/20 hover:text-white/40 transition-colors"
        >
          <FaGithub size={10} />
          github.com/Mayuru0
        </a>
      </div>

      {/* Card */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          background: "#0d1117",
          border: "1px solid rgba(255,255,255,0.06)",
          boxShadow: "0 0 0 1px rgba(0,0,0,0.5), 0 24px 64px rgba(0,0,0,0.45)",
        }}
      >
        {/* Title bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "11px 16px",
            borderBottom: "1px solid rgba(255,255,255,0.04)",
            background: "rgba(255,255,255,0.012)",
          }}
        >
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57", display: "inline-block", flexShrink: 0 }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e", display: "inline-block", flexShrink: 0 }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28ca41", display: "inline-block", flexShrink: 0 }} />
          <span className="gh-titlebar-path" style={{ marginLeft: 8, fontFamily: "monospace", fontSize: 10, color: "#3d444d", letterSpacing: "0.02em" }}>
            ~/github/Mayuru0 — contribution-graph
          </span>
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 4, flexShrink: 0 }}>
            <VscCircleFilled style={{ color: "#39d353", fontSize: 8 }} />
            <span style={{ fontFamily: "monospace", fontSize: 9, color: "#3d444d" }}>live</span>
          </div>
        </div>

        {/* Snake graph area */}
        <div style={{ padding: "18px 18px 14px", overflowX: "auto", minHeight: 130 }}>

          {/* Skeleton */}
          {!loaded && !error && (
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              <div style={{ display: "flex", gap: 26, marginLeft: 28, marginBottom: 3 }}>
                {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map((m) => (
                  <div key={m} style={{
                    width: 22, height: 9, borderRadius: 2,
                    background: "rgba(255,255,255,0.03)",
                    animation: "ghpulse 1.5s ease-in-out infinite",
                  }} />
                ))}
              </div>
              {Array.from({ length: 7 }).map((_, r) => (
                <div key={r} style={{ display: "flex", gap: 3, marginLeft: 28 }}>
                  {Array.from({ length: 52 }).map((_, c) => (
                    <div key={c} style={{
                      width: 12, height: 12, borderRadius: 2,
                      background: "rgba(255,255,255,0.03)",
                      animation: "ghpulse 1.5s ease-in-out infinite",
                    }} />
                  ))}
                </div>
              ))}
            </div>
          )}

          {/* Error */}
          {error && (
            <div style={{
              display: "flex", flexDirection: "column", alignItems: "center",
              justifyContent: "center", gap: 8, height: 110,
              color: "#3d444d", fontFamily: "monospace", fontSize: 11,
            }}>
              <FaGithub size={20} style={{ opacity: 0.2 }} />
              <span>contribution graph unavailable</span>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#39d353", fontSize: 10, textDecoration: "none" }}
              >
                view on github →
              </a>
            </div>
          )}

          {/* SVG */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={SVG_URL}
            alt="GitHub contribution snake animation"
            onLoad={() => setLoaded(true)}
            onError={() => { setLoaded(true); setError(true); }}
            style={{
              display: loaded && !error ? "block" : "none",
              width: "100%",
              minWidth: 680,
              height: "auto",
            }}
          />
        </div>

        {/* Recent Commits */}
        {commits.length > 0 && (
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>

            {/* Commits header */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 18px 6px" }}>
              <VscGitCommit style={{ color: "#39d353", fontSize: 12, opacity: 0.8 }} />
              <span style={{
                fontFamily: "monospace", fontSize: 9,
                color: "#3d444d", textTransform: "uppercase", letterSpacing: "0.15em",
              }}>
                recent commits
              </span>
              <span style={{
                fontFamily: "monospace", fontSize: 9, color: "#39d353",
                background: "rgba(57,211,83,0.07)",
                border: "1px solid rgba(57,211,83,0.12)",
                borderRadius: 4, padding: "1px 6px",
              }}>
                {commits.length}
              </span>
            </div>

            {/* Commits list */}
            <div style={{ paddingBottom: 4 }}>
              {commits.map((c, i) => (
                <CommitRow key={c.sha + i} commit={c} isLast={i === commits.length - 1} />
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div style={{
          padding: "9px 18px 11px",
          borderTop: "1px solid rgba(255,255,255,0.03)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <span style={{ fontFamily: "monospace", fontSize: 9, color: "#272e38" }}>
            snake by{" "}
            <a
              href="https://github.com/Platane/snk"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#3d444d", textDecoration: "none" }}
            >
              Platane/snk
            </a>
          </span>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "monospace", fontSize: 9, color: "#3d444d",
              textDecoration: "none", display: "flex", alignItems: "center", gap: 4,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#7d8590")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#3d444d")}
          >
            <FaGithub size={10} />
            github.com/Mayuru0
          </a>
        </div>
      </div>

      <style>{`
        @keyframes ghpulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.65; }
        }
        @media (max-width: 640px) {
          .gh-titlebar-path { display: none; }
          .gh-commit-row {
            flex-wrap: wrap !important;
            gap: 4px !important;
            align-items: flex-start !important;
          }
          .gh-commit-sha { order: 1; min-width: unset !important; }
          .gh-commit-time { order: 2; margin-left: auto; min-width: unset !important; }
          .gh-commit-message { order: 3; width: 100% !important; flex: none !important; }
          .gh-commit-repo { order: 4; max-width: 100% !important; }
        }
      `}</style>
    </div>
  );
}

function CommitRow({ commit, isLast }: { commit: Commit; isLast: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="gh-commit-row"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "7px 18px",
        borderBottom: isLast ? "none" : "1px solid rgba(255,255,255,0.02)",
        background: hovered ? "rgba(255,255,255,0.018)" : "transparent",
        transition: "background 0.15s",
        cursor: "default",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* SHA */}
      <span className="gh-commit-sha" style={{
        fontFamily: "monospace", fontSize: 10,
        color: "#39d353", flexShrink: 0, minWidth: 50,
        opacity: hovered ? 1 : 0.75, transition: "opacity 0.15s",
      }}>
        {commit.sha}
      </span>

      {/* Message */}
      <span className="gh-commit-message" style={{
        fontFamily: "monospace", fontSize: 11,
        color: hovered ? "#8b949e" : "#6e7681",
        flex: 1, whiteSpace: "nowrap",
        overflow: "hidden", textOverflow: "ellipsis",
        transition: "color 0.15s",
      }}>
        {commit.message}
      </span>

      {/* Repo badge */}
      <span className="gh-commit-repo" style={{
        fontFamily: "monospace", fontSize: 9,
        color: "#4a8cc9",
        background: "rgba(74,140,201,0.07)",
        border: "1px solid rgba(74,140,201,0.12)",
        borderRadius: 4, padding: "1px 7px",
        flexShrink: 0, maxWidth: 150,
        overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
      }}>
        {commit.repo}
      </span>

      {/* Time */}
      <span className="gh-commit-time" style={{
        fontFamily: "monospace", fontSize: 9,
        color: "#3d444d", flexShrink: 0,
        minWidth: 44, textAlign: "right",
      }}>
        {timeAgo(commit.date)}
      </span>
    </div>
  );
}
