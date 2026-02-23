import { useState } from "react";

const proyectos = [
  {
    id: 1,
    titulo: "Detección de Inchancables con YOLO",
    descripcion: "Sistema de visión artificial entrenado para detectar material inchancable en fajas transportadoras, previniendo daños críticos en la maquinaria minera.",
    tech: ["Python", "YOLO", "OpenCV"],
    color: "#00c8ff",
    categoria: "Inteligencia Artificial",
    link: "#",
    repo: "#",
    destacado: true,
    year: "2024",
  },
  {
    id: 2,
    titulo: "Automatización de Alertas Críticas",
    descripcion: "Flujo de integración empresarial utilizando n8n para filtrar correos importantes de Gmail y enviar notificaciones instantáneas a través de WhatsApp.",
    tech: ["n8n", "Node.js", "WhatsApp API", "Automatización"],
    color: "#0066ff",
    categoria: "Backend",
    link: "#",
    repo: "#",
    destacado: true,
    year: "2024",
  },
  {
    id: 3,
    titulo: "Control Logístico de Flota y Buses",
    descripcion: "Aplicación web para la gestión del transporte de personal en mina, controlando el registro en tiempo real de subida y bajada de pasajeros en cada ruta.",
    tech: ["React", "Node.js", "Tailwind CSS", "Base de Datos"],
    color: "#00c8ff",
    categoria: "Fullstack",
    link: "#",
    repo: "#",
    destacado: true,
    year: "2024",
  },
  {
    id: 4,
    titulo: "Plataforma de Inducción Minera",
    descripcion: "Portal web interactivo diseñado para impartir capacitaciones, realizar evaluaciones y llevar el seguimiento de las inducciones de seguridad del personal.",
    tech: ["Astro", "React", "Tailwind CSS"],
    color: "#0066ff",
    categoria: "Frontend",
    link: "#",
    repo: "#",
    destacado: false,
    year: "2023",
  },
  {
    id: 5,
    titulo: "Monitoreo de Seguridad EPP",
    descripcion: "Modelo de análisis de video en tiempo real para verificar el uso correcto y obligatorio de Equipos de Protección Personal en zonas de alto riesgo.",
    tech: ["Python", "YOLO", "PyTorch"],
    color: "#00c8ff",
    categoria: "Inteligencia Artificial",
    link: "#",
    repo: "#",
    destacado: false,
    year: "2023",
  },
  {
    id: 6,
    titulo: "E-Commerce Escalable",
    descripcion: "Tienda virtual completa con catálogo dinámico de productos, carrito de compras optimizado y un panel de administración para la gestión de ventas.",
    tech: ["React", "Node.js", "Tailwind CSS", "MongoDB"],
    color: "#0066ff",
    categoria: "Fullstack",
    link: "#",
    repo: "#",
    destacado: false,
    year: "2023",
  },
];

const categorias = ["Todos", "Fullstack", "Frontend", "Backend"];

function ProjectCard({ proyecto, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(0,200,255,0.05)" : "rgba(11,22,40,0.6)",
        border: hovered ? "1px solid rgba(0,200,255,0.3)" : "1px solid rgba(0,200,255,0.1)",
        borderRadius: "20px",
        padding: "28px",
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? "0 16px 40px rgba(0,200,255,0.1)" : "none",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        animation: "fadeUp 0.5s ease " + index * 0.08 + "s both",
      }}
    >
      {/* Top bar accent */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "2px",
        background: hovered ? "linear-gradient(90deg," + proyecto.color + ",transparent)" : "transparent",
        transition: "all 0.4s ease",
      }} />

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
        <div style={{
          width: "44px", height: "44px", borderRadius: "10px",
          background: "rgba(0,200,255,0.1)",
          border: "1px solid rgba(0,200,255,0.2)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: proyecto.color, fontSize: "18px", fontWeight: 700,
          fontFamily: "'Syne',sans-serif",
        }}>
          {proyecto.id}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {proyecto.destacado && (
            <span style={{
              fontSize: "10px", color: "#00c8ff",
              border: "1px solid rgba(0,200,255,0.3)",
              padding: "3px 10px", borderRadius: "100px",
              letterSpacing: "0.1em", textTransform: "uppercase",
              fontFamily: "'DM Sans',sans-serif",
            }}>
              Destacado
            </span>
          )}
          <span style={{ fontSize: "11px", color: "rgba(232,240,254,0.25)", fontFamily: "monospace" }}>
            {proyecto.year}
          </span>
        </div>
      </div>

      {/* Title */}
      <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: "18px", fontWeight: 700, color: "white", marginBottom: "10px", lineHeight: 1.3 }}>
        {proyecto.titulo}
      </h3>

      {/* Description */}
      <p style={{ color: "rgba(232,240,254,0.4)", fontSize: "14px", lineHeight: 1.7, fontFamily: "'DM Sans',sans-serif", fontWeight: 300, marginBottom: "20px", flexGrow: 1 }}>
        {proyecto.descripcion}
      </p>

      {/* Tech */}
      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "20px" }}>
        {proyecto.tech.map((t) => (
          <span key={t} style={{
            padding: "4px 10px",
            background: "rgba(0,200,255,0.08)",
            border: "1px solid rgba(0,200,255,0.18)",
            borderRadius: "6px",
            fontSize: "11px", color: proyecto.color,
            fontFamily: "monospace", letterSpacing: "0.05em",
          }}>
            {t}
          </span>
        ))}
      </div>

      
      
    </div>
  );
}

export default function Proyectos() {
  const [filtro, setFiltro] = useState("Todos");

  const filtrados = filtro === "Todos"
    ? proyectos
    : proyectos.filter((p) => p.categoria === filtro);

  return (
    <section
      id="proyectos"
      style={{ padding: "100px 5vw", borderTop: "1px solid rgba(0,200,255,0.07)", position: "relative" }}
    >
      <style>{`
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
      `}</style>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "60px", flexWrap: "wrap", gap: "24px" }}>
          <div>
            <div style={{ color: "#00c8ff", fontSize: "12px", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "12px", fontFamily: "'DM Sans',sans-serif", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ display: "inline-block", width: "24px", height: "1px", background: "#00c8ff" }} />
              Lo que he construido
            </div>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(32px,5vw,56px)", fontWeight: 800, color: "white", lineHeight: 1, letterSpacing: "-0.02em" }}>
              My{" "}
              <span style={{ background: "linear-gradient(135deg,#00c8ff,#0066ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Projects
              </span>
            </h2>
          </div>

          {/* Filtros */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => setFiltro(cat)}
                style={{
                  padding: "8px 20px",
                  borderRadius: "8px",
                  border: filtro === cat ? "1px solid rgba(0,200,255,0.5)" : "1px solid rgba(0,200,255,0.1)",
                  background: filtro === cat ? "rgba(0,200,255,0.12)" : "transparent",
                  color: filtro === cat ? "#00c8ff" : "rgba(232,240,254,0.35)",
                  fontSize: "13px", cursor: "pointer",
                  transition: "all 0.3s ease",
                  fontFamily: "'DM Sans',sans-serif",
                }}
              >
                {cat}
                <span style={{ marginLeft: "6px", fontSize: "11px", opacity: 0.5 }}>
                  {cat === "Todos" ? proyectos.length : proyectos.filter((p) => p.categoria === cat).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px,1fr))", gap: "20px" }}>
          {filtrados.map((proyecto, i) => (
            <ProjectCard key={proyecto.id} proyecto={proyecto} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}