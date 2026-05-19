import { motion } from "framer-motion";
import { useState } from "react";
import "./HowItWorks.css";

const steps = [
  {
    number: 1,
    title: "Browse Projects",
    description:
      "Explore 500+ curated FYP projects across 50+ domains. Filter by technology, difficulty, or domain to find what interests you.",
    icon: "01",
    highlights: ["50+ Domains", "500+ Projects", "Smart Filtering"],
  },
  {
    number: 2,
    title: "Get Resources",
    description:
      "Access complete kits with source code, documentation, datasets, and presentation templates for each project.",
    icon: "02",
    highlights: ["Source Code", "Documentation", "Templates"],
  },
  {
    number: 3,
    title: "Start Building",
    description:
      "Get started immediately with step-by-step guides, video tutorials, and community support to complete your FYP.",
    icon: "03",
    highlights: ["Step Guides", "Video Tutorials", "Community"],
  },
  {
    number: 4,
    title: "Submit & Succeed",
    description:
      "Present your project with professional presentation templates and documentation guides included in each kit.",
    icon: "04",
    highlights: ["Presentations", "Guidelines", "Support"],
  },
];

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="how-it-works">
      <motion.div
        className="how-it-works-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2> How It Works</h2>
        <p>Get from idea to completed FYP in 4 simple steps</p>
      </motion.div>

      <div className="how-it-works-container">
        {/* Sticky Panel */}
        <motion.div
          className="how-it-works-sticky"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="sticky-step-display">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="step-icon-large"
            >
              {steps[activeStep].icon}
            </motion.div>

            <motion.h3
              key={`title-${activeStep}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              Step {steps[activeStep].number}: {steps[activeStep].title}
            </motion.h3>

            <motion.p
              key={`desc-${activeStep}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
            >
              {steps[activeStep].description}
            </motion.p>

            <motion.div
              className="step-highlights"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {steps[activeStep].highlights.map((highlight, idx) => (
                <div key={idx} className="highlight-chip">
                  ✓ {highlight}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Steps Timeline */}
        <div className="how-it-works-steps">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className={`how-it-works-step ${activeStep === index ? "active" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setActiveStep(index)}
              onMouseEnter={() => setActiveStep(index)}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <motion.div
                  className="connector-line"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                />
              )}

              {/* Step Circle */}
              <motion.div
                className="step-circle"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="step-number">{step.number}</span>
              </motion.div>

              {/* Step Content */}
              <div className="step-content">
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>

              {/* Hover Action */}
              <motion.div
                className="step-action"
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
              >
                →
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        className="how-it-works-cta"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <h3>Ready to start your FYP journey?</h3>
        <motion.button
          className="how-it-works-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => (window.location.href = "/projects")}
        >
          Explore All Projects →
        </motion.button>
      </motion.div>
    </section>
  );
}
