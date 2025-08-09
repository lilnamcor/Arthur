import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";

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
      creating space for healing, for understanding, for connection. It's about honoring the 
      experiences of those who came before us while also claiming our own voice and our own story.
    `,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Healing and Understanding",
    subtitle: "The Journey Toward Wholeness",
    description: "The process of healing from inherited trauma and finding meaning and purpose in the face of historical suffering.",
    content: `
      Healing from inherited trauma is not about forgetting or moving on—it's about finding a way 
      to carry the weight of history while also living fully in the present. It's about honoring 
      the suffering of those who came before us while also claiming our own right to joy, to 
      love, to a meaningful life.
      
      This healing process is deeply personal and can take many forms. For some, it involves 
      learning more about their family history, about the specific experiences of their parents 
      or grandparents. For others, it involves finding ways to honor that history through 
      activism, through education, through art, or through simply living a life that honors 
      the sacrifices that were made.
      
      Healing is not a destination—it's a journey, one that requires patience, compassion, and 
      a willingness to sit with difficult emotions and complex questions. It's about finding 
      a way to be both a witness to history and an active participant in creating a better future.
    `,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Legacy and Responsibility",
    subtitle: "Carrying the Light Forward",
    description: "The responsibility that comes with inheriting history and the importance of passing on lessons of resilience and hope.",
    content: `
      With inheritance comes responsibility—not just to remember, but to act. For children of 
      survivors, this responsibility can feel overwhelming at times, as if the weight of history 
      rests entirely on their shoulders.
      
      But responsibility is not about carrying the burden alone—it's about finding ways to honor 
      the past while also building a better future. It's about using the lessons learned from 
      suffering to create more compassion, more understanding, more justice in the world.
      
      This responsibility can take many forms: educating others about the Holocaust and its 
      lessons, working to combat hatred and discrimination, supporting organizations that help 
      survivors and their families, or simply living a life that honors the resilience and 
      strength of those who came before us.
      
      The goal is not to be perfect or to have all the answers—it's to be present, to be 
      engaged, to be willing to learn and grow and to pass on the light of hope and resilience 
      to future generations.
    `,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function ThemesPage() {
  return (
    <main>
      {/* Hero Section */}
      <Section className="bg-deep-gray/5">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-black sm:text-6xl mb-6">
            Themes
          </h1>
          <p className="text-xl text-deep-gray max-w-6xl mx-auto">
            Explore the central themes that shape &quot;Dual Identities: Living in Meier&apos;s Shadow&quot; and 
            the profound questions of second-generation trauma, memory, identity, and legacy.
          </p>
        </div>
      </Section>

      {/* Themes Grid */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {themes.map((theme) => (
            <Card key={theme.title} className="hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-sepia rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  {theme.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-black mb-1">
                    {theme.title}
                  </h2>
                  <p className="text-sepia font-medium">{theme.subtitle}</p>
                </div>
              </div>
              
              <p className="text-deep-gray mb-6">
                {theme.description}
              </p>
              
              <div className="prose prose-sm max-w-none">
                {theme.content.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-deep-gray mb-4">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-sepia text-white">
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold sm:text-4xl mb-4">
            Explore These Themes Further
          </h2>
          <p className="text-lg text-white/90 max-w-4xl mx-auto mb-8">
            Dive deeper into these important themes by reading &quot;Dual Identities: Living in Meier&apos;s Shadow&quot; 
            and joining the conversation about second-generation trauma and identity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center rounded-md bg-deep-gray px-6 py-3 text-base font-medium text-off-white shadow-sm hover:bg-deep-gray/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-deep-gray focus:ring-offset-2"
            >
              Read the Book
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-white px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-white hover:text-sepia transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              Share Your Story
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
