import { motion, AnimatePresence } from "framer-motion";
import { Project, projects } from "../data/projects";
import { Badge } from "./Badge";
import "./ProjectDetailModal.css";

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDetailModal({
  project,
  isOpen,
  onClose,
}: ProjectDetailModalProps) {
  if (!project) return null;

  // Find related projects by domain (exclude current)
  const relatedProjects = projects
    .filter((p) => p.domain === project.domain && p.id !== project.id)
    .slice(0, 3);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            role="presentation"
          />

          {/* Modal */}
          <motion.div
            className="project-detail-modal"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="modal-header">
              <div className="header-content">
                <div className="header-badges">
                  <Badge variant="primary">{project.domain}</Badge>
                  <Badge
                    variant={
                      project.difficulty === "Beginner"
                        ? "success"
                        : project.difficulty === "Intermediate"
                          ? "warning"
                          : "danger"
                    }
                  >
                    {project.difficulty}
                  </Badge>
                  {project.hasKit && (
                    <Badge variant="success">Complete Kit</Badge>
                  )}
                </div>
                <h1 className="modal-title">{project.name}</h1>
                <p className="modal-subtitle">
                  By <strong>{project.author}</strong>
                </p>
              </div>
              <button
                className="modal-close-btn"
                onClick={onClose}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="modal-content">
              {/* Key Metrics */}
              <section className="modal-section">
                <h2 className="section-title">Overview</h2>
                <div className="metrics-grid">
                  <div className="metric-card">
                    <span className="metric-icon">⏱️</span>
                    <span className="metric-label">Duration</span>
                    <span className="metric-val">
                      {project.durationWeeks || project.estimatedTime}
                    </span>
                  </div>
                  <div className="metric-card">
                    <span className="metric-icon">⭐</span>
                    <span className="metric-label">Rating</span>
                    <span className="metric-val">{project.rating}</span>
                  </div>
                  <div className="metric-card">
                    <span className="metric-icon">💬</span>
                    <span className="metric-label">Reviews</span>
                    <span className="metric-val">{project.reviews}</span>
                  </div>
                  <div className="metric-card">
                    <span className="metric-icon">📥</span>
                    <span className="metric-label">Downloads</span>
                    <span className="metric-val">{project.downloads}</span>
                  </div>
                </div>
              </section>

              {/* Description */}
              <section className="modal-section">
                <h2 className="section-title">About This Project</h2>
                <p className="modal-description">
                  {project.abstract || project.description}
                </p>
              </section>

              {/* Tech Stack */}
              {project.techStack && project.techStack.length > 0 && (
                <section className="modal-section">
                  <h2 className="section-title">Technology Stack</h2>
                  <div className="tech-stack-detailed">
                    {project.techStack.map((tech, i) => (
                      <div key={i} className="tech-item">
                        <span className="tech-badge">{tech}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Modules */}
              {project.modules && project.modules.length > 0 && (
                <section className="modal-section">
                  <h2 className="section-title">System Architecture</h2>
                  <div className="modules-list">
                    {project.modules.map((module, i) => (
                      <div key={i} className="module-item">
                        <span className="module-number">{i + 1}</span>
                        <span className="module-name">{module}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Requirements */}
              {project.requirements && project.requirements.length > 0 && (
                <section className="modal-section">
                  <h2 className="section-title">Requirements</h2>
                  <div className="requirements-list">
                    {project.requirements.map((req, i) => (
                      <div key={i} className="requirement-item">
                        <span className="check-icon">✓</span>
                        <span className="requirement-text">{req}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Related Projects */}
              {relatedProjects.length > 0 && (
                <section className="modal-section">
                  <h2 className="section-title">Related Projects</h2>
                  <div className="related-projects">
                    {relatedProjects.map((rel) => (
                      <div key={rel.id} className="related-project-card">
                        <h4>{rel.name}</h4>
                        <p>{rel.description}</p>
                        <div className="related-badges">
                          <Badge variant="primary">{rel.domain}</Badge>
                          <span className="rating">★ {rel.rating}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Footer Actions */}
            <div className="modal-footer">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-btn github-btn"
                >
                  View on GitHub →
                </a>
              )}
              <button className="action-btn download-btn">
                Download Guide
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
