import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";

export const metadata: Metadata = {
  title: "Events & Speaking - Arthur M. Horwitz",
  description: "Upcoming and past speaking engagements, book events, and opportunities to hear Arthur M. Horwitz discuss 'Dual Identities: Living in Meier's Shadow'.",
};

const upcomingEvents = [
  {
    title: "Book Launch & Discussion",
    date: "2024-03-15",
    time: "7:00 PM",
    location: "Jewish Community Center",
    address: "123 Main Street, New York, NY",
    description: "Join Arthur for the official launch of 'Dual Identities: Living in Meier's Shadow' followed by a discussion about second-generation trauma and identity.",
    type: "Book Launch",
    registration: "#",
  },
  {
    title: "Speaking Engagement: Understanding Inherited Trauma",
    date: "2024-03-22",
    time: "2:00 PM",
    location: "University of Toronto",
    address: "Department of Psychology, Toronto, ON",
    description: "Academic lecture and discussion on the psychological aspects of second-generation trauma and its impact on identity formation.",
    type: "Academic",
    registration: "#",
  },
  {
    title: "Community Discussion: Memory and Healing",
    date: "2024-04-05",
    time: "6:30 PM",
    location: "Holocaust Memorial Center",
    address: "456 Remembrance Way, Detroit, MI",
    description: "Community discussion about the importance of memory, understanding, and healing in families affected by historical trauma.",
    type: "Community",
    registration: "#",
  },
];

const pastEvents = [
  {
    title: "Author Talk: The Weight of History",
    date: "2024-02-15",
    location: "Public Library",
    address: "789 Knowledge Ave, Boston, MA",
    description: "Discussion about how historical events continue to shape our present and future generations.",
    type: "Public Talk",
  },
  {
    title: "Panel Discussion: Trauma Across Generations",
    date: "2024-01-30",
    location: "Conference Center",
    address: "321 Convention Blvd, Chicago, IL",
    description: "Panel discussion with experts on intergenerational trauma and its psychological impacts.",
    type: "Conference",
  },
  {
    title: "Book Reading & Q&A",
    date: "2024-01-20",
    location: "Independent Bookstore",
    address: "567 Literary Lane, San Francisco, CA",
    description: "Intimate reading from 'Dual Identities' followed by audience questions and discussion.",
    type: "Book Reading",
  },
];

export default function EventsPage() {
  return (
    <main>
      {/* Hero Section */}
      <Section className="bg-deep-gray/5">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-black sm:text-6xl mb-6">
            Events & Speaking
          </h1>
          <p className="text-xl text-deep-gray max-w-4xl mx-auto">
            Join Arthur M. Horwitz for speaking engagements, book discussions, and community conversations about second-generation trauma and identity.
          </p>
        </div>
      </Section>

      {/* Request a Talk CTA */}
      <Section>
        <div className="text-center bg-sepia text-white rounded-lg p-8 lg:p-12">
          <h2 className="text-3xl font-serif font-bold sm:text-4xl mb-4">
            Request a Speaking Engagement
          </h2>
          <p className="text-lg text-white/90 max-w-4xl mx-auto mb-8">
            Interested in having Arthur speak at your event, institution, or community gathering? We&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-deep-gray px-6 py-3 text-base font-medium text-off-white shadow-sm hover:bg-deep-gray/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-deep-gray focus:ring-offset-2"
            >
              Contact Arthur
            </Link>
            <Link
              href="/press"
              className="inline-flex items-center justify-center rounded-md border border-white px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-white hover:text-sepia transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              Media Inquiries
            </Link>
          </div>
        </div>
      </Section>

      {/* Upcoming Events */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-black sm:text-4xl mb-4">
            Upcoming Events
          </h2>
          <p className="text-lg text-deep-gray max-w-4xl mx-auto">
            Join Arthur at these upcoming speaking engagements and book events.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {upcomingEvents.map((event, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
              <div className="flex justify-between items-start mb-4">
                <span className="text-sm text-sepia font-semibold bg-sepia/10 px-3 py-1 rounded-full">
                  {event.type}
                </span>
                <span className="text-sm text-deep-gray bg-deep-gray/10 px-3 py-1 rounded-full">
                  {new Date(event.date).toLocaleDateString('en-US', { 
                    weekday: 'long',
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
              <h3 className="text-xl font-serif font-bold text-black mb-2">
                {event.title}
              </h3>
              <div className="text-deep-gray mb-4">
                <p className="font-semibold">{event.location}</p>
                <p className="text-sm">{event.address}</p>
                <p className="text-sm">{event.time}</p>
              </div>
              <p className="text-deep-gray mb-6">
                {event.description}
              </p>
              <Link
                href={event.registration}
                className="inline-flex items-center justify-center rounded-md bg-sepia px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-sepia/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sepia focus:ring-offset-2"
              >
                Register
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      {/* Past Events */}
      <Section className="bg-deep-gray/5">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-black sm:text-4xl mb-4">
            Past Events
          </h2>
          <p className="text-lg text-deep-gray max-w-4xl mx-auto">
            Recent speaking engagements and community discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastEvents.map((event, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
              <div className="flex justify-between items-start mb-4">
                <span className="text-sm text-sepia font-semibold bg-sepia/10 px-3 py-1 rounded-full">
                  {event.type}
                </span>
                <span className="text-sm text-deep-gray bg-deep-gray/10 px-3 py-1 rounded-full">
                  {new Date(event.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
              <h3 className="text-lg font-serif font-bold text-black mb-2">
                {event.title}
              </h3>
              <div className="text-deep-gray mb-4">
                <p className="font-semibold">{event.location}</p>
                <p className="text-sm">{event.address}</p>
              </div>
              <p className="text-deep-gray">
                {event.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Speaking Topics */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-black sm:text-4xl mb-4">
            Speaking Topics
          </h2>
          <p className="text-lg text-deep-gray max-w-4xl mx-auto">
            Arthur speaks on a variety of topics related to second-generation trauma, identity, and healing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <div className="text-center">
              <div className="w-12 h-12 bg-sepia rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-serif font-bold text-black mb-2">Second-Generation Trauma</h3>
              <p className="text-deep-gray">
                Understanding how trauma is inherited and its impact on identity formation.
              </p>
            </div>
          </Card>

          <Card>
            <div className="text-center">
              <div className="w-12 h-12 bg-sepia rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-serif font-bold text-black mb-2">Memory & Identity</h3>
              <p className="text-deep-gray">
                Exploring the complex relationship between memory, history, and personal identity.
              </p>
            </div>
          </Card>

          <Card>
            <div className="text-center">
              <div className="w-12 h-12 bg-sepia rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-serif font-bold text-black mb-2">Healing & Understanding</h3>
              <p className="text-deep-gray">
                Pathways to healing and understanding for families affected by historical trauma.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Contact CTA */}
      <Section className="bg-sepia text-white">
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold sm:text-4xl mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-white/90 max-w-4xl mx-auto mb-8">
            Interested in booking Arthur for a speaking engagement or have questions about upcoming events?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-deep-gray px-6 py-3 text-base font-medium text-off-white shadow-sm hover:bg-deep-gray/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-deep-gray focus:ring-offset-2"
            >
              Contact Arthur
            </Link>
            <Link
              href="/press"
              className="inline-flex items-center justify-center rounded-md border border-white px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-white hover:text-sepia transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              Media Inquiries
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
