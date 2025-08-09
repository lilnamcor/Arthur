import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "modern-card bg-parchment border border-brown/20 shadow-sm hover:shadow-md transition-all duration-200 rounded-xl p-6 group",
        className
      )}
      {...props}
    />
  );
}
