import { Metadata } from "next";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { CTAButton } from "@/components/CTAButton";
import { componentUtils } from "@/lib/design-system";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Events & Speaking - Arthur M. Horwitz",
  description: "Join Arthur at upcoming speaking engagements, book events, and community discussions about second-generation trauma and healing.",
};

const upcomingEvents = [
  {
    title: "Book Launch & Discussion",
    location: "Brooklyn Public Library",
    address: "10 Grand Army Plaza, Brooklyn, NY",
    date: "2024-12-20",
    time: "7:00 PM - 9:00 PM",
    type: "Book Event",
    description: "Join Arthur for the official launch of 'Dual Identities: Living in Meier's Shadow' with a reading, discussion, and Q&A session.",
  },
  {
    title: "Second-Generation Trauma Workshop",
    location: "Jewish Community Center",
    address: "334 Amsterdam Ave, New York, NY",
    date: "2024-12-25",
    time: "2:00 PM - 4:00 PM",
    type: "Workshop",
    description: "An interactive workshop exploring second-generation trauma, its impact on identity, and pathways to healing.",
  },
  {
    title: "Author Talk & Signing",
    location: "Barnes & Noble",
    address: "150 E 86th St, New York, NY",
    date: "2024-12-30",
    time: "6:00 PM - 8:00 PM",
    type: "Book Signing",
    description: "An intimate conversation about the book, followed by a book signing and meet-and-greet with readers.",
  },
];

const pastEvents = [
  {
    title: "Community Discussion on Inherited Trauma",
    location: "Temple Emanu-El",
    address: "1 E 65th St, New York, NY",
    date: "2024-11-15",
    type: "Community Event",
    description: "A community discussion about inherited trauma and its impact on families and communities.",
  },
  {
    title: "Academic Lecture Series",
    location: "Columbia University",
    address: "116th St & Broadway, New York, NY",
    date: "2024-11-10",
    type: "Academic",
    description: "A lecture on second-generation trauma and its implications for understanding historical memory and identity formation.",
  },
  {
    title: "Book Club Discussion",
    location: "Strand Bookstore",
    address: "828 Broadway, New York, NY",
    date: "2024-11-05",
    type: "Book Club",
    description: "A book club discussion about 'Dual Identities' with readers and community members.",
  },
];

export default function EventsPage() {
  return (
    <main>
      {/* Hero Section */}
      <Section className={componentUtils.background.accent}>
        <div className="text-center">
          <h1 className={`text-4xl font-serif font-bold sm:text-5xl mb-6 ${componentUtils.text.primary}`}>
            Events & Speaking
          </h1>
          <p className={`text-xl max-w-4xl mx-auto ${componentUtils.text.secondary}`}>
            Join Arthur at upcoming speaking engagements, book events, and community discussions about second-generation trauma, identity, and healing.
          </p>
        </div>
      </Section>

      {/* Request a Talk CTA */}
      <Section className={componentUtils.background.primary}>
        <div className="text-center">
          <h2 className={`text-3xl font-serif font-bold sm:text-4xl mb-4 ${componentUtils.text.primary}`}>
            Request a Speaking Engagement
          </h2>
          <p className={`text-lg max-w-4xl mx-auto mb-8 ${componentUtils.text.secondary}`}>
            Interested in having Arthur speak at your event, institution, or community gathering? We&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <CTAButton variant="secondary" size="lg">
                Contact Arthur
              </CTAButton>
            </Link>
            <Link href="/press">
              <CTAButton variant="outline" size="lg">
                Media Inquiries
              </CTAButton>
            </Link>
          </div>
        </div>
      </Section>

      {/* Upcoming Events */}
      <Section className={componentUtils.background.secondary}>
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-serif font-bold sm:text-4xl mb-4 ${componentUtils.text.primary}`}>
            Upcoming Events
          </h2>
          <p className={`text-lg max-w-4xl mx-auto ${componentUtils.text.secondary}`}>
            Join Arthur at these upcoming speaking engagements and book events.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {upcomingEvents.map((event, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
              <div className="flex justify-between items-start mb-4">
                <span className={`text-sm font-semibold bg-burgundy/10 px-3 py-1 rounded-full ${componentUtils.text.accent}`}>
                  {event.type}
                </span>
                <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                  {new Date(event.date).toLocaleDateString('en-US', { 
                    weekday: 'long',
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
              <h3 className={`text-xl font-serif font-bold mb-2 ${componentUtils.text.primary}`}>
                {event.title}
              </h3>
              <div className={`mb-4 ${componentUtils.text.secondary}`}>
                <p className="font-semibold">{event.location}</p>
                <p className="text-sm">{event.address}</p>
                <p className="text-sm">{event.time}</p>
              </div>
              <p className={`mb-6 ${componentUtils.text.secondary}`}>
                {event.description}
              </p>
              <CTAButton variant="secondary" size="sm">
                Register
              </CTAButton>
            </Card>
          ))}
        </div>
      </Section>

      {/* Past Events */}
      <Section className={componentUtils.background.accent}>
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-serif font-bold sm:text-4xl mb-4 ${componentUtils.text.primary}`}>
            Past Events
          </h2>
          <p className={`text-lg max-w-4xl mx-auto ${componentUtils.text.secondary}`}>
            A selection of recent speaking engagements and community events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastEvents.map((event, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
              <div className="flex justify-between items-start mb-4">
                <span className={`text-sm font-semibold bg-burgundy/10 px-3 py-1 rounded-full ${componentUtils.text.accent}`}>
                  {event.type}
                </span>
                <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                  {new Date(event.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
              <h3 className={`text-lg font-serif font-bold mb-2 ${componentUtils.text.primary}`}>
                {event.title}
              </h3>
              <div className={`mb-4 ${componentUtils.text.secondary}`}>
                <p className="font-semibold">{event.location}</p>
                <p className="text-sm">{event.address}</p>
              </div>
              <p className={componentUtils.text.secondary}>
                {event.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Speaking Topics */}
      <Section className={componentUtils.background.primary}>
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-serif font-bold sm:text-4xl mb-4 ${componentUtils.text.primary}`}>
            Speaking Topics
          </h2>
          <p className={`text-lg max-w-4xl mx-auto ${componentUtils.text.secondary}`}>
            Arthur speaks on a variety of topics related to second-generation trauma, identity, and healing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <div className="text-center">
              <div className={`w-12 h-12 bg-burgundy/10 rounded-xl mx-auto mb-4 flex items-center justify-center text-burgundy group-hover:bg-burgundy group-hover:text-white transition-colors duration-200`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className={`text-lg font-serif font-bold mb-2 ${componentUtils.text.primary}`}>Second-Generation Trauma</h3>
              <p className={componentUtils.text.secondary}>
                Understanding how trauma is inherited and its impact on identity formation.
              </p>
            </div>
          </Card>

          <Card>
            <div className="text-center">
              <div className={`w-12 h-12 bg-burgundy/10 rounded-xl mx-auto mb-4 flex items-center justify-center text-burgundy group-hover:bg-burgundy group-hover:text-white transition-colors duration-200`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className={`text-lg font-serif font-bold mb-2 ${componentUtils.text.primary}`}>Memory & Identity</h3>
              <p className={componentUtils.text.secondary}>
                Exploring the complex relationship between memory, history, and personal identity.
              </p>
            </div>
          </Card>

          <Card>
            <div className="text-center">
              <div className={`w-12 h-12 bg-burgundy/10 rounded-xl mx-auto mb-4 flex items-center justify-center text-burgundy group-hover:bg-burgundy group-hover:text-white transition-colors duration-200`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className={`text-lg font-serif font-bold mb-2 ${componentUtils.text.primary}`}>Healing & Understanding</h3>
              <p className={componentUtils.text.secondary}>
                Pathways to healing and understanding for families affected by historical trauma.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Contact CTA */}
      <Section className={componentUtils.background.accent}>
        <div className="text-center">
          <h2 className={`text-3xl font-serif font-bold sm:text-4xl mb-4 ${componentUtils.text.primary}`}>
            Get in Touch
          </h2>
          <p className={`text-lg max-w-4xl mx-auto mb-8 ${componentUtils.text.secondary}`}>
            Interested in booking Arthur for a speaking engagement or have questions about upcoming events?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <CTAButton variant="secondary" size="lg">
                Contact Arthur
              </CTAButton>
            </Link>
            <Link href="/press">
              <CTAButton variant="outline" size="lg">
                Media Inquiries
              </CTAButton>
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
