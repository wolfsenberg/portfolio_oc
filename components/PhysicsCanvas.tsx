"use client";

import { useEffect, useRef } from "react";

// Industrial blueprint symbols
const CHAR_SETS = [
  ["⊕", "⊗", "⊙", "⊛", "◎", "⊞", "⊟", "⊠", "⊡", "⊕"],
  ["+", "×", "─", "│", "┼", "┤", "├", "┬", "┴", "╋"],
  ["△", "□", "○", "◇", "▷", "▽", "◁", "⬡", "⬢", "⬣"],
];

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  r: number;
  charSet: number;
  charIdx: number;
  nextCharIdx: number;
  morphT: number;
  morphSpeed: number;
}

export default function PhysicsCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const container = canvas.parentElement!;
    let W = container.offsetWidth;
    let H = container.offsetHeight;
    canvas.width = W;
    canvas.height = H;

    const COUNT = 28;
    const particles: Particle[] = Array.from({ length: COUNT }, () => {
      const setIdx = Math.floor(Math.random() * CHAR_SETS.length);
      const charIdx = Math.floor(Math.random() * CHAR_SETS[setIdx].length);
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 1.4,
        vy: (Math.random() - 0.5) * 1.4,
        r: 22,
        charSet: setIdx,
        charIdx,
        nextCharIdx: (charIdx + 1) % CHAR_SETS[setIdx].length,
        morphT: 0,
        morphSpeed: 0.003 + Math.random() * 0.004,
      };
    });

    const ctx = canvas.getContext("2d")!;
    let rafId: number;

    const loop = () => {
      ctx.clearRect(0, 0, W, H);

      const isDark = document.documentElement.classList.contains("dark");
      // #CE0213 in both modes; slightly more visible on dark (#213533) bg
      const accentColor = isDark ? "206,2,19" : "206,2,19";

      particles.forEach((p, i) => {
        // Morph character
        p.morphT += p.morphSpeed;
        if (p.morphT >= 1) {
          p.morphT = 0;
          p.charIdx = p.nextCharIdx;
          p.nextCharIdx = (p.charIdx + 1) % CHAR_SETS[p.charSet].length;
          // occasionally switch char set
          if (Math.random() < 0.08) {
            p.charSet = (p.charSet + 1) % CHAR_SETS.length;
            p.charIdx = Math.floor(Math.random() * CHAR_SETS[p.charSet].length);
            p.nextCharIdx = (p.charIdx + 1) % CHAR_SETS[p.charSet].length;
          }
        }

        // Mouse repulsion
        const dx = p.x - mouse.current.x;
        const dy = p.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130 && dist > 0) {
          const force = ((130 - dist) / 130) * 0.06;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        // Particle-particle repulsion (simple)
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const pdx = p.x - q.x;
          const pdy = p.y - q.y;
          const pd = Math.sqrt(pdx * pdx + pdy * pdy);
          if (pd < p.r * 2.2 && pd > 0) {
            const push = 0.015;
            p.vx += (pdx / pd) * push;
            p.vy += (pdy / pd) * push;
            q.vx -= (pdx / pd) * push;
            q.vy -= (pdy / pd) * push;
          }
        }

        // Damping
        p.vx *= 0.985;
        p.vy *= 0.985;

        // Speed clamp
        const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (spd > 2.5) { p.vx = (p.vx / spd) * 2.5; p.vy = (p.vy / spd) * 2.5; }
        if (spd < 0.2 && spd > 0) { p.vx = (p.vx / spd) * 0.4; p.vy = (p.vy / spd) * 0.4; }

        p.x += p.vx;
        p.y += p.vy;

        // Bounce off walls
        if (p.x < p.r)    { p.x = p.r;    p.vx = Math.abs(p.vx); }
        if (p.x > W - p.r){ p.x = W - p.r; p.vx = -Math.abs(p.vx); }
        if (p.y < p.r)    { p.y = p.r;    p.vy = Math.abs(p.vy); }
        if (p.y > H - p.r){ p.y = H - p.r; p.vy = -Math.abs(p.vy); }

        // Draw current char
        const curChar = CHAR_SETS[p.charSet][p.charIdx];
        const nxtChar = CHAR_SETS[p.charSet][p.nextCharIdx];
        const alphaBase = isDark ? 0.22 : 0.13;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.font = "bold 13px 'Courier New', monospace";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        // Crossfade between chars
        if (p.morphT < 0.5) {
          ctx.fillStyle = `rgba(${accentColor},${alphaBase * (1 - p.morphT * 2)})`;
          ctx.fillText(curChar, 0, 0);
        } else {
          ctx.fillStyle = `rgba(${accentColor},${alphaBase * ((p.morphT - 0.5) * 2)})`;
          ctx.fillText(nxtChar, 0, 0);
        }

        ctx.restore();
      });

      rafId = requestAnimationFrame(loop);
    };

    loop();

    const onResize = () => {
      W = container.offsetWidth;
      H = container.offsetHeight;
      canvas.width = W;
      canvas.height = H;
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
      className="absolute inset-0 w-full h-full pointer-events-auto"
      onMouseMove={(e) => {
        const r = canvasRef.current!.getBoundingClientRect();
        mouse.current = { x: e.clientX - r.left, y: e.clientY - r.top };
      }}
      onMouseLeave={() => { mouse.current = { x: -9999, y: -9999 }; }}
    />
  );
}
