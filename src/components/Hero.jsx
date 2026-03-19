import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { personalInfo } from "../data";
import { useTheme } from "../context/ThemeContext";

function useTyping(text, speed = 40, delay = 1200) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    let timeout;
    const start = setTimeout(() => {
      const type = () => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
          timeout = setTimeout(type, speed);
        } else {
          setDone(true);
        }
      };
      type();
    }, delay);
    return () => {
      clearTimeout(start);
      clearTimeout(timeout);
    };
  }, [text]);

  return { displayed, done };
}

function TerminalAvatar() {
  const { isDark } = useTheme();

  const lines = [
    { delay: 0.6, prompt: true, text: "whoami", color: "var(--text-primary)" },
    {
      delay: 0.9,
      prompt: false,
      text: "Shuaib Abdulhaqq Omeiza",
      color: "#00ff88",
    },
    {
      delay: 1.3,
      prompt: true,
      text: "cat role.txt",
      color: "var(--text-primary)",
    },
    {
      delay: 1.6,
      prompt: false,
      text: "Frontend Developer · CS Graduate",
      color: "var(--accent)",
    },
    {
      delay: 2.0,
      prompt: true,
      text: "cat stack.json",
      color: "var(--text-primary)",
    },
    {
      delay: 2.3,
      prompt: false,
      text: "React · Tailwind · Framer Motion",
      color: "#ffd700",
    },
    {
      delay: 2.6,
      prompt: true,
      text: "echo $status",
      color: "var(--text-primary)",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      style={{ width: "100%", maxWidth: "380px" }}
    >
      <div
        style={{
          background: "var(--terminal-bg)",
          border: "1px solid var(--border-color)",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: isDark
            ? "0 0 0 1px rgba(0,255,255,0.04), 0 24px 48px rgba(0,0,0,0.6), 0 0 60px rgba(0,255,255,0.04)"
            : "0 4px 32px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,100,200,0.06)",
        }}
      >
        {/* Terminal title bar */}
        <div
          style={{
            background: isDark ? "#0d0d1a" : "#1e1e2e",
            borderBottom: "1px solid var(--border-color)",
            padding: "12px 16px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div style={{ display: "flex", gap: "6px" }}>
            {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
              <div
                key={i}
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: c,
                }}
              />
            ))}
          </div>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "11px",
              color: "rgba(0,255,255,0.35)",
              marginLeft: "8px",
            }}
          >
            shuaib@portfolio ~
          </span>
        </div>

        {/* Terminal body */}
        <div
          style={{
            padding: "20px",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "13px",
            lineHeight: "1.9",
            minHeight: "220px",
          }}
        >
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: line.delay, duration: 0.3 }}
              style={{ color: line.color }}
            >
              {line.prompt && (
                <span
                  style={{ color: "rgba(0,255,255,0.5)", marginRight: "8px" }}
                >
                  $
                </span>
              )}
              {!line.prompt && <span style={{ paddingLeft: "16px" }} />}
              {line.text}
            </motion.div>
          ))}

          {/* Status with blinking cursor */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.0 }}
            style={{
              paddingLeft: "16px",
              color: "#00ff88",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            ✓ Open to work
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.9, repeat: Infinity }}
              style={{
                display: "inline-block",
                width: "8px",
                height: "15px",
                background: "var(--accent)",
                borderRadius: "1px",
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Badge below terminal */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.2 }}
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "16px",
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "var(--accent-dim)",
            border: "1px solid var(--border-color)",
            borderRadius: "999px",
            padding: "6px 16px",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "11px",
            color: "var(--accent)",
            opacity: 0.8,
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#008751",
              boxShadow: "0 0 6px #00875180",
            }}
          />
          Self-taught · CS Degree · Nigeria 🇳🇬
        </span>
      </motion.div>
    </motion.div>
  );
}

function Hero() {
  const { displayed, done } = useTyping(personalInfo.tagline, 38, 1000);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background: "var(--bg-primary)",
        paddingTop: "68px",
        transition: "background 0.3s ease",
      }}
    >
      {/* Background glow blobs */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
          opacity: 0.15,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "10%",
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle, rgba(0,255,136,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "60px 24px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "64px",
          alignItems: "center",
        }}
      >
        {/* Left — text content */}
        <div>
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(0,255,136,0.06)",
              border: "1px solid rgba(0,255,136,0.2)",
              borderRadius: "999px",
              padding: "6px 16px",
              marginBottom: "28px",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "#00ff88",
                boxShadow: "0 0 8px #00ff88",
                animation: "dotPulse 2s ease-in-out infinite",
              }}
            />
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "12px",
                fontWeight: 600,
                color: "#00ff88",
              }}
            >
              Available for work
            </span>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "12px",
                color: "var(--accent)",
                opacity: 0.6,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              // Hi, I'm
            </p>
            <h1
              style={{
                fontFamily: "'Unbounded', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(38px, 6vw, 68px)",
                lineHeight: 1.0,
                letterSpacing: "-1px",
                margin: 0,
                marginBottom: "4px",
                color: "var(--text-primary)",
                transition: "color 0.3s ease",
              }}
            >
              Shuaib
            </h1>
            <h1
              style={{
                fontFamily: "'Unbounded', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(38px, 6vw, 68px)",
                lineHeight: 1.0,
                letterSpacing: "-1px",
                margin: 0,
                marginBottom: "28px",
                color: "var(--accent)",
                textShadow: "0 0 40px var(--accent-glow)",
              }}
            >
              Abdulhaqq.
            </h1>
          </motion.div>

          {/* Typing tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(15px, 2vw, 18px)",
              fontWeight: 400,
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              marginBottom: "36px",
              minHeight: "54px",
              transition: "color 0.3s ease",
            }}
          >
            {displayed}
            {!done && (
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.7, repeat: Infinity }}
                style={{
                  display: "inline-block",
                  width: "2px",
                  height: "18px",
                  background: "var(--accent)",
                  marginLeft: "2px",
                  verticalAlign: "middle",
                  borderRadius: "1px",
                }}
              />
            )}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              marginBottom: "40px",
            }}
          >
            <motion.button
              onClick={() =>
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 24px var(--accent-glow)",
              }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: "13px 28px",
                borderRadius: "10px",
                background: "var(--accent)",
                border: "none",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
                fontWeight: 700,
                color: "var(--bg-primary)",
                transition: "all 0.2s ease",
              }}
            >
              View my work
            </motion.button>

            <motion.button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: "13px 28px",
                borderRadius: "10px",
                background: "transparent",
                border: "1px solid var(--border-color)",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                color: "var(--text-secondary)",
                transition: "all 0.2s ease",
              }}
            >
              Get in touch
            </motion.button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            style={{ display: "flex", alignItems: "center", gap: "16px" }}
          >
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
                color: "var(--text-muted)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Find me
            </span>

            {[
              {
                label: "GitHub",
                href: personalInfo.github,
                svg: (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                ),
              },
              {
                label: "LinkedIn",
                href: personalInfo.linkedin,
                svg: (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ),
              },
            ].map((social) => (
              <motion.button
                key={social.label}
                onClick={() =>
                  window.open(social.href, "_blank", "noopener,noreferrer")
                }
                whileHover={{ scale: 1.1, color: "var(--accent)" }}
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
                  color: "var(--text-muted)",
                  transition: "all 0.15s ease",
                }}
              >
                {social.svg}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Right — terminal avatar */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <TerminalAvatar />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          color: "var(--text-muted)",
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "10px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
