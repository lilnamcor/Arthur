import { Metadata } from "next";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { CTAButton } from "@/components/CTAButton";
import { componentUtils } from "@/lib/design-system";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Books About the Holocaust | Second Generation Holocaust Books | Essential Reading Guide",
  description: "Discover the most important books about the Holocaust and second generation Holocaust trauma. This comprehensive guide explores inherited trauma, Holocaust memory, and identity formation for children of survivors. Essential reading for understanding Holocaust impact across generations.",
  keywords: [
    "books about the holocaust",
    "holocaust books",
    "second generation holocaust books",
    "books about 2nd generation holocaust",
    "holocaust survivor children books",
    "inherited trauma books",
    "second-generation trauma",
    "Holocaust memory",
    "children of holocaust survivors",
    "holocaust impact on families",
    "trauma inheritance",
    "jewish identity",
    "holocaust education",
    "survivor stories",
    "holocaust legacy",
    "family trauma",
    "generational trauma",
    "holocaust memoir",
    "second generation trauma books"
  ],
  openGraph: {
    title: "Books About the Holocaust | Second Generation Holocaust Books | Essential Reading Guide",
    description: "Discover the most important books about the Holocaust and second generation Holocaust trauma. Essential reading for understanding Holocaust impact across generations.",
    type: "article",
    url: "https://arthurmyronhorwitz.com/blog/books-about-holocaust-second-generation",
  },
};

export default function BooksAboutHolocaustPage() {
  return (
    <main>
      {/* Hero Section */}
      <Section className={componentUtils.background.accent}>
        <div className="text-center">
          <h1 className={`text-4xl font-serif font-bold sm:text-6xl mb-6 ${componentUtils.text.primary}`}>
            Books About the Holocaust: A Comprehensive Guide to Second Generation Trauma
          </h1>
          <p className={`text-xl max-w-4xl mx-auto ${componentUtils.text.secondary}`}>
            Discover the most important <strong>books about the Holocaust</strong> and <strong>second generation Holocaust books</strong> that explore inherited trauma, Holocaust memory, and identity formation for children of survivors.
          </p>
        </div>
      </Section>

      {/* Introduction */}
      <Section className={componentUtils.background.primary}>
        <div className="prose prose-lg max-w-none">
          <h2 className={`text-3xl font-serif font-bold mb-6 ${componentUtils.text.primary}`}>
            Understanding the Importance of Holocaust Books
          </h2>
          <p className={`mb-6 ${componentUtils.text.secondary}`}>
            <strong>Books about the Holocaust</strong> serve as essential tools for understanding one of the most devastating periods in human history. These works not only document the atrocities of the Holocaust but also explore its lasting impact on survivors, their families, and subsequent generations. Among the most important categories of Holocaust literature are <strong>second generation Holocaust books</strong>, which offer unique perspectives on how trauma is inherited and shapes identity formation.
          </p>
          <p className={`mb-6 ${componentUtils.text.secondary}`}>
            The children of Holocaust survivors carry a complex legacy - one that includes not only the stories and memories passed down from their parents but also the psychological and emotional impact of inherited trauma. <strong>Books about 2nd generation holocaust</strong> experiences provide crucial insights into this phenomenon, helping readers understand how historical trauma continues to affect families and communities across generations.
          </p>
        </div>
      </Section>

      {/* Featured Book */}
      <Section className={componentUtils.background.secondary}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className={`text-3xl font-serif font-bold mb-6 ${componentUtils.text.primary}`}>
              Featured Book: Dual Identities: Living in Meier&apos;s Shadow
            </h2>
            <p className={`text-lg mb-6 ${componentUtils.text.secondary}`}>
              One of the most important <strong>books about the Holocaust</strong> and <strong>second generation Holocaust trauma</strong> available today, &ldquo;Dual Identities: Living in Meier&apos;s Shadow&rdquo; by Arthur M. Horwitz offers readers a unique window into the lasting impact of the Holocaust on families and communities.
            </p>
            <p className={`mb-6 ${componentUtils.text.secondary}`}>
              This groundbreaking memoir explores the complex journey of identity formation for children of Holocaust survivors, offering a unique perspective on how trauma is inherited and shapes entire families. Through vivid, compelling, and honest writing, Horwitz shares his story of growing up with &ldquo;dual identities&rdquo; - his own life and the one his uncle Meier never had.
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

      {/* Categories of Holocaust Books */}
      <Section className={componentUtils.background.primary}>
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-serif font-bold sm:text-4xl mb-4 ${componentUtils.text.primary}`}>
            Categories of Books About the Holocaust
          </h2>
          <p className={`text-lg max-w-4xl mx-auto ${componentUtils.text.secondary}`}>
            Explore different types of <strong>books about the Holocaust</strong> and <strong>second generation Holocaust books</strong> to deepen your understanding of this important historical period and its lasting impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <h3 className={`text-xl font-serif font-bold mb-4 ${componentUtils.text.primary}`}>
              Second Generation Holocaust Books
            </h3>
            <p className={`mb-4 ${componentUtils.text.secondary}`}>
              These essential <strong>books about 2nd generation holocaust</strong> experiences explore how trauma is inherited and shapes identity formation for children of survivors.
            </p>
            <ul className={`space-y-2 text-sm ${componentUtils.text.secondary}`}>
              <li>• Inherited trauma and its impact</li>
              <li>• Identity formation challenges</li>
              <li>• Family dynamics and relationships</li>
              <li>• Healing and reconciliation</li>
            </ul>
          </Card>

          <Card>
            <h3 className={`text-xl font-serif font-bold mb-4 ${componentUtils.text.primary}`}>
              Holocaust Survivor Memoirs
            </h3>
            <p className={`mb-4 ${componentUtils.text.secondary}`}>
              First-hand accounts from Holocaust survivors provide crucial historical documentation and personal perspectives on survival and resilience.
            </p>
            <ul className={`space-y-2 text-sm ${componentUtils.text.secondary}`}>
              <li>• Personal survival stories</li>
              <li>• Historical documentation</li>
              <li>• Resilience and hope</li>
              <li>• Memory and remembrance</li>
            </ul>
          </Card>

          <Card>
            <h3 className={`text-xl font-serif font-bold mb-4 ${componentUtils.text.primary}`}>
              Academic and Historical Works
            </h3>
            <p className={`mb-4 ${componentUtils.text.secondary}`}>
              Scholarly works that provide historical context, analysis, and understanding of the Holocaust&apos;s broader impact.
            </p>
            <ul className={`space-y-2 text-sm ${componentUtils.text.secondary}`}>
              <li>• Historical analysis</li>
              <li>• Sociological studies</li>
              <li>• Psychological impact research</li>
              <li>• Educational resources</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Why Read These Books */}
      <Section className={componentUtils.background.accent}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className={`text-3xl font-serif font-bold mb-6 ${componentUtils.text.primary}`}>
              Why Read Books About the Holocaust?
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className={`text-xl font-serif font-bold mb-2 ${componentUtils.text.primary}`}>
                  Understanding Historical Impact
                </h3>
                <p className={`${componentUtils.text.secondary}`}>
                  <strong>Books about the Holocaust</strong> help us understand the profound impact of this historical tragedy on individuals, families, and communities across generations. They provide crucial context for understanding how historical trauma continues to affect people today.
                </p>
              </div>
              <div>
                <h3 className={`text-xl font-serif font-bold mb-2 ${componentUtils.text.primary}`}>
                  Second Generation Perspective
                </h3>
                <p className={`${componentUtils.text.secondary}`}>
                  <strong>Second generation Holocaust books</strong> offer unique insights into how trauma is inherited and shapes identity formation for children of survivors. These works help readers understand the complex legacy of historical trauma.
                </p>
              </div>
              <div>
                <h3 className={`text-xl font-serif font-bold mb-2 ${componentUtils.text.primary}`}>
                  Healing and Reconciliation
                </h3>
                <p className={`${componentUtils.text.secondary}`}>
                  These important works help readers understand pathways to healing, reconciliation, and remembrance that hold universal appeal for anyone dealing with inherited trauma or historical legacy.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className={`text-3xl font-serif font-bold mb-6 ${componentUtils.text.primary}`}>
              Essential Reading for Understanding
            </h2>
            <ul className={`space-y-4 ${componentUtils.text.secondary}`}>
              <li className="flex items-start">
                <span className="text-burgundy mr-3 text-xl">•</span>
                <div>
                  <strong>The lasting impact of the Holocaust</strong> on families and communities across generations
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-burgundy mr-3 text-xl">•</span>
                <div>
                  <strong>How trauma is inherited</strong> and manifests in subsequent generations
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-burgundy mr-3 text-xl">•</span>
                <div>
                  <strong>Identity formation</strong> for children of survivors and the challenges they face
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-burgundy mr-3 text-xl">•</span>
                <div>
                  <strong>The importance of memory and remembrance</strong> in preserving historical truth
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-burgundy mr-3 text-xl">•</span>
                <div>
                  <strong>Pathways to healing and reconciliation</strong> for individuals and communities
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-burgundy mr-3 text-xl">•</span>
                <div>
                  <strong>The universal lessons</strong> of resilience, hope, and human dignity
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section className={componentUtils.background.primary}>
        <div className="text-center">
          <h2 className={`text-3xl font-serif font-bold sm:text-4xl mb-4 ${componentUtils.text.primary}`}>
            Start Your Journey with Holocaust Books
          </h2>
          <p className={`text-lg max-w-4xl mx-auto mb-8 ${componentUtils.text.secondary}`}>
            Begin with Arthur M. Horwitz&apos;s groundbreaking <strong>book about the Holocaust</strong> and <strong>second generation Holocaust trauma</strong> - &ldquo;Dual Identities: Living in Meier&apos;s Shadow.&rdquo; This essential work offers a unique perspective on inherited trauma and the lasting impact of the Holocaust on families and communities.
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
