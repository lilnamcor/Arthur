"use client";

import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { CTAButton } from "@/components/CTAButton";
import { IconContainer } from "@/components/IconContainer";
import { componentUtils } from "@/lib/design-system";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main>
      {/* Hero Section */}
      <Section className={componentUtils.background.accent}>
        <div className="text-center">
          <h1 className={`text-4xl font-serif font-bold sm:text-6xl mb-6 ${componentUtils.text.primary}`}>
            Get in Touch
          </h1>
          <p className={`text-xl max-w-6xl mx-auto ${componentUtils.text.secondary}`}>
            Connect with Arthur for speaking engagements, interviews, media inquiries, or to share your own story of second-generation trauma and identity.
          </p>
        </div>
      </Section>

      {/* Contact Form */}
      <Section className={componentUtils.background.primary}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className={`text-3xl font-serif font-bold mb-6 ${componentUtils.text.primary}`}>
              Send a Message
            </h2>
            <p className={`mb-8 ${componentUtils.text.secondary}`}>
              Whether you&apos;re interested in booking Arthur for a speaking engagement, have questions about the book, 
              or would like to share your own experiences, we&apos;d love to hear from you.
            </p>

            {isSubmitted ? (
              <Card className="bg-green-50 border-green-200">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-green-800 mb-2">
                    Message Sent Successfully
                  </h3>
                  <p className="text-green-700">
                    Thank you for your message. We&apos;ll get back to you as soon as possible.
                  </p>
                </div>
              </Card>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className={`block text-sm font-medium mb-2 ${componentUtils.text.secondary}`}>
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-brown/30 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent bg-parchment"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={`block text-sm font-medium mb-2 ${componentUtils.text.secondary}`}>
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-brown/30 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent bg-parchment"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${componentUtils.text.secondary}`}>
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-brown/30 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent bg-parchment"
                  >
                    <option value="">Select a subject</option>
                    <option value="speaking">Speaking Engagement</option>
                    <option value="interview">Media Interview</option>
                    <option value="book">Book Inquiry</option>
                    <option value="personal">Personal Story</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className={`block text-sm font-medium mb-2 ${componentUtils.text.secondary}`}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-brown/30 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent bg-parchment resize-vertical"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
                <CTAButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </CTAButton>
              </form>
            )}
          </div>

          <div>
            <h2 className={`text-3xl font-serif font-bold mb-6 ${componentUtils.text.primary}`}>
              Contact Information
            </h2>
            
            <div className="space-y-6">
              <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-200" href="mailto:arthur@arthurmyronhorwitz.com">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <IconContainer size="md" variant="hover">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </IconContainer>
                  </div>
                  <div>
                    <h3 className={`text-lg font-serif font-bold mb-1 ${componentUtils.text.primary}`}>Email</h3>
                    <p className={`${componentUtils.text.secondary} group-hover:text-burgundy transition-colors duration-200`}>
                      arthur@arthurmyronhorwitz.com
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-200" href="tel:+1-555-000-0000">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <IconContainer size="md" variant="hover">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </IconContainer>
                  </div>
                  <div>
                    <h3 className={`text-lg font-serif font-bold mb-1 ${componentUtils.text.primary}`}>Phone</h3>
                    <p className={`${componentUtils.text.secondary} group-hover:text-burgundy transition-colors duration-200`}>
                      +1 (555) 000-0000
                    </p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <IconContainer size="md" variant="hover">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </IconContainer>
                  </div>
                  <div>
                    <h3 className={`text-lg font-serif font-bold mb-1 ${componentUtils.text.primary}`}>Response Time</h3>
                    <p className={componentUtils.text.secondary}>
                      We typically respond to inquiries within 24-48 hours during business days.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-parchment/60 rounded-lg">
              <h3 className={`text-lg font-serif font-bold mb-2 ${componentUtils.text.primary}`}>
                Speaking Engagements
              </h3>
              <p className={`mb-4 ${componentUtils.text.secondary}`}>
                Arthur is available for speaking engagements at universities, community centers, 
                cultural institutions, and book clubs.
              </p>
              <CTAButton variant="outline" size="sm">
                View Speaking Schedule
              </CTAButton>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
