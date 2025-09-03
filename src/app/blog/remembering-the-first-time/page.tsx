import { Metadata } from "next";
import { Section } from "@/components/Section";
import { componentUtils } from "@/lib/design-system";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Remembering the First Time - Arthur M. Horwitz",
  description: "A personal story about the author's first experience riding a horse named Elsie, exploring themes of memory, first experiences, and personal growth.",
};

export default function RememberingTheFirstTimePage() {
  return (
    <main>
      {/* Hero Section */}
      <Section className={componentUtils.background.accent}>
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium bg-burgundy/10 text-burgundy`}>
              Personal Stories
            </span>
            <span className={`text-sm ${componentUtils.text.light}`}>
              December 25, 2024 • 6 min read
            </span>
          </div>
          <h1 className={`text-4xl font-serif font-bold sm:text-5xl mb-6 ${componentUtils.text.primary}`}>
            Remembering the First Time
          </h1>
          <p className={`text-xl max-w-4xl mx-auto ${componentUtils.text.secondary}`}>
            A personal story about first experiences, unexpected connections, and the memories that shape us.
          </p>
        </div>
      </Section>

      {/* Article Content */}
      <Section className={componentUtils.background.primary}>
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className={`text-lg leading-relaxed ${componentUtils.text.secondary}`}>
            I knew my mother&apos;s rule. My only girlfriend options were the Jewish daughters of
            American-born or Holocaust survivor parents. The pickings were slim. Because of our low
            socioeconomic standing, I was shunned by daughters of the American-born. In contrast, I was
            shamelessly pursued by survivor daughters - and their mothers.
          </p>

          <p className={`${componentUtils.text.secondary}`}>
            Then, I met Elsie.
          </p>

          <p className={`${componentUtils.text.secondary}`}>
            Unlike the chestnuts, Elsie was Granny Clampett gray-and-white and barely 14 hands tall
            in horseshoes. If the grand stallions racing at Churchill Downs, Pimlico and Belmont were teased
            into their starting gates by prancing fillies, the sendoff for the gelded quarter horses about to
            enter the field of indoor-polo play was an arthritic nod of Elsie&apos;s head. The Borden cow had an
            equine body double.
          </p>

          <p className={`${componentUtils.text.secondary}`}>
            Words chalked onto the sideboard of her stall by a wise-guy Yalie said it all:
          </p>

          <div className="my-6 p-4 bg-burgundy/5 border-l-4 border-burgundy rounded-r-lg">
            <p className={`text-center font-mono text-lg ${componentUtils.text.primary}`}>
              ELSIE<br />
              There ain&apos;t no udder
            </p>
          </div>

          <p className={`${componentUtils.text.secondary}`}>
            I imagined her surprise that Friday afternoon when she was gently roused from her
            position of modesty, haltered, stripped of her blanket and brought to the awaiting saddle, bit,
            bridle and belly-belt station. The sound of nickering stall neighbors reverberated in her ears as
            she was led into the arena. And then she waited.
          </p>

          <p className={`${componentUtils.text.secondary}`}>
            As it turned out, for me.
          </p>

          <p className={`${componentUtils.text.secondary}`}>
            Squeezed into my long underwear, soiled dungarees, cheap rubber work boots, an itchy
            red-and-black-checked wool shirt and stained black winter jacket, I was scrubbing tack when
            suddenly and unexpectedly, I received a tap on the shoulder.
          </p>

          <p className={`${componentUtils.text.secondary}`}>
            Skull and Bones? Scroll and Key? Wolf&apos;s Head? Did Yale have a Pitchfork and
            Wheelbarrow secret society?
          </p>

          <p className={`${componentUtils.text.secondary}`}>
            &ldquo;Follow me,&rdquo; Bob the groom beckoned.
          </p>

          <p className={`${componentUtils.text.secondary}`}>
            We walked between parallel rows of still-nickering horses and advanced toward the
            arena. There, she stood, gently positioned by a more experienced barn hand for me to mount.
            Until now, all I had done was watch others, occasionally amused but mostly trying to commit
            their moves to memory. There were no liability waivers, consent forms or extra precautions.
          </p>

          <p className={`${componentUtils.text.secondary}`}>
            Tilting backward, I thrust my left foot into the dangling stirrup and swung my right leg
            and hip over her sagging back. I was now erect in the saddle, reins in hand. A gentle kick to her
            protruding ribs brought the desired response - movement. At first, a slow walk. Another rib poke
            shifted her into trot mode, giving me a sudden and sustained saddle spanking as I tried to match
            her rhythm. Squeezing my thighs ever more tightly around her girth, I delivered a final kick that
            propelled us forward, enveloped in the ecstasy of an easy canter. It was all over in less than 10
            minutes.
          </p>

          <p className={`${componentUtils.text.secondary}`}>
            Yes, I remember my first time. I was 13 years old. Her name was Elsie.
          </p>

          <div className="mt-12 pt-8 border-t border-brown/20">
            <p className={`text-sm ${componentUtils.text.light}`}>
              <strong>About the Author:</strong> Arthur M. Horwitz is the author of &ldquo;Dual Identities: Living in Meier&apos;s Shadow,&rdquo; 
              a memoir exploring second-generation trauma and identity formation. He is available for speaking engagements 
              and workshops on these topics.
            </p>
          </div>
        </div>
      </Section>

      {/* Navigation */}
      <Section className={componentUtils.background.secondary}>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link 
              href="/blog" 
              className={`inline-flex items-center font-medium transition-colors duration-200 ${componentUtils.text.accent} hover:text-burgundy/80`}
            >
              ← Back to Blog
            </Link>
            <Link 
              href="/blog/understanding-second-generation-trauma" 
              className={`inline-flex items-center font-medium transition-colors duration-200 ${componentUtils.text.accent} hover:text-burgundy/80`}
            >
              Next: Understanding Second-Generation Trauma: A Personal Journey →
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
