import { motion } from "framer-motion";
import "./TechStack.css";

const technologies = [
  { name: "React", icon: "⚛", color: "#61dafb" },
  { name: "Python", icon: "🐍", color: "#3776ab" },
  { name: "TensorFlow", icon: "𝚃𝙵", color: "#ff6f00" },
  { name: "Arduino", icon: "A", color: "#00979d" },
  { name: "Flutter", icon: "F", color: "#02569b" },
  { name: "Node.js", icon: "⬢", color: "#68a063" },
  { name: "PostgreSQL", icon: "🐘", color: "#336791" },
  { name: "AWS", icon: "◆", color: "#ff9900" },
  { name: "Docker", icon: "🐳", color: "#2496ed" },
  { name: "Blockchain", icon: "⛓", color: "#f7931a" },
];

export function TechStack() {
  return (
    <section className="tech-stack">
      <motion.div
        className="tech-stack-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>🛠️ Built With Modern Tech</h2>
        <p>Projects using cutting-edge technologies and frameworks</p>
      </motion.div>

      <div className="tech-stack-marquee-container">
        <motion.div
          className="tech-stack-marquee"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* First set */}
          {technologies.map((tech, index) => (
            <div
              key={`first-${index}`}
              className="tech-stack-item"
              style={{ borderColor: tech.color }}
            >
              <span className="tech-icon" style={{ color: tech.color }}>
                {tech.icon}
              </span>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {technologies.map((tech, index) => (
            <div
              key={`second-${index}`}
              className="tech-stack-item"
              style={{ borderColor: tech.color }}
            >
              <span className="tech-icon" style={{ color: tech.color }}>
                {tech.icon}
              </span>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="tech-stack-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p>⚡ Learn from projects using your favorite tech stack</p>
      </motion.div>
    </section>
  );
}
