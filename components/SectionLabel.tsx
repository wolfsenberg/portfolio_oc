/* Section heading — used by all content sections */
export default function SectionLabel({ title, index }: { title: string; index?: number }) {
  const num = index !== undefined ? String(index).padStart(2, "0") : null;
  return (
    <div style={{ textAlign: "center", marginBottom: 64 }}>
      {num && (
        <span className="f-pixel" style={{ display: "block", fontSize: 11, letterSpacing: "0.5em", color: "var(--red)", opacity: 0.55, marginBottom: 12 }}>
          ─── {num} ───
        </span>
      )}
      <h2 className="f-ember" style={{
        fontSize: "clamp(2.8rem, 8vw, 7rem)", fontWeight: 800,
        lineHeight: 0.95, letterSpacing: "-0.02em", color: "var(--ink)", marginBottom: 20,
      }}>{title}</h2>
      <div style={{ borderTop: "1px dashed var(--ink20)", position: "relative" }}>
        <span style={{ position: "absolute", top: -8, left: 0, fontSize: 12, color: "var(--red)", fontFamily: "monospace" }}>+</span>
        <span style={{ position: "absolute", top: -8, right: 0, fontSize: 12, color: "var(--red)", fontFamily: "monospace" }}>+</span>
      </div>
    </div>
  );
}
