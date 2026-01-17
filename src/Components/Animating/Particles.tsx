"use client";

import { useState } from "react";

type Particle = {
  id: number;
  size: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
};

const createDust = (): Particle[] =>
  Array.from({ length: 150 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 1,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 10,
  }));

const createBlue = (): Particle[] =>
  Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 2,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: Math.random() * 15 + 15,
    delay: Math.random() * 15,
  }));

export default function Particles() {
  const [dust] = useState<Particle[]>(createDust);
  const [blue] = useState<Particle[]>(createBlue);

  return (
    <>
      {/* Blue Glow Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Dust Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
        {dust.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-white"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: `${p.left}%`,
              top: `${p.top}%`,
              animation: `float ${p.duration}s linear infinite`,
              animationDelay: `-${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Blue Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
        {blue.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-blue-300 blur-sm"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: `${p.left}%`,
              top: `${p.top}%`,
              animation: `floatSlow ${p.duration}s linear infinite`,
              animationDelay: `-${p.delay}s`,
            }}
          />
        ))}
      </div>

      <style jsx global>{`
        @keyframes float {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-400vh);
          }
        }

        @keyframes floatSlow {
          from {
            transform: translateY(100vh);
          }
          to {
            transform: translateY(-200vh);
          }
        }
      `}</style>
    </>
  );
}
