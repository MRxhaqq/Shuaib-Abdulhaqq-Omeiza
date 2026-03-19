import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "../data";

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

const CATEGORY_COLORS = {
  language: { bar: "#00ffff", glow: "rgba(0,255,255,0.3)" },
  framework: { bar: "#00ff88", glow: "rgba(0,255,136,0.3)" },
  styling: { bar: "#818cf8", glow: "rgba(129,140,248,0.3)" },
  animation: { bar: "#fbbf24", glow: "rgba(251,191,36,0.3)" },
  library: { bar: "#f472b6", glow: "rgba(244,114,182,0.3)" },
  tool: { bar: "#34d399", glow: "rgba(52,211,153,0.3)" },
};

const TECH_STACK = [
  {
    name: "React",
    bg: "rgba(97,218,251,0.08)",
    color: "#61dafb",
    border: "rgba(97,218,251,0.2)",
  },
  {
    name: "JavaScript",
    bg: "rgba(247,223,30,0.08)",
    color: "#f7df1e",
    border: "rgba(247,223,30,0.2)",
  },
  {
    name: "HTML",
    bg: "rgba(228,77,38,0.08)",
    color: "#e34f26",
    border: "rgba(228,77,38,0.2)",
  },
  {
    name: "CSS",
    bg: "rgba(21,114,182,0.08)",
    color: "#1572b6",
    border: "rgba(21,114,182,0.2)",
  },
  {
    name: "Tailwind",
    bg: "rgba(6,182,212,0.08)",
    color: "#06b6d4",
    border: "rgba(6,182,212,0.2)",
  },
  {
    name: "Chakra UI",
    bg: "rgba(49,151,149,0.08)",
    color: "#319795",
    border: "rgba(49,151,149,0.2)",
  },
  {
    name: "Framer Motion",
    bg: "rgba(0,80,255,0.08)",
    color: "#0050ff",
    border: "rgba(0,80,255,0.2)",
  },
  {
    name: "Chart.js",
    bg: "rgba(255,99,132,0.08)",
    color: "#ff6384",
    border: "rgba(255,99,132,0.2)",
  },
  {
    name: "Git",
    bg: "rgba(240,80,50,0.08)",
    color: "#f05032",
    border: "rgba(240,80,50,0.2)",
  },
  {
    name: "GitHub",
    bg: "rgba(255,255,255,0.05)",
    color: "#ffffff",
    border: "rgba(255,255,255,0.12)",
  },
  {
    name: "Vite",
    bg: "rgba(100,108,255,0.08)",
    color: "#646cff",
    border: "rgba(100,108,255,0.2)",
  },
  {
    name: "VS Code",
    bg: "rgba(0,122,204,0.08)",
    color: "#007acc",
    border: "rgba(0,122,204,0.2)",
  },
];

function SkillBar({ skill, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const colors = CATEGORY_COLORS[skill.category] || CATEGORY_COLORS.tool;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{ marginBottom: "24px" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "8px",
        }}
      >
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "14px",
            fontWeight: 600,
            color: "var(--text-primary)",
            transition: "color 0.3s ease",
          }}
        >
          {skill.name}
        </span>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "11px",
            color: colors.bar,
          }}
        >
          {skill.level}%
        </span>
      </div>

      {/* Bar track */}
      <div
        style={{
          height: "4px",
          background: "var(--border-color)",
          borderRadius: "999px",
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{
            duration: 1.2,
            delay: index * 0.08 + 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{
            height: "100%",
            background: colors.bar,
            borderRadius: "999px",
            boxShadow: `0 0 8px ${colors.glow}`,
            position: "relative",
          }}
        >
          {/* Glowing tip */}
          <div
            style={{
              position: "absolute",
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: colors.bar,
              boxShadow: `0 0 8px ${colors.bar}, 0 0 16px ${colors.glow}`,
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "120px 24px",
        background: "var(--bg-secondary)",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.3s ease",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "-100px",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(0,255,136,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "72px" }}
        >
          <SectionLabel>skills</SectionLabel>
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
            What I build
            <br />
            <span
              style={{
                color: "var(--accent)",
                textShadow: "0 0 30px var(--accent-glow)",
              }}
            >
              with.
            </span>
          </h2>
        </motion.div>

        {/* Main grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "64px",
            marginBottom: "80px",
          }}
        >
          {/* Left — skill bars */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
                color: "var(--text-muted)",
                marginBottom: "32px",
                lineHeight: 1.6,
                transition: "color 0.3s ease",
              }}
            >
              Proficiency levels based on real project experience — not just
              tutorials.
            </motion.p>

            {skills.map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} index={i} />
            ))}
          </div>

          {/* Right — tech stack pills + currently learning */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
                color: "var(--text-muted)",
                marginBottom: "32px",
                lineHeight: 1.6,
                transition: "color 0.3s ease",
              }}
            >
              Technologies and tools I work with regularly.
            </motion.p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {TECH_STACK.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 14px",
                    borderRadius: "10px",
                    background: tech.bg,
                    border: `1px solid ${tech.border}`,
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: tech.color,
                    transition: "transform 0.15s ease",
                  }}
                >
                  <span
                    style={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      background: tech.color,
                      opacity: 0.8,
                    }}
                  />
                  {tech.name}
                </motion.div>
              ))}
            </div>

            {/* Currently learning */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                marginTop: "32px",
                padding: "20px",
                background: "var(--bg-card)",
                border: "1px solid var(--border-color)",
                borderRadius: "14px",
                transition: "background 0.3s ease",
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "10px",
                  color: "var(--accent)",
                  opacity: 0.5,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                // currently learning
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {["TypeScript", "Next.js", "Node.js"].map((item) => (
                  <span
                    key={item}
                    style={{
                      padding: "5px 12px",
                      borderRadius: "8px",
                      background: "var(--accent-dim)",
                      border: "1px dashed var(--border-color)",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "12px",
                      color: "var(--accent)",
                      opacity: 0.8,
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
