"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function TopProgressBar() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [visible,  setVisible]  = useState(false);
  const [fading,   setFading]   = useState(false);

  useEffect(() => {
    setVisible(true);
    setFading(false);
    setProgress(0);

    const t1 = setTimeout(() => setProgress(60),  50);
    const t2 = setTimeout(() => setProgress(85),  300);
    const t3 = setTimeout(() => setProgress(100), 550);
    const t4 = setTimeout(() => setFading(true),  700);
    const t5 = setTimeout(() => { setVisible(false); setProgress(0); }, 950);

    return () => [t1, t2, t3, t4, t5].forEach(clearTimeout);
  }, [pathname]);

  if (!visible) return null;

  return (
    <div
      className="fixed top-0 left-0 z-[99999] h-[2px] pointer-events-none"
      style={{
        width: `${progress}%`,
        background: "linear-gradient(90deg, #06b6d4, #3b82f6)",
        boxShadow: "0 0 8px rgba(6,182,212,0.7)",
        transition: "width 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.25s ease",
        opacity: fading ? 0 : 1,
      }}
    />
  );
}
