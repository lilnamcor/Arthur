import { Metadata } from "next";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
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
      <Section className="bg-deep-gray/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-serif font-bold text-black sm:text-6xl mb-6">
              {siteConfig.book.title}
            </h1>
            <p className="text-xl text-deep-gray mb-6">
              {siteConfig.book.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#buy"
                className="inline-flex items-center justify-center rounded-md bg-sepia px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-sepia/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sepia focus:ring-offset-2"
              >
                Buy Now
              </Link>
              <Link
                href="/themes"
                className="inline-flex items-center justify-center rounded-md border border-deep-gray px-6 py-3 text-base font-medium text-deep-gray shadow-sm hover:bg-deep-gray hover:text-off-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-deep-gray focus:ring-offset-2"
              >
                Explore Themes
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[3/4] rounded-lg border border-deep-gray/20 overflow-hidden shadow-2xl">
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
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-serif font-bold text-black mb-6">
              About the Book
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-deep-gray mb-6">
                &quot;You hear nothing!&quot;
              </p>

              <p className="text-deep-gray mb-6">
                Like many young children of Holocaust survivors, Arthur hears too much. Sally Finkelstein Horwitz has a lot to say. About heroism and horror. Luck and loss. Resilience and remorse. Antisemitism and spineless American Jews. Hiding in closets or a bath tub, Arthur inhales the second-hand smoke of unfiltered tales she shares with friends and other survivors.
              </p>

              <p className="text-deep-gray mb-6">
                To cope with scenes of trauma, humiliation and death, she often fantasizes about an emotional reunion with her father and little brother, Meier. It is not to be. Reality intervenes.
              </p>

              <p className="text-deep-gray mb-6">
                &quot;This is a photo of my little brother. This is who you are named for!&quot; she insists.
              </p>

              <p className="text-deep-gray mb-6">
                But this clipped, iconic Holocaust image discovered in her wallet sleeve isn&apos;t, and there&apos;s no playing along. Insolence is punished with a decree - live two lives, yours and the one Meier never had. Resentment and frustration grow while navigating the real-world challenges of building a life, family and media industry career.
              </p>
            </div>
          </div>
          <div>
            <Card>
              <h3 className="text-xl font-serif font-bold text-black mb-4">Book Details</h3>
              <dl className="space-y-3">
                <div>
                  <dt className="font-semibold text-deep-gray">Title</dt>
                  <dd className="text-black">{siteConfig.book.title}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-deep-gray">Author</dt>
                  <dd className="text-black">{siteConfig.name}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-deep-gray">Publisher</dt>
                  <dd className="text-black">{siteConfig.book.publisher}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-deep-gray">Publication Date</dt>
                  <dd className="text-black">{siteConfig.book.publicationDate}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-deep-gray">ISBN</dt>
                  <dd className="text-black">{siteConfig.book.isbn}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-deep-gray">Pages</dt>
                  <dd className="text-black">240</dd>
                </div>
              </dl>
            </Card>
          </div>
        </div>
      </Section>

      {/* Early Praise */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-black sm:text-4xl mb-4">
            Early Praise
          </h2>
          <p className="text-lg text-deep-gray max-w-4xl mx-auto">
            What readers and critics are saying about this important work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {earlyPraise.map((praise, index) => (
            <Card key={index} className="text-center">
              <div className="mb-4">
                <svg className="w-8 h-8 text-sepia mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <blockquote className="text-deep-gray mb-4 italic">
                &quot;{praise.quote}&quot;
              </blockquote>
              <div>
                <p className="font-semibold text-black">{praise.author}</p>
                <p className="text-sm text-deep-gray">{praise.title}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Buy Section */}
      <Section id="buy" className="bg-sepia text-white">
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold sm:text-4xl mb-4">
            Get Your Copy Today
          </h2>
          <p className="text-lg text-white/90 max-w-4xl mx-auto mb-8">
            Available at your favorite booksellers and online retailers.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="bg-white text-black">
              <div className="text-center">
                <h3 className="text-lg font-serif font-bold mb-2">Amazon</h3>
                <p className="text-deep-gray mb-4">Available in hardcover, paperback, and e-book</p>
                <Link
                  href={siteConfig.book.buyLinks.amazon}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-sepia px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-sepia/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sepia focus:ring-offset-2"
                >
                  Buy on Amazon
                </Link>
              </div>
            </Card>

            <Card className="bg-white text-black">
              <div className="text-center">
                <h3 className="text-lg font-serif font-bold mb-2">Barnes & Noble</h3>
                <p className="text-deep-gray mb-4">Available in-store and online</p>
                <Link
                  href={siteConfig.book.buyLinks.barnesAndNoble}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-sepia px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-sepia/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sepia focus:ring-offset-2"
                >
                  Buy at B&N
                </Link>
              </div>
            </Card>

            <Card className="bg-white text-black">
              <div className="text-center">
                <h3 className="text-lg font-serif font-bold mb-2">IndieBound</h3>
                <p className="text-deep-gray mb-4">Support your local bookstore</p>
                <Link
                  href={siteConfig.book.buyLinks.indiebound}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-sepia px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-sepia/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sepia focus:ring-offset-2"
                >
                  Find Local Store
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </main>
  );
}
