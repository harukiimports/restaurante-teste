import { restaurante } from "../data/restaurante";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--color-border)", padding: "3rem 0 2rem" }}>
      <div
        className="container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "2rem",
        }}
      >
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", marginBottom: "0.5rem" }}>
            Paulistão <span style={{ color: "var(--color-gold)" }}>de Ouro</span>
          </div>
          <p style={{ maxWidth: 320, fontSize: "0.9rem" }}>{restaurante.slogan}</p>
        </div>

        <div>
          <p style={{ fontSize: "0.9rem", marginBottom: "0.25rem" }}>{restaurante.endereco}</p>
          <p style={{ fontSize: "0.9rem", marginBottom: "0.25rem" }}>{restaurante.telefone}</p>
          {restaurante.horario.map((h) => (
            <p key={h.dias} style={{ fontSize: "0.9rem", marginBottom: "0.25rem" }}>
              {h.dias}: {h.horas}
            </p>
          ))}
        </div>
      </div>

      <div className="container" style={{ marginTop: "2rem", fontSize: "0.8rem", color: "var(--color-text-muted)" }}>
        © {new Date().getFullYear()} Paulistão de Ouro. Todos os direitos reservados.
      </div>
    </footer>
  );
}
