import { Metadata } from "next";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { CTAButton } from "@/components/CTAButton";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About the Author - Arthur Myron Horwitz",
  description: "Learn about Arthur Myron Horwitz, author of 'Dual Identities: Living in Meir's Shadow' and his journey of understanding second-generation trauma.",
};

export default function AuthorPage() {
  return (
    <main>
      {/* Hero Section */}
      <Section className="bg-deep-gray/5">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-black sm:text-6xl mb-6">
            About the Author
          </h1>
          <p className="text-xl text-deep-gray max-w-6xl mx-auto">
            Arthur Myron Horwitz is a writer, speaker, and advocate for understanding second-generation trauma and its profound impact on identity formation.
          </p>
        </div>
      </Section>

      {/* Author Bio */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Author Photo */}
          <div className="lg:col-span-1">
            <div className="rounded-lg border border-deep-gray/20 overflow-hidden shadow-lg">
              <Image
                src="/author-photo.jpg"
                alt="Arthur Myron Horwitz - professional headshot"
                width={400}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Bio Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-serif font-bold text-black mb-6">
                A Journey of Understanding
              </h2>
              
              <p className="text-deep-gray mb-6">
                Arthur Myron Horwitz was born into a family marked by the shadows of history. As the child of Holocaust survivors, 
                he grew up with the weight of his parents&apos; experiences—stories that were both spoken and unspoken, 
                shaping his understanding of identity, trauma, and the human capacity for resilience.
              </p>

              <p className="text-deep-gray mb-6">
                His father, Meir, survived the unimaginable horrors of the Holocaust, carrying with him not just the memories 
                of what he endured, but the profound impact those experiences would have on his children and grandchildren. 
                It was in this shadow that Arthur began his own journey of discovery and understanding.
              </p>

              <p className="text-deep-gray mb-6">
                &quot;Dual Identities: Living in Meier&apos;s Shadow&quot; represents the culmination of decades of reflection, research, 
                and personal growth. Through this work, Arthur explores the complex dynamics of second-generation trauma, 
                examining how the echoes of historical events continue to resonate through families and communities.
              </p>

              <p className="text-deep-gray mb-8">
                Today, Arthur dedicates his life to sharing these important stories, speaking at universities, 
                community centers, and cultural institutions about the lasting impact of trauma and the importance 
                of memory, understanding, and healing.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center rounded-md bg-sepia px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-sepia/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sepia focus:ring-offset-2"
                >
                  Read the Book
                </Link>
                <Link
                  href="/events"
                  className="inline-flex items-center justify-center rounded-md border border-deep-gray px-6 py-3 text-base font-medium text-deep-gray shadow-sm hover:bg-deep-gray hover:text-off-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-deep-gray focus:ring-offset-2"
                >
                  Speaking Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Press Kit */}
      <Section className="bg-deep-gray/5">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-black sm:text-4xl mb-4">
            Press Kit
          </h2>
          <p className="text-lg text-deep-gray max-w-4xl mx-auto">
            Download press materials, high-resolution photos, and biographical information for media inquiries.
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
              <h3 className="text-lg font-serif font-bold text-black mb-2">Author Photo</h3>
              <p className="text-deep-gray mb-4">High-resolution headshot for media use</p>
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
              <h3 className="text-lg font-serif font-bold text-black mb-2">Biography</h3>
              <p className="text-deep-gray mb-4">Detailed author biography and background</p>
              <CTAButton size="sm" variant="outline">
                Download
              </CTAButton>
            </div>
          </Card>

          <Card>
            <div className="text-center">
              <div className="w-12 h-12 bg-sepia rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-lg font-serif font-bold text-black mb-2">Press Release</h3>
              <p className="text-deep-gray mb-4">Official press release for the book</p>
              <CTAButton size="sm" variant="outline">
                Download
              </CTAButton>
            </div>
          </Card>
        </div>
      </Section>

      {/* Personal Side */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-black sm:text-4xl mb-4">
            A Personal Side
          </h2>
          <p className="text-lg text-deep-gray max-w-4xl mx-auto">
            Beyond the serious work of exploring trauma and identity, there&apos;s also room for joy, humor, and celebration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-serif font-bold text-black mb-4">
              Finding Light in the Darkness
            </h3>
            <p className="text-deep-gray mb-6">
              While the themes of &quot;Dual Identities&quot; are deeply serious and important, Arthur believes that healing 
              and growth also come through moments of joy, connection, and even humor. Life isn&apos;t just about 
              carrying the weight of history—it&apos;s also about celebrating the resilience of the human spirit.
            </p>
            <p className="text-deep-gray">
              Whether it&apos;s speaking at events, connecting with readers, or simply enjoying life&apos;s lighter moments, 
              Arthur finds that balance between honoring the past and embracing the present is essential to the 
              journey of understanding and healing.
            </p>
          </div>
          <div className="relative">
            <div className="rounded-lg border border-deep-gray/20 overflow-hidden shadow-lg">
              <Image
                src="/author-photo-silly.jpg"
                alt="Arthur Myron Horwitz in a fun costume at a party"
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Contact CTA */}
      <Section>
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold text-black sm:text-4xl mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-deep-gray max-w-4xl mx-auto mb-8">
            Interested in booking Arthur for a speaking engagement, interview, or media appearance? 
            We&apos;d love to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-sepia px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-sepia/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sepia focus:ring-offset-2"
          >
            Contact Arthur
          </Link>
        </div>
      </Section>
    </main>
  );
}
