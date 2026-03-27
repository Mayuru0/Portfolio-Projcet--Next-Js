"use client";

import { useState, useEffect } from "react";

const NAME = "MAYURU MADHURANGA";
const ROLE = "Full Stack Developer";

function stageText(p: number) {
  if (p < 20)  return "initializing...";
  if (p < 45)  return "loading modules...";
  if (p < 68)  return "bundling assets...";
  if (p < 88)  return "compiling styles...";
  if (p < 100) return "almost done...";
  return "ready ✓";
}

export default function Preloader() {
  const [chars,    setChars]    = useState(0);
  const [showRole, setShowRole] = useState(false);
  const [progress, setProgress] = useState(0);
  const [ready,    setReady]    = useState(false);
  const [exiting,  setExiting]  = useState(false);
  const [done,     setDone]     = useState(false);

  useEffect(() => {
    // type name
    let ci = 0;
    const typeT = setInterval(() => {
      ci++;
      setChars(ci);
      if (ci >= NAME.length) clearInterval(typeT);
    }, 60);

    // progress 0→100 over ~3 200 ms
    const progT = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(progT);
          setTimeout(() => setReady(true), 350);
          return 100;
        }
        return p + 1;
      });
    }, 32);

    const roleT = setTimeout(() => setShowRole(true), 900);
    const exitT = setTimeout(() => setExiting(true),  4000);
    const doneT = setTimeout(() => setDone(true),     4900);

    return () => {
      clearInterval(typeT); clearInterval(progT);
      clearTimeout(roleT); clearTimeout(exitT); clearTimeout(doneT);
    };
  }, []);

  if (done) return null;

  return (
    <div
      className="fixed inset-0 overflow-hidden"
      style={{
        zIndex: 99999,
        background: "#000",
        transform: exiting ? "translateY(-100%)" : "translateY(0)",
        transition: "transform 0.85s cubic-bezier(0.76,0,0.24,1)",
      }}
    >
      {/* background grid */}
      <div className="absolute inset-0" style={{
        backgroundImage:
          "linear-gradient(rgba(6,182,212,.05) 1px,transparent 1px)," +
          "linear-gradient(90deg,rgba(6,182,212,.05) 1px,transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* radial glow */}
      <div className="absolute pointer-events-none" style={{
        top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        width: 640, height: 640,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 68%)",
      }} />

      {/* corner brackets */}
      {[
        { top: 20,    left: 20,    borderTop:    "1px solid #06b6d430", borderLeft:   "1px solid #06b6d430" },
        { top: 20,    right: 20,   borderTop:    "1px solid #06b6d430", borderRight:  "1px solid #06b6d430" },
        { bottom: 20, left: 20,    borderBottom: "1px solid #06b6d430", borderLeft:   "1px solid #06b6d430" },
        { bottom: 20, right: 20,   borderBottom: "1px solid #06b6d430", borderRight:  "1px solid #06b6d430" },
      ].map((s, i) => (
        <div key={i} className="absolute" style={{ ...s, width: 28, height: 28 }} />
      ))}

      {/* center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
        <div className="flex flex-col items-center gap-8 w-full" style={{ maxWidth: 420 }}>

          {/* monogram ring */}
          <div className="relative" style={{ width: 64, height: 64 }}>
            <svg width="64" height="64" viewBox="0 0 64 64" style={{ transform: "rotate(-90deg)" }}>
              <circle cx="32" cy="32" r="30" fill="none"
                stroke="rgba(6,182,212,0.1)" strokeWidth="1.5" />
              <circle cx="32" cy="32" r="30" fill="none"
                stroke="#06b6d4" strokeWidth="1.5" strokeLinecap="round"
                style={{
                  strokeDasharray: 188,
                  strokeDashoffset: chars > 0 ? 0 : 188,
                  transition: "stroke-dashoffset 1.4s cubic-bezier(0.4,0,0.2,1) 0.1s",
                }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center"
              style={{
                opacity: chars > 0 ? 1 : 0,
                transform: chars > 0 ? "scale(1)" : "scale(0.6)",
                transition: "opacity 0.5s ease 0.5s, transform 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.5s",
              }}
            >
              <span style={{ fontFamily: "monospace", fontWeight: 900, fontSize: 22, color: "#fff" }}>M</span>
            </div>
          </div>

          {/* name + role */}
          <div className="text-center">
            <h1 style={{
              fontFamily: "monospace",
              fontWeight: 900,
              fontSize: "clamp(20px, 5.5vw, 38px)",
              letterSpacing: "0.13em",
              color: "#fff",
              minHeight: "1.3em",
              lineHeight: 1.3,
            }}>
              {NAME.slice(0, chars)}
              <span style={{
                display: "inline-block",
                width: 2,
                height: "0.82em",
                background: "#06b6d4",
                marginLeft: 4,
                verticalAlign: "middle",
                animation: "blink 1s step-end infinite",
              }} />
            </h1>

            <p style={{
              fontFamily: "monospace",
              fontSize: 11,
              letterSpacing: "0.42em",
              textTransform: "uppercase",
              color: "#06b6d4",
              marginTop: 10,
              opacity: showRole ? 1 : 0,
              transform: showRole ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}>
              {ROLE}
            </p>
          </div>

          {/* progress */}
          <div style={{ width: "100%" }}>
            <div style={{
              height: 2, borderRadius: 99, overflow: "hidden",
              background: "rgba(255,255,255,0.06)",
            }}>
              <div style={{
                height: "100%",
                width: `${progress}%`,
                borderRadius: 99,
                background: ready
                  ? "linear-gradient(90deg,#10b981,#06b6d4)"
                  : "linear-gradient(90deg,#06b6d4,#3b82f6)",
                boxShadow: "0 0 10px rgba(6,182,212,0.5)",
                transition: "width 0.09s linear, background 0.6s ease",
              }} />
            </div>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 8,
              fontFamily: "monospace",
              fontSize: 10,
            }}>
              <span style={{ color: ready ? "#10b981" : "#4b5563", transition: "color 0.4s" }}>
                {stageText(progress)}
              </span>
              <span style={{ color: "#0e7490" }}>{progress}%</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
