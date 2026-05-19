import { motion } from "framer-motion";
import "./ComboOffers.css";

const combos = [
  {
    id: 1,
    title: "Project Only",
    icon: "📚",
    description: "Get access to curated project kits",
    includes: [
      "500+ Project Ideas",
      "Complete Source Code",
      "Documentation & Guides",
      "Project Templates",
    ],
    color: "blue",
  },
  {
    id: 2,
    title: "Internship Only",
    icon: "💼",
    description: "Land internship opportunities",
    includes: [
      "100+ Internship Listings",
      "Resume Builder",
      "Interview Prep",
      "Company Insights",
    ],
    color: "purple",
  },
  {
    id: 3,
    title: "Project + Internship",
    icon: "🎯",
    description: "Complete package for success",
    includes: [
      "Everything from both plans",
      "Priority Support",
      "Career Mentoring",
      "Portfolio Review",
    ],
    color: "green",
    popular: true,
  },
  {
    id: 4,
    title: "Ultimate Package",
    icon: "⭐",
    description: "All-in-one with profile building",
    includes: [
      "Everything above",
      "GitHub Profile Builder",
      "LinkedIn Optimization",
      "X (Twitter) Strategy",
      "Kaggle Portfolio Setup",
      "1-on-1 Coaching",
    ],
    color: "gold",
  },
];

export function ComboOffers() {
  return (
    <section className="combo-offers">
      <div className="container">
        <motion.div
          className="combo-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Choose Your Path to Success</h2>
          <p>Pick the perfect plan to accelerate your career</p>
        </motion.div>

        <div className="combo-grid">
          {combos.map((combo, idx) => (
            <motion.div
              key={combo.id}
              className={`combo-card ${combo.color} ${
                combo.popular ? "popular" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              {combo.popular && (
                <div className="popular-badge">MOST POPULAR</div>
              )}

              <div className="combo-icon">{combo.icon}</div>
              <h3>{combo.title}</h3>
              <p className="combo-description">{combo.description}</p>

              <ul className="combo-includes">
                {combo.includes.map((item, i) => (
                  <li key={i}>
                    <span className="checkmark">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <button className="combo-cta">Get Started</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
