import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "../data/projects";
import { Card } from "./Card";
import { Badge } from "./Badge";
import "./FeaturedProjects.css";

interface FeaturedProjectsProps {
  onViewDetails?: (projectId: number) => void;
}

export function FeaturedProjects({ onViewDetails }: FeaturedProjectsProps) {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="featured-projects">
      <div className="featured-projects-header">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Handpicked premium projects with complete kits and resources
        </motion.p>
      </div>

      <div className="featured-projects-grid">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="featured-project-wrapper"
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <Card hover={true} className="featured-project-card">
              <div
                className={`featured-project-tilt ${hoveredId === project.id ? "tilted" : ""}`}
                style={{
                  transform:
                    hoveredId === project.id
                      ? `perspective(1000px) rotateX(5deg) rotateY(-5deg) scale(1.05)`
                      : "perspective(1000px) rotateX(0) rotateY(0) scale(1)",
                }}
              >
                {/* Project Icon Background */}
                <div className="featured-project-icon">
                  {["🤖", "🏥", "💰", "🌐"][index % 4]}
                </div>

                {/* Project Header */}
                <div className="featured-project-title-section">
                  <h3>{project.name}</h3>
                  <div className="featured-project-badges">
                    <Badge variant="primary">{project.domain}</Badge>
                    <Badge variant={getDifficultyVariant(project.difficulty)}>
                      {project.difficulty}
                    </Badge>
                    {project.hasKit && (
                      <Badge variant="success">✓ Complete Kit</Badge>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="featured-project-description">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="featured-project-stats">
                  <div className="stat">
                    <span className="stat-icon">⭐</span>
                    <span>{project.rating}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-icon">⏱️</span>
                    <span>{project.estimatedTime}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  className="featured-project-cta"
                  whileHover={{ x: 6 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onViewDetails?.(project.id)}
                >
                  Explore Project →
                </motion.button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function getDifficultyVariant(
  difficulty: string,
): "success" | "warning" | "danger" {
  switch (difficulty.toLowerCase()) {
    case "beginner":
      return "success";
    case "intermediate":
      return "warning";
    case "advanced":
      return "danger";
    default:
      return "warning";
  }
}
