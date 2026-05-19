import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import "./StatsModal.css";

interface StatsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function StatsModal({ isOpen, onClose }: StatsModalProps) {
  const stats = [
    {
      number: "500+",
      label: "Projects Available",
      details: "Handpicked from top institutions",
    },
    {
      number: "50+",
      label: "Domains Covered",
      details: "From AI to Web3 and beyond",
    },
    {
      number: "100%",
      label: "Original & Unique",
      details: "No plagiarism guaranteed",
    },
    {
      number: "4.9★",
      label: "Student Rating",
      details: "Trusted by 2000+ students",
    },
  ];

  const reviews = [
    {
      name: "Priya Kumar",
      role: "Computer Science Student",
      quote:
        "FYP Hub helped me choose the perfect project. Saved weeks of research!",
      rating: 5,
    },
    {
      name: "Arjun Singh",
      role: "IT Student",
      quote:
        "Incredibly detailed AI/ML projects. Built a complete chatbot using FYP resources.",
      rating: 5,
    },
    {
      name: "Neha Patel",
      role: "Engineering Student",
      quote:
        "Complete project kits with code, docs, and templates made FYP smooth and successful.",
      rating: 5,
    },
    {
      name: "Rahul Verma",
      role: "CS Grad",
      quote:
        "Got an A+ with the healthcare project. Structure and guidance invaluable!",
      rating: 5,
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="stats-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="stats-modal"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="stats-modal-header">
              <h2>Project Hub by The Numbers</h2>
              <button className="close-button" onClick={onClose}>
                <X size={24} />
              </button>
            </div>

            <div className="stats-modal-content">
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="stats-modal-card"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="stats-number">{stat.number}</div>
                    <div className="stats-label">{stat.label}</div>
                    <div className="stats-details">{stat.details}</div>
                  </motion.div>
                ))}
              </div>

              <div className="reviews-section">
                <h3>What Students Say</h3>
                <div className="reviews-grid">
                  {reviews.map((review, index) => (
                    <motion.div
                      key={index}
                      className="review-card"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <div className="review-rating">
                        {"★".repeat(review.rating)}
                      </div>
                      <p className="review-quote">"{review.quote}"</p>
                      <div className="review-author">
                        <strong>{review.name}</strong>
                        <p>{review.role}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
