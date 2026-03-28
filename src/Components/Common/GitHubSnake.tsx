"use client";

import { useState, useEffect, useRef } from "react";
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
  const imgRef = useRef<HTMLImageElement>(null);

  // Fix: cached images fire onLoad before React attaches the handler on
  // client-side navigation. Check img.complete after mount.
  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    if (img.complete) {
      if (img.naturalWidth === 0) {
        setError(true);
      }
      setLoaded(true);
    }
  }, []);

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

          {/* Skeleton — dummy contribution graph */}
          {!loaded && !error && (
            <DummyGraph />
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
            ref={imgRef}
            src={SVG_URL}
            alt="GitHub contribution snake animation"
            onLoad={() => setLoaded(true)}
            onError={() => { setLoaded(true); setError(true); }}
            style={{
              display: loaded && !error ? "block" : "none",
              width: "100%",
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

// Seeded pseudo-random so the dummy grid looks consistent across renders
function seededRand(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];
const COLS = 52;
const ROWS = 7;
const SNAKE_LENGTH = 7;
const CELL_GAP = 3;
const DAY_LABEL_W = 28;

// Green shades — all filled, no empty cells
const CELL_COLORS = [
  "rgba(14,68,41,0.85)",
  "rgba(0,109,50,0.85)",
  "rgba(38,166,65,0.85)",
  "rgba(57,211,83,0.90)",
];

// Snake gradient: head (bright) → tail (dim)
const SNAKE_COLORS = [
  "rgba(220,255,235,1.00)",
  "rgba(155,240,180,0.95)",
  "rgba(95,215,135,0.90)",
  "rgba(60,185,105,0.85)",
  "rgba(40,155,82,0.78)",
  "rgba(22,120,58,0.68)",
  "rgba(12,85,40,0.55)",
];

function getLevel(col: number, row: number): number {
  const r = seededRand(col * 7 + row);
  if (r < 0.28) return 0;
  if (r < 0.56) return 1;
  if (r < 0.80) return 2;
  return 3;
}

const DIRS: Array<[number, number]> = [[1,0],[-1,0],[0,1],[0,-1]];

function DummyGraph() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cellSize, setCellSize] = useState(12);

  // Snake state in refs (mutated each tick, re-render via counter)
  const snakeRef = useRef<Array<[number, number]>>(
    Array.from({ length: SNAKE_LENGTH }, (_, i) => [SNAKE_LENGTH - 1 - i, 0] as [number, number])
  );
  const eatenRef = useRef<Set<string>>(new Set<string>());
  const dirRef = useRef<[number, number]>([1, 0]);
  const [, setTick] = useState(0);

  // Responsive cell size
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => {
      const available = el.clientWidth - DAY_LABEL_W - CELL_GAP - (COLS - 1) * CELL_GAP;
      setCellSize(Math.max(8, Math.floor(available / COLS)));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Snake movement — random walk, eats cells on visit
  useEffect(() => {
    const id = setInterval(() => {
      const snake = snakeRef.current;
      const eaten = eatenRef.current;
      const [hc, hr] = snake[0];
      const bodySet = new Set(snake.map(([c, r]) => `${c},${r}`));

      // Prefer unvisited+unfilled → any free cell
      const unvisited = DIRS
        .map(([dc, dr]) => [hc + dc, hr + dr] as [number, number])
        .filter(([nc, nr]) =>
          nc >= 0 && nc < COLS && nr >= 0 && nr < ROWS &&
          !bodySet.has(`${nc},${nr}`) && !eaten.has(`${nc},${nr}`)
        );
      const anyFree = DIRS
        .map(([dc, dr]) => [hc + dc, hr + dr] as [number, number])
        .filter(([nc, nr]) =>
          nc >= 0 && nc < COLS && nr >= 0 && nr < ROWS &&
          !bodySet.has(`${nc},${nr}`)
        );

      const candidates = unvisited.length > 0 ? unvisited : anyFree;

      if (candidates.length === 0) {
        // All eaten — reset
        eatenRef.current = new Set<string>();
        const rc = Math.floor(Math.random() * COLS);
        const rr = Math.floor(Math.random() * ROWS);
        snakeRef.current = Array.from({ length: SNAKE_LENGTH }, (_, i) => [
          Math.max(0, rc - i), rr,
        ] as [number, number]);
        dirRef.current = [1, 0];
        setTick(t => t + 1);
        return;
      }

      // Bias toward current direction for smoother curves
      const [dc, dr] = dirRef.current;
      const preferred = candidates.filter(([nc, nr]) => nc - hc === dc && nr - hr === dr);
      const next = preferred.length > 0 && Math.random() < 0.68
        ? preferred[0]
        : candidates[Math.floor(Math.random() * candidates.length)];

      dirRef.current = [next[0] - hc, next[1] - hr];
      eaten.add(`${next[0]},${next[1]}`);
      snakeRef.current = [next, ...snake.slice(0, SNAKE_LENGTH - 1)];
      setTick(t => t + 1);
    }, 60);
    return () => clearInterval(id);
  }, []);

  // Read refs for render
  const snake = snakeRef.current;
  const eaten = eatenRef.current;
  const snakeMap = new Map(snake.map(([c, r], i) => [`${c},${r}`, i]));
  const colW = cellSize + CELL_GAP;

  return (
    <div ref={containerRef} style={{ display: "flex", flexDirection: "column", gap: CELL_GAP, width: "100%" }}>
      {/* Month labels */}
      <div style={{ display: "flex", marginLeft: DAY_LABEL_W + CELL_GAP }}>
        {MONTHS.map((m, i) => (
          <div
            key={m}
            style={{
              width: `${(COLS / MONTHS.length) * colW}px`,
              marginLeft: i === 0 ? 0 : 0,
              fontFamily: "monospace",
              fontSize: 10,
              color: "#3d444d",
              flexShrink: 0,
            }}
          >
            {m}
          </div>
        ))}
      </div>

      {/* Grid */}
      <div style={{ display: "flex", gap: CELL_GAP }}>
        {/* Day labels */}
        <div style={{ display: "flex", flexDirection: "column", gap: CELL_GAP, paddingTop: 1, flexShrink: 0 }}>
          {DAY_LABELS.map((d, i) => (
            <div
              key={i}
              style={{
                height: cellSize,
                width: DAY_LABEL_W - CELL_GAP,
                fontFamily: "monospace",
                fontSize: 9,
                color: "#3d444d",
                textAlign: "right",
                paddingRight: 4,
                lineHeight: `${cellSize}px`,
              }}
            >
              {d}
            </div>
          ))}
        </div>

        {/* Cells — flex:1 per column fills full width */}
        <div style={{ display: "flex", gap: CELL_GAP, flex: 1 }}>
          {Array.from({ length: COLS }).map((_, c) => (
            <div key={c} style={{ display: "flex", flexDirection: "column", gap: CELL_GAP, flex: 1 }}>
              {Array.from({ length: ROWS }).map((_, r) => {
                const key = `${c},${r}`;
                const snakeIdx = snakeMap.get(key);
                const isEaten = eaten.has(key) && snakeIdx === undefined;
                const isHead = snakeIdx === 0;
                const level = getLevel(c, r);

                const bg =
                  snakeIdx !== undefined ? SNAKE_COLORS[snakeIdx] :
                  isEaten ? "rgba(255,255,255,0.03)" :
                  CELL_COLORS[level];

                return (
                  <div
                    key={r}
                    style={{
                      width: "100%",
                      height: cellSize,
                      borderRadius: Math.ceil(cellSize * 0.2),
                      background: bg,
                      boxShadow: isHead
                        ? `0 0 ${cellSize * 0.55}px ${cellSize * 0.22}px rgba(170,255,195,0.5)`
                        : undefined,
                    }}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div style={{
        display: "flex", alignItems: "center", gap: 4,
        marginLeft: DAY_LABEL_W + CELL_GAP, marginTop: 2,
        justifyContent: "flex-end",
      }}>
        <span style={{ fontFamily: "monospace", fontSize: 9, color: "#3d444d" }}>Less</span>
        {CELL_COLORS.map((bg, i) => (
          <div key={i} style={{ width: 10, height: 10, borderRadius: 2, background: bg }} />
        ))}
        <span style={{ fontFamily: "monospace", fontSize: 9, color: "#3d444d" }}>More</span>
      </div>
    </div>
  );
}
