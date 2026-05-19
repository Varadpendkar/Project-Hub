import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left Section */}
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="floating-badge">
            <span className="dot-pulse">●</span>⭐ Trusted by 2,000+ students
          </div>

          <h1>
            Your last
            <br />
            project hunt
          </h1>

          <p>
            Stop Googling. Find, build, and submit your FYP in weeks — not
            months. Complete kits, code examples, and docs included.
          </p>

          <div className="hero-buttons">
            <button
              className="btn-primary"
              onClick={() => navigate("/projects")}
            >
              Explore Projects <span>↗</span>
            </button>
            <button className="btn-ghost">Browse Domains</button>
          </div>

          <div className="hero-tags">
            {[
              "AI Chatbot",
              "Smart Agriculture",
              "Blockchain Voting",
              "Health Monitoring",
              "Fake News Detector",
              "Stock Predictor",
              "Face Recognition",
              "Supply Chain",
            ].map((tag) => (
              <span key={tag} className="hero-tag">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right Section - Featured Card */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="hero-card"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="card-header">
              <span className="featured-badge">⭐ FEATURED</span>
              <span className="card-tag">AI/ML</span>
            </div>

            <h3>AI Chatbot RAG System</h3>
            <p className="card-description">
              Document upload + vector search + streaming LLM responses with
              conversation history
            </p>

            <div className="tech-pills">
              <span className="pill">Python</span>
              <span className="pill">FastAPI</span>
              <span className="pill">React</span>
              <span className="pill badge-dark">Advanced</span>
            </div>

            <div className="card-footer">
              <span className="duration">⏱ ~4 weeks</span>
              <button className="view-btn">View Kit →</button>
            </div>
          </motion.div>

          <div className="hero-card-small">
            <p className="trending-title">
              Screening alerts • Smart Agriculture • Fake News Detector
            </p>
            <p className="trending-sub">3 more trending projects this week</p>
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="hero-stats-section">
        <div className="stat-item">
          <div className="stat-num">500+</div>
          <div className="stat-label">Projects</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">50+</div>
          <div className="stat-label">Domains</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">100%</div>
          <div className="stat-label">Original</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">4.9★</div>
          <div className="stat-label">Rating</div>
        </div>
      </div>

      {/* Testimonial Card */}
      <div className="hero-testimonial">
        <p className="quote">
          "Found my project in 10 minutes. Submitted with full marks."
        </p>
        <div className="quote-author">
          <div className="avatar">RS</div>
          <div>
            <strong>Riya Shah</strong>
            <span>CSE Final Year, COEP</span>
          </div>
        </div>
      </div>
    </section>
  );
}
