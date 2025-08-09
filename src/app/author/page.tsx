import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { CTAButton } from "@/components/CTAButton";
import { componentUtils } from "@/lib/design-system";

export const metadata: Metadata = {
  title: "About the Author - Arthur Myron Horwitz",
  description: "Learn about Arthur Myron Horwitz, author of 'Dual Identities: Living in Meir's Shadow' and his journey of understanding second-generation trauma.",
};

export default function AuthorPage() {
  return (
    <main>
      {/* Hero Section */}
      <Section className={componentUtils.background.accent}>
        <div className="text-center">
          <h1 className={`text-4xl font-serif font-bold sm:text-6xl mb-6 ${componentUtils.text.primary}`}>
            About the Author
          </h1>
          <p className={`text-xl max-w-6xl mx-auto ${componentUtils.text.secondary}`}>
            Arthur M. Horwitz is a writer, educator, and second-generation Holocaust survivor whose work explores the complex intersections of memory, identity, and trauma.
          </p>
        </div>
      </Section>

      {/* Author Bio */}
      <Section className={componentUtils.background.primary}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="rounded-2xl border border-brown/20 overflow-hidden shadow-xl bg-parchment">
              <Image
                src="/author-photo.jpg"
                alt="Arthur M. Horwitz"
                width={400}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div>
            <h2 className={`text-3xl font-serif font-bold mb-6 ${componentUtils.text.primary}`}>
              Arthur M. Horwitz
            </h2>
            <p className={`mb-6 ${componentUtils.text.secondary}`}>
              Arthur M. Horwitz was born in Brooklyn, New York, in 1955, the son of Holocaust survivors. His father, Meier Horwitz, survived Auschwitz and Bergen-Belsen, while his mother, Sarah, survived the Warsaw Ghetto and multiple concentration camps. Growing up in a household where the Holocaust was both ever-present and rarely discussed, Arthur developed what he calls &quot;dual identities&quot; - his own life and the one his uncle Meier never had.
            </p>
            <p className={`mb-6 ${componentUtils.text.secondary}`}>
              After graduating from Brooklyn College with a degree in English Literature, Arthur pursued a career in education, teaching high school English for over three decades. Throughout his teaching career, he found himself drawn to stories of survival, resilience, and the human capacity for both cruelty and compassion. His classroom became a space where students could explore difficult questions about history, identity, and what it means to be human.
            </p>
            <p className={`mb-8 ${componentUtils.text.secondary}`}>
              &quot;Dual Identities: Living in Meier&apos;s Shadow&quot; is Arthur&apos;s first book, though he has been writing about his experiences and the broader themes of second-generation trauma for many years. His work has appeared in various literary journals and anthologies, and he has spoken at numerous conferences and events about the importance of bearing witness and the responsibility of memory.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book">
                <CTAButton variant="primary" size="lg">
                  Read the Book
                </CTAButton>
              </Link>
              <Link href="/contact">
                <CTAButton variant="outline" size="lg">
                  Get in Touch
                </CTAButton>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Personal Side */}
      <Section className={componentUtils.background.accent}>
        <div className="text-center">
          <h2 className={`text-3xl font-serif font-bold sm:text-4xl mb-4 ${componentUtils.text.primary}`}>
            The Personal Side
          </h2>
          <p className={`text-lg max-w-4xl mx-auto ${componentUtils.text.secondary}`}>
            Beyond the serious themes of his work, Arthur is also known for his warmth, humor, and love of baseball - particularly the Brooklyn Dodgers, a connection to his childhood and the world his parents knew before the war.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="text-center">
            <div className={`w-12 h-12 bg-burgundy/10 rounded-xl mx-auto mb-4 flex items-center justify-center text-burgundy group-hover:bg-burgundy group-hover:text-white transition-colors duration-200`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-9-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className={`text-lg font-serif font-bold mb-2 ${componentUtils.text.primary}`}>Author Photo</h3>
            <p className={`mb-4 ${componentUtils.text.secondary}`}>High-resolution headshot for media use</p>
            <div className="rounded-2xl border border-brown/20 overflow-hidden shadow-xl bg-parchment">
              <Image
                src="/author-photo-silly.jpg"
                alt="Arthur M. Horwitz - Personal side"
                width={300}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </Card>
          <Card className="text-center">
            <div className={`w-12 h-12 bg-burgundy/10 rounded-xl mx-auto mb-4 flex items-center justify-center text-burgundy group-hover:bg-burgundy group-hover:text-white transition-colors duration-200`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className={`text-lg font-serif font-bold mb-2 ${componentUtils.text.primary}`}>Biography</h3>
            <p className={`mb-4 ${componentUtils.text.secondary}`}>Detailed author biography and background</p>
            <div className={`bg-parchment rounded-lg p-6 text-left ${componentUtils.text.secondary}`}>
              <p>
                Arthur lives in Brooklyn with his wife, Rachel, and their two children. When he&apos;s not writing or teaching, he can often be found at Coney Island, watching the waves and thinking about the stories that shape us all.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Speaking & Events */}
      <Section className={componentUtils.background.primary}>
        <div className="text-center">
          <h2 className={`text-3xl font-serif font-bold sm:text-4xl mb-4 ${componentUtils.text.primary}`}>
            Speaking & Events
          </h2>
          <p className={`text-lg max-w-4xl mx-auto ${componentUtils.text.secondary}`}>
            Arthur is available for speaking engagements, book discussions, and educational events. He particularly enjoys working with students and educators to explore the themes of his work.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <div className={`w-12 h-12 bg-burgundy/10 rounded-xl mx-auto mb-4 flex items-center justify-center text-burgundy group-hover:bg-burgundy group-hover:text-white transition-colors duration-200`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className={`text-2xl font-serif font-bold mb-4 ${componentUtils.text.primary}`}>
              Book Clubs & Reading Groups
            </h3>
            <p className={`mb-6 ${componentUtils.text.secondary}`}>
              Arthur is happy to join book club discussions, either in person or virtually. He believes that the best conversations happen when people come together to share their own stories and perspectives.
            </p>
            <p className={`${componentUtils.text.secondary}`}>
              &quot;Every reader brings something unique to the story. I learn as much from the discussions as I hope others do.&quot;
            </p>
          </Card>
          <Card className="text-center">
            <div className={`w-12 h-12 bg-burgundy/10 rounded-xl mx-auto mb-4 flex items-center justify-center text-burgundy group-hover:bg-burgundy group-hover:text-white transition-colors duration-200`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className={`text-2xl font-serif font-bold mb-4 ${componentUtils.text.primary}`}>
              Educational Institutions
            </h3>
            <p className={`mb-6 ${componentUtils.text.secondary}`}>
              With over three decades of teaching experience, Arthur is particularly passionate about working with students and educators. He offers workshops, lectures, and classroom visits.
            </p>
            <p className={`${componentUtils.text.secondary}`}>
              &quot;Education is not just about facts and dates. It&apos;s about understanding the human experience and our shared responsibility to remember.&quot;
            </p>
          </Card>
          <Card className="text-center">
            <div className={`w-12 h-12 bg-burgundy/10 rounded-xl mx-auto mb-4 flex items-center justify-center text-burgundy group-hover:bg-burgundy group-hover:text-white transition-colors duration-200`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h3 className={`text-2xl font-serif font-bold mb-4 ${componentUtils.text.primary}`}>
              Community Events
            </h3>
            <p className={`mb-6 ${componentUtils.text.secondary}`}>
              Arthur frequently participates in community events, memorial services, and cultural programs. He believes in the power of community to heal and remember.
            </p>
            <p className={`${componentUtils.text.secondary}`}>
              &quot;We are stronger together. Our stories connect us across time and space.&quot;
            </p>
          </Card>
        </div>
        <div className="mt-12 text-center">
          <Link href="/contact">
            <CTAButton variant="secondary" size="lg">
              Request Speaking Engagement
            </CTAButton>
          </Link>
        </div>
      </Section>
    </main>
  );
}
