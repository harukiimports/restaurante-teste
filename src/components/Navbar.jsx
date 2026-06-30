import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Início" },
  { to: "/cardapio", label: "Cardápio" },
  { to: "/contato", label: "Localização" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        background: scrolled || menuOpen ? "rgba(12, 10, 9, 0.96)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(8px)" : "none",
        borderBottom: scrolled || menuOpen ? "1px solid var(--color-border)" : "1px solid transparent",
        transition: "background 250ms ease, border-color 250ms ease",
      }}
    >
      <nav
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.1rem 1.5rem",
        }}
      >
        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", letterSpacing: "0.04em" }}
        >
          Paulistão <span style={{ color: "var(--color-gold)" }}>de Ouro</span>
        </NavLink>

        <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              style={({ isActive }) => ({
                fontSize: "0.95rem",
                letterSpacing: "0.04em",
                color: isActive ? "var(--color-gold)" : "var(--color-text)",
                borderBottom: isActive ? "1px solid var(--color-gold)" : "1px solid transparent",
                paddingBottom: "2px",
              })}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <button
          className="nav-toggle"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          style={{
            display: "none",
            background: "transparent",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius)",
            width: 44,
            height: 44,
            color: "var(--color-text)",
            fontSize: "1.4rem",
          }}
        >
          {menuOpen ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M1 1 L17 17 M17 1 L1 17" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M1 4 H17 M1 9 H17 M1 14 H17" />
            </svg>
          )}
        </button>
      </nav>

      {menuOpen && (
        <div
          className="container"
          style={{ display: "flex", flexDirection: "column", padding: "0 1.5rem 1rem" }}
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setMenuOpen(false)}
              style={({ isActive }) => ({
                display: "flex",
                alignItems: "center",
                minHeight: 44,
                fontSize: "1.05rem",
                color: isActive ? "var(--color-gold)" : "var(--color-text)",
              })}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .nav-toggle { display: flex !important; align-items: center; justify-content: center; }
        }
      `}</style>
    </header>
  );
}
