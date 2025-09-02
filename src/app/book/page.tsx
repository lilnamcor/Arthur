import { Metadata } from "next";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import Endorsement from "@/components/Endorsement";
import { CTAButton } from "@/components/CTAButton";
import { componentUtils } from "@/lib/design-system";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Books About the Holocaust | Second Generation Holocaust Books | Dual Identities: Living in Meier's Shadow",
  description: "Discover one of the most important books about the Holocaust and second generation Holocaust trauma. 'Dual Identities: Living in Meier's Shadow' by Arthur M. Horwitz explores inherited trauma, Holocaust memory, and identity formation for children of survivors. Essential reading for understanding Holocaust impact across generations.",
  keywords: [
    "books about the holocaust",
    "holocaust books",
    "second generation holocaust books",
    "books about 2nd generation holocaust", 
    "holocaust survivor children books",
    "inherited trauma books",
    "Dual Identities Living in Meier's Shadow",
    "Arthur M. Horwitz",
    "second-generation trauma",
    "Holocaust memory",
    "children of holocaust survivors"
  ],
  openGraph: {
    title: "Books About the Holocaust | Second Generation Holocaust Books | Dual Identities: Living in Meier's Shadow",
    description: "Discover one of the most important books about the Holocaust and second generation Holocaust trauma. Essential reading for understanding Holocaust impact across generations.",
    type: "website",
    url: "https://arthurmyronhorwitz.com/book",
  },
};

const earlyPraise = [
  {
    quote: "The people in Arthur Horwitz's moving memoir all won my heart as they navigated Jewish life in America a generation after the Holocaust. Their humanity, their determination to survive and thrive, left me with hope in a newly challenging time.",
    author: "Paul Bass",
    title: "Founding Editor, The New Haven Independent; with Douglas Rae, author of Murder in The Model City: The Black Panthers, Yale and The Redemption of a Killer.",
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
              Books About the Holocaust: Second Generation Perspective
            </h1>
            <p className={`text-xl mb-6 ${componentUtils.text.secondary}`}>
              {siteConfig.book.subtitle} - One of the most important <strong>books about the Holocaust</strong> and <strong>second generation Holocaust trauma</strong> available today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton variant="primary" size="lg">
                Buy This Holocaust Book
              </CTAButton>
              <CTAButton variant="outline" size="lg">
                Explore Holocaust Themes
              </CTAButton>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl border border-brown/20 overflow-hidden shadow-xl bg-parchment">
              <Image
                src="/book-cover.jpg"
                alt="Dual Identities: Living in Meier's Shadow - Book about Holocaust and Second Generation Trauma"
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
          <div>
            <h2 className={`text-3xl font-serif font-bold mb-6 text-center ${componentUtils.text.primary}`}>
              About The Book
            </h2>
            <div className="prose prose-lg !max-w-none text-align-center">
              <p className={`mb-6 text-xl ${componentUtils.text.secondary}`}>
              A Faux Photo. A Heavy Burden. Two Lives – Forever Intertwined.
              </p>

              <p className={`mb-6 ${componentUtils.text.secondary}`}>
              “You hear nothing!”
              </p>

              <p className={`mb-6 ${componentUtils.text.secondary}`}>
              Like many young children of Holocaust survivors, Arthur hears too much.
              </p>

              <p className={`mb-6 ${componentUtils.text.secondary}`}>
              Sally Finkelstein Horwitz has a lot to say. About heroism and horror. Luck and loss. Resilience and remorse. Antisemitism and
spineless American Jews. Hiding in closets or a bath tub, Arthur inhales the second-hand smoke of unfiltered tales she shares with
friends and other survivors. To cope with scenes of trauma, humiliation and death, she often fantasizes about an emotional reunion
with her father and little brother, Meier. It is not to be. Reality intervenes.
              </p>

              <p className={`mb-6 ${componentUtils.text.secondary}`}>
              “This is a photo of my little brother. This is who you are named for!” she insists.
              </p>

              <p className={`mb-6 ${componentUtils.text.secondary}`}>
              But this clipped, iconic Holocaust image discovered in her wallet sleeve isn’t, and there’s no playing along. Insolence is punished
with a decree - live two lives, yours and the one Meier never had. Resentment and frustration grow while navigating the real-
world challenges of building a life, family and media industry career. Will there be an opportunity to reconcile with Meier? To
embrace his memory? To introduce him to a third generation of Horwitz Holocaust survivors?
              </p>

              <p className={`${componentUtils.text.secondary}`}>
              <strong><em>Dual Identities: Living in Meier’s Shadow</em></strong> expands the entire Holocaust memoir genre. It’s the catalyst that unshackles and
elevates the voices of children of survivors … to tell their own important stories, to grapple with intergenerational trauma. With
vivid, compelling, fast-paced and honest writing, <strong><em>Dual Identities: Living in Meier’s Shadow</em></strong> holds universal appeal for its themes
of coping, healing, reconciliation and remembrance.
              </p>
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
            <Endorsement
              key={index}
              quote={praise.quote}
              authorName={praise.author}
              authorCredentials={praise.title}
            />
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
