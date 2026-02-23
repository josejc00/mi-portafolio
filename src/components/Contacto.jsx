import { useState } from "react";

const contactInfo = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
    label: "Email",
    value: "jjaitac@unsa.edu.pe",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=jjaitac@unsa.edu.pe",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    ),
    label: "Ubicacion",
    value: "Arequipa, Perú",
    href: "#",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    label: "LinkedIn",
    value: "linkedin.com/in/Jose Jaita",
    href: "https://www.linkedin.com/in/jose-manuel-jaita-chura-081a72276/?isSelfProfile=true",
  },
];

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", email: "", asunto: "", mensaje: "" });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui puedes conectar tu backend o servicio como EmailJS / Formspree
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ nombre: "", email: "", asunto: "", mensaje: "" });
  };

  const inputStyle = (name) => ({
    width: "100%",
    padding: "14px 18px",
    background: focused === name ? "rgba(0,200,255,0.05)" : "rgba(255,255,255,0.03)",
    border: focused === name ? "1px solid rgba(0,200,255,0.45)" : "1px solid rgba(0,200,255,0.12)",
    borderRadius: "10px",
    color: "rgba(232,240,254,0.9)",
    fontSize: "14px",
    fontFamily: "'DM Sans',sans-serif",
    fontWeight: 300,
    outline: "none",
    transition: "all 0.3s ease",
    resize: "none",
    boxShadow: focused === name ? "0 0 0 3px rgba(0,200,255,0.08)" : "none",
  });

  const labelStyle = {
    display: "block",
    fontSize: "12px",
    color: "rgba(232,240,254,0.4)",
    fontFamily: "'DM Sans',sans-serif",
    marginBottom: "8px",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
  };

  return (
    <section
      id="contacto"
      style={{ padding: "100px 5vw", borderTop: "1px solid rgba(0,200,255,0.07)" }}
    >
      <style>{`
        ::placeholder { color: rgba(232,240,254,0.2) !important; }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes checkmark {
          from { transform: scale(0.5); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div style={{ color: "#00c8ff", fontSize: "12px", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "12px", fontFamily: "'DM Sans',sans-serif" }}>
            Trabajemos juntos
          </div>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(32px,5vw,56px)", fontWeight: 800, color: "white", marginBottom: "16px", lineHeight: 1, letterSpacing: "-0.02em" }}>
            Contact{" "}
            <span style={{ background: "linear-gradient(135deg,#00c8ff,#0066ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Me!
            </span>
          </h2>
          <p style={{ color: "rgba(232,240,254,0.4)", fontSize: "16px", fontFamily: "'DM Sans',sans-serif", fontWeight: 300, maxWidth: "480px", margin: "0 auto" }}>
            Estoy disponible para nuevas oportunidades. No dudes en escribirme si tienes un proyecto en mente.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "40px", alignItems: "start" }}>

          {/* Info izquierda */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                style={{
                  display: "flex", alignItems: "center", gap: "16px",
                  background: "rgba(11,22,40,0.6)",
                  border: "1px solid rgba(0,200,255,0.1)",
                  borderRadius: "16px", padding: "20px 24px",
                  textDecoration: "none", transition: "all 0.3s ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "rgba(0,200,255,0.3)";
                  e.currentTarget.style.transform = "translateX(4px)";
                  e.currentTarget.style.background = "rgba(0,200,255,0.05)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "rgba(0,200,255,0.1)";
                  e.currentTarget.style.transform = "translateX(0)";
                  e.currentTarget.style.background = "rgba(11,22,40,0.6)";
                }}
              >
                <div style={{
                  width: "44px", height: "44px", borderRadius: "10px",
                  background: "rgba(0,200,255,0.1)", border: "1px solid rgba(0,200,255,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#00c8ff", flexShrink: 0,
                }}>
                  {info.icon}
                </div>
                <div>
                  <div style={{ fontSize: "11px", color: "rgba(232,240,254,0.35)", fontFamily: "'DM Sans',sans-serif", marginBottom: "3px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    {info.label}
                  </div>
                  <div style={{ fontSize: "14px", color: "rgba(232,240,254,0.75)", fontFamily: "'DM Sans',sans-serif" }}>
                    {info.value}
                  </div>
                </div>
              </a>
            ))}

            {/* Disponibilidad */}
            <div style={{
              background: "rgba(0,200,255,0.05)",
              border: "1px solid rgba(0,200,255,0.15)",
              borderRadius: "16px", padding: "20px 24px",
              display: "flex", alignItems: "center", gap: "12px",
            }}>
              <div style={{
                width: "10px", height: "10px", borderRadius: "50%",
                background: "#00c8ff", flexShrink: 0,
                boxShadow: "0 0 8px #00c8ff",
                animation: "blink 2s ease-in-out infinite",
              }} />
              <div>
                <div style={{ fontSize: "13px", color: "rgba(232,240,254,0.7)", fontFamily: "'DM Sans',sans-serif", fontWeight: 400 }}>
                  Actualmente disponible
                </div>
                <div style={{ fontSize: "12px", color: "rgba(232,240,254,0.3)", fontFamily: "'DM Sans',sans-serif", fontWeight: 300 }}>
                  para proyectos freelance o tiempo completo
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div style={{
            background: "rgba(11,22,40,0.6)",
            border: "1px solid rgba(0,200,255,0.1)",
            borderRadius: "20px", padding: "36px",
          }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0", animation: "checkmark 0.5s ease" }}>
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" style={{ margin: "0 auto" }}>
                    <circle cx="12" cy="12" r="11" stroke="#00c8ff" strokeWidth="1.5"/>
                    <path d="M7 12.5l3.5 3.5 6.5-7" stroke="#00c8ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: "22px", color: "white", marginBottom: "8px" }}>
                  Mensaje enviado!
                </h3>
                <p style={{ color: "rgba(232,240,254,0.4)", fontSize: "14px", fontFamily: "'DM Sans',sans-serif" }}>
                  Te respondere lo antes posible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <label style={labelStyle}>Full Name</label>
                    <input
                      type="text" name="nombre" value={form.nombre}
                      onChange={handleChange} required placeholder="Tu nombre"
                      onFocus={() => setFocused("nombre")}
                      onBlur={() => setFocused("")}
                      style={inputStyle("nombre")}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address</label>
                    <input
                      type="email" name="email" value={form.email}
                      onChange={handleChange} required placeholder="tu@email.com"
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused("")}
                      style={inputStyle("email")}
                    />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Subject</label>
                  <input
                    type="text" name="asunto" value={form.asunto}
                    onChange={handleChange} required placeholder="Asunto del mensaje"
                    onFocus={() => setFocused("asunto")}
                    onBlur={() => setFocused("")}
                    style={inputStyle("asunto")}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Your Message</label>
                  <textarea
                    name="mensaje" value={form.mensaje}
                    onChange={handleChange} required placeholder="Cuéntame sobre tu proyecto..."
                    rows={5}
                    onFocus={() => setFocused("mensaje")}
                    onBlur={() => setFocused("")}
                    style={inputStyle("mensaje")}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    padding: "14px 36px",
                    background: "linear-gradient(135deg, #00c8ff, #0066ff)",
                    color: "white", fontFamily: "'Syne',sans-serif",
                    fontWeight: 700, fontSize: "15px",
                    borderRadius: "10px", border: "none",
                    cursor: "pointer", transition: "all 0.3s ease",
                    boxShadow: "0 4px 20px rgba(0,200,255,0.3)",
                    alignSelf: "flex-end",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,200,255,0.45)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,200,255,0.3)";
                  }}
                >
                  Submit &rarr;
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity:1; } 50% { opacity:0.3; }
        }
      `}</style>
    </section>
  );
}