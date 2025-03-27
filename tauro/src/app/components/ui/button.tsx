import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  asChild?: boolean;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "default" | "outline";
  onClick?: () => void;
  disabled?: boolean; 
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  children,
  className,
  asChild,
  href,
  variant = "primary",
  onClick,
  disabled, 
}: ButtonProps) {
  const variantClass =
    variant === "primary"
      ? "bg-lilac-600 hover:bg-lilac-700 text-white"
      : variant === "secondary"
      ? "bg-lilac-100 text-lilac-700"
      : "bg-transparent text-lilac-700 border border-lilac-700";

  if (asChild && href) {
    return (
      <Link href={href} passHref>
        <a className={`px-4 py-2 rounded-full font-semibold ${variantClass} ${className}`}>
          {children}
        </a>
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled} 
      className={`px-4 py-2 rounded-full font-semibold ${variantClass} ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`} 
    >
      {children}
    </button>
  );
}
