import { cn } from "@/lib/utils";
import Link from "next/link";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  href?: string;
}

export function Card({ className, href, children, ...props }: CardProps) {
  const cardContent = (
    <div
      className={cn(
        "modern-card bg-parchment border border-brown/20 shadow-sm hover:shadow-md transition-all duration-200 rounded-xl p-6 group",
        href && "cursor-pointer hover:shadow-lg",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );

  if (href) {
    // Check if it's an external link (mailto:, tel:, http://, https://)
    const isExternalLink = href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('http://') || href.startsWith('https://');
    
    if (isExternalLink) {
      return (
        <a href={href} className="block group">
          {cardContent}
        </a>
      );
    } else {
      return (
        <Link href={href} className="block group">
          {cardContent}
        </Link>
      );
    }
  }

  return cardContent;
}
