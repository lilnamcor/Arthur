import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

const CTAButton = forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      primary: "bg-sepia text-white shadow-sm hover:bg-sepia/90 focus:ring-sepia",
      secondary: "bg-deep-gray text-off-white shadow-sm hover:bg-deep-gray/90 focus:ring-deep-gray",
      outline: "border border-deep-gray text-deep-gray shadow-sm hover:bg-deep-gray hover:text-off-white focus:ring-deep-gray",
    };
    
    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

CTAButton.displayName = "CTAButton";

export { CTAButton };
