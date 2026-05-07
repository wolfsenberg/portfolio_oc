interface Props {
  size?: number;
  color?: string;
  thickness?: number;
}

export default function CornerMarkers({
  size = 10,
  color = "var(--accent)",
  thickness = 1.5,
}: Props) {
  const base: React.CSSProperties = {
    position: "absolute",
    width: size,
    height: size,
    borderColor: color,
    borderStyle: "solid",
    pointerEvents: "none",
  };
  return (
    <>
      <span style={{ ...base, top: 0,    left: 0,  borderWidth: `${thickness}px 0 0 ${thickness}px` }} />
      <span style={{ ...base, top: 0,    right: 0, borderWidth: `${thickness}px ${thickness}px 0 0` }} />
      <span style={{ ...base, bottom: 0, left: 0,  borderWidth: `0 0 ${thickness}px ${thickness}px` }} />
      <span style={{ ...base, bottom: 0, right: 0, borderWidth: `0 ${thickness}px ${thickness}px 0` }} />
    </>
  );
}
