import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  container?: boolean;
  as?: "section" | "div" | "article";
}

export function Section({ 
  children, 
  className, 
  container = true, 
  as: Component = "section",
  ...props 
}: SectionProps) {
  return (
    <Component
      className={cn(
        "py-16 sm:py-24",
        className
      )}
      {...props}
    >
      {container ? (
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {children}
        </div>
      ) : (
        children
      )}
    </Component>
  );
}
