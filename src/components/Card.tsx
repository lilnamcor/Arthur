import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
}

export function Card({ 
  children, 
  className, 
  as: Component = "div",
  ...props 
}: CardProps) {
  return (
    <Component
      className={cn(
        "bg-white rounded-lg shadow-md border border-deep-gray/10 p-6 hover:shadow-lg transition-shadow duration-200",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
