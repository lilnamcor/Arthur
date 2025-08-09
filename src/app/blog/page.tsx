import { Metadata } from "next";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { CTAButton } from "@/components/CTAButton";
import { StayConnected } from "@/components/StayConnected";
import { componentUtils } from "@/lib/design-system";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog - Arthur M. Horwitz",
  description: "Insights, reflections, and stories about second-generation trauma, identity, and healing.",
};

const categories = [
  "Second-Generation Trauma",
  "Memory & Identity",
  "Healing & Understanding",
  "Family Stories",
  "Historical Context",
  "Book Updates",
];

const blogPosts = [
  {
    slug: "understanding-second-generation-trauma",
    title: "Understanding Second-Generation Trauma: A Personal Journey",
    excerpt: "Exploring how trauma is inherited and its profound impact on identity formation for children of survivors.",
    category: "Second-Generation Trauma",
    date: "December 15, 2024",
    readTime: "8 min read",
    featured: true,
  },
  {
    slug: "memory-identity-formation",
    title: "Memory and Identity: The Complex Relationship",
    excerpt: "How our memories shape our identity, especially when those memories are inherited rather than experienced directly.",
    category: "Memory & Identity",
    date: "December 10, 2024",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "healing-pathways",
    title: "Pathways to Healing: Stories of Resilience",
    excerpt: "Personal stories and strategies for healing from second-generation trauma and finding peace with inherited history.",
    category: "Healing & Understanding",
    date: "December 5, 2024",
    readTime: "10 min read",
    featured: false,
  },
  {
    slug: "family-stories-legacy",
    title: "Family Stories: Carrying the Legacy Forward",
    excerpt: "The importance of preserving and sharing family stories, even when they contain difficult truths.",
    category: "Family Stories",
    date: "November 30, 2024",
    readTime: "7 min read",
    featured: false,
  },
  {
    slug: "historical-context-understanding",
    title: "Historical Context: Understanding the Past",
    excerpt: "How understanding historical context helps us make sense of our inherited trauma and family dynamics.",
    category: "Historical Context",
    date: "November 25, 2024",
    readTime: "9 min read",
    featured: false,
  },
  {
    slug: "book-updates-journey",
    title: "Book Updates: The Journey to Publication",
    excerpt: "Updates on the publication process and what readers can expect from 'Dual Identities: Living in Meier's Shadow'.",
    category: "Book Updates",
    date: "November 20, 2024",
    readTime: "5 min read",
    featured: false,
  },
];

export default function BlogPage() {
  return (
    <main>
      {/* Hero Section */}
      <Section className={componentUtils.background.accent}>
        <div className="text-center">
          <h1 className={`text-4xl font-serif font-bold sm:text-5xl mb-6 ${componentUtils.text.primary}`}>
            Blog & Insights
          </h1>
          <p className={`text-xl max-w-4xl mx-auto ${componentUtils.text.secondary}`}>
            Reflections, stories, and insights about second-generation trauma, identity formation, and the journey toward healing and understanding.
          </p>
        </div>
      </Section>

      {/* Featured Post */}
      <Section className={componentUtils.background.primary}>
        <div className="text-center mb-12">
          <h2 className={`text-2xl font-serif font-bold mb-4 ${componentUtils.text.primary}`}>
            Featured Article
          </h2>
        </div>
        {blogPosts.filter(post => post.featured).map((post) => (
          <Card key={post.slug} className="group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium bg-burgundy/10 text-burgundy`}>
                    {post.category}
                  </span>
                  <span className={`text-sm ${componentUtils.text.light}`}>
                    {post.date} • {post.readTime}
                  </span>
                </div>
                <h3 className={`text-2xl font-serif font-bold mb-4 ${componentUtils.text.primary}`}>
                  {post.title}
                </h3>
                <p className={`text-lg mb-6 ${componentUtils.text.secondary}`}>
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className={`inline-flex items-center font-medium transition-colors duration-200 ${componentUtils.text.accent} hover:text-burgundy/80`}
                >
                  Read full article
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="relative">
                <div className="aspect-video rounded-xl bg-gradient-to-br from-burgundy/10 to-brown/10 flex items-center justify-center">
                  <svg className="w-12 h-12 text-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </Section>

      {/* Categories */}
      <Section className={componentUtils.background.secondary}>
        <div className="text-center mb-8">
          <h2 className={`text-2xl font-serif font-bold mb-4 ${componentUtils.text.primary}`}>
            Explore by Category
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-navy/10 text-navy hover:bg-orange hover:text-white transition-colors duration-200 cursor-pointer"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </Section>

      {/* Blog Posts Grid */}
      <Section className={componentUtils.background.primary}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.filter(post => !post.featured).map((post) => (
            <Card key={post.slug} className="hover:shadow-lg transition-shadow duration-200">
              <div className="h-48 bg-navy/10 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-navy/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="flex items-center space-x-4 mb-3">
                <span className={`text-sm font-semibold ${componentUtils.text.accent}`}>{post.category}</span>
                <span className={`text-sm ${componentUtils.text.secondary}`}>{post.readTime}</span>
              </div>
              <h3 className={`text-xl font-serif font-bold mb-3 ${componentUtils.text.primary}`}>
                {post.title}
              </h3>
              <p className={`mb-4 ${componentUtils.text.secondary}`}>
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className={`text-sm ${componentUtils.text.secondary}`}>{post.date}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className={`font-medium transition-colors duration-200 ${componentUtils.text.accent} hover:text-orange/80`}
                >
                  Read more →
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Stay Connected Section */}
      <StayConnected 
        description="Subscribe to receive new blog posts, event updates, and insights about second-generation trauma and healing."
      />
    </main>
  );
}
