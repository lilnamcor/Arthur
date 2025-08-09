import { ReactNode } from "react";
import { componentUtils } from "@/lib/design-system";

interface IconContainerProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
  variant?: "default" | "hover" | "rounded-2xl";
}

const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-12 h-12", 
  lg: "w-16 h-16",
};

export function IconContainer({ children, size = "md", className = "", variant = "default" }: IconContainerProps) {
  const baseClasses = "flex items-center justify-center bg-burgundy/10 text-burgundy transition-colors duration-200";
  const roundedClasses = variant === "rounded-2xl" ? "rounded-2xl" : "rounded-xl";
  const hoverClasses = variant === "hover" ? "group-hover:bg-burgundy group-hover:text-white" : "";
  
  return (
    <div className={`${baseClasses} ${roundedClasses} ${hoverClasses} ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
}
