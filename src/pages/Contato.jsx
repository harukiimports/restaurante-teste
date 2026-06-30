import Reveal from "../components/Reveal";
import { restaurante } from "../data/restaurante";

export default function Contato() {
  const mapsQuery = encodeURIComponent(restaurante.endereco);

  return (
    <section style={{ padding: "var(--space-7) 0" }}>
      <div className="container">
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: "var(--space-6)" }}>
            <span className="eyebrow">Visite-nos</span>
            <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)" }}>Localização</h1>
          </div>
        </Reveal>

        <div style={{ display: "grid", gap: "var(--space-5)", gridTemplateColumns: "1fr 1fr" }} className="contato-grid">
          <Reveal>
            <div>
              <h2 style={{ fontSize: "1.3rem" }}>Endereço</h2>
              <p>{restaurante.endereco}</p>

              <h2 style={{ fontSize: "1.3rem", marginTop: "var(--space-4)" }}>Horário</h2>
              {restaurante.horario.map((h) => (
                <p key={h.dias}>
                  {h.dias}: {h.horas}
                </p>
              ))}

              <h2 style={{ fontSize: "1.3rem", marginTop: "var(--space-4)" }}>Contato</h2>
              <p>{restaurante.telefone}</p>

              <a
                className="btn btn-primary"
                href={`https://wa.me/${restaurante.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginTop: "var(--space-3)" }}
              >
                Falar no WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div style={{ border: "1px solid var(--color-border)", borderRadius: "var(--radius)", overflow: "hidden", minHeight: 320 }}>
              <iframe
                title="Mapa — Paulistão de Ouro"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 320 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
              />
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contato-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
