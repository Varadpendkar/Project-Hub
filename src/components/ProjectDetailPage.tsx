import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { allProjects } from "../data/allProjects";
import "./ProjectDetailPage.css";

const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const project = allProjects.find((p) => p.id === parseInt(projectId || "0"));

  if (!project) {
    return (
      <div className="detail-404">
        <h1>Project Not Found</h1>
        <button onClick={() => navigate("/projects")}>Back to Projects</button>
      </div>
    );
  }

  const relatedProjects = allProjects
    .filter((p) => p.branch === project.branch && p.id !== project.id)
    .slice(0, 3);

  const handleAddToCart = () => {
    const cartItem = {
      id: project.id,
      name: project.name,
      price: project.price,
      selectedOptions,
    };
    console.log("Added to cart:", cartItem);
    alert(`Added ${project.name} to cart!`);
  };

  return (
    <div className="project-detail-page">
      <div className="detail-container">
        <div className="detail-breadcrumb">
          <button onClick={() => navigate("/projects")}>Projects</button>
          <span>/</span>
          <span>{project.branch}</span>
          <span>/</span>
          <span>{project.name}</span>
        </div>

        <div className="detail-layout">
          <div className="detail-images">
            <div className="main-image">
              <div className="image-placeholder">
                <div className="image-icon">📊</div>
                <p>{project.name}</p>
              </div>
            </div>
            <div className="thumbnail-images">
              <div className="thumbnail">
                <div className="image-placeholder small">📱</div>
              </div>
              <div className="thumbnail">
                <div className="image-placeholder small">🛠️</div>
              </div>
              <div className="thumbnail">
                <div className="image-placeholder small">⚙️</div>
              </div>
            </div>
          </div>

          <div className="detail-info">
            <div className="detail-header">
              <h1>{project.name}</h1>
              <div className="badges-section">
                <span className="badge-tag difficulty">
                  {project.difficulty}
                </span>
                <span className="badge-tag branch">{project.branch}</span>
                {project.sector && (
                  <span className="badge-tag sector">{project.sector}</span>
                )}
                {project.hasKit && (
                  <span className="badge-tag kit">✓ COMPLETE KIT</span>
                )}
              </div>
            </div>

            <div className="detail-metadata">
              <div className="meta-item">
                <span className="label">Author</span>
                <span className="value">By {project.author}</span>
              </div>
              <div className="meta-item">
                <span className="label">Duration</span>
                <span className="value">⏱️ {project.estimatedTime}</span>
              </div>
              <div className="meta-item">
                <span className="label">Rating</span>
                <span className="value">
                  ⭐ {project.rating} ({project.reviews} reviews)
                </span>
              </div>
            </div>

            <div className="detail-price-section">
              <div className="price-display">
                <span className="currency">₹</span>
                <span className="amount">{project.price}</span>
              </div>
              <div className="delivery-badge">
                ⚡ Delivery: {project.deliveryDays} Day
              </div>
            </div>

            <div className="additional-options">
              <h3>Additional Options</h3>
              <div className="option-item">
                <input
                  type="checkbox"
                  id="installation"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedOptions([...selectedOptions, "installation"]);
                    } else {
                      setSelectedOptions(
                        selectedOptions.filter((o) => o !== "installation"),
                      );
                    }
                  }}
                />
                <label htmlFor="installation">Installation Support</label>
                <span className="option-price">₹800</span>
              </div>
              <div className="option-item">
                <input
                  type="checkbox"
                  id="support"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedOptions([...selectedOptions, "support"]);
                    } else {
                      setSelectedOptions(
                        selectedOptions.filter((o) => o !== "support"),
                      );
                    }
                  }}
                />
                <label htmlFor="support">Extended Support (3 months)</label>
                <span className="option-price">₹500</span>
              </div>
              <p className="option-note">
                ⚠ Select additional options during checkout
              </p>
            </div>

            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              Add To Cart
            </button>

            <div className="action-buttons">
              <button className="help-btn">
                <span>❓</span> Need Help
              </button>
              <button className="share-btn">
                <span>↗</span> Share
              </button>
            </div>
          </div>
        </div>

        <div className="detail-sections">
          <section className="detail-section">
            <h2>Project Overview</h2>
            <p>{project.abstract || project.description}</p>
          </section>

          <section className="detail-section">
            <h2>Technology Stack</h2>
            <div className="tech-stack-detailed">
              {project.techStack.map((tech, i) => (
                <span key={i} className="tech-item-large">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {project.modules && project.modules.length > 0 && (
            <section className="detail-section">
              <h2>System Architecture & Modules</h2>
              <div className="modules-grid">
                {project.modules.map((module, i) => (
                  <div key={i} className="module-item-detailed">
                    <div className="module-number">{i + 1}</div>
                    <div>
                      <h4>{module}</h4>
                      <p>Core module for {project.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.requirements && project.requirements.length > 0 && (
            <section className="detail-section">
              <h2>System Requirements</h2>
              <div className="requirements-list">
                {project.requirements.map((req, i) => (
                  <div key={i} className="requirement-item-detailed">
                    <span className="check-mark">✓</span>
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {relatedProjects.length > 0 && (
            <section className="detail-section">
              <h2>Related Projects</h2>
              <div className="related-projects-grid">
                {relatedProjects.map((related) => (
                  <div
                    key={related.id}
                    className="related-project-card"
                    onClick={() => navigate(`/project/${related.id}`)}
                  >
                    <div className="related-image">
                      <div className="image-placeholder small">📦</div>
                    </div>
                    <h4>{related.name}</h4>
                    <p className="related-branch">{related.branch}</p>
                    <p className="related-price">₹{related.price}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="detail-footer-actions">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link-btn"
          >
            🔗 View on GitHub
          </a>
          <button className="download-guide-btn">📥 Download Guide</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
