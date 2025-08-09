import { Metadata } from "next";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { CTAButton } from "@/components/CTAButton";
import { componentUtils } from "@/lib/design-system";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Press & Media - Arthur M. Horwitz",
  description: "Press coverage, media assets, and press materials for 'Dual Identities: Living in Meier's Shadow'.",
};

const pressCoverage = [
  {
    title: "New Memoir Explores Second-Generation Trauma",
    publication: "The New York Times",
    date: "December 10, 2024",
    excerpt: "Arthur M. Horwitz's 'Dual Identities' offers a deeply personal exploration of how trauma is inherited and its impact on identity formation.",
    link: "#",
  },
  {
    title: "Understanding Inherited Trauma Through Personal Story",
    publication: "Psychology Today",
    date: "December 5, 2024",
    excerpt: "A compelling look at how children of survivors carry the weight of history and find their own path to healing.",
    link: "#",
  },
  {
    title: "Book Review: Dual Identities",
    publication: "Jewish Book Council",
    date: "December 1, 2024",
    excerpt: "An important contribution to the literature on second-generation trauma and the complex journey of identity formation.",
    link: "#",
  },
  {
    title: "Author Q&A: Arthur M. Horwitz",
    publication: "Brooklyn Magazine",
    date: "November 25, 2024",
    excerpt: "An intimate conversation with the author about his journey of understanding and the writing process.",
    link: "#",
  },
  {
    title: "The Legacy of Survival",
    publication: "The Atlantic",
    date: "November 20, 2024",
    excerpt: "How second-generation survivors navigate the complex terrain of inherited trauma and personal identity.",
    link: "#",
  },
  {
    title: "Breaking the Silence on Inherited Trauma",
    publication: "The Forward",
    date: "November 15, 2024",
    excerpt: "A powerful memoir that gives voice to the experiences of children of Holocaust survivors.",
    link: "#",
  },
];

export default function PressPage() {
  return (
    <main>
      {/* Hero Section */}
      <Section className={componentUtils.background.accent}>
        <div className="text-center">
          <h1 className={`text-4xl font-serif font-bold sm:text-5xl mb-6 ${componentUtils.text.primary}`}>
            Press & Media
          </h1>
          <p className={`text-xl max-w-4xl mx-auto ${componentUtils.text.secondary}`}>
            Press coverage, media assets, and press materials for &quot;Dual Identities: Living in Meier&apos;s Shadow.&quot;
          </p>
        </div>
      </Section>

      {/* Press Coverage */}
      <Section className={componentUtils.background.primary}>
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-serif font-bold sm:text-4xl mb-4 ${componentUtils.text.primary}`}>
            Press Coverage
          </h2>
          <p className={`text-lg max-w-4xl mx-auto ${componentUtils.text.secondary}`}>
            Recent press coverage and media mentions of &quot;Dual Identities: Living in Meier&apos;s Shadow.&quot;
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pressCoverage.map((article, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center gap-2 mb-3">
                <span className={`px-3 py-1 rounded-full text-sm font-medium bg-burgundy/10 text-burgundy`}>
                  {article.publication}
                </span>
                <span className={`text-sm ${componentUtils.text.light}`}>{article.date}</span>
              </div>
              <h3 className={`text-lg font-serif font-bold mb-3 ${componentUtils.text.primary}`}>
                {article.title}
              </h3>
              <p className={`mb-4 ${componentUtils.text.secondary}`}>
                {article.excerpt}
              </p>
              <Link
                href={article.link}
                className={`inline-flex items-center justify-center rounded-lg border border-burgundy px-4 py-2 text-sm font-medium text-burgundy shadow-sm hover:bg-burgundy hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-burgundy focus:ring-offset-2`}
              >
                Read Article
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      {/* Media Assets */}
      <Section className={componentUtils.background.accent}>
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-serif font-bold sm:text-4xl mb-4 ${componentUtils.text.primary}`}>
            Media Assets
          </h2>
          <p className={`text-lg max-w-4xl mx-auto ${componentUtils.text.secondary}`}>
            High-resolution images, author photos, and downloadable materials for media use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <div className="text-center">
              <div className="w-12 h-12 bg-burgundy/10 rounded-lg mx-auto mb-4 flex items-center justify-center text-burgundy group-hover:bg-burgundy group-hover:text-white transition-colors duration-200">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className={`text-lg font-serif font-bold mb-2 ${componentUtils.text.primary}`}>Author Photos</h3>
              <p className={`mb-4 ${componentUtils.text.secondary}`}>High-resolution professional headshots</p>
              <CTAButton size="sm" variant="outline">
                Download
              </CTAButton>
            </div>
          </Card>

          <Card>
            <div className="text-center">
              <div className="w-12 h-12 bg-burgundy/10 rounded-lg mx-auto mb-4 flex items-center justify-center text-burgundy group-hover:bg-burgundy group-hover:text-white transition-colors duration-200">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className={`text-lg font-serif font-bold mb-2 ${componentUtils.text.primary}`}>Book Cover</h3>
              <p className={`mb-4 ${componentUtils.text.secondary}`}>High-resolution book cover image</p>
              <CTAButton size="sm" variant="outline">
                Download
              </CTAButton>
            </div>
          </Card>

          <Card>
            <div className="text-center">
              <div className="w-12 h-12 bg-burgundy/10 rounded-lg mx-auto mb-4 flex items-center justify-center text-burgundy group-hover:bg-burgundy group-hover:text-white transition-colors duration-200">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className={`text-lg font-serif font-bold mb-2 ${componentUtils.text.primary}`}>Press Kit</h3>
              <p className={`mb-4 ${componentUtils.text.secondary}`}>Complete press kit with all materials</p>
              <CTAButton size="sm" variant="outline">
                Download
              </CTAButton>
            </div>
          </Card>
        </div>
      </Section>

      {/* Contact for Media */}
      <Section className={componentUtils.background.primary}>
        <div className="text-center">
          <h2 className={`text-3xl font-serif font-bold sm:text-4xl mb-4 ${componentUtils.text.primary}`}>
            Media Inquiries
          </h2>
          <p className={`text-lg max-w-4xl mx-auto mb-8 ${componentUtils.text.secondary}`}>
            For media interviews, speaking engagements, or additional press materials, please get in touch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton variant="secondary" size="lg">
              Contact Arthur
            </CTAButton>
            <CTAButton variant="outline" size="lg">
              View Events
            </CTAButton>
          </div>
        </div>
      </Section>
    </main>
  );
}
