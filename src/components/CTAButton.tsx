import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/lib/design-system";

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const CTAButton = forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const getVariantClasses = () => {
      switch (variant) {
        case "primary":
          return `${buttonVariants.primary.base} ${buttonVariants.primary.colors} ${buttonVariants.primary.sizes[size]}`;
        case "secondary":
          return `${buttonVariants.secondary.base} ${buttonVariants.secondary.colors} ${buttonVariants.secondary.sizes[size]}`;
        case "outline":
          return `${buttonVariants.outline.base} ${buttonVariants.outline.colors} ${buttonVariants.outline.sizes[size]}`;
        case "ghost":
          return `${buttonVariants.ghost.base} ${buttonVariants.ghost.colors} ${buttonVariants.ghost.sizes[size]}`;
        default:
          return `${buttonVariants.primary.base} ${buttonVariants.primary.colors} ${buttonVariants.primary.sizes[size]}`;
      }
    };

    return (
      <button
        className={cn(getVariantClasses(), "modern-button", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

CTAButton.displayName = "CTAButton";

export { CTAButton };
