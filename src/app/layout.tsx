import type { Metadata } from "next";
import { Merriweather, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

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
  title: "Arthur M. Horwitz - Dual Identities: Living in Meier's Shadow | Second-Generation Trauma, Holocaust Memory, Identity",
  description: "A personal exploration of second-generation trauma and identity. Inheriting history, carrying its echoes. Discover Arthur M. Horwitz's groundbreaking memoir about Holocaust memory, inherited trauma, and the journey of healing and understanding.",
  keywords: [
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
    "historical trauma"
  ],
  authors: [{ name: "Arthur M. Horwitz" }],
  openGraph: {
    title: "Arthur M. Horwitz - Dual Identities: Living in Meier's Shadow",
    description: "A personal exploration of second-generation trauma and identity. Inheriting history, carrying its echoes.",
    type: "website",
    locale: "en_US",
    url: "https://arthurmyronhorwitz.com",
    siteName: "Arthur M. Horwitz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arthur M. Horwitz - Dual Identities: Living in Meier's Shadow",
    description: "A personal exploration of second-generation trauma and identity. Inheriting history, carrying its echoes.",
    creator: "@arthurhorwitz",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://arthurmyronhorwitz.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${merriweather.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-parchment text-charcoal">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
