import React, { useState, useMemo } from "react";
import { allProjects, branches, sectors } from "../data/allProjects";
import "./ProjectsPage.css";

const ProjectsPage: React.FC = () => {
  const [filterType, setFilterType] = useState<"branch" | "sector">("branch");
  const [selectedBranch, setSelectedBranch] = useState<string>("AI/ML");
  const [selectedSector, setSelectedSector] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    let results = allProjects;

    if (filterType === "branch") {
      results = results.filter((p) => p.branch === selectedBranch);
    } else {
      if (selectedSector) {
        results = results.filter((p) => p.sector === selectedSector);
      }
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      results = results.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.techStack.some((tech) => tech.toLowerCase().includes(query)),
      );
    }

    return results;
  }, [filterType, selectedBranch, selectedSector, searchQuery]);

  const availableSectors = useMemo(() => {
    if (filterType === "branch") {
      return Array.from(
        new Set(
          allProjects
            .filter((p) => p.branch === selectedBranch)
            .map((p) => p.sector)
            .filter(Boolean),
        ),
      ) as string[];
    }
    return sectors;
  }, [filterType, selectedBranch]);

  return (
    <div className="projects-page">
      <div className="projects-header">
        <h1>Explore All Projects</h1>
        <p>Browse {allProjects.length}+ curated FYP ideas across domains</p>
      </div>

      <div className="filter-controls">
        <div className="filter-type-selector">
          <button
            className={`filter-btn ${filterType === "branch" ? "active" : ""}`}
            onClick={() => {
              setFilterType("branch");
              setSelectedSector(null);
            }}
          >
            Filter by Branch
          </button>
          <button
            className={`filter-btn ${filterType === "sector" ? "active" : ""}`}
            onClick={() => setFilterType("sector")}
          >
            Filter by Sector
          </button>
        </div>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search projects, tech stack..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="search-clear" onClick={() => setSearchQuery("")}>
              ✕
            </button>
          )}
        </div>

        <div className="filter-options">
          {filterType === "branch" ? (
            <div className="branch-filters">
              {branches.map((branch) => (
                <button
                  key={branch}
                  className={`filter-option ${
                    selectedBranch === branch ? "active" : ""
                  }`}
                  onClick={() => {
                    setSelectedBranch(branch);
                    setSelectedSector(null);
                  }}
                >
                  {branch}
                </button>
              ))}
            </div>
          ) : (
            <div className="sector-filters">
              <button
                className={`filter-option ${
                  selectedSector === null ? "active" : ""
                }`}
                onClick={() => setSelectedSector(null)}
              >
                All Sectors
              </button>
              {availableSectors.map((sector) => (
                <button
                  key={sector}
                  className={`filter-option ${
                    selectedSector === sector ? "active" : ""
                  }`}
                  onClick={() => setSelectedSector(sector)}
                >
                  {sector}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="results-info">
        Showing {filteredProjects.length} of {allProjects.length} projects
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <h3>{project.name}</h3>
              <div className="badges">
                <span className="badge difficulty">{project.difficulty}</span>
                {filterType === "branch" && project.sector && (
                  <span className="badge sector">{project.sector}</span>
                )}
                {filterType === "sector" && (
                  <span className="badge branch">{project.branch}</span>
                )}
              </div>
            </div>

            <p className="project-description">{project.description}</p>

            <div className="tech-stack">
              {project.techStack.slice(0, 4).map((tech, i) => (
                <span key={i} className="tech-pill">
                  {tech}
                </span>
              ))}
              {project.techStack.length > 4 && (
                <span className="tech-pill more">
                  +{project.techStack.length - 4}
                </span>
              )}
            </div>

            <div className="project-metrics">
              <div className="metric">
                <span className="label">Time</span>
                <span className="value">⏱️ {project.estimatedTime}</span>
              </div>
              <div className="metric">
                <span className="label">Rating</span>
                <span className="value">⭐ {project.rating}</span>
              </div>
              <div className="metric">
                <span className="label">Reviews</span>
                <span className="value">💬 {project.reviews}</span>
              </div>
            </div>

            <div className="project-footer">
              <span className="price">₹{project.price}</span>
              <button className="view-btn">View Details →</button>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="no-results">
          <p>No projects found matching your criteria.</p>
          <button onClick={() => setSearchQuery("")}>Clear filters</button>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
