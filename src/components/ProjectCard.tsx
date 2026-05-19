import { motion } from "framer-motion";
import { useState } from "react";
import { Project } from "../data/projects";
import { Badge } from "./Badge";
import "./ProjectCard.css";

interface ProjectCardProps {
  project: Project;
  index?: number;
  onViewDetails?: (projectId: number) => void;
}

export function ProjectCard({
  project,
  index = 0,
  onViewDetails,
}: ProjectCardProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarkToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsBookmarked(!isBookmarked);
  };

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <div className="project-header">
        <div className="project-title-section">
          <h3 className="project-title">{project.name}</h3>
          {project.hasKit && <Badge variant="success">Complete Kit</Badge>}
        </div>
        <button
          className={`bookmark-btn ${isBookmarked ? "active" : ""}`}
          onClick={handleBookmarkToggle}
          title="Save project"
        >
          ♡
        </button>
      </div>

      <p className="project-description">{project.description}</p>

      {project.techStack && project.techStack.length > 0 && (
        <div className="tech-stack">
          {project.techStack.map((tech, i) => (
            <span key={i} className="tech-pill">
              {tech}
            </span>
          ))}
        </div>
      )}

      <div className="project-metrics">
        <div className="metric">
          <span className="metric-label">Time:</span>
          <span className="metric-value">{project.estimatedTime}</span>
        </div>
        <div className="metric">
          <span className="metric-label">Rating:</span>
          <span className="metric-value">★ {project.rating}</span>
        </div>
        <div className="metric">
          <span className="metric-label">Reviews:</span>
          <span className="metric-value">{project.reviews}</span>
        </div>
      </div>

      <div className="project-footer">
        <div className="project-tags">
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
        </div>
        <button
          className="project-cta"
          onClick={() => onViewDetails?.(project.id)}
        >
          View Project →
        </button>
      </div>
    </motion.div>
  );
}
