import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import { restaurante } from "../data/restaurante";

export default function Home() {
  return (
    <>
      <section
        style={{
          minHeight: "92vh",
          display: "flex",
          alignItems: "center",
          backgroundImage: `linear-gradient(180deg, rgba(12,10,9,0.55), rgba(12,10,9,0.92)), url(${restaurante.imagemHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          textAlign: "center",
        }}
      >
        <div className="container">
          <Reveal>
            <span className="eyebrow">Cozinha paulista desde sempre</span>
          </Reveal>
          <Reveal delay={100}>
            <h1>{restaurante.nome}</h1>
          </Reveal>
          <Reveal delay={200}>
            <p style={{ maxWidth: 560, margin: "0 auto var(--space-4)", fontSize: "1.1rem" }}>
              {restaurante.descricao}
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a
                className="btn btn-primary"
                href={`https://wa.me/${restaurante.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Reservar mesa
              </a>
              <Link className="btn btn-outline" to="/cardapio">
                Ver cardápio
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: "var(--space-7) 0" }}>
        <div className="container">
          <Reveal>
            <h2 style={{ textAlign: "center", marginBottom: "var(--space-5)" }}>Por que vir até nós</h2>
          </Reveal>
          <div style={{ display: "grid", gap: "var(--space-5)", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            {[
              { titulo: "Cortes Nobres", texto: "Selecionados e preparados na brasa, no ponto exato." },
              { titulo: "Receita de Família", texto: "Pratos clássicos paulistas, passados de geração em geração." },
              { titulo: "Ambiente Acolhedor", texto: "Espaço pensado para encontros que vale a pena demorar." },
            ].map((item, i) => (
              <Reveal key={item.titulo} delay={i * 50}>
                <div style={{ borderTop: "1px solid var(--color-gold)", paddingTop: "1.5rem" }}>
                  <h3 style={{ fontSize: "1.3rem" }}>{item.titulo}</h3>
                  <p>{item.texto}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "var(--space-7) 0", background: "var(--color-bg-alt)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <Reveal>
            <span className="eyebrow">Visite-nos</span>
            <h2>Te esperamos à mesa</h2>
            <p style={{ maxWidth: 480, margin: "0 auto var(--space-4)" }}>
              {restaurante.endereco} — {restaurante.horario.map((h) => `${h.dias} ${h.horas}`).join(" · ")}
            </p>
            <Link className="btn btn-primary" to="/contato">
              Como chegar
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
