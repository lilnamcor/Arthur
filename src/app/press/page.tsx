import { Metadata } from "next";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { CTAButton } from "@/components/CTAButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Media & Press - Arthur M. Horwitz",
  description: "Press coverage, media assets, and press releases for Arthur M. Horwitz and 'Dual Identities: Living in Meier's Shadow'.",
};

const pressReleases = [
  {
    title: "Author Arthur M. Horwitz Releases Groundbreaking Book on Second-Generation Trauma",
    date: "2024-01-15",
    excerpt: "A deeply personal exploration of how the echoes of history shape our present and future.",
    link: "#",
  },
  {
    title: "New Book Sheds Light on the Complex Dynamics of Inherited Trauma",
    date: "2024-01-10",
    excerpt: "Arthur M. Horwitz's 'Dual Identities' offers insights into the lasting impact of historical events on families.",
    link: "#",
  },
];

const mediaCoverage = [
  {
    title: "The Power of Memory: How Second-Generation Trauma Shapes Identity",
    publication: "Jewish Review",
    date: "2024-02-01",
    excerpt: "An insightful review of Arthur M. Horwitz's exploration of inherited trauma and identity formation.",
    link: "#",
  },
  {
    title: "Author Discusses the Weight of History in New Memoir",
    publication: "Literary Times",
    date: "2024-01-25",
    excerpt: "Interview with Arthur M. Horwitz about his journey of understanding and healing.",
    link: "#",
  },
  {
    title: "Breaking the Silence: A Conversation About Second-Generation Trauma",
    publication: "Psychology Today",
    date: "2024-01-20",
    excerpt: "Expert analysis of the psychological aspects explored in 'Dual Identities'.",
    link: "#",
  },
];

export default function PressPage() {
  return (
    <main>
      {/* Hero Section */}
      <Section className="bg-deep-gray/5">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-black sm:text-6xl mb-6">
            Media & Press
          </h1>
          <p className="text-xl text-deep-gray max-w-4xl mx-auto">
            Press coverage, media assets, and press releases for Arthur M. Horwitz and &quot;Dual Identities: Living in Meier&apos;s Shadow.&quot;
          </p>
        </div>
      </Section>

      {/* Press Releases */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-black sm:text-4xl mb-4">
            Press Releases
          </h2>
          <p className="text-lg text-deep-gray max-w-4xl mx-auto">
            Official announcements and press materials for media outlets and journalists.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pressReleases.map((release, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-serif font-bold text-black">
                  {release.title}
                </h3>
                <span className="text-sm text-deep-gray bg-deep-gray/10 px-3 py-1 rounded-full">
                  {new Date(release.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
              <p className="text-deep-gray mb-4">
                {release.excerpt}
              </p>
              <Link
                href={release.link}
                className="inline-flex items-center justify-center rounded-md border border-deep-gray px-4 py-2 text-sm font-medium text-deep-gray shadow-sm hover:bg-deep-gray hover:text-off-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-deep-gray focus:ring-offset-2"
              >
                Read Full Release
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      {/* Media Coverage */}
      <Section className="bg-deep-gray/5">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-black sm:text-4xl mb-4">
            Media Coverage
          </h2>
          <p className="text-lg text-deep-gray max-w-4xl mx-auto">
            Recent articles, reviews, and interviews featuring Arthur M. Horwitz and his work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaCoverage.map((article, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
              <div className="mb-4">
                <span className="text-sm text-sepia font-semibold">
                  {article.publication}
                </span>
                <span className="text-sm text-deep-gray ml-2">
                  {new Date(article.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
              <h3 className="text-lg font-serif font-bold text-black mb-2">
                {article.title}
              </h3>
              <p className="text-deep-gray mb-4">
                {article.excerpt}
              </p>
              <Link
                href={article.link}
                className="inline-flex items-center justify-center rounded-md border border-deep-gray px-4 py-2 text-sm font-medium text-deep-gray shadow-sm hover:bg-deep-gray hover:text-off-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-deep-gray focus:ring-offset-2"
              >
                Read Article
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      {/* Media Assets */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-black sm:text-4xl mb-4">
            Media Assets
          </h2>
          <p className="text-lg text-deep-gray max-w-4xl mx-auto">
            High-resolution images, author photos, and downloadable materials for media use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <div className="text-center">
              <div className="w-12 h-12 bg-sepia rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-serif font-bold text-black mb-2">Author Photos</h3>
              <p className="text-deep-gray mb-4">High-resolution professional headshots</p>
              <CTAButton size="sm" variant="outline">
                Download
              </CTAButton>
            </div>
          </Card>

          <Card>
            <div className="text-center">
              <div className="w-12 h-12 bg-sepia rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-serif font-bold text-black mb-2">Book Cover</h3>
              <p className="text-deep-gray mb-4">High-resolution book cover image</p>
              <CTAButton size="sm" variant="outline">
                Download
              </CTAButton>
            </div>
          </Card>

          <Card>
            <div className="text-center">
              <div className="w-12 h-12 bg-sepia rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-serif font-bold text-black mb-2">Press Kit</h3>
              <p className="text-deep-gray mb-4">Complete press kit with all materials</p>
              <CTAButton size="sm" variant="outline">
                Download
              </CTAButton>
            </div>
          </Card>
        </div>
      </Section>

      {/* Contact for Media */}
      <Section className="bg-sepia text-white">
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold sm:text-4xl mb-4">
            Media Inquiries
          </h2>
          <p className="text-lg text-white/90 max-w-4xl mx-auto mb-8">
            For media interviews, speaking engagements, or additional press materials, please get in touch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-deep-gray px-6 py-3 text-base font-medium text-off-white shadow-sm hover:bg-deep-gray/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-deep-gray focus:ring-offset-2"
            >
              Contact Arthur
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center justify-center rounded-md border border-white px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-white hover:text-sepia transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              View Events
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
