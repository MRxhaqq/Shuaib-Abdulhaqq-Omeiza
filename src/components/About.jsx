import { motion } from "framer-motion";
import { GraduationCap, Code2, Lightbulb, Heart } from "lucide-react";
import { aboutText, differentiator } from "../data";

const STATS = [
  { value: "3+", label: "Projects built" },
  { value: "5+", label: "Technologies used" },
  { value: "100%", label: "Self-motivated" },
  { value: "∞", label: "Problems to solve" },
];

const HIGHLIGHTS = [
  {
    icon: GraduationCap,
    title: "CS Graduate",
    desc: "B.Sc. Computer Science — academic foundation meets self-taught drive.",
  },
  {
    icon: Code2,
    title: "Frontend focused",
    desc: "React, Tailwind CSS, and modern JavaScript are my daily tools.",
  },
  {
    icon: Lightbulb,
    title: "Always learning",
    desc: "The tech industry never stops — neither do I.",
  },
  {
    icon: Heart,
    title: "Detail obsessed",
    desc: "The micro-interactions that most developers skip are exactly what I focus on.",
  },
];

function SectionLabel({ children }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginBottom: "16px",
      }}
    >
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "11px",
          color: "var(--accent)",
          opacity: 0.6,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
        }}
      >
        // {children}
      </span>
      <div
        style={{
          flex: 1,
          height: "1px",
          background:
            "linear-gradient(90deg, var(--border-color), transparent)",
          maxWidth: "120px",
        }}
      />
    </div>
  );
}

function About() {
  return (
    <section
      id="about"
      style={{
        padding: "120px 24px",
        background: "var(--bg-primary)",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.3s ease",
      }}
    >
      {/* Subtle background glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "-100px",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
          opacity: 0.08,
          pointerEvents: "none",
          transform: "translateY(-50%)",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "72px" }}
        >
          <SectionLabel>about me</SectionLabel>
          <h2
            style={{
              fontFamily: "'Unbounded', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(28px, 4vw, 44px)",
              color: "var(--text-primary)",
              letterSpacing: "-0.5px",
              lineHeight: 1.1,
              margin: 0,
              transition: "color 0.3s ease",
            }}
          >
            The person behind
            <br />
            <span
              style={{
                color: "var(--accent)",
                textShadow: "0 0 30px var(--accent-glow)",
              }}
            >
              the code.
            </span>
          </h2>
        </motion.div>

        {/* Main grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "64px",
            alignItems: "start",
            marginBottom: "80px",
          }}
        >
          {/* Left — story */}
          <div>
            {aboutText.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "var(--text-secondary)",
                  lineHeight: 1.85,
                  marginBottom: "20px",
                  transition: "color 0.3s ease",
                }}
              >
                {para}
              </motion.p>
            ))}

            {/* Differentiator quote */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                borderLeft: "2px solid var(--accent)",
                paddingLeft: "20px",
                marginTop: "32px",
              }}
            >
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "15px",
                  fontStyle: "italic",
                  color: "var(--accent)",
                  opacity: 0.75,
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                "{differentiator.slice(0, 180)}..."
              </p>
            </motion.div>
          </div>

          {/* Right — highlight cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px",
            }}
          >
            {HIGHLIGHTS.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "14px",
                    padding: "20px",
                    transition: "all 0.2s ease",
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "10px",
                      background: "var(--accent-dim)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "12px",
                      color: "var(--accent)",
                    }}
                  >
                    <Icon size={16} />
                  </div>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "6px",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "12px",
                      color: "var(--text-muted)",
                      lineHeight: 1.6,
                      margin: 0,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "1px",
            background: "var(--border-color)",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid var(--border-color)",
          }}
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: "var(--bg-card)",
                padding: "32px 24px",
                textAlign: "center",
                transition: "background 0.3s ease",
              }}
            >
              <div
                style={{
                  fontFamily: "'Unbounded', sans-serif",
                  fontSize: "clamp(28px, 4vw, 40px)",
                  fontWeight: 800,
                  color: "var(--accent)",
                  textShadow: "0 0 20px var(--accent-glow)",
                  marginBottom: "8px",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  color: "var(--text-muted)",
                  fontWeight: 500,
                  transition: "color 0.3s ease",
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
