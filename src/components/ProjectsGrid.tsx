import { motion } from "framer-motion";
import { projects, domains } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import "./ProjectsGrid.css";
import { useState, useMemo } from "react";

interface ProjectsGridProps {
  onViewDetails?: (projectId: number) => void;
}

export function ProjectsGrid({ onViewDetails }: ProjectsGridProps) {
  const [selectedDomain, setSelectedDomain] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filtered = useMemo(() => {
    let results = projects;

    // Filter by domain
    if (selectedDomain !== "All") {
      results = results.filter((p) => p.domain === selectedDomain);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      results = results.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.author.toLowerCase().includes(query) ||
          p.techStack.some((tech) => tech.toLowerCase().includes(query)),
      );
    }

    return results;
  }, [selectedDomain, searchQuery]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <section className="projects-grid-section" id="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>Explore 500+ Projects</h2>
          <p>Browse projects across all domains and find your perfect FYP</p>
        </motion.div>

        {/* Search Bar */}
        <div className="search-bar-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search by name, tech stack, or author..."
            value={searchQuery}
            onChange={handleSearch}
          />
          {searchQuery && (
            <button
              className="search-clear-btn"
              onClick={handleClearSearch}
              title="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        {/* Sticky Domain Filter */}
        <div className="domain-filter-sticky" id="domains">
          <div className="domain-filter-content">
            {["All", ...domains].map((domain) => (
              <motion.button
                key={domain}
                className={`filter-btn ${selectedDomain === domain ? "active" : ""}`}
                onClick={() => setSelectedDomain(domain)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {domain}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Result Count */}
        <div className="results-info">
          Showing {filtered.length} of {projects.length} projects
        </div>

        <motion.div
          className="grid"
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {filtered.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onViewDetails={onViewDetails}
            />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <motion.div
            className="empty-state"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p>No projects found. Try adjusting your filters or search.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
