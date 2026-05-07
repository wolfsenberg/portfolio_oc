"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Preloader from "@/components/Preloader";
import Navbar, { StartMenu } from "@/components/Navbar";
import ProjectModal from "@/components/ProjectModal";
import Footer from "@/components/Footer";
import {
  personal,
  experiences,
  projects,
  education,
  skills,
  achievements,
  certifications,
} from "@/data/portfolio";
import type { Project } from "@/data/portfolio";

/* ── Shared window wrapper ─────────────────────────────── */
const W = 860;

function Win({
  id,
  title,
  status,
  delay = 0,
  children,
}: {
  id?: string;
  title: string;
  status?: string;
  delay?: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      id={id}
      className="win-window"
      style={{ maxWidth: W, width: "100%", margin: "0 auto", scrollMarginTop: 8 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25, delay }}
    >
      <div className="win-titlebar">
        <span>{title}</span>
        <div style={{ display: "flex", gap: 2 }}>
          <button className="win-button" style={{ minWidth: 16, width: 16, height: 14, padding: 0, fontSize: 9 }}>_</button>
          <button className="win-button" style={{ minWidth: 16, width: 16, height: 14, padding: 0, fontSize: 7 }}>□</button>
          <button className="win-button" style={{ minWidth: 16, width: 16, height: 14, padding: 0, fontSize: 9 }}>x</button>
        </div>
      </div>
      <div style={{ background: "var(--win-white)", margin: 8 }}>
        {children}
      </div>
      {status && (
        <div className="win-statusbar">
          <div className="win-statusbar-field" style={{ fontSize: 10 }}>{status}</div>
        </div>
      )}
    </motion.div>
  );
}

/* ── Section divider inside a window ──────────────────── */
function Divider() {
  return (
    <div style={{
      height: 0,
      borderTop: "1px solid var(--win-3d-dark)",
      borderBottom: "1px solid var(--win-3d-light)",
      margin: "0",
    }} />
  );
}

/* ── Tab button style helper ───────────────────────────── */
const tabStyle = (active: boolean): React.CSSProperties => ({
  padding: "4px 16px",
  fontSize: 11,
  fontWeight: "bold",
  fontFamily: "inherit",
  cursor: "pointer",
  background: active ? "var(--win-gray)" : "var(--win-gray-light)",
  color: "var(--win-black)",
  border: "2px solid",
  borderColor: active
    ? "var(--win-3d-light) var(--win-3d-dark) var(--win-gray) var(--win-3d-light)"
    : "var(--win-3d-light) var(--win-3d-dark) var(--win-3d-dark) var(--win-3d-light)",
  position: "relative",
  top: active ? 2 : 0,
  marginRight: 2,
  zIndex: active ? 1 : 0,
});

/* ── Projects tabbed window ────────────────────────────── */
function ProjectsWindow({
  projects,
  selected,
  setSelected,
}: {
  projects: import("@/data/portfolio").Project[];
  selected: import("@/data/portfolio").Project | null;
  setSelected: (p: import("@/data/portfolio").Project | null) => void;
}) {
  const [tab, setTab] = useState<"technical" | "graphic">("technical");

  return (
    <motion.div
      id="projects"
      className="win-window"
      style={{ maxWidth: 860, width: "100%", margin: "0 auto", scrollMarginTop: 8 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25, delay: 0.05 }}
    >
      {/* Title bar */}
      <div className="win-titlebar">
        <span>Projects</span>
        <div style={{ display: "flex", gap: 2 }}>
          <button className="win-button" style={{ minWidth: 16, width: 16, height: 14, padding: 0, fontSize: 9 }}>_</button>
          <button className="win-button" style={{ minWidth: 16, width: 16, height: 14, padding: 0, fontSize: 7 }}>□</button>
          <button className="win-button" style={{ minWidth: 16, width: 16, height: 14, padding: 0, fontSize: 9 }}>x</button>
        </div>
      </div>

      {/* Tab strip */}
      <div style={{
        display: "flex",
        padding: "6px 8px 0",
        background: "var(--win-gray)",
        borderBottom: "2px solid var(--win-3d-dark)",
      }}>
        <button style={tabStyle(tab === "technical")} onClick={() => setTab("technical")}>
          Technical Projects
        </button>
        <button style={tabStyle(tab === "graphic")} onClick={() => setTab("graphic")}>
          Graphic Projects
        </button>
      </div>

      {/* Tab content */}
      <div style={{ background: "var(--win-white)", margin: 8 }}>

        {/* ── Technical ── */}
        {tab === "technical" && (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
            gap: 8,
            padding: 16,
          }}>
            {projects.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelected(p)}
                style={{
                  background: "transparent", border: "none", cursor: "pointer",
                  display: "flex", flexDirection: "column", alignItems: "center",
                  gap: 5, padding: 8,
                  fontFamily: "var(--font-mono), 'Intel One Mono', 'Courier New', monospace",
                }}
                onMouseEnter={(e) => {
                  const lbl = e.currentTarget.querySelector(".fl") as HTMLElement;
                  if (lbl) { lbl.style.background = "var(--win-highlight)"; lbl.style.color = "var(--win-highlight-text)"; }
                }}
                onMouseLeave={(e) => {
                  const lbl = e.currentTarget.querySelector(".fl") as HTMLElement;
                  if (lbl) { lbl.style.background = "transparent"; lbl.style.color = "var(--win-black)"; }
                }}
              >
                <svg viewBox="0 0 48 40" width="48" height="40" style={{ imageRendering: "pixelated" }} aria-hidden="true">
                  <rect x="0" y="8"  width="48" height="30" fill="#FFCC00"/>
                  <rect x="0" y="8"  width="48" height="30" fill="none" stroke="#AA8800" strokeWidth="2"/>
                  <rect x="0" y="2"  width="20" height="10" fill="#FFCC00"/>
                  <rect x="0" y="2"  width="20" height="10" fill="none" stroke="#AA8800" strokeWidth="2"/>
                  <rect x="4" y="12" width="40" height="2"  fill="#FFE066" opacity="0.6"/>
                </svg>
                <span className="fl" style={{ fontSize: 10, textAlign: "center", lineHeight: 1.3, color: "var(--win-black)", padding: "1px 4px", transition: "all 0.1s", wordBreak: "break-word", width: "100%" }}>
                  {p.title}
                </span>
                <span style={{ fontSize: 9, color: "var(--win-gray-dark)" }}>
                  {p.type.includes("lead") ? "[LEAD]" : p.type === "Solo Project" ? "[SOLO]" : "[TEAM]"} · {p.year}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* ── Graphic ── */}
        {tab === "graphic" && (
          <div style={{ padding: 16 }}>
            <Image
              src="/photo-portfolio2.png"
              alt="Graphic Design Portfolio"
              width={1200}
              height={1600}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        )}
      </div>

      {/* Status bar */}
      <div className="win-statusbar">
        <div className="win-statusbar-field" style={{ fontSize: 10 }}>
          {tab === "technical"
            ? `${projects.length} projects — click any folder to view details`
            : "Graphic Design Portfolio"}
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [loaded, setLoaded]       = useState(false);
  const [startOpen, setStartOpen] = useState(false);
  const [time, setTime]           = useState("");
  const [date, setDate]           = useState("");
  const [selected, setSelected]   = useState<Project | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 2000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const update = () => {
      const now     = new Date();
      const h       = now.getHours() % 12 || 12;
      const m       = String(now.getMinutes()).padStart(2, "0");
      const ampm    = now.getHours() >= 12 ? "PM" : "AM";
      const days    = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
      const months  = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
      setTime(`${h}:${m} ${ampm}`);
      setDate(`${days[now.getDay()]} ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <Preloader done={loaded} />
      <Navbar />
      <StartMenu open={startOpen} onClose={() => setStartOpen(false)} />

      {/* ── Win97 Ticker ── */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 20,
        background: "var(--win-gray)",
        borderBottom: "2px solid",
        borderColor: "var(--win-3d-dark) var(--win-3d-light) var(--win-3d-light) var(--win-3d-dark)",
        overflow: "hidden",
        zIndex: 200,
        display: "flex",
        alignItems: "center",
      }}>
        <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>
          <div style={{
            display: "inline-block",
            whiteSpace: "nowrap",
            fontSize: 10,
            animation: "win-ticker 40s linear infinite",
            paddingLeft: "100%",
          }}>
            Welcome to my portfolio ^___^ &nbsp;|&nbsp; Geinel Ni&#xD1;o A. Dungao &nbsp;|&nbsp; IT Student &nbsp;|&nbsp; Full-Stack Web &amp; IoT Developer &nbsp;|&nbsp; Technical Project Manager @ AWSCCPUP &nbsp;|&nbsp; Creatives @ AWSUG e:Novators PH &nbsp;|&nbsp; Compliance Analyst, Cloud Solutions @ GDGPUP &nbsp;|&nbsp; 14°31′52″N 121°03′13″E &nbsp;|&nbsp; 14°35′50″N, 121°0′39″E &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </div>
      </div>

      <main style={{
        padding: "44px 20px 80px 100px",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        alignItems: "center",
      }}>
        <div style={{
          width: "100%",
          maxWidth: W,
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}>

        {/* ══ 1. ABOUT ME ══════════════════════════════════ */}
        <motion.div
          id="home"
          className="win-window"
          style={{ scrollMarginTop: 8 }}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <div className="win-titlebar">
            <span>About Me — {personal.shortName}</span>
            <div style={{ display: "flex", gap: 2 }}>
              <button className="win-button" style={{ minWidth: 16, width: 16, height: 14, padding: 0, fontSize: 9 }}>_</button>
              <button className="win-button" style={{ minWidth: 16, width: 16, height: 14, padding: 0, fontSize: 7 }}>□</button>
              <button className="win-button" style={{ minWidth: 16, width: 16, height: 14, padding: 0, fontSize: 9 }}>x</button>
            </div>
          </div>
          <div className="win-menubar">
            <div className="win-menu-item"><u>F</u>ile</div>
            <div className="win-menu-item"><u>E</u>dit</div>
            <div className="win-menu-item"><u>V</u>iew</div>
            <div className="win-menu-item"><u>H</u>elp</div>
          </div>
          <div style={{ background: "var(--win-white)", margin: 8, padding: 20 }}>
            {/* Name + subtitle */}
            <div style={{ paddingBottom: 16, marginBottom: 16, borderBottom: "1px solid var(--win-gray-light)" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 12 }}>
                {/* Avatar */}
                <div style={{
                  width: 80,
                  height: 80,
                  flexShrink: 0,
                  border: "2px solid",
                  borderColor: "var(--win-3d-dark) var(--win-3d-light) var(--win-3d-light) var(--win-3d-dark)",
                  overflow: "hidden",
                  background: "var(--win-white)",
                }}>
                  <Image
                    src="/avatar.png"
                    alt="Geinel Niño A. Dungao"
                    width={80}
                    height={80}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div>
                  <h1 style={{ fontSize: 22, fontWeight: "bold", color: "var(--win-blue)", marginBottom: 6, lineHeight: 1.2 }}>
                    {personal.name}
                  </h1>
                  <p style={{ fontSize: 12, marginBottom: 4, lineHeight: 1.5 }}>{personal.subtitle}</p>
                  <p style={{ fontSize: 11, color: "var(--win-gray-dark)", fontStyle: "italic" }}>{personal.tagline}</p>
                </div>
              </div>
            </div>
            {/* Quote */}
            <div style={{ borderLeft: "3px solid var(--win-blue)", paddingLeft: 14, marginBottom: 20, fontStyle: "italic", fontSize: 12, lineHeight: 1.7, color: "var(--win-gray-dark)" }}>
              {personal.quote}
            </div>
            {/* Info rows */}
            <div style={{ display: "flex", flexDirection: "column", gap: 5, fontSize: 11, marginBottom: 20, borderTop: "1px solid var(--win-gray-light)", paddingTop: 14 }}>
              {[
                ["Username",  personal.username],
                ["Location",  "Taguig City | PUP Manila, Philippines"],
                ["Status",    "Available for Opportunities"],
              ].map(([k, v]) => (
                <div key={k} style={{ display: "flex", gap: 8 }}>
                  <span style={{ color: "var(--win-gray-dark)", width: 80, flexShrink: 0 }}>{k}:</span>
                  <span style={{ fontWeight: k === "Status" ? "bold" : "normal", color: k === "Status" ? "var(--win-blue)" : "inherit" }}>{v}</span>
                </div>
              ))}
            </div>
            {/* Links */}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a href={personal.facebook} target="_blank" rel="noopener noreferrer" className="win-button"
                style={{ textDecoration: "none", color: "var(--win-black)", fontSize: 11, padding: "5px 14px" }}>
                Facebook
              </a>
              <a href={personal.instagram} target="_blank" rel="noopener noreferrer" className="win-button"
                style={{ textDecoration: "none", color: "var(--win-black)", fontSize: 11, padding: "5px 14px" }}>
                Instagram
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="win-button"
                style={{ textDecoration: "none", color: "var(--win-black)", fontSize: 11, padding: "5px 14px" }}>
                LinkedIn
              </a>
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="win-button"
                style={{ textDecoration: "none", color: "var(--win-black)", fontSize: 11, padding: "5px 14px" }}>
                GitHub
              </a>
            </div>
          </div>
          <div className="win-statusbar">
            <div className="win-statusbar-field" style={{ fontSize: 10 }}>Ready</div>
            <div className="win-statusbar-field" style={{ flex: 0, minWidth: 110, fontSize: 10 }}>IT Student</div>
          </div>
        </motion.div>

        {/* ══ 2. EXPERIENCE ════════════════════════════════ */}
        <Win id="experience" title="Experience" delay={0.05}
          status={`${experiences.length} organizations  |  ${experiences.reduce((a, e) => a + e.roles.length, 0)} roles`}>
          {experiences.map((exp, ei) => (
            <div key={exp.org}>
              {ei > 0 && <Divider />}
              <div style={{ padding: "12px 16px" }}>
                <div style={{ fontWeight: "bold", fontSize: 12, marginBottom: 8 }}>{exp.org}</div>
                {exp.roles.map((role, ri) => (
                  <div key={ri} style={{
                    display: "flex", justifyContent: "space-between", alignItems: "baseline",
                    gap: 8, padding: "3px 0 3px 12px", marginBottom: 2,
                    borderLeft: ri === 0 ? "3px solid var(--win-blue)" : "3px solid var(--win-gray-light)",
                    fontSize: 11,
                  }}>
                    <span style={{ fontWeight: ri === 0 ? "bold" : "normal" }}>{role.title}</span>
                    <span style={{ color: "var(--win-gray-dark)", whiteSpace: "nowrap", fontSize: 10, flexShrink: 0 }}>{role.period}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Win>

        {/* ══ 3. PROJECTS ══════════════════════════════════ */}
        <ProjectsWindow projects={projects} selected={selected} setSelected={setSelected} />

        {/* ══ 4. EDUCATION ═════════════════════════════════ */}
        <Win id="education" title="Education" delay={0.05}
          status={`${education.length} institutions`}>
          {education.map((e, ei) => (
            <div key={e.school}>
              {ei > 0 && <Divider />}
              <div style={{ padding: "12px 16px" }}>
                <div style={{ fontWeight: "bold", fontSize: 12, marginBottom: 8 }}>{e.school}</div>
                {e.years.map((y, yi) => (
                  <div key={yi} style={{ padding: "4px 0 4px 12px", borderLeft: "3px solid var(--win-gray-light)", fontSize: 11, marginBottom: 4 }}>
                    <div style={{ fontWeight: "bold", marginBottom: 2 }}>
                      {"label" in y && y.label ? y.label : e.level}
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
                      {"honor" in y && y.honor
                        ? <span style={{ color: "var(--win-blue)", fontSize: 10 }}>★ {y.honor}</span>
                        : <span />}
                      <span style={{ color: "var(--win-gray-dark)", fontSize: 10, marginLeft: "auto", whiteSpace: "nowrap" }}>{y.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Win>

        {/* ══ 5. SKILLS ════════════════════════════════════ */}
        <Win id="skills" title="Skills" delay={0.05}
          status={`${skills.reduce((a, s) => a + s.items.length, 0)} skills across ${skills.length} categories`}>
          {skills.map((s, si) => (
            <div key={s.category}>
              {si > 0 && <Divider />}
              <div style={{ display: "flex", alignItems: "flex-start" }}>
                <div style={{ width: 130, flexShrink: 0, padding: "10px 12px", fontWeight: "bold", fontSize: 11, background: "#F5F5F5", borderRight: "1px solid var(--win-gray-light)", alignSelf: "stretch", display: "flex", alignItems: "center" }}>
                  {s.category}
                </div>
                <div style={{ padding: "8px 12px", display: "flex", flexWrap: "wrap", gap: 5, flex: 1 }}>
                  {s.items.map((item) => (
                    <span key={item} style={{ fontSize: 10, padding: "2px 8px", background: "var(--win-gray-light)", border: "1px solid var(--win-gray-dark)", cursor: "default" }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Win>

        {/* ══ 6. ACHIEVEMENTS ══════════════════════════════ */}
        <Win id="achievements" title="Achievements & Awards" delay={0.05}
          status="21 notable achievements across 8 years">
          {achievements.map((a, ai) => (
            <div key={a.year}>
              {ai > 0 && <Divider />}
              <div style={{ padding: "12px 16px" }}>
                <div style={{ fontWeight: "bold", fontSize: 12, color: "var(--win-blue)", marginBottom: 8 }}>{a.year}</div>
                {a.items.map((item, ii) => (
                  <div key={ii} style={{ fontSize: 11, padding: "3px 0 3px 12px", borderLeft: "3px solid var(--win-gray-light)", marginBottom: 4, lineHeight: 1.5 }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Win>

        {/* ══ 7. CERTIFICATIONS ════════════════════════════ */}
        <motion.div
          id="certifications"
          className="win-window"
          style={{ scrollMarginTop: 8 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.25, delay: 0.05 }}
        >
          <div className="win-titlebar">
            <span>Certifications</span>
            <div style={{ display: "flex", gap: 2 }}>
              <button className="win-button" style={{ minWidth: 16, width: 16, height: 14, padding: 0, fontSize: 9 }}>_</button>
              <button className="win-button" style={{ minWidth: 16, width: 16, height: 14, padding: 0, fontSize: 7 }}>□</button>
              <button className="win-button" style={{ minWidth: 16, width: 16, height: 14, padding: 0, fontSize: 9 }}>x</button>
            </div>
          </div>
          <div style={{ background: "var(--win-white)", margin: 8, padding: 16 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))", gap: 16 }}>
              {certifications.map((c, i) => (
                <div key={c.credentialId} style={{ border: "1px solid var(--win-gray-light)", padding: 16 }}>
                  <div style={{ background: "var(--win-blue)", color: "var(--win-white)", padding: "4px 10px", marginBottom: 12, fontSize: 10, fontWeight: "bold", textAlign: "center", letterSpacing: "0.06em" }}>
                    TESDA NATIONAL CERTIFICATION
                  </div>
                  <div style={{ fontWeight: "bold", fontSize: 12, marginBottom: 10, lineHeight: 1.4 }}>{c.title}</div>
                  <div style={{ fontSize: 11, color: "var(--win-gray-dark)", marginBottom: 8, paddingBottom: 8, borderBottom: "1px solid var(--win-gray-light)" }}>
                    {c.issuer}
                  </div>
                  <div style={{ fontSize: 10, color: "var(--win-gray-dark)", fontFamily: "monospace" }}>
                    ID: {c.credentialId}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="win-statusbar">
            <div className="win-statusbar-field" style={{ fontSize: 10 }}>{certifications.length} certifications — TESDA</div>
            <div className="win-statusbar-field" style={{ flex: 0, minWidth: 60, fontSize: 10, textAlign: "center" }}>Verified</div>
          </div>
        </motion.div>

        </div>{/* end inner wrapper */}
      </main>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      <Footer />

      {/* ── Taskbar ── */}
      <div className="win-taskbar">
        <button className="win-start-button" onClick={() => setStartOpen((v) => !v)} style={{ fontWeight: "bold", display: "flex", alignItems: "center", gap: 4 }}>
          <svg viewBox="0 0 16 16" width="14" height="14" style={{ imageRendering: "pixelated", flexShrink: 0 }} aria-hidden="true">
            <rect x="0" y="0" width="7" height="7" fill="#FF0000"/>
            <rect x="9" y="0" width="7" height="7" fill="#00FF00"/>
            <rect x="0" y="9" width="7" height="7" fill="#0000FF"/>
            <rect x="9" y="9" width="7" height="7" fill="#FFFF00"/>
          </svg>
          Start
        </button>
        <div className="win-taskbar-divider" />
        <div style={{ flex: 1 }} />
        <div className="win-clock" style={{ textAlign: "right", lineHeight: 1.3 }}>
          <div style={{ fontSize: 11, fontWeight: "bold" }}>{time}</div>
          <div style={{ fontSize: 9 }}>{date}</div>
        </div>
      </div>
    </>
  );
}
