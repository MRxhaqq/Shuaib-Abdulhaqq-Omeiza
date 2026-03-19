import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("loading");

  useEffect(() => {
    // Simulate progress filling over 2.8 seconds
    const duration = 2800;
    const interval = 30;
    const steps = duration / interval;
    const increment = 100 / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= 100) {
        setProgress(100);
        clearInterval(timer);
        // Short pause at 100% then fade out
        setTimeout(() => setPhase("done"), 400);
        setTimeout(() => onComplete(), 1000);
      } else {
        setProgress(Math.floor(current));
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          key="loading"
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            background: "var(--bg-primary)",
            zIndex: 99990,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {/* Scanlines overlay */}
          <div
            className="scanlines"
            style={{ position: "absolute", inset: 0, zIndex: 1 }}
          />

          {/* Corner brackets */}
          {[
            { top: 20, left: 20, borderTop: true, borderLeft: true },
            { top: 20, right: 20, borderTop: true, borderRight: true },
            { bottom: 20, left: 20, borderBottom: true, borderLeft: true },
            { bottom: 20, right: 20, borderBottom: true, borderRight: true },
          ].map((pos, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                width: 24,
                height: 24,
                ...pos,
                borderColor: "rgba(0,255,255,0.25)",
                borderStyle: "solid",
                borderWidth: 0,
                ...(pos.borderTop && { borderTopWidth: "1.5px" }),
                ...(pos.borderBottom && { borderBottomWidth: "1.5px" }),
                ...(pos.borderLeft && { borderLeftWidth: "1.5px" }),
                ...(pos.borderRight && { borderRightWidth: "1.5px" }),
                zIndex: 2,
              }}
            />
          ))}

          {/* Main content */}
          <div
            style={{
              position: "relative",
              zIndex: 3,
              textAlign: "center",
              padding: "0 24px",
            }}
          >
            {/* System label */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                color: "rgba(0,255,255,0.4)",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                marginBottom: "28px",
              }}
            >
              // portfolio_v1.0
            </motion.p>

            {/* Welcome message */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                fontFamily: "'Unbounded', sans-serif",
                fontSize: "clamp(28px, 6vw, 48px)",
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.1,
                marginBottom: "12px",
              }}
            >
              Welcome to
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.6,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                fontFamily: "'Unbounded', sans-serif",
                fontSize: "clamp(28px, 6vw, 48px)",
                fontWeight: 800,
                color: "#00ffff",
                lineHeight: 1.1,
                marginBottom: "32px",
                textShadow: "0 0 30px #00ffff40, 0 0 60px #00ffff20",
              }}
            >
              my website.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "clamp(11px, 2vw, 13px)",
                color: "rgba(0,255,255,0.5)",
                marginBottom: "40px",
                lineHeight: 1.7,
                maxWidth: "400px",
              }}
            >
              You're about to explore the work of a<br />
              frontend developer
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                _
              </motion.span>
            </motion.p>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              style={{ width: "240px", margin: "0 auto" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "10px",
                    color: "rgba(0,255,255,0.3)",
                    letterSpacing: "0.15em",
                  }}
                >
                  LOADING EXPERIENCE
                </span>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "10px",
                    color: "#00ffff",
                  }}
                >
                  {progress}%
                </span>
              </div>

              {/* Track */}
              <div
                style={{
                  width: "100%",
                  height: "2px",
                  background: "rgba(0,255,255,0.1)",
                  borderRadius: "999px",
                  overflow: "hidden",
                }}
              >
                {/* Fill */}
                <div
                  style={{
                    height: "100%",
                    width: `${progress}%`,
                    background: "linear-gradient(90deg, #00ffff, #00ff88)",
                    borderRadius: "999px",
                    transition: "width 0.03s linear",
                    boxShadow: "0 0 8px #00ffff80",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;
