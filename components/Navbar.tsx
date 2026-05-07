"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personal } from "@/data/portfolio";

/* ── Proper Windows 97 multicolor pixel-art icons — 24×24 ── */
const IC = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    style={{ imageRendering: "pixelated", display: "block", flexShrink: 0 }}
    {...props}
  />
);

const icons = {
  // Person — Win97 user account style: gray body, teal head
  home: (
    <IC>
      <rect x="8"  y="2"  width="8"  height="7"  fill="#008080"/>
      <rect x="9"  y="3"  width="6"  height="2"  fill="#00AAAA"/>
      <rect x="4"  y="11" width="16" height="11" fill="#C0C0C0"/>
      <rect x="4"  y="11" width="16" height="2"  fill="#DFDFDF"/>
      <rect x="4"  y="11" width="2"  height="11" fill="#DFDFDF"/>
      <rect x="18" y="11" width="2"  height="11" fill="#808080"/>
      <rect x="4"  y="20" width="16" height="2"  fill="#808080"/>
    </IC>
  ),
  // Briefcase — Win97 style: yellow body, gray handle
  experience: (
    <IC>
      <rect x="8"  y="3"  width="8"  height="3"  fill="#808080"/>
      <rect x="9"  y="3"  width="6"  height="2"  fill="#C0C0C0"/>
      <rect x="2"  y="6"  width="20" height="14" fill="#FFCC00"/>
      <rect x="2"  y="6"  width="20" height="2"  fill="#FFE066"/>
      <rect x="2"  y="6"  width="2"  height="14" fill="#FFE066"/>
      <rect x="20" y="6"  width="2"  height="14" fill="#AA8800"/>
      <rect x="2"  y="18" width="20" height="2"  fill="#AA8800"/>
      <rect x="2"  y="12" width="20" height="2"  fill="#AA8800"/>
      <rect x="10" y="10" width="4"  height="4"  fill="#C0C0C0"/>
    </IC>
  ),
  // Folder — classic Win97 yellow folder
  projects: (
    <IC>
      <rect x="1"  y="7"  width="8"  height="3"  fill="#FFCC00"/>
      <rect x="1"  y="9"  width="22" height="13" fill="#FFCC00"/>
      <rect x="1"  y="9"  width="22" height="2"  fill="#FFE566"/>
      <rect x="1"  y="9"  width="2"  height="13" fill="#FFE566"/>
      <rect x="21" y="9"  width="2"  height="13" fill="#AA8800"/>
      <rect x="1"  y="20" width="22" height="2"  fill="#AA8800"/>
    </IC>
  ),
  // Graduation cap — Win97 style: teal cap, white tassel
  education: (
    <IC>
      <polygon points="12,3 22,8 12,13 2,8" fill="#008080"/>
      <polygon points="12,3 22,8 12,13 2,8" fill="none" stroke="#00AAAA" strokeWidth="1"/>
      <rect x="19" y="8"  width="2"  height="7"  fill="#808080"/>
      <rect x="18" y="15" width="3"  height="2"  fill="#808080"/>
      <rect x="7"  y="13" width="10" height="6"  fill="#008080"/>
      <rect x="7"  y="13" width="10" height="2"  fill="#00AAAA"/>
    </IC>
  ),
  // Gear — Win97 control panel style: teal gear, gray center
  skills: (
    <IC>
      <rect x="9"  y="1"  width="6"  height="4"  fill="#008080"/>
      <rect x="9"  y="19" width="6"  height="4"  fill="#008080"/>
      <rect x="1"  y="9"  width="4"  height="6"  fill="#008080"/>
      <rect x="19" y="9"  width="4"  height="6"  fill="#008080"/>
      <rect x="5"  y="5"  width="14" height="14" fill="#008080"/>
      <rect x="5"  y="5"  width="14" height="2"  fill="#00AAAA"/>
      <rect x="5"  y="5"  width="2"  height="14" fill="#00AAAA"/>
      <rect x="17" y="5"  width="2"  height="14" fill="#005555"/>
      <rect x="5"  y="17" width="14" height="2"  fill="#005555"/>
      <rect x="8"  y="8"  width="8"  height="8"  fill="#C0C0C0"/>
      <rect x="8"  y="8"  width="8"  height="2"  fill="#DFDFDF"/>
    </IC>
  ),
  // Trophy — Win97 style: yellow cup, gray base
  achievements: (
    <IC>
      <rect x="7"  y="2"  width="10" height="9"  fill="#FFCC00"/>
      <rect x="7"  y="2"  width="10" height="2"  fill="#FFE566"/>
      <rect x="7"  y="2"  width="2"  height="9"  fill="#FFE566"/>
      <rect x="15" y="2"  width="2"  height="9"  fill="#AA8800"/>
      <rect x="3"  y="2"  width="4"  height="6"  fill="#FFCC00"/>
      <rect x="17" y="2"  width="4"  height="6"  fill="#FFCC00"/>
      <rect x="10" y="11" width="4"  height="4"  fill="#C0C0C0"/>
      <rect x="6"  y="15" width="12" height="3"  fill="#C0C0C0"/>
      <rect x="6"  y="15" width="12" height="1"  fill="#DFDFDF"/>
    </IC>
  ),
  // Document — Win97 Notepad style: white page, blue lines, dog-ear
  certifications: (
    <IC>
      <rect x="3"  y="1"  width="14" height="22" fill="#FFFFFF"/>
      <rect x="3"  y="1"  width="14" height="1"  fill="#DFDFDF"/>
      <rect x="3"  y="1"  width="1"  height="22" fill="#DFDFDF"/>
      <rect x="15" y="1"  width="2"  height="22" fill="#808080"/>
      <rect x="3"  y="21" width="14" height="2"  fill="#808080"/>
      {/* dog-ear */}
      <rect x="13" y="1"  width="4"  height="4"  fill="#C0C0C0"/>
      <rect x="13" y="1"  width="1"  height="4"  fill="#808080"/>
      <rect x="13" y="4"  width="4"  height="1"  fill="#808080"/>
      {/* text lines */}
      <rect x="6"  y="7"  width="8"  height="1"  fill="#000080"/>
      <rect x="6"  y="10" width="7"  height="1"  fill="#000080"/>
      <rect x="6"  y="13" width="8"  height="1"  fill="#000080"/>
      <rect x="6"  y="16" width="5"  height="1"  fill="#000080"/>
    </IC>
  ),
};

const links = [
  { href: "#home",           label: "About Me",       icon: icons.home           },
  { href: "#experience",     label: "Experience",     icon: icons.experience     },
  { href: "#projects",       label: "Projects",       icon: icons.projects       },
  { href: "#education",      label: "Education",      icon: icons.education      },
  { href: "#skills",         label: "Skills",         icon: icons.skills         },
  { href: "#achievements",   label: "Achievements",   icon: icons.achievements   },
  { href: "#certifications", label: "Certifications", icon: icons.certifications },
];

const socials = [
  {
    href: "https://www.facebook.com/gein3ru",
    label: "Facebook",
    icon: (
      <IC>
        <rect x="3"  y="1"  width="18" height="22" rx="2" fill="#1877F2"/>
        <rect x="13" y="8"  width="5"  height="2"  fill="#FFFFFF"/>
        <rect x="11" y="6"  width="2"  height="16" fill="#FFFFFF"/>
        <rect x="11" y="13" width="6"  height="2"  fill="#FFFFFF"/>
      </IC>
    ),
  },
  {
    href: "https://www.instagram.com/_geineru/",
    label: "Instagram",
    icon: (
      <IC>
        <rect x="2"  y="2"  width="20" height="20" rx="5" fill="#E1306C"/>
        <rect x="7"  y="7"  width="10" height="10" rx="3" fill="none" stroke="#FFFFFF" strokeWidth="2"/>
        <rect x="11" y="11" width="2"  height="2"  fill="#FFFFFF"/>
        <rect x="15" y="4"  width="3"  height="3"  rx="1" fill="#FFFFFF"/>
      </IC>
    ),
  },
];

export default function Navbar() {
  return (
    <>
      {/* Desktop Icons — single column, top to bottom */}
      <div style={{
        position: "fixed",
        top: 24,
        left: 8,
        zIndex: 100,
        display: "flex",
        flexDirection: "column",
        gap: 6,
        maxHeight: "calc(100vh - 60px)",
        overflowY: "auto",
        overflowX: "hidden",
        padding: 4,
        width: 80,
      }}>
        {links.map((link, i) => (
          <motion.a
            key={link.href}
            href={link.href}
            className="win-icon"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.06 }}
            style={{ width: 72, textDecoration: "none" }}
          >
            {/* uniform 40×40 icon box */}
            <div style={{
              width: 40,
              height: 40,
              minWidth: 40,
              minHeight: 40,
              background: "var(--win-gray)",
              border: "2px solid",
              borderColor: "var(--win-3d-light) var(--win-3d-dark) var(--win-3d-dark) var(--win-3d-light)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              flexShrink: 0,
            }}>
              {link.icon}
            </div>
            <div className="win-icon-label" style={{ fontSize: 10, lineHeight: 1.2, width: 72, textAlign: "center" }}>
              {link.label}
            </div>
          </motion.a>
        ))}
      </div>
    </>
  );
}

/* ── Start Menu — rendered in page.tsx via prop ── */
export function StartMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* backdrop */}
          <div
            onClick={onClose}
            style={{ position: "fixed", inset: 0, zIndex: 9998 }}
          />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.12 }}
            className="win-window"
            style={{
              position: "fixed",
              bottom: 32,
              left: 4,
              width: "min(300px, calc(100vw - 8px))",
              zIndex: 9999,
            }}
          >
            {/* Title bar */}
            <div className="win-titlebar">
              <span style={{ fontWeight: "bold" }}>Geinel Niño A. Dungao</span>
            </div>

            {/* Body */}
            <div style={{ display: "flex", background: "var(--win-gray)" }}>
              {/* Vertical sidebar */}
              <div style={{
                width: 30,
                background: "linear-gradient(180deg, var(--win-blue) 0%, var(--win-teal) 100%)",
                display: "flex",
                alignItems: "flex-end",
                padding: "8px 4px",
                flexShrink: 0,
              }}>
                <div style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                  color: "var(--win-white)",
                  fontWeight: "bold",
                  fontSize: 13,
                  letterSpacing: 2,
                }}>
                  Portfolio
                </div>
              </div>

              {/* Menu items */}
              <div style={{ flex: 1 }}>
                {/* Section links */}
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "7px 12px",
                      textDecoration: "none",
                      color: "var(--win-black)",
                      cursor: "pointer",
                      borderBottom: "1px solid var(--win-gray-light)",
                      fontSize: 11,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "var(--win-highlight)";
                      e.currentTarget.style.color = "var(--win-highlight-text)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "var(--win-black)";
                    }}
                  >
                    <div style={{ width: 20, height: 20, flexShrink: 0 }}>{link.icon}</div>
                    <span>{link.label}</span>
                  </a>
                ))}

                {/* Divider */}
                <div style={{
                  borderTop: "1px solid var(--win-3d-dark)",
                  borderBottom: "1px solid var(--win-3d-light)",
                  margin: "4px 0",
                }} />

                {/* External links — Facebook, Instagram, LinkedIn, GitHub */}
                {[
                  {
                    href: personal.facebook,
                    label: "Facebook",
                    icon: (
                      <svg viewBox="0 0 32 32" width="20" height="20" style={{ imageRendering: "pixelated", flexShrink: 0 }}>
                        <rect x="2" y="2" width="28" height="28" fill="#1877F2"/>
                        <rect x="18" y="8" width="6" height="3" fill="#FFFFFF"/>
                        <rect x="14" y="7" width="4" height="18" fill="#FFFFFF"/>
                        <rect x="14" y="16" width="8" height="3" fill="#FFFFFF"/>
                      </svg>
                    ),
                  },
                  {
                    href: personal.instagram,
                    label: "Instagram",
                    icon: (
                      <svg viewBox="0 0 32 32" width="20" height="20" style={{ imageRendering: "pixelated", flexShrink: 0 }}>
                        <rect x="2" y="2" width="28" height="28" fill="#E1306C"/>
                        <rect x="8" y="8" width="16" height="16" fill="none" stroke="#FFFFFF" strokeWidth="2"/>
                        <rect x="12" y="12" width="8" height="8" fill="none" stroke="#FFFFFF" strokeWidth="2"/>
                        <rect x="20" y="6" width="4" height="4" fill="#FFFFFF"/>
                      </svg>
                    ),
                  },
                  {
                    href: personal.linkedin,
                    label: "LinkedIn",
                    icon: (
                      <svg viewBox="0 0 32 32" width="20" height="20" style={{ imageRendering: "pixelated", flexShrink: 0 }}>
                        <rect x="2" y="2" width="28" height="28" fill="#0077B5"/>
                        <rect x="6" y="12" width="5" height="14" fill="#FFFFFF"/>
                        <rect x="6" y="6"  width="5" height="5"  fill="#FFFFFF"/>
                        <rect x="14" y="12" width="5" height="14" fill="#FFFFFF"/>
                        <rect x="14" y="14" width="8" height="5"  fill="#FFFFFF"/>
                        <rect x="19" y="12" width="5" height="5"  fill="#FFFFFF"/>
                      </svg>
                    ),
                  },
                  {
                    href: personal.github,
                    label: "GitHub",
                    icon: (
                      <svg viewBox="0 0 32 32" width="20" height="20" style={{ imageRendering: "pixelated", flexShrink: 0 }}>
                        <rect x="2" y="2" width="28" height="28" fill="#24292E"/>
                        <rect x="9"  y="6"  width="14" height="2"  fill="#FFFFFF"/>
                        <rect x="6"  y="8"  width="20" height="2"  fill="#FFFFFF"/>
                        <rect x="5"  y="10" width="22" height="10" fill="#FFFFFF"/>
                        <rect x="6"  y="20" width="8"  height="6"  fill="#FFFFFF"/>
                        <rect x="18" y="20" width="8"  height="6"  fill="#FFFFFF"/>
                        <rect x="13" y="22" width="6"  height="4"  fill="#24292E"/>
                      </svg>
                    ),
                  },
                ].map((s, i, arr) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "8px 12px",
                      textDecoration: "none",
                      color: "var(--win-black)",
                      cursor: "pointer",
                      borderBottom: i < arr.length - 1 ? "1px solid var(--win-gray-light)" : "none",
                      fontSize: 11,
                      fontWeight: "bold",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "var(--win-highlight)";
                      e.currentTarget.style.color = "var(--win-highlight-text)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "var(--win-black)";
                    }}
                  >
                    {s.icon}
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
