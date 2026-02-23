import { useState } from "react";

const skillGroups = [
  {
    title: "Coding Skills",
    color: "#00c8ff",
    items: [
      { name: "HTML / CSS", level: 95 },
      { name: "JavaScript", level: 88 },
      { name: "React", level: 90 },
      { name: "TypeScript", level: 75 },
      { name: "Node.js", level: 78 },
      { name: "Python", level: 95 },
    ],
  },
  {
    title: "Professional Skills",
    color: "#0066ff",
    items: [
      { name: "Web Design", level: 85 },
      { name: "Web Development", level: 90 },
      { name: "Graphic Design", level: 70 },
      { name: "SEO Marketing", level: 72 },
      { name: "UI / UX", level: 78 },
      { name: "Project Management", level: 65 },
    ],
  },
];

const tools = [
  "React", "Astro", "Next.js", "Vite",
  "Tailwind CSS", "SASS", "Framer Motion",
  "Node.js", "Express", "MongoDB", "PostgreSQL",
  "Git", "GitHub", "Python", "VS Code", "Docker",
];

function SkillBar({ name, level, color, index }) {
  return (
    <div style={{ animation: "fadeUp 0.5s ease " + index * 0.06 + "s both" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
        <span style={{ fontSize: "14px", color: "rgba(232,240,254,0.75)", fontFamily: "'DM Sans',sans-serif", fontWeight: 400 }}>
          {name}
        </span>
        <span style={{ fontSize: "13px", color: color, fontFamily: "'Syne',sans-serif", fontWeight: 600 }}>
          {level}%
        </span>
      </div>
      <div style={{ height: "6px", background: "rgba(255,255,255,0.06)", borderRadius: "3px", overflow: "hidden" }}>
        <div style={{
          height: "100%",
          width: level + "%",
          borderRadius: "3px",
          background: "linear-gradient(90deg, " + color + ", " + color + "99)",
          boxShadow: "0 0 10px " + color + "60",
          transition: "width 1.2s ease",
        }} />
      </div>
    </div>
  );
}

export default function Habilidades() {
  return (
    <section
      id="habilidades"
      style={{
        padding: "100px 5vw",
        borderTop: "1px solid rgba(0,200,255,0.07)",
        position: "relative",
      }}
    >
      <style>{`
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }
      `}</style>

      {/* Header */}
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ color: "#00c8ff", fontSize: "12px", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "12px", fontFamily: "'DM Sans',sans-serif", display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ display: "inline-block", width: "24px", height: "1px", background: "#00c8ff" }} />
          Lo que domino
        </div>
        <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(32px,5vw,56px)", fontWeight: 800, color: "white", marginBottom: "60px", lineHeight: 1, letterSpacing: "-0.02em" }}>
          My{" "}
          <span style={{ background: "linear-gradient(135deg,#00c8ff,#0066ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Skills
          </span>
        </h2>

        {/* Skill bars grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px,1fr))", gap: "40px", marginBottom: "72px" }}>
          {skillGroups.map((group) => (
            <div
              key={group.title}
              style={{
                background: "rgba(11,22,40,0.6)",
                border: "1px solid rgba(0,200,255,0.1)",
                borderRadius: "20px",
                padding: "32px",
              }}
            >
              <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: "18px", fontWeight: 700, color: "white", marginBottom: "28px", display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: group.color, display: "inline-block", boxShadow: "0 0 8px " + group.color }} />
                {group.title}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                {group.items.map((skill, i) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} color={group.color} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools section */}
        <div style={{ background: "rgba(11,22,40,0.6)", border: "1px solid rgba(0,200,255,0.1)", borderRadius: "20px", padding: "36px" }}>
          <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: "18px", fontWeight: 700, color: "white", marginBottom: "24px" }}>
            Tecnologias &amp; Herramientas
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {tools.map((tool, i) => (
              <ToolBadge key={tool} tool={tool} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ToolBadge({ tool, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "8px 16px",
        background: hovered ? "rgba(0,200,255,0.12)" : "rgba(255,255,255,0.04)",
        border: hovered ? "1px solid rgba(0,200,255,0.4)" : "1px solid rgba(0,200,255,0.12)",
        borderRadius: "8px",
        fontSize: "12px",
        color: hovered ? "#00c8ff" : "rgba(232,240,254,0.5)",
        fontFamily: "monospace",
        letterSpacing: "0.05em",
        transition: "all 0.25s ease",
        cursor: "default",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        animation: "fadeUp 0.4s ease " + index * 0.03 + "s both",
      }}
    >
      {tool}
    </span>
  );
}