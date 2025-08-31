import { Metadata } from "next";
import { Section } from "@/components/Section";
import { CTAButton } from "@/components/CTAButton";
import { componentUtils } from "@/lib/design-system";

export const metadata: Metadata = {
  title: "Newsletter Sign Up | Arthur Myron Horwitz - Stay Connected",
  description: "Sign up for Arthur Myron Horwitz's newsletter to receive updates about his book, speaking events, and insights on second-generation Holocaust trauma and identity.",
  keywords: [
    "newsletter signup",
    "Arthur Myron Horwitz newsletter",
    "Holocaust survivor children updates",
    "second generation trauma updates",
    "book updates",
    "speaking events"
  ],
};

export default function NewsletterPage() {
  return (
    <main>
      <Section className={componentUtils.background.primary}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className={`text-4xl font-serif font-bold sm:text-5xl lg:text-6xl mb-6 ${componentUtils.text.primary}`}>
              Stay Connected
            </h1>
            <p className={`text-lg sm:text-xl mb-8 max-w-4xl mx-auto ${componentUtils.text.secondary}`}>
              Join my newsletter to receive updates about my book, upcoming speaking events, 
              and insights on second-generation Holocaust trauma and identity formation.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 border border-brown/20 max-w-4xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className={`block text-sm font-medium mb-2 ${componentUtils.text.primary}`}>
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-brown/20 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent transition-colors duration-200"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className={`block text-sm font-medium mb-2 ${componentUtils.text.primary}`}>
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-brown/20 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent transition-colors duration-200"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className={`block text-sm font-medium mb-2 ${componentUtils.text.primary}`}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-brown/20 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="interests" className={`block text-sm font-medium mb-2 ${componentUtils.text.primary}`}>
                  Areas of Interest
                </label>
                <select
                  id="interests"
                  name="interests"
                  className="w-full px-4 py-3 border border-brown/20 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent transition-colors duration-200"
                >
                  <option value="">Select your primary interest</option>
                  <option value="book-updates">Book updates and release information</option>
                  <option value="speaking-events">Speaking events and appearances</option>
                  <option value="second-generation">Second generation Holocaust trauma</option>
                  <option value="research">Research and academic insights</option>
                  <option value="general">General updates and news</option>
                </select>
              </div>
              
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  required
                  className="mt-1 h-4 w-4 text-burgundy focus:ring-burgundy border-brown/20 rounded"
                />
                <label htmlFor="consent" className={`ml-3 text-sm ${componentUtils.text.secondary}`}>
                  I agree to receive email updates from Arthur Myron Horwitz. I understand that I can unsubscribe at any time.
                </label>
              </div>
              
              <CTAButton type="submit" variant="primary" size="lg" className="w-full">
                Subscribe to Newsletter
              </CTAButton>
            </form>
            
            <p className={`text-xs mt-6 text-center ${componentUtils.text.secondary}`}>
              Your privacy is important to us. We will never share your email address with third parties.
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}
