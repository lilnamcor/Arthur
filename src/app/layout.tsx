import type { Metadata } from "next";
import { Merriweather, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { siteConfig } from "@/config/site";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Books About the Holocaust | Second Generation Holocaust Books | Arthur M. Horwitz - Dual Identities: Living in Meier's Shadow",
  description: "Discover powerful books about the Holocaust and second generation Holocaust trauma. Arthur M. Horwitz's groundbreaking memoir 'Dual Identities: Living in Meier's Shadow' explores inherited trauma, Holocaust memory, and identity formation for children of survivors. Essential reading for understanding Holocaust impact across generations.",
  keywords: [
    "books about the holocaust",
    "holocaust books",
    "second generation holocaust books",
    "books about 2nd generation holocaust",
    "holocaust survivor children books",
    "inherited trauma books",
    "second-generation trauma",
    "Holocaust memory", 
    "inherited trauma",
    "identity formation",
    "Arthur M. Horwitz",
    "Dual Identities",
    "Meier's Shadow",
    "Holocaust survivor children",
    "trauma healing",
    "memory and identity",
    "Jewish history",
    "resilience",
    "healing journey",
    "family legacy",
    "historical trauma",
    "holocaust memoir",
    "second generation trauma books",
    "holocaust impact on families",
    "children of holocaust survivors",
    "holocaust legacy",
    "trauma inheritance",
    "jewish identity",
    "holocaust education",
    "survivor stories"
  ],
  authors: [{ name: "Arthur M. Horwitz" }],
  openGraph: {
    title: "Books About the Holocaust | Second Generation Holocaust Books | Arthur M. Horwitz",
    description: "Discover powerful books about the Holocaust and second generation Holocaust trauma. Arthur M. Horwitz's groundbreaking memoir explores inherited trauma, Holocaust memory, and identity formation for children of survivors.",
    type: "website",
    locale: "en_US",
    url: "https://arthurmyronhorwitz.com",
    siteName: "Arthur M. Horwitz - Holocaust Books & Second Generation Trauma",
    images: [
      {
        url: "https://arthurmyronhorwitz.com/book-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Dual Identities: Living in Meier's Shadow - Book about Holocaust and Second Generation Trauma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Books About the Holocaust | Second Generation Holocaust Books | Arthur M. Horwitz",
    description: "Discover powerful books about the Holocaust and second generation Holocaust trauma. Essential reading for understanding Holocaust impact across generations.",
    creator: siteConfig.social.twitter,
    images: ["https://arthurmyronhorwitz.com/book-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://arthurmyronhorwitz.com",
  },
  other: {
    "google-site-verification": "your-verification-code-here",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Book",
    "name": "Dual Identities: Living in Meier's Shadow",
    "author": {
      "@type": "Person",
      "name": "Arthur M. Horwitz"
    },
    "description": "A groundbreaking memoir exploring second-generation trauma and identity formation for children of Holocaust survivors. This powerful book about the Holocaust offers a unique perspective on inherited trauma and the lasting impact of the Holocaust on families.",
    "publisher": {
      "@type": "Organization",
      "name": "Independent Publisher"
    },
    "datePublished": "2024",
    "isbn": "978-0-000000-0-0",
    "genre": ["Memoir", "Holocaust Literature", "Second Generation Trauma", "Jewish History"],
    "keywords": "books about the holocaust, second generation holocaust books, books about 2nd generation holocaust, holocaust survivor children books, inherited trauma books",
    "url": "https://arthurmyronhorwitz.com/book",
    "image": "https://arthurmyronhorwitz.com/book-cover.jpg",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://arthurmyronhorwitz.com"
    }
  };

  return (
    <html lang="en" className={`${merriweather.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-parchment text-charcoal">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
