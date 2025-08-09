import { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { CTAButton } from "@/components/CTAButton";
import { StayConnected } from "@/components/StayConnected";
import { componentUtils } from "@/lib/design-system";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Books About the Holocaust | Second Generation Holocaust Books | Arthur M. Horwitz - Dual Identities: Living in Meier's Shadow",
  description: "Discover powerful books about the Holocaust and second generation Holocaust trauma. Arthur M. Horwitz's groundbreaking memoir 'Dual Identities: Living in Meier's Shadow' explores inherited trauma, Holocaust memory, and identity formation for children of survivors. Essential reading for understanding Holocaust impact across generations.",
  keywords: [
    "books about the holocaust",
    "holocaust books",
    "second generation holocaust books", 
    "books about 2nd generation holocaust",
    "holocaust survivor children books",
    "inherited trauma books",
    "second-generation trauma",
    "Holocaust memory",
    "Arthur M. Horwitz",
    "Dual Identities",
    "Meier's Shadow"
  ],
  openGraph: {
    title: "Books About the Holocaust | Second Generation Holocaust Books | Arthur M. Horwitz",
    description: "Discover powerful books about the Holocaust and second generation Holocaust trauma. Essential reading for understanding Holocaust impact across generations.",
    type: "website",
    url: "https://arthurmyronhorwitz.com",
  },
};

const features = [
  {
    title: "About the Author",
    description: "Discover the story behind Arthur Myron Horwitz and his journey of understanding second-generation trauma.",
    href: "/author",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "About the Book",
    description: "Explore the themes, content, and significance of 'Dual Identities: Living in Meir's Shadow'.",
    href: "/book",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Themes",
    description: "Dive deep into the central themes of second-generation trauma, memory, identity, and legacy.",
    href: "/themes",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Events & Speaking",
    description: "Join Arthur at upcoming events, speaking engagements, and book discussions.",
    href: "/events",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Media & Press",
    description: "Read press coverage, download media assets, and access press releases.",
    href: "/press",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
  },
  {
    title: "Contact",
    description: "Get in touch with Arthur for speaking engagements, interviews, or general inquiries.",
    href: "/contact",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Skip to content link */}
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Section id="main-content" className={componentUtils.background.primary}>
        <div className="text-center mb-16">
          <h2 className={`text-3xl font-serif font-bold sm:text-4xl ${componentUtils.text.primary}`}>
            Explore the Journey
          </h2>
          <p className={`mt-4 text-lg max-w-4xl mx-auto ${componentUtils.text.secondary}`}>
            Discover the profound themes and personal stories that shape this important work.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="group" href={feature.href}>
              <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-burgundy/10 text-burgundy mb-4 group-hover:bg-burgundy group-hover:text-white transition-colors duration-200`}>
                {feature.icon}
              </div>
              <h3 className={`text-xl font-serif font-bold mb-2 ${componentUtils.text.primary}`}>
                {feature.title}
              </h3>
              <p className={`mb-4 ${componentUtils.text.secondary}`}>
                {feature.description}
              </p>
              <div className={`inline-flex items-center font-medium transition-colors duration-200 ${componentUtils.text.accent} group-hover:text-burgundy/80`}>
                Learn more
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* About Preview Section */}
      <Section className={componentUtils.background.accent}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className={`text-3xl font-serif font-bold sm:text-4xl mb-6 ${componentUtils.text.primary}`}>
              Books About the Holocaust: A Second Generation Perspective
            </h2>
            <p className={`text-lg mb-6 ${componentUtils.text.secondary}`}>
              &quot;Dual Identities: Living in Meier&apos;s Shadow&quot; is one of the most important <strong>books about the Holocaust</strong> and <strong>second generation Holocaust trauma</strong> available today. This groundbreaking memoir explores the complex journey of identity formation for children of Holocaust survivors, offering a unique perspective on how trauma is inherited and shapes entire families.
            </p>
            <p className={`mb-8 ${componentUtils.text.secondary}`}>
              As one of the definitive <strong>books about 2nd generation holocaust</strong> experiences, this work expands the Holocaust memoir genre by giving voice to children of survivors, exploring themes of coping, healing, reconciliation, and remembrance that hold universal appeal for anyone seeking to understand the lasting impact of the Holocaust on families and communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/second-generation">
                <CTAButton variant="secondary" size="lg" className="w-full sm:w-auto">
                  Learn More
                </CTAButton>
              </Link>
              <CTAButton variant="outline" size="lg" className="w-full sm:w-auto">
                Buy Book
              </CTAButton>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-brown/20 overflow-hidden shadow-xl bg-parchment">
              <Image
                src="/book-cover.jpg"
                alt="Dual Identities: Living in Meier's Shadow - Book about Holocaust and Second Generation Trauma"
                width={400}
                height={533}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Stay Connected Section */}
      <StayConnected />
    </main>
  );
}
