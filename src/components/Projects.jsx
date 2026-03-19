import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { projects } from "../data";

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

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border-color)",
        borderRadius: "20px",
        overflow: "hidden",
        transition: "border-color 0.2s ease, box-shadow 0.2s ease",
        boxShadow: hovered
          ? `0 0 0 1px ${project.color}30, 0 24px 48px rgba(0,0,0,0.3), 0 0 60px ${project.color}08`
          : "0 4px 24px rgba(0,0,0,0.1)",
        borderColor: hovered ? `${project.color}40` : "var(--border-color)",
      }}
    >
      {/* Project header — colored gradient banner */}
      <div
        style={{
          height: "180px",
          background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)`,
          borderBottom: `1px solid ${project.color}20`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Large project number — decorative */}
        <div
          style={{
            position: "absolute",
            right: "20px",
            bottom: "-10px",
            fontFamily: "'Unbounded', sans-serif",
            fontSize: "80px",
            fontWeight: 900,
            color: project.color,
            opacity: 0.06,
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          {project.number}
        </div>

        {/* Project title in banner */}
        <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "11px",
              color: project.color,
              opacity: 0.7,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "8px",
            }}
          >
            {project.subtitle}
          </div>
          <div
            style={{
              fontFamily: "'Unbounded', sans-serif",
              fontSize: "clamp(24px, 4vw, 36px)",
              fontWeight: 800,
              color: project.color,
              letterSpacing: "-0.5px",
              textShadow: `0 0 40px ${project.color}40`,
            }}
          >
            {project.title}
          </div>
        </div>

        {/* Hover glow overlay */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at center, ${project.color}08, transparent 70%)`,
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Project body */}
      <div style={{ padding: "24px" }}>
        {/* Description */}
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "14px",
            color: "var(--text-secondary)",
            lineHeight: 1.75,
            marginBottom: "20px",
            transition: "color 0.3s ease",
          }}
        >
          {project.description}
        </p>

        {/* Tech stack pills */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            marginBottom: "24px",
          }}
        >
          {project.tech.map((tech) => (
            <span
              key={tech}
              style={{
                padding: "4px 10px",
                borderRadius: "6px",
                background: `${project.color}10`,
                border: `1px solid ${project.color}25`,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                color: project.color,
                opacity: 0.9,
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div style={{ display: "flex", gap: "10px" }}>
          <motion.button
            onClick={() =>
              window.open(project.liveUrl, "_blank", "noopener,noreferrer")
            }
            whileHover={{
              scale: 1.03,
              boxShadow: `0 0 16px ${project.color}30`,
            }}
            whileTap={{ scale: 0.97 }}
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "11px 16px",
              borderRadius: "10px",
              background: `${project.color}15`,
              border: `1px solid ${project.color}30`,
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "13px",
              fontWeight: 600,
              color: project.color,
              transition: "all 0.2s ease",
            }}
          >
            <ExternalLink size={14} />
            Live demo
          </motion.button>

          <motion.button
            onClick={() =>
              window.open(project.githubUrl, "_blank", "noopener,noreferrer")
            }
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "11px 16px",
              borderRadius: "10px",
              background: "var(--accent-dim)",
              border: "1px solid var(--border-color)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "13px",
              fontWeight: 600,
              color: "var(--text-secondary)",
              transition: "all 0.2s ease",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            Code
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "120px 24px",
        background: "var(--bg-primary)",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.3s ease",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "-50px",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(0,255,255,0.03) 0%, transparent 70%)",
          pointerEvents: "none",
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
          <SectionLabel>projects</SectionLabel>
          <h2
            style={{
              fontFamily: "'Unbounded', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(28px, 4vw, 44px)",
              color: "var(--text-primary)",
              letterSpacing: "-0.5px",
              lineHeight: 1.1,
              margin: 0,
              marginBottom: "16px",
              transition: "color 0.3s ease",
            }}
          >
            Things I've
            <br />
            <span
              style={{
                color: "var(--accent)",
                textShadow: "0 0 30px var(--accent-glow)",
              }}
            >
              built.
            </span>
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "16px",
              color: "var(--text-muted)",
              maxWidth: "480px",
              lineHeight: 1.7,
              transition: "color 0.3s ease",
            }}
          >
            Real projects built from scratch — each one solving a genuine
            problem with clean code and thoughtful UI.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
            marginBottom: "64px",
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* More projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ textAlign: "center" }}
        >
          <motion.button
            onClick={() =>
              window.open(
                "https://github.com/MRxhaqq",
                "_blank",
                "noopener,noreferrer",
              )
            }
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 20px var(--accent-glow)",
            }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "13px 28px",
              borderRadius: "12px",
              background: "var(--accent-dim)",
              border: "1px solid var(--border-color)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              color: "var(--accent)",
              transition: "all 0.2s ease",
            }}
          >
            View all projects on GitHub
            <ArrowRight size={15} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
