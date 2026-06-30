import Reveal from "../components/Reveal";
import { restaurante } from "../data/restaurante";

export default function Cardapio() {
  return (
    <section style={{ padding: "var(--space-7) 0" }}>
      <div className="container">
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: "var(--space-6)" }}>
            <span className="eyebrow">Nossa cozinha</span>
            <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)" }}>Cardápio</h1>
          </div>
        </Reveal>

        {restaurante.cardapio.map((secao, si) => (
          <div key={secao.categoria} style={{ marginBottom: "var(--space-6)" }}>
            <Reveal delay={si * 50}>
              <h2 style={{ fontSize: "1.5rem", color: "var(--color-gold)", marginBottom: "var(--space-3)" }}>
                {secao.categoria}
              </h2>
            </Reveal>

            <div style={{ display: "grid", gap: "1.5rem" }}>
              {secao.itens.map((item, i) => (
                <Reveal key={item.nome} delay={si * 50 + i * 45}>
                  <div
                    style={{
                      display: "flex",
                      gap: "1.25rem",
                      alignItems: "center",
                      borderBottom: "1px solid var(--color-border)",
                      paddingBottom: "1.25rem",
                    }}
                  >
                    {item.imagem && (
                      <img
                        src={item.imagem}
                        alt={item.nome}
                        width={88}
                        height={88}
                        loading="lazy"
                        style={{
                          width: 88,
                          height: 88,
                          objectFit: "cover",
                          borderRadius: "var(--radius)",
                          border: "1px solid var(--color-border)",
                          flexShrink: 0,
                        }}
                      />
                    )}
                    <div style={{ flex: 1, display: "flex", justifyContent: "space-between", gap: "1rem" }}>
                      <div>
                        <h3 style={{ fontSize: "1.1rem", fontFamily: "var(--font-body)", fontWeight: 600, margin: 0 }}>
                          {item.nome}
                        </h3>
                        <p style={{ fontSize: "0.9rem", margin: "0.25rem 0 0" }}>{item.desc}</p>
                      </div>
                      <div style={{ color: "var(--color-gold)", whiteSpace: "nowrap", fontVariantNumeric: "tabular-nums" }}>
                        R$ {item.preco}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
