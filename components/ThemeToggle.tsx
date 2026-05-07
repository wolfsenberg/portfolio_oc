"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-14 h-6" />;

  const dark = theme === "dark";
  return (
    <button
      onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="relative w-12 h-6 rounded-full border transition-colors duration-300"
      style={{ borderColor: "var(--border-strong)", background: dark ? "var(--accent)" : "var(--bg-surface)" }}
    >
      <span
        className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] transition-all duration-300"
        style={{
          background: dark ? "#fff" : "var(--fg)",
          transform: dark ? "translateX(24px)" : "translateX(0px)",
        }}
      >
        {dark ? "☾" : "☀"}
      </span>
    </button>
  );
}
