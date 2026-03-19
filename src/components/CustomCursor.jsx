import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // The glowing dot follows the mouse exactly — no spring
  // Spring would make a simple dot look laggy not premium

  useEffect(() => {
    const onMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    const onOver = (e) => {
      const el = e.target;
      const clickable =
        el.tagName === "BUTTON" ||
        el.tagName === "A" ||
        el.closest("button") ||
        el.closest("a") ||
        window.getComputedStyle(el).cursor === "pointer";
      setHovering(!!clickable);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mouseenter", onEnter);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("pointerover", onOver);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("pointerover", onOver);
    };
  }, []);

  // Don't render on touch screens
  if (window.matchMedia("(pointer: coarse)").matches) return null;

  return (
    <motion.div
      style={{
        x: mouseX,
        y: mouseY,
        translateX: "-50%",
        translateY: "-50%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 99999,
        pointerEvents: "none",
      }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: clicking ? 0.6 : hovering ? 2 : 1,
      }}
      transition={{ scale: { duration: 0.12 }, opacity: { duration: 0.15 } }}
    >
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          background: "#00ffff",
          boxShadow: clicking
            ? "0 0 4px #00ffff, 0 0 8px #00ffff80"
            : hovering
              ? "0 0 12px #00ffff, 0 0 24px #00ffff80, 0 0 40px #00ffff40"
              : "0 0 8px #00ffff, 0 0 16px #00ffff60",
          animation: "dotPulse 2s ease-in-out infinite",
        }}
      />
    </motion.div>
  );
}

export default CustomCursor;
