import { Metadata } from "next";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { CTAButton } from "@/components/CTAButton";
import { componentUtils } from "@/lib/design-system";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About the Book - Dual Identities: Living in Meier's Shadow",
  description: "Explore the themes, content, and significance of 'Dual Identities: Living in Meier's Shadow' by Arthur M. Horwitz.",
};

const earlyPraise = [
  {
    quote: "Dual Identities is an insightful, personal memoir of a Holocaust topic not often explored: growing up as a child of a Survivor. In this case, the child, Arthur Horwitz, becomes a highly successful American Jewish journalist/publisher, all the while, contending with a constant personal rival. Although the rival identity is a metaphor for his mother's ordeal as a survivor, it leaves a deep impact upon the author and directly shapes his life and career. Among the thousands of books about the Holocaust, Dual Identities is one that presents a unique, distinctive and thoughtful perspective about the impact of the Holocaust upon children of survivors.",
    author: "Mike Smith",
    title: "Former director, Walter P. Reuther Library of Labor & Urban Affairs, Wayne State University; principal archivist, Bentley Historical Library, University of Michigan",
  },
  {
    quote: "Dual Identities is an inspiring heart-warming story – at times heart-wrenching story – that takes readers on the journey of recovery from tragedy and the importance of memory, love and compassion. Arthur Horwitz accomplishes this with utmost skill, insight and sensitivity.",
    author: "Berl Falbaum",
    title: "Author of the award-winning 'Shanghai Remembered' and seven other books",
  },
];

export default function BookPage() {
  return (
    <main>
      {/* Hero Section */}
      <Section className={componentUtils.background.accent}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className={`text-4xl font-serif font-bold sm:text-6xl mb-6 ${componentUtils.text.primary}`}>
              {siteConfig.book.title}
            </h1>
            <p className={`text-xl mb-6 ${componentUtils.text.secondary}`}>
              {siteConfig.book.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton variant="primary" size="lg">
                Buy Now
              </CTAButton>
              <CTAButton variant="outline" size="lg">
                Explore Themes
              </CTAButton>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl border border-brown/20 overflow-hidden shadow-xl bg-parchment">
              <Image
                src="/book-cover.jpg"
                alt={siteConfig.book.title + " book cover"}
                width={400}
                height={533}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Book Details */}
      <Section className={componentUtils.background.primary}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className={`text-3xl font-serif font-bold mb-6 ${componentUtils.text.primary}`}>
              About the Book
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className={`mb-6 ${componentUtils.text.secondary}`}>
                &quot;You hear nothing!&quot;
              </p>

              <p className={`mb-6 ${componentUtils.text.secondary}`}>
                Like many young children of Holocaust survivors, Arthur hears too much. Sally Finkelstein Horwitz has a lot to say. About heroism and horror. Luck and loss. Resilience and remorse. Antisemitism and spineless American Jews. Hiding in closets or a bath tub, Arthur inhales the second-hand smoke of unfiltered tales she shares with friends and other survivors.
              </p>

              <p className={`mb-6 ${componentUtils.text.secondary}`}>
                To cope with scenes of trauma, humiliation and death, she often fantasizes about an emotional reunion with her father and little brother, Meier. It is not to be. Reality intervenes.
              </p>

              <p className={`mb-6 ${componentUtils.text.secondary}`}>
                &quot;This is a photo of my little brother. This is who you are named for!&quot; she insists.
              </p>

              <p className={`mb-6 ${componentUtils.text.secondary}`}>
                But this clipped, iconic Holocaust image discovered in her wallet sleeve isn&apos;t, and there&apos;s no playing along. Insolence is punished with a decree - live two lives, yours and the one Meier never had. Resentment and frustration grow while navigating the real-world challenges of building a life, family and media industry career.
              </p>
            </div>
          </div>
          <div>
            <Card>
              <h3 className={`text-xl font-serif font-bold mb-4 ${componentUtils.text.primary}`}>Book Details</h3>
              <dl className="space-y-3">
                <div>
                  <dt className={`font-semibold ${componentUtils.text.secondary}`}>Title</dt>
                  <dd className={componentUtils.text.primary}>{siteConfig.book.title}</dd>
                </div>
                <div>
                  <dt className={`font-semibold ${componentUtils.text.secondary}`}>Author</dt>
                  <dd className={componentUtils.text.primary}>{siteConfig.name}</dd>
                </div>
                <div>
                  <dt className={`font-semibold ${componentUtils.text.secondary}`}>Publisher</dt>
                  <dd className={componentUtils.text.primary}>{siteConfig.book.publisher}</dd>
                </div>
                <div>
                  <dt className={`font-semibold ${componentUtils.text.secondary}`}>Publication Date</dt>
                  <dd className={componentUtils.text.primary}>{siteConfig.book.publicationDate}</dd>
                </div>
                <div>
                  <dt className={`font-semibold ${componentUtils.text.secondary}`}>ISBN</dt>
                  <dd className={componentUtils.text.primary}>{siteConfig.book.isbn}</dd>
                </div>
                <div>
                  <dt className={`font-semibold ${componentUtils.text.secondary}`}>Pages</dt>
                  <dd className={componentUtils.text.primary}>240</dd>
                </div>
              </dl>
            </Card>
          </div>
        </div>
      </Section>

      {/* Early Praise */}
      <Section className={componentUtils.background.secondary}>
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-serif font-bold sm:text-4xl mb-4 ${componentUtils.text.primary}`}>
            Early Praise
          </h2>
          <p className={`text-lg max-w-4xl mx-auto ${componentUtils.text.secondary}`}>
            What readers and critics are saying about this important work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {earlyPraise.map((praise, index) => (
            <Card key={index} className="text-center">
              <div className="mb-4">
                <svg className="w-8 h-8 text-orange mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <blockquote className={`mb-4 italic ${componentUtils.text.secondary}`}>
                &quot;{praise.quote}&quot;
              </blockquote>
              <div>
                <p className={`font-semibold ${componentUtils.text.primary}`}>{praise.author}</p>
                <p className={`text-sm ${componentUtils.text.light}`}>{praise.title}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Buy Section */}
      <Section id="buy" className={componentUtils.background.accent}>
        <div className="text-center">
          <h2 className={`text-3xl font-serif font-bold sm:text-4xl mb-4 ${componentUtils.text.primary}`}>
            Get Your Copy Today
          </h2>
          <p className={`text-lg max-w-4xl mx-auto mb-8 ${componentUtils.text.secondary}`}>
            Available at your favorite booksellers and online retailers.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="bg-parchment text-black">
              <div className="text-center">
                <h3 className={`text-lg font-serif font-bold mb-2 ${componentUtils.text.primary}`}>Amazon</h3>
                <p className={`mb-4 ${componentUtils.text.secondary}`}>Available in hardcover, paperback, and e-book</p>
                <CTAButton variant="secondary" size="sm">
                  Buy on Amazon
                </CTAButton>
              </div>
            </Card>

            <Card className="text-black">
              <div className="text-center">
                <h3 className={`text-lg font-serif font-bold mb-2 ${componentUtils.text.primary}`}>Barnes & Noble</h3>
                <p className={`mb-4 ${componentUtils.text.secondary}`}>Available in-store and online</p>
                <CTAButton variant="secondary" size="sm">
                  Buy at B&N
                </CTAButton>
              </div>
            </Card>

            <Card className="bg-parchment text-black">
              <div className="text-center">
                <h3 className={`text-lg font-serif font-bold mb-2 ${componentUtils.text.primary}`}>IndieBound</h3>
                <p className={`mb-4 ${componentUtils.text.secondary}`}>Support your local bookstore</p>
                <CTAButton variant="secondary" size="sm">
                  Find Local Store
                </CTAButton>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </main>
  );
}
