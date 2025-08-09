import { Metadata } from "next";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { CTAButton } from "@/components/CTAButton";
import { componentUtils } from "@/lib/design-system";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Second Generation Holocaust Survivors | Children of Holocaust Survivors | Inherited Trauma",
  description: "Explore the unique experiences of second-generation Holocaust survivors and children of Holocaust survivors. Arthur M. Horwitz's 'Dual Identities: Living in Meier's Shadow' offers a powerful perspective on inherited trauma, memory, and identity formation for children of survivors.",
  keywords: [
    "second generation holocaust survivors",
    "children of holocaust survivors",
    "inherited trauma",
    "second-generation trauma",
    "holocaust memory",
    "generational trauma",
    "family trauma",
    "jewish identity",
    "holocaust legacy",
    "survivor children",
    "trauma inheritance",
    "memory and identity",
    "holocaust impact on families",
    "second generation perspective",
    "holocaust survivor families"
  ],
  openGraph: {
    title: "Second Generation Holocaust Survivors | Children of Holocaust Survivors | Inherited Trauma",
    description: "Explore the unique experiences of second-generation Holocaust survivors and children of Holocaust survivors. Essential reading for understanding inherited trauma and identity formation.",
    type: "website",
    url: "https://arthurmyronhorwitz.com/second-generation",
  },
};

const survivorExperiences = [
  {
    title: "Inherited Trauma",
    description: "Understanding how trauma is passed down through generations and shapes the lives of children of survivors.",
  },
  {
    title: "Memory & Identity",
    description: "The complex relationship between personal and collective memory in shaping identity formation.",
  },
  {
    title: "Family Dynamics",
    description: "How the Holocaust continues to influence family relationships and communication patterns.",
  },
  {
    title: "Silence & Stories",
    description: "The power of breaking silence and the healing that comes from sharing family stories.",
  },
  {
    title: "Resilience & Healing",
    description: "Pathways to healing and building resilience while honoring family history.",
  },
  {
    title: "Jewish Identity",
    description: "How the Holocaust shapes Jewish identity and connection to community across generations.",
  },
];

const essentialReadings = [
  {
    title: "Dual Identities: Living in Meier's Shadow",
    author: "Arthur M. Horwitz",
    description: "A groundbreaking memoir exploring second-generation trauma and identity formation for children of Holocaust survivors.",
    featured: true,
  },
  {
    title: "The Inherited Heart",
    author: "Various Authors",
    description: "A collection of stories from children of Holocaust survivors, exploring the complex legacy of inherited trauma.",
    featured: false,
  },
  {
    title: "Memory and Identity: The Holocaust's Echo",
    author: "Various Authors",
    description: "Examining how Holocaust memory shapes identity formation across generations.",
    featured: false,
  },
];

export default function SecondGenerationPage() {
  return (
    <main>
      {/* Hero Section */}
      <Section className={componentUtils.background.accent}>
        <div className="text-center">
          <h1 className={`text-4xl font-serif font-bold sm:text-6xl mb-6 ${componentUtils.text.primary}`}>
            Second Generation Holocaust Survivors
          </h1>
          <p className={`text-xl max-w-4xl mx-auto mb-8 ${componentUtils.text.secondary}`}>
            Explore the unique experiences of <strong>children of Holocaust survivors</strong> and the profound impact of <strong>inherited trauma</strong> on identity formation, family dynamics, and personal growth. Discover how the echoes of history continue to shape lives across generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton variant="primary" size="lg">
              Explore Second Generation Stories
            </CTAButton>
            <CTAButton variant="outline" size="lg">
              Learn About Inherited Trauma
            </CTAButton>
          </div>
        </div>
      </Section>

      {/* Featured Book */}
      <Section className={componentUtils.background.primary}>
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-serif font-bold sm:text-4xl mb-4 ${componentUtils.text.primary}`}>
            A Groundbreaking Perspective on Second Generation Trauma
          </h2>
          <p className={`text-lg max-w-4xl mx-auto ${componentUtils.text.secondary}`}>
            One of the most important works exploring the experiences of <strong>children of Holocaust survivors</strong> available today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className={`text-2xl font-serif font-bold mb-4 ${componentUtils.text.primary}`}>
              Dual Identities: Living in Meier&apos;s Shadow
            </h3>
            <p className={`text-lg mb-6 ${componentUtils.text.secondary}`}>
              This groundbreaking memoir by Arthur M. Horwitz offers readers a unique window into the lasting impact of the Holocaust on families and communities. Through vivid, compelling, and honest writing, Horwitz shares his story of growing up with &ldquo;dual identities&rdquo; - his own life and the one his uncle Meier never had.
            </p>
            <p className={`mb-6 ${componentUtils.text.secondary}`}>
              As a child of Holocaust survivors, Horwitz explores the complex journey of identity formation, the weight of inherited trauma, and the profound ways in which history continues to shape the present. This essential work expands our understanding of <strong>second generation Holocaust survivors</strong> by giving voice to their unique experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/author">
                <CTAButton variant="secondary" size="lg" className="w-full sm:w-auto">
                  Learn More
                </CTAButton>
              </Link>
              <Link href="/book">
                <CTAButton variant="outline" size="lg" className="w-full sm:w-auto">
                  Buy Book
                </CTAButton>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-brown/20 overflow-hidden shadow-xl bg-parchment">
              <Image
                src="/book-cover.jpg"
                alt="Dual Identities: Living in Meier's Shadow - A memoir about second generation Holocaust survivors"
                width={400}
                height={533}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Key Experiences */}
      <Section className={componentUtils.background.secondary}>
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-serif font-bold sm:text-4xl mb-4 ${componentUtils.text.primary}`}>
            Understanding Second Generation Experiences
          </h2>
          <p className={`text-lg max-w-4xl mx-auto ${componentUtils.text.secondary}`}>
            The experiences of <strong>children of Holocaust survivors</strong> are unique and complex, shaped by inherited trauma, family dynamics, and the weight of history.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {survivorExperiences.map((experience) => (
            <Card key={experience.title} className="text-center">
              <h3 className={`text-lg font-serif font-bold mb-2 ${componentUtils.text.primary}`}>
                {experience.title}
              </h3>
              <p className={`text-sm ${componentUtils.text.secondary}`}>
                {experience.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Why This Matters */}
      <Section className={componentUtils.background.accent}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className={`text-3xl font-serif font-bold mb-6 ${componentUtils.text.primary}`}>
              Why Understanding Second Generation Trauma Matters
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className={`text-xl font-serif font-bold mb-2 ${componentUtils.text.primary}`}>
                  Breaking the Cycle
                </h3>
                <p className={`${componentUtils.text.secondary}`}>
                  Understanding <strong>inherited trauma</strong> helps break the cycle of suffering and creates pathways for healing across generations.
                </p>
              </div>
              <div>
                <h3 className={`text-xl font-serif font-bold mb-2 ${componentUtils.text.primary}`}>
                  Honoring Family History
                </h3>
                <p className={`${componentUtils.text.secondary}`}>
                  Children of survivors carry forward the stories and memories of their families, ensuring that the lessons of history are not forgotten.
                </p>
              </div>
              <div>
                <h3 className={`text-xl font-serif font-bold mb-2 ${componentUtils.text.primary}`}>
                  Building Resilience
                </h3>
                <p className={`${componentUtils.text.secondary}`}>
                  By understanding the impact of inherited trauma, individuals can develop greater resilience and create healthier family dynamics.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className={`text-3xl font-serif font-bold mb-6 ${componentUtils.text.primary}`}>
              Key Insights for Understanding
            </h2>
            <ul className={`space-y-3 ${componentUtils.text.secondary}`}>
              <li className="flex items-start">
                <span className="text-burgundy mr-2">•</span>
                The profound ways trauma shapes family communication and relationships
              </li>
              <li className="flex items-start">
                <span className="text-burgundy mr-2">•</span>
                How memory and identity are intertwined across generations
              </li>
              <li className="flex items-start">
                <span className="text-burgundy mr-2">•</span>
                The importance of breaking silence and sharing family stories
              </li>
              <li className="flex items-start">
                <span className="text-burgundy mr-2">•</span>
                Pathways to healing while honoring family history
              </li>
              <li className="flex items-start">
                <span className="text-burgundy mr-2">•</span>
                Building resilience and creating positive family legacies
              </li>
              <li className="flex items-start">
                <span className="text-burgundy mr-2">•</span>
                The universal lessons of compassion, strength, and hope
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Essential Readings */}
      <Section className={componentUtils.background.primary}>
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-serif font-bold sm:text-4xl mb-4 ${componentUtils.text.primary}`}>
            Essential Reading for Understanding Second Generation Experiences
          </h2>
          <p className={`text-lg max-w-4xl mx-auto ${componentUtils.text.secondary}`}>
            These works offer valuable insights into the experiences of <strong>children of Holocaust survivors</strong> and the broader impact of inherited trauma.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {essentialReadings.map((book) => (
            <Card key={book.title} className={book.featured ? "ring-2 ring-burgundy" : ""}>
              <h3 className={`text-lg font-serif font-bold mb-2 ${componentUtils.text.primary}`}>
                {book.title}
              </h3>
              <p className={`text-sm font-medium mb-2 ${componentUtils.text.secondary}`}>
                by {book.author}
              </p>
              <p className={`text-sm ${componentUtils.text.secondary}`}>
                {book.description}
              </p>
              {book.featured && (
                <div className="mt-4">
                  <span className="inline-block bg-burgundy text-white px-3 py-1 rounded-full text-xs font-medium">
                    Featured
                  </span>
                </div>
              )}
            </Card>
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <Section className={componentUtils.background.accent}>
        <div className="text-center">
          <h2 className={`text-3xl font-serif font-bold sm:text-4xl mb-4 ${componentUtils.text.primary}`}>
            Begin Your Journey of Understanding
          </h2>
          <p className={`text-lg max-w-4xl mx-auto mb-8 ${componentUtils.text.secondary}`}>
            Start with Arthur M. Horwitz&apos;s groundbreaking memoir about <strong>second generation Holocaust survivors</strong> - &ldquo;Dual Identities: Living in Meier&apos;s Shadow.&rdquo;
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton variant="primary" size="lg">
              Get Your Copy Today
            </CTAButton>
            <CTAButton variant="outline" size="lg">
              Learn More About the Author
            </CTAButton>
          </div>
        </div>
      </Section>
    </main>
  );
}
