import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Navigation.css";

export function Navigation() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [domainsOpen, setDomainsOpen] = useState(false);

  const domains = [
    "AI/ML",
    "Web Dev",
    "IoT",
    "Cybersecurity",
    "Data Science",
    "Blockchain",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container navbar-container">
        <div className="navbar-brand" onClick={() => navigate("/")}>
          <img src="/Logo.png" alt="ProjectHub Logo" className="logo-image" />
        </div>

        <div className="navbar-menu-desktop">
          <a onClick={() => navigate("/projects")}>PROJECTS</a>
          <div
            className="nav-dropdown-wrapper"
            onMouseEnter={() => setDomainsOpen(true)}
            onMouseLeave={() => setDomainsOpen(false)}
          >
            <a>DOMAINS ▾</a>
            {domainsOpen && (
              <div className="nav-dropdown">
                {domains.map((d) => (
                  <a key={d} onClick={() => navigate(`/projects?domain=${d}`)}>
                    {d}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a href="#stats">STATS</a>
          <a href="#testimonials">TESTIMONIALS</a>
        </div>

        <div className="navbar-search">
          <Search size={18} />
          <input type="text" placeholder="Search projects..." />
        </div>

        <button className="navbar-cta" onClick={() => navigate("/projects")}>
          Explore Free ↗
        </button>

        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="navbar-menu-mobile"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <a
                onClick={() => {
                  navigate("/projects");
                  setIsOpen(false);
                }}
              >
                PROJECTS
              </a>
              <a href="#domains" onClick={() => setIsOpen(false)}>
                DOMAINS
              </a>
              <a href="#stats" onClick={() => setIsOpen(false)}>
                STATS
              </a>
              <a href="#testimonials" onClick={() => setIsOpen(false)}>
                TESTIMONIALS
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
