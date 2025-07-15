import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={`inline-block text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full ${className}`}
    >
      {children}
    </span>
  );
}
