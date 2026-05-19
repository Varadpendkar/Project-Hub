import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <div className="footer-logo">
            <img
              src="/Logo.png"
              alt="ProjectHub Logo"
              className="footer-logo-image"
            />
          </div>
          <p className="footer-description">
            India's trusted marketplace for ready-made projects. Helping
            students build their portfolio and succeed in their careers.
          </p>
          <div className="footer-contact">
            <p>
              <span>📞</span> +91 7676409450
            </p>
            <p>
              <span>✉️</span> contact@projecthub.in
            </p>
          </div>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/projects">Browse Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#terms">Terms</a>
            </li>
            <li>
              <a href="#privacy">Privacy</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>PG Projects</h3>
          <ul>
            <li>
              <a href="/projects?branch=CS">MCA</a>
            </li>
            <li>
              <a href="/projects?branch=CS">MBA</a>
            </li>
            <li>
              <a href="/projects?branch=Data Science">M.Tech</a>
            </li>
            <li>
              <a href="/projects?branch=Data Science">Data Science</a>
            </li>
            <li>
              <a href="/projects?branch=AI/ML">Machine Learning</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>UG Projects</h3>
          <ul>
            <li>
              <a href="/projects?branch=CS">BCA</a>
            </li>
            <li>
              <a href="/projects?branch=CS">BBA</a>
            </li>
            <li>
              <a href="/projects?branch=CS">B.Tech</a>
            </li>
            <li>
              <a href="/projects?branch=CS">Web Dev</a>
            </li>
            <li>
              <a href="/projects?branch=CS">Computer Science</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Browse by Domain</h3>
          <ul>
            <li>
              <a href="/projects?branch=AI/ML">AI/ML</a>
            </li>
            <li>
              <a href="/projects?branch=Healthcare">Healthcare</a>
            </li>
            <li>
              <a href="/projects?branch=Finance">Finance</a>
            </li>
            <li>
              <a href="/projects?branch=IT">IT</a>
            </li>
            <li>
              <a href="/projects?branch=Data Science">Data Science</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 FYP Hub. All rights reserved.</p>
        <div className="footer-links">
          <a href="#terms">Terms</a>
          <a href="#privacy">Privacy</a>
          <a href="#shipping">Shipping</a>
        </div>
      </div>
    </footer>
  );
}
