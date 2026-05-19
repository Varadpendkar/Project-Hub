import { motion } from "framer-motion";
import { testimonials } from "../data/projects";
import "./Testimonials.css";

interface TestimonialsProps {
  onOpenStatsModal?: () => void;
}

export function Testimonials({ onOpenStatsModal }: TestimonialsProps) {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="testimonials-header"
        >
          <h2>What Students Say</h2>
          <p>Real stories from our community</p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onClick={onOpenStatsModal}
              role="button"
              tabIndex={0}
            >
              <div className="testimonial-content">
                <p className="testimonial-text">"{testimonial.content}"</p>
                <div className="testimonial-author">
                  <span className="testimonial-avatar">
                    {testimonial.avatar}
                  </span>
                  <div>
                    <div className="testimonial-name">{testimonial.name}</div>
                    <div className="testimonial-role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
