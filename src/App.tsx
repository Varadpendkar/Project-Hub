import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  Navigation,
  Hero,
  TechStack,
  ProjectsGrid,
  FeaturedProjects,
  HowItWorks,
  Stats,
  Testimonials,
  ComboOffers,
  ReferralSystem,
  StatsModal,
  ContactUs,
  Footer,
} from "./components";
import { ProjectDetailModal } from "./components/ProjectDetailModal";
import ProjectsPage from "./components/ProjectsPage";
import ProjectDetailPage from "./components/ProjectDetailPage";
import { projects } from "./data/projects";
import "./App.css";

function HomePage() {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null,
  );
  const [isStatsModalOpen, setIsStatsModalOpen] = useState(false);
  const selectedProject =
    projects.find((p) => p.id === selectedProjectId) || null;

  const handleViewDetails = (projectId: number) => {
    setSelectedProjectId(projectId);
  };

  const handleCloseModal = () => {
    setSelectedProjectId(null);
  };

  return (
    <>
      <Hero />
      <TechStack />
      <ProjectsGrid onViewDetails={handleViewDetails} />
      <FeaturedProjects onViewDetails={handleViewDetails} />
      <HowItWorks />
      <Stats />
      <Testimonials onOpenStatsModal={() => setIsStatsModalOpen(true)} />
      <ComboOffers />
      <ReferralSystem />
      <ContactUs />
      <ProjectDetailModal
        project={selectedProject}
        isOpen={selectedProjectId !== null}
        onClose={handleCloseModal}
      />
      <StatsModal
        isOpen={isStatsModalOpen}
        onClose={() => setIsStatsModalOpen(false)}
      />
    </>
  );
}

function App() {
  const navigate = useNavigate();
  return (
    <div className="app">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project/:projectId" element={<ProjectDetailPage />} />
        </Routes>
      </main>
      <div className="sticky-cta">
        <button onClick={() => navigate("/projects")}>
          Explore Projects — It's Free ↗
        </button>
      </div>
      <a
        href="https://wa.me/919699144334"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        <img src="/whatsapp.png" alt="WhatsApp" className="whatsapp-icon" />
      </a>
      <Footer />
    </div>
  );
}

export default App;
