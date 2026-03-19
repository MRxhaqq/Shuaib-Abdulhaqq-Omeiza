import { motion } from "framer-motion";
import Logo from "./Logo";

function Footer() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const NAV = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer
      style={{
        background: "var(--bg-primary)",
        borderTop: "1px solid var(--border-color)",
        padding: "40px 24px",
        transition: "background 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
            marginBottom: "28px",
          }}
        >
          {/* Logo + name */}
          <motion.button
            onClick={() => scrollTo("#hero")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "none",
              border: "none",
              padding: 0,
            }}
          >
            <Logo size={32} />
            <span
              style={{
                fontFamily: "'Unbounded', sans-serif",
                fontWeight: 700,
                fontSize: "13px",
                color: "var(--text-primary)",
                letterSpacing: "-0.3px",
                transition: "color 0.3s ease",
              }}
            >
              MRxHaqq<span style={{ color: "var(--accent)" }}>.</span>
            </span>
          </motion.button>

          {/* Nav links */}
          <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
            {NAV.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                style={{
                  background: "none",
                  border: "none",
                  padding: "6px 12px",
                  borderRadius: "8px",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "var(--text-muted)",
                  transition: "color 0.15s ease",
                }}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "var(--border-color)",
            marginBottom: "24px",
          }}
        />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          {/* Copyright */}
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "11px",
              color: "var(--text-muted)",
              transition: "color 0.3s ease",
            }}
          >
            © {new Date().getFullYear()} Shuaib Abdulhaqq Omeiza
          </p>

          {/* Built with */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "4px 12px",
                borderRadius: "999px",
                background: "var(--accent-dim)",
                border: "1px solid var(--border-color)",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
                color: "var(--accent)",
                opacity: 0.8,
              }}
            >
              <span
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: "var(--accent)",
                }}
              />
              Built with React + Tailwind
            </span>

            <button
              onClick={() =>
                window.open(
                  "https://github.com/MRxhaqq",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
              style={{
                background: "none",
                border: "none",
                padding: 0,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                color: "var(--text-muted)",
                transition: "color 0.15s ease",
              }}
            >
              GitHub
            </button>

            <button
              onClick={() =>
                window.open(
                  "https://linkedin.com/in/abdulhaqq-shuaib-56769239b",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
              style={{
                background: "none",
                border: "none",
                padding: 0,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                color: "var(--text-muted)",
                transition: "color 0.15s ease",
              }}
            >
              LinkedIn
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
