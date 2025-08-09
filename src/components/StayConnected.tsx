import { Section } from "@/components/Section";
import { CTAButton } from "@/components/CTAButton";
import { componentUtils } from "@/lib/design-system";

interface StayConnectedProps {
  title?: string;
  description?: string;
  showNewsletter?: boolean;
  className?: string;
}

export function StayConnected({ 
  title = "Stay Connected",
  description = "Subscribe to receive updates about new blog posts, speaking events, and insights about second-generation trauma and healing.",
  showNewsletter = true,
  className = ""
}: StayConnectedProps) {
  return (
    <Section className={`${componentUtils.background.primary} ${className}`}>
      <div className="text-center">
        <h2 className={`text-3xl font-serif font-bold sm:text-4xl mb-4 ${componentUtils.text.primary}`}>
          {title}
        </h2>
        <p className={`text-lg max-w-4xl mx-auto mb-8 ${componentUtils.text.secondary}`}>
          {description}
        </p>
        
        {showNewsletter && (
          <div className="max-w-[500px] mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-brown/30 text-charcoal placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-transparent bg-parchment"
              />
              <CTAButton variant="primary" size="md">
                Subscribe
              </CTAButton>
            </div>
            <p className={`text-sm mt-2 ${componentUtils.text.light}`}>
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton variant="secondary" size="lg">
            View Events
          </CTAButton>
          <CTAButton variant="outline" size="lg">
            Get in Touch
          </CTAButton>
        </div>
      </div>
    </Section>
  );
}
