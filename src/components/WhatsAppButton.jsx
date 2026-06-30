import { restaurante } from "../data/restaurante";

export default function WhatsAppButton() {
  const href = `https://wa.me/${restaurante.whatsapp}?text=${encodeURIComponent(
    "Olá! Gostaria de fazer um pedido/reserva no Paulistão de Ouro."
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pedir pelo WhatsApp"
      style={{
        position: "fixed",
        right: "1.5rem",
        bottom: "1.5rem",
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 56,
        height: 56,
        borderRadius: "50%",
        background: "var(--color-gold)",
        color: "var(--color-bg)",
        boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
        transition: "transform 200ms var(--ease-out)",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.85.5 3.58 1.36 5.07L2 22l5.2-1.45a9.85 9.85 0 0 0 4.84 1.28h.01c5.46 0 9.91-4.45 9.91-9.91A9.86 9.86 0 0 0 12.04 2zm5.84 14.16c-.25.7-1.45 1.34-2 1.43-.51.08-1.15.11-1.86-.12a16.9 16.9 0 0 1-1.69-.62c-2.97-1.28-4.9-4.27-5.05-4.47-.15-.2-1.2-1.6-1.2-3.05 0-1.46.76-2.17 1.03-2.47.27-.3.6-.37.8-.37.2 0 .4 0 .57.01.18.01.43-.07.67.51.25.6.85 2.07.93 2.22.08.15.13.33.02.53-.1.2-.15.32-.3.5-.15.18-.32.4-.46.54-.15.15-.31.31-.13.61.18.3.8 1.31 1.71 2.12 1.18 1.05 2.17 1.38 2.47 1.53.3.15.48.13.65-.08.18-.2.76-.88.96-1.18.2-.3.4-.25.67-.15.27.1 1.74.82 2.04.97.3.15.5.23.57.35.08.13.08.74-.18 1.44z" />
      </svg>
    </a>
  );
}
