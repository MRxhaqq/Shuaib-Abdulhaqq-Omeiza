import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Send,
  Mail,
  Github,
  Linkedin,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { personalInfo } from "../data";

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

const CONTACT_LINKS = [
  {
    label: "Email",
    value: "mrxhaqq@gmail.com",
    href: "mailto:mrxhaqq@gmail.com",
    icon: Mail,
    color: "#00ffff",
  },
  {
    label: "GitHub",
    value: "github.com/MRxhaqq",
    href: "https://github.com/MRxhaqq",
    icon: Github,
    color: "#ffffff",
  },
  {
    label: "LinkedIn",
    value: "Abdulhaqq Shuaib",
    href: "https://linkedin.com/in/abdulhaqq-shuaib-56769239b",
    icon: Linkedin,
    color: "#0a66c2",
  },
];

function Contact() {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errors, setErrors] = useState({});

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.from_name.trim()) newErrors.from_name = "Name is required";
    if (!formData.from_email.trim()) newErrors.from_email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.from_email))
      newErrors.from_email = "Enter a valid email address";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setStatus("sending");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setFormData({ from_name: "", from_email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  const inputStyle = (fieldName) => ({
    width: "100%",
    padding: "13px 16px",
    borderRadius: "12px",
    background: "var(--bg-card)",
    border: errors[fieldName]
      ? "1px solid rgba(239,68,68,0.6)"
      : "1px solid var(--border-color)",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "14px",
    color: "var(--text-primary)",
    outline: "none",
    transition: "all 0.2s ease",
    boxSizing: "border-box",
  });

  return (
    <section
      id="contact"
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
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "300px",
          background:
            "radial-gradient(ellipse, var(--accent-glow) 0%, transparent 70%)",
          opacity: 0.06,
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
          style={{ marginBottom: "72px", textAlign: "center" }}
        >
          <SectionLabel>contact</SectionLabel>
          <h2
            style={{
              fontFamily: "'Unbounded', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(28px, 4vw, 44px)",
              color: "var(--text-primary)",
              letterSpacing: "-0.5px",
              lineHeight: 1.1,
              margin: "0 0 16px",
              transition: "color 0.3s ease",
            }}
          >
            Let's build something
            <br />
            <span
              style={{
                color: "var(--accent)",
                textShadow: "0 0 30px var(--accent-glow)",
              }}
            >
              together.
            </span>
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "16px",
              color: "var(--text-muted)",
              maxWidth: "440px",
              margin: "0 auto",
              lineHeight: 1.7,
              transition: "color 0.3s ease",
            }}
          >
            Have a project in mind, a role to fill, or just want to say hello?
            My inbox is always open.
          </p>
        </motion.div>

        {/* Main grid — form + contact info */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "48px",
            alignItems: "start",
          }}
        >
          {/* Left — contact form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-color)",
              borderRadius: "20px",
              padding: "32px",
              transition: "background 0.3s ease",
            }}
          >
            {/* Success state */}
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: "center", padding: "40px 20px" }}
              >
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    background: "rgba(0,255,136,0.1)",
                    border: "1px solid rgba(0,255,136,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    color: "#00ff88",
                  }}
                >
                  <CheckCircle size={28} />
                </div>
                <h3
                  style={{
                    fontFamily: "'Unbounded', sans-serif",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "8px",
                  }}
                >
                  Message sent!
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "14px",
                    color: "var(--text-muted)",
                    lineHeight: 1.6,
                    marginBottom: "24px",
                  }}
                >
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
                <motion.button
                  onClick={() => setStatus("idle")}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    padding: "10px 24px",
                    borderRadius: "10px",
                    background: "var(--accent-dim)",
                    border: "1px solid var(--border-color)",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "var(--accent)",
                  }}
                >
                  Send another message
                </motion.button>
              </motion.div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                    color: "var(--accent)",
                    opacity: 0.6,
                    marginBottom: "4px",
                  }}
                >
                  // send a message
                </div>

                {/* Name field */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "var(--text-secondary)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "8px",
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.from_name}
                    onChange={(e) => updateField("from_name", e.target.value)}
                    placeholder="Your full name"
                    style={inputStyle("from_name")}
                    onFocus={(e) => {
                      e.target.style.borderColor = "var(--border-hover)";
                      e.target.style.boxShadow = "0 0 0 3px var(--accent-dim)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = errors.from_name
                        ? "rgba(239,68,68,0.6)"
                        : "var(--border-color)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                  {errors.from_name && (
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "12px",
                        color: "#ef4444",
                        marginTop: "6px",
                      }}
                    >
                      {errors.from_name}
                    </p>
                  )}
                </div>

                {/* Email field */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "var(--text-secondary)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "8px",
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.from_email}
                    onChange={(e) => updateField("from_email", e.target.value)}
                    placeholder="your@email.com"
                    style={inputStyle("from_email")}
                    onFocus={(e) => {
                      e.target.style.borderColor = "var(--border-hover)";
                      e.target.style.boxShadow = "0 0 0 3px var(--accent-dim)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = errors.from_email
                        ? "rgba(239,68,68,0.6)"
                        : "var(--border-color)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                  {errors.from_email && (
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "12px",
                        color: "#ef4444",
                        marginTop: "6px",
                      }}
                    >
                      {errors.from_email}
                    </p>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "var(--text-secondary)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "8px",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    placeholder="Tell me about your project, role, or just say hello..."
                    rows={5}
                    style={{
                      ...inputStyle("message"),
                      resize: "none",
                      lineHeight: 1.6,
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "var(--border-hover)";
                      e.target.style.boxShadow = "0 0 0 3px var(--accent-dim)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = errors.message
                        ? "rgba(239,68,68,0.6)"
                        : "var(--border-color)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                  {errors.message && (
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "12px",
                        color: "#ef4444",
                        marginTop: "6px",
                      }}
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Error banner */}
                {status === "error" && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "12px 16px",
                      borderRadius: "10px",
                      background: "rgba(239,68,68,0.08)",
                      border: "1px solid rgba(239,68,68,0.2)",
                      color: "#ef4444",
                    }}
                  >
                    <AlertCircle size={16} />
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "13px",
                      }}
                    >
                      Something went wrong. Please try again or email me
                      directly.
                    </span>
                  </div>
                )}

                {/* Submit button */}
                <motion.button
                  onClick={handleSubmit}
                  disabled={status === "sending"}
                  whileHover={
                    status !== "sending"
                      ? {
                          scale: 1.02,
                          boxShadow: "0 0 20px var(--accent-glow)",
                        }
                      : {}
                  }
                  whileTap={status !== "sending" ? { scale: 0.98 } : {}}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    padding: "14px",
                    borderRadius: "12px",
                    background:
                      status === "sending"
                        ? "var(--accent-dim)"
                        : "var(--accent)",
                    border: "none",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "14px",
                    fontWeight: 700,
                    color:
                      status === "sending"
                        ? "var(--accent)"
                        : "var(--bg-primary)",
                    opacity: status === "sending" ? 0.7 : 1,
                    transition: "all 0.2s ease",
                  }}
                >
                  {status === "sending" ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        style={{
                          width: "16px",
                          height: "16px",
                          border: "2px solid var(--accent)",
                          borderTopColor: "transparent",
                          borderRadius: "50%",
                        }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send message
                    </>
                  )}
                </motion.button>
              </div>
            )}
          </motion.div>

          {/* Right — contact info */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {/* Intro text */}
            <div style={{ marginBottom: "16px" }}>
              <h3
                style={{
                  fontFamily: "'Unbounded', sans-serif",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "12px",
                  transition: "color 0.3s ease",
                }}
              >
                Get in touch directly
              </h3>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  color: "var(--text-muted)",
                  lineHeight: 1.75,
                  transition: "color 0.3s ease",
                }}
              >
                Prefer a direct line? Reach me through any of the channels
                below. I typically respond within 24 hours.
              </p>
            </div>

            {/* Contact link cards */}
            {CONTACT_LINKS.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.label}
                  onClick={() =>
                    window.open(item.href, "_blank", "noopener,noreferrer")
                  }
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ x: 4, borderColor: `${item.color}40` }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "16px 20px",
                    borderRadius: "14px",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-color)",
                    textAlign: "left",
                    transition: "all 0.2s ease",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      background: `${item.color}10`,
                      border: `1px solid ${item.color}20`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: item.color,
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "var(--text-muted)",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        marginBottom: "2px",
                      }}
                    >
                      {item.label}
                    </p>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "var(--text-primary)",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {item.value}
                    </p>
                  </div>
                </motion.button>
              );
            })}

            {/* Availability note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              style={{
                marginTop: "8px",
                padding: "16px 20px",
                borderRadius: "14px",
                background: "rgba(0,255,136,0.04)",
                border: "1px solid rgba(0,255,136,0.15)",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#00ff88",
                    boxShadow: "0 0 8px #00ff88",
                    animation: "dotPulse 2s ease-in-out infinite",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#00ff88",
                      marginBottom: "2px",
                    }}
                  >
                    Currently available
                  </p>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "12px",
                      color: "rgba(0,255,136,0.6)",
                    }}
                  >
                    Open to full-time roles and freelance projects
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
