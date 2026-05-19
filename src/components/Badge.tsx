import "./Badge.css";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
}

export function Badge({
  children,
  variant = "primary",
  size = "md",
}: BadgeProps) {
  return (
    <span className={`badge badge-${variant} badge-${size}`}>{children}</span>
  );
}
