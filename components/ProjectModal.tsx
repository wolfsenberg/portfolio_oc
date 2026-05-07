"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/data/portfolio";

export default function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        style={{ position: "fixed", inset: 0, zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: 16, background: "rgba(0,0,0,0.5)" }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div className="win-window"
          style={{ width: "min(700px, 100%)", maxHeight: "90vh", display: "flex", flexDirection: "column" }}
          initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Title Bar */}
          <div className="win-titlebar">
            <span>{project.title}</span>
            <button className="win-button" onClick={onClose} style={{ minWidth: 16, width: 16, height: 14, padding: 0, fontSize: 10, lineHeight: "10px" }}>x</button>
          </div>

          {/* Menu Bar */}
          <div className="win-menubar">
            <div className="win-menu-item"><u>F</u>ile</div>
            <div className="win-menu-item"><u>E</u>dit</div>
            <div className="win-menu-item"><u>V</u>iew</div>
          </div>

          {/* Content */}
          <div style={{ flex: 1, overflowY: "auto", background: "var(--win-white)", padding: 16 }}>

            {/* Type badge */}
            <div style={{
              background: project.type.includes("lead") ? "var(--win-blue)" : "var(--win-gray)",
              color: project.type.includes("lead") ? "var(--win-white)" : "var(--win-black)",
              padding: "4px 12px", marginBottom: 16, fontSize: 11, fontWeight: "bold", display: "inline-flex", gap: 12, letterSpacing: "0.06em",
            }}>
              <span>{project.type === "Solo Project" ? "SOLO PROJECT" : project.type.includes("lead") ? "TEAM PROJECT — LEAD" : "TEAM PROJECT"}</span>
              <span style={{ opacity: 0.7 }}>{project.year}</span>
            </div>

            {/* Tech */}
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 11, fontWeight: "bold", marginBottom: 8 }}>Technologies:</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {project.tech.map((t) => (
                  <span key={t} className="win-button" style={{ fontSize: 10, padding: "3px 8px", minWidth: "auto", cursor: "default" }}>{t}</span>
                ))}
              </div>
            </div>

            {/* Images */}
            {project.images.length > 0 && (
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 11, fontWeight: "bold", marginBottom: 8 }}>Screenshots:</div>
                <div className="win-inset" style={{ position: "relative", aspectRatio: "16/9", background: "var(--win-black)", padding: 0 }}>
                  <Image src={project.images[idx].src} alt={project.images[idx].alt} fill style={{ objectFit: "contain" }} />
                  {project.images.length > 1 && (
                    <div style={{ position: "absolute", bottom: 8, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8 }}>
                      <button className="win-button" onClick={() => setIdx(i => (i - 1 + project.images.length) % project.images.length)} style={{ padding: "4px 12px", fontSize: 11 }}>
                        &lt; Prev
                      </button>
                      <div style={{ background: "var(--win-gray)", padding: "4px 12px", fontSize: 11, border: "2px solid", borderColor: "var(--win-3d-light) var(--win-3d-dark) var(--win-3d-dark) var(--win-3d-light)" }}>
                        {idx + 1} / {project.images.length}
                      </div>
                      <button className="win-button" onClick={() => setIdx(i => (i + 1) % project.images.length)} style={{ padding: "4px 12px", fontSize: 11 }}>
                        Next &gt;
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Description */}
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 11, fontWeight: "bold", marginBottom: 8 }}>Description:</div>
              <div className="win-inset" style={{ padding: 12, fontSize: 11, lineHeight: 1.6 }}>
                {project.fullDescription}
              </div>
            </div>

            {/* Note */}
            {project.note && (
              <div style={{ background: "#FFFFCC", border: "1px solid #CCCC99", padding: 12, fontSize: 11, lineHeight: 1.5 }}>
                <strong>Note:</strong> {project.note}
              </div>
            )}
          </div>

          {/* Status Bar */}
          <div className="win-statusbar">
            <div className="win-statusbar-field" style={{ fontSize: 11 }}>{project.type}</div>
            <div className="win-statusbar-field" style={{ flex: 0, minWidth: 90, fontSize: 11 }}>{project.tech.length} tech(s)</div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
