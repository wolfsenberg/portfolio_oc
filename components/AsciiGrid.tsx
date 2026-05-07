"use client";

import { useEffect, useRef } from "react";

const CHARS = "░▒▓│─┼┐┘└┌+×·:;,.'`^~<>=/\\|!?@#";

export default function AsciiGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const SIZE = 18; // grid cell size in px
    let cols: number, rows: number;
    let grid: { char: string; nextChar: string; t: number; speed: number }[][] = [];

    const build = () => {
      cols = Math.ceil(canvas.offsetWidth / SIZE) + 1;
      rows = Math.ceil(canvas.offsetHeight / SIZE) + 1;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      grid = Array.from({ length: rows }, () =>
        Array.from({ length: cols }, () => {
          const c = CHARS[Math.floor(Math.random() * CHARS.length)];
          return { char: c, nextChar: c, t: 0, speed: 0.003 + Math.random() * 0.008 };
        })
      );
    };

    build();

    const ctx = canvas.getContext("2d")!;
    let rafId: number;

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = document.documentElement.classList.contains("dark");
      ctx.font = `${SIZE - 4}px 'Courier New', monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const cell = grid[r][c];
          cell.t += cell.speed;
          if (cell.t >= 1) {
            cell.t = 0;
            cell.char = cell.nextChar;
            cell.nextChar = CHARS[Math.floor(Math.random() * CHARS.length)];
          }

          // Only draw ~30% of cells for sparseness
          if ((r * cols + c) % 3 !== 0) continue;

          const alpha = isDark
            ? 0.04 * (1 - cell.t * 0.5)
            : 0.035 * (1 - cell.t * 0.5);

          ctx.fillStyle = `rgba(${isDark ? "240,239,233" : "10,10,10"},${alpha})`;
          ctx.fillText(
            cell.t < 0.5 ? cell.char : cell.nextChar,
            c * SIZE + SIZE / 2,
            r * SIZE + SIZE / 2
          );
        }
      }

      rafId = requestAnimationFrame(loop);
    };

    loop();

    const onResize = () => {
      build();
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
