"use client";

import { useEffect, useRef } from "react";

/* Draws an animated ASCII-character ring that morphs shape continuously */
export default function MorphingBlob() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const ctx = canvas.getContext("2d")!;
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const RING_CHARS = "◆◇○□△▽◈◉◎⊕⊗";
    let t = 0;
    let rafId: number;

    const loop = () => {
      t += 0.008;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isDark = document.documentElement.classList.contains("dark");
      const r = isDark ? 255 : 187;
      const g = 0;
      const b = isDark ? 32 : 0;

      // Draw multiple morphing rings
      for (let ring = 0; ring < 3; ring++) {
        const baseR = 60 + ring * 38;
        const pts = 18 + ring * 6;
        for (let i = 0; i < pts; i++) {
          const angle = (i / pts) * Math.PI * 2;
          // Morphing radius: sum of sin waves at different frequencies
          const warp =
            baseR +
            Math.sin(angle * 2 + t + ring) * (12 - ring * 3) +
            Math.sin(angle * 3 - t * 0.7 + ring * 1.1) * (8 - ring * 2) +
            Math.sin(angle * 5 + t * 1.3) * 4;

          const x = cx + Math.cos(angle) * warp;
          const y = cy + Math.sin(angle) * warp;

          const charIdx = (i + Math.floor(t * 3)) % RING_CHARS.length;
          const alpha = (isDark ? 0.18 : 0.12) - ring * 0.04;

          ctx.font = `${13 - ring}px 'Courier New', monospace`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
          ctx.fillText(RING_CHARS[charIdx], x, y);
        }
      }

      rafId = requestAnimationFrame(loop);
    };

    loop();
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
