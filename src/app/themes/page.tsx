import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { CTAButton } from "@/components/CTAButton";
import { componentUtils } from "@/lib/design-system";

export const metadata: Metadata = {
  title: "Themes - Dual Identities: Living in Meir's Shadow",
  description: "Explore the central themes of second-generation trauma, memory, identity, and legacy in Arthur Myron Horwitz's work.",
};

const themes = [
  {
    title: "Second-Generation Trauma",
    subtitle: "The Inherited Weight of History",
    description: "How the trauma experienced by Holocaust survivors continues to affect their children and grandchildren, shaping identity, relationships, and worldview.",
    content: `
      Second-generation trauma represents one of the most profound and complex legacies of the Holocaust. 
      Unlike direct trauma, which is experienced firsthand, second-generation trauma is inherited—passed down 
      through stories, silences, behaviors, and the very atmosphere of a home shaped by survival.
      
      Children of survivors often grow up with an acute awareness of their parents' suffering, even when 
      the details remain unspoken. This awareness can manifest in various ways: a heightened sense of 
      responsibility, an overwhelming need to succeed or to justify survival, or a deep-seated fear of 
      history repeating itself.
      
      The trauma is not merely psychological—it's embedded in the very fabric of family life, in the 
      way parents interact with their children, in the stories that are told and those that remain 
      hidden, in the values that are passed down and the fears that are inherited.
    `,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Memory and Identity",
    subtitle: "The Stories That Shape Us",
    description: "The complex relationship between personal and collective memory, and how these memories shape our sense of self and belonging.",
    content: `
      Memory is not simply a record of past events—it's an active, living force that shapes our 
      understanding of who we are and where we belong. For children of survivors, memory operates 
      on multiple levels: the personal memories of their own experiences, the inherited memories 
      of their parents' suffering, and the collective memory of a community that has endured 
      unimaginable loss.
      
      These memories don't exist in isolation. They interact, overlap, and sometimes conflict, 
      creating a complex tapestry of identity that is both deeply personal and profoundly connected 
      to a larger historical narrative.
      
      The challenge for second-generation individuals is to find a way to honor these memories 
      while also forging their own path, to acknowledge the weight of history while also claiming 
      their own agency and identity.
    `,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "The Echoes of Trauma",
    subtitle: "How Past Suffering Resonates in the Present",
    description: "Examining how trauma echoes through generations, affecting not just individuals but entire families and communities.",
    content: `
      Trauma doesn't end with the individual who experienced it. Like ripples in a pond, it spreads 
      outward, affecting everyone it touches. For survivors of the Holocaust, the trauma they endured 
      didn't simply disappear when the war ended—it became part of who they were, and in turn, 
      part of who their children would become.
      
      These echoes can manifest in countless ways: in the way parents raise their children, in the 
      stories that are told and those that are kept secret, in the fears and anxieties that are 
      passed down like family heirlooms, in the way children understand their place in the world.
      
      Understanding these echoes is not about assigning blame or dwelling in the past—it's about 
      recognizing the profound ways in which history continues to shape our present, and finding 
      ways to honor that history while also moving forward.
    `,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
      </svg>
    ),
  },
  {
    title: "Breaking the Silence",
    subtitle: "The Power of Speaking and Listening",
    description: "The importance of breaking the silence around trauma and the healing that can come from sharing our stories.",
    content: `
      For many survivors and their families, silence has been both a protective mechanism and a 
      source of pain. The unspeakable nature of the Holocaust made it difficult to find words 
      to describe what had been experienced, and the fear of burdening children with traumatic 
      details often led to silence.
      
      But silence can also be a form of suffering. When stories remain untold, when experiences 
      remain unacknowledged, the pain doesn't disappear—it simply goes underground, manifesting 
      in other ways: in anxiety, in depression, in difficulties with relationships, in a sense 
      of disconnection from one's own history and identity.
      
      Breaking the silence is not about dwelling in the past or reopening old wounds—it's about 
      creating space for healing, for understanding, for connection. It's about acknowledging 
      the full complexity of our history and finding ways to carry it forward with dignity and hope.
    `,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
];

export default function ThemesPage() {
  return (
    <main>
      {/* Hero Section */}
      <Section className={componentUtils.background.accent}>
        <div className="text-center">
          <h1 className={`text-4xl font-serif font-bold sm:text-6xl mb-6 ${componentUtils.text.primary}`}>
            Central Themes
          </h1>
          <p className={`text-xl max-w-4xl mx-auto ${componentUtils.text.secondary}`}>
            Explore the profound themes that shape &quot;Dual Identities: Living in Meier&apos;s Shadow&quot; and the broader conversation about second-generation trauma, memory, and healing.
          </p>
        </div>
      </Section>

      {/* Themes Grid */}
      <Section className={componentUtils.background.primary}>
        <div className="grid grid-cols-1 gap-12">
          {themes.map((theme, index) => (
            <Card key={theme.title} className="group">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-burgundy/10 text-burgundy mb-6 group-hover:bg-burgundy group-hover:text-white transition-colors duration-200`}>
                    {theme.icon}
                  </div>
                  <h2 className={`text-2xl font-serif font-bold mb-2 ${componentUtils.text.primary}`}>
                    {theme.title}
                  </h2>
                  <h3 className={`text-lg font-medium mb-4 ${componentUtils.text.accent}`}>
                    {theme.subtitle}
                  </h3>
                  <p className={`${componentUtils.text.secondary}`}>
                    {theme.description}
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <div className="prose prose-lg max-w-none">
                    {theme.content.split('\n').map((paragraph, i) => (
                      <p key={i} className={`mb-4 ${componentUtils.text.secondary}`}>
                        {paragraph.trim()}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className={componentUtils.background.accent}>
        <div className="text-center">
          <h2 className={`text-3xl font-serif font-bold sm:text-4xl mb-4 ${componentUtils.text.primary}`}>
            Explore the Full Story
          </h2>
          <p className={`text-lg max-w-4xl mx-auto mb-8 ${componentUtils.text.secondary}`}>
            Dive deeper into these themes and discover how they unfold in Arthur&apos;s personal journey and the broader narrative of second-generation trauma.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <CTAButton variant="primary" size="lg">
                Read the Book
              </CTAButton>
            </Link>
            <Link href="/author">
              <CTAButton variant="outline" size="lg">
                About the Author
              </CTAButton>
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
