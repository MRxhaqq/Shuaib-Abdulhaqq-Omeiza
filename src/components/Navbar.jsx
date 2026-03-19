import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    const onResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setMobileOpen(false);
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const navBg = scrolled
    ? isDark
      ? "rgba(5,5,8,0.88)"
      : "rgba(248,249,255,0.88)"
    : "transparent";

  const navBorder = scrolled
    ? isDark
      ? "1px solid rgba(0,255,255,0.08)"
      : "1px solid rgba(0,100,200,0.1)"
    : "1px solid transparent";

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: navBg,
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: navBorder,
          transition: "all 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 24px",
            height: "68px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <motion.button
            onClick={() => scrollTo("#hero")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "none",
              border: "none",
              padding: 0,
            }}
          >
            <Logo size={36} />
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

          {/* Desktop nav links — only on non-mobile */}
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.06 }}
                  whileHover={{ color: "var(--accent)" }}
                  style={{
                    background: "none",
                    border: "none",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "var(--text-secondary)",
                    transition: "color 0.15s ease",
                  }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          )}

          {/* Right controls */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {/* Theme toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "10px",
                background: "var(--accent-dim)",
                border: "1px solid var(--border-color)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--accent)",
              }}
            >
              {isDark ? <Sun size={15} /> : <Moon size={15} />}
            </motion.button>

            {/* Let's work — desktop only */}
            {!isMobile && (
              <motion.button
                onClick={() => scrollTo("#contact")}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 16px var(--accent-glow)",
                }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "9px 20px",
                  borderRadius: "10px",
                  background: "var(--accent-dim)",
                  border: "1px solid var(--border-color)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "var(--accent)",
                  transition: "all 0.2s ease",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#00ff88",
                    boxShadow: "0 0 6px #00ff88",
                    flexShrink: 0,
                  }}
                />
                Let's work
              </motion.button>
            )}

            {/* Hamburger — mobile only */}
            {isMobile && (
              <motion.button
                onClick={() => setMobileOpen(!mobileOpen)}
                whileTap={{ scale: 0.9 }}
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "10px",
                  background: "var(--accent-dim)",
                  border: "1px solid var(--border-color)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent)",
                }}
              >
                {mobileOpen ? <X size={16} /> : <Menu size={16} />}
              </motion.button>
            )}
          </div>
        </div>
      </motion.nav>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {mobileOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              top: "68px",
              left: 0,
              right: 0,
              zIndex: 99,
              background: isDark
                ? "rgba(5,5,8,0.97)"
                : "rgba(248,249,255,0.97)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid var(--border-color)",
              padding: "12px 16px 20px",
            }}
          >
            {/* Nav links */}
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  padding: "14px 16px",
                  borderRadius: "10px",
                  background: "none",
                  border: "none",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                  transition: "color 0.15s ease",
                }}
              >
                {link.label}
              </motion.button>
            ))}

            {/* Let's work CTA */}
            <motion.button
              onClick={() => scrollTo("#contact")}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                width: "100%",
                marginTop: "8px",
                padding: "14px",
                borderRadius: "10px",
                background: "var(--accent-dim)",
                border: "1px solid var(--border-color)",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                color: "var(--accent)",
                transition: "all 0.2s ease",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#00ff88",
                  boxShadow: "0 0 6px #00ff88",
                }}
              />
              Let's work
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
