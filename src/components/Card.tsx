import "./Card.css";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "glass" | "gradient";
  hover?: boolean;
  onClick?: () => void;
  className?: string;
  delay?: number;
}

export function Card({
  children,
  variant = "default",
  hover = true,
  onClick,
  className = "",
  delay = 0,
}: CardProps) {
  return (
    <motion.div
      className={`card card-${variant} ${className}`}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -8, transition: { duration: 0.3 } } : {}}
    >
      {children}
    </motion.div>
  );
}
