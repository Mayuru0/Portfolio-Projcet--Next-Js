"use client";

import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { VscCircleFilled } from "react-icons/vsc";

const SVG_URL =
  "https://raw.githubusercontent.com/Mayuru0/Portfolio-Projcet--Next-Js/output/github-contribution-grid-snake-dark.svg";

const GITHUB_URL = "https://github.com/Mayuru0";

export default function GitHubSnake() {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10">

      {/* Section header */}
      <div className="flex items-center gap-3 mb-6">
        <FaGithub className="text-white/40" size={16} />
        <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
          GitHub Activity
        </span>
        <div className="flex-1 h-px bg-white/[0.05]" />
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-gray-600 hover:text-gray-400 transition-colors"
        >
          <FaGithub size={11} />
          github.com/Mayuru0
        </a>
      </div>

      {/* Card */}
      <div
        style={{
          background: "#0d1117",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 16,
          overflow: "hidden",
        }}
      >
        {/* Window title bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 7,
            padding: "10px 18px",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          {/* Traffic lights */}
          <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#ff5f57", display: "inline-block" }} />
          <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#ffbd2e", display: "inline-block" }} />
          <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#28ca41", display: "inline-block" }} />
          <span style={{ marginLeft: 10, fontFamily: "monospace", fontSize: 11, color: "#484f58" }}>
            Mayuru0 — contribution graph
          </span>
          {/* Live badge */}
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 5 }}>
            <VscCircleFilled style={{ color: "#39d353", fontSize: 10 }} />
            <span style={{ fontFamily: "monospace", fontSize: 10, color: "#484f58" }}>snake: live</span>
          </div>
        </div>

        {/* SVG area */}
        <div style={{ padding: "20px 20px 16px", overflowX: "auto", minHeight: 140 }}>

          {/* Skeleton loader */}
          {!loaded && !error && (
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {/* Month label row */}
              <div style={{ display: "flex", gap: 28, marginLeft: 30, marginBottom: 4 }}>
                {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map(m => (
                  <div key={m} style={{
                    width: 24, height: 10, borderRadius: 3,
                    background: "rgba(255,255,255,0.04)",
                    animation: "pulse 1.5s ease-in-out infinite",
                  }} />
                ))}
              </div>
              {/* Grid rows */}
              {Array.from({ length: 7 }).map((_, r) => (
                <div key={r} style={{ display: "flex", gap: 3, marginLeft: 30 }}>
                  {Array.from({ length: 52 }).map((_, c) => (
                    <div key={c} style={{
                      width: 13, height: 13, borderRadius: 3,
                      background: "rgba(255,255,255,0.04)",
                      opacity: 0.4 + Math.random() * 0.6,
                    }} />
                  ))}
                </div>
              ))}
            </div>
          )}

          {/* Error state */}
          {error && (
            <div style={{
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              gap: 10, height: 120, color: "#484f58", fontFamily: "monospace", fontSize: 12,
            }}>
              <FaGithub size={24} style={{ opacity: 0.3 }} />
              <span>Contribution graph unavailable</span>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#39d353", fontSize: 11, textDecoration: "none" }}
              >
                View on GitHub →
              </a>
            </div>
          )}

          {/* Real SVG */}
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

        {/* Footer */}
        <div
          style={{
            padding: "10px 20px 12px",
            borderTop: "1px solid rgba(255,255,255,0.04)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontFamily: "monospace", fontSize: 11, color: "#30363d" }}>
            Powered by{" "}
            <a
              href="https://github.com/Platane/snk"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#484f58", textDecoration: "none" }}
            >
              Platane/snk
            </a>
          </span>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "monospace", fontSize: 10, color: "#484f58",
              textDecoration: "none",
              display: "flex", alignItems: "center", gap: 5,
              transition: "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "#7d8590")}
            onMouseLeave={e => (e.currentTarget.style.color = "#484f58")}
          >
            <FaGithub size={12} />
            github.com/Mayuru0
          </a>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}
