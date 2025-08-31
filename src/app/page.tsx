import { Metadata } from "next";
import { Section } from "@/components/Section";
import { CTAButton } from "@/components/CTAButton";
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

export default function HomePage() {
  return (
    <main>
      {/* Skip to content link */}
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>

      {/* Split Screen Hero Section */}
      <Section id="main-content" className="min-h-screen flex items-center px-0" container={false}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-0 h-full w-full">
          {/* Left Side - Author */}
          <div className={`${componentUtils.background.accent} p-6 lg:p-8 flex flex-col justify-center`}>
            <div className="w-full">
                             {/* Author Photo Placeholder */}
               <div className="mb-8 text-center lg:text-left">
                 <div className="w-full h-88 mx-auto lg:mx-0 rounded-2xl border border-brown/20 overflow-hidden shadow-xl bg-parchment mb-6">
                  <div className="w-full h-full flex items-center justify-center text-brown/60">
                    <div className="text-center">
                      <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <p className="text-sm">Professional Photo<br />Coming Soon</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Author Summary */}
              <div className="text-center lg:text-left">
                <h1 className={`text-3xl font-serif font-bold sm:text-4xl mb-6 ${componentUtils.text.primary}`}>
                  Arthur M. Horwitz
                </h1>
                                 <p className={`text-lg mb-6 leading-relaxed ${componentUtils.text.secondary}`}>
                   Arthur M. Horwitz is a writer, educator, and second-generation Holocaust survivor whose work explores the complex intersections of memory, identity, and trauma. Born in Brooklyn in 1955 to Holocaust survivors, Arthur developed what he calls &quot;dual identities&quot; - his own life and the one his uncle Meier never had.
                 </p>
                <p className={`mb-8 leading-relaxed ${componentUtils.text.secondary}`}>
                  After graduating from Brooklyn College with a degree in English Literature, Arthur pursued a career in education, teaching high school English for over three decades. Throughout his teaching career, he found himself drawn to stories of survival, resilience, and the human capacity for both cruelty and compassion.
                </p>
                <Link href="/author">
                  <CTAButton variant="secondary" size="lg" className="w-full sm:w-auto">
                    Learn More About the Author
                  </CTAButton>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side - Book */}
          <div className={`${componentUtils.background.primary} p-6 lg:p-8 flex flex-col justify-center`}>
            <div className="w-full">
                             {/* Book Cover */}
               <div className="mb-8 text-center lg:text-left">
                 <div className="w-72 h-88 mx-auto lg:mx-0 rounded-2xl border border-brown/20 overflow-hidden shadow-xl bg-parchment">
                                     <Image
                     src="/book-cover.jpg"
                     alt="Dual Identities: Living in Meier's Shadow - Book about Holocaust and Second Generation Trauma"
                     width={288}
                     height={352}
                     className="w-full h-full object-cover"
                     priority
                   />
                </div>
              </div>

              {/* Book Summary */}
              <div className="text-center lg:text-left">
                                 <h2 className={`text-2xl font-serif font-bold sm:text-3xl mb-4 ${componentUtils.text.primary}`}>
                   Dual Identities: Living in Meier&apos;s Shadow
                 </h2>
                <p className={`text-lg mb-6 leading-relaxed ${componentUtils.text.secondary}`}>
                  This groundbreaking memoir explores the complex journey of identity formation for children of Holocaust survivors, offering a unique perspective on how trauma is inherited and shapes entire families. As one of the definitive books about second generation Holocaust experiences, this work expands the Holocaust memoir genre by giving voice to children of survivors.
                </p>

                {/* Endorsement */}
                <div className={`mb-8 p-6 rounded-lg bg-parchment/50 border border-brown/20 ${componentUtils.text.secondary}`}>
                  <div className="mb-3">
                    <svg className="w-6 h-6 text-orange" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                                     <blockquote className="italic mb-3">
                     &quot;Dual Identities is an insightful, personal memoir of a Holocaust topic not often explored: growing up as a child of a Survivor. Among the thousands of books about the Holocaust, Dual Identities is one that presents a unique, distinctive and thoughtful perspective about the impact of the Holocaust upon children of survivors.&quot;
                   </blockquote>
                  <p className="font-semibold text-sm">
                    — Mark Oppenheimer
                  </p>
                </div>

                <Link href="/book">
                  <CTAButton variant="primary" size="lg" className="w-full sm:w-auto">
                    Learn More About the Book
                  </CTAButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Quick Links Section */}
      <Section className={componentUtils.background.secondary}>
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-serif font-bold sm:text-4xl mb-4 ${componentUtils.text.primary}`}>
            Explore Further
          </h2>
          <p className={`text-lg max-w-4xl mx-auto ${componentUtils.text.secondary}`}>
            Discover more about the themes, events, and resources available.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/themes" className="group">
            <div className={`p-6 rounded-xl border border-brown/20 bg-parchment hover:bg-brown/5 transition-colors duration-200 text-center`}>
              <div className={`w-12 h-12 bg-burgundy/10 rounded-xl mx-auto mb-4 flex items-center justify-center text-burgundy group-hover:bg-burgundy group-hover:text-white transition-colors duration-200`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className={`text-lg font-serif font-bold mb-2 ${componentUtils.text.primary}`}>Themes</h3>
              <p className={`text-sm ${componentUtils.text.secondary}`}>Explore the central themes of second-generation trauma, memory, and identity.</p>
            </div>
          </Link>

          <Link href="/events" className="group">
            <div className={`p-6 rounded-xl border border-brown/20 bg-parchment hover:bg-brown/5 transition-colors duration-200 text-center`}>
              <div className={`w-12 h-12 bg-burgundy/10 rounded-xl mx-auto mb-4 flex items-center justify-center text-burgundy group-hover:bg-burgundy group-hover:text-white transition-colors duration-200`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className={`text-lg font-serif font-bold mb-2 ${componentUtils.text.primary}`}>Events</h3>
              <p className={`text-sm ${componentUtils.text.secondary}`}>Join Arthur at upcoming speaking engagements and book discussions.</p>
            </div>
          </Link>

          <Link href="/blog" className="group">
            <div className={`p-6 rounded-xl border border-brown/20 bg-parchment hover:bg-brown/5 transition-colors duration-200 text-center`}>
              <div className={`w-12 h-12 bg-burgundy/10 rounded-xl mx-auto mb-4 flex items-center justify-center text-burgundy group-hover:bg-burgundy group-hover:text-white transition-colors duration-200`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className={`text-lg font-serif font-bold mb-2 ${componentUtils.text.primary}`}>Blog</h3>
              <p className={`text-sm ${componentUtils.text.secondary}`}>Read insights and reflections on second-generation trauma and healing.</p>
            </div>
          </Link>

          <Link href="/contact" className="group">
            <div className={`p-6 rounded-xl border border-brown/20 bg-parchment hover:bg-brown/5 transition-colors duration-200 text-center`}>
              <div className={`w-12 h-12 bg-burgundy/10 rounded-xl mx-auto mb-4 flex items-center justify-center text-burgundy group-hover:bg-burgundy group-hover:text-white transition-colors duration-200`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className={`text-lg font-serif font-bold mb-2 ${componentUtils.text.primary}`}>Contact</h3>
              <p className={`text-sm ${componentUtils.text.secondary}`}>Get in touch for speaking engagements, interviews, or inquiries.</p>
            </div>
          </Link>
        </div>
      </Section>
    </main>
  );
}
