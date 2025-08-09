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
  title: "Arthur Myron Horwitz - Dual Identities: Living in Meir's Shadow",
  description: "A personal exploration of second-generation trauma and identity. Inheriting history, carrying its echoes.",
  keywords: ["Holocaust", "second generation", "trauma", "identity", "memory", "Arthur Myron Horwitz"],
  authors: [{ name: "Arthur Myron Horwitz" }],
  openGraph: {
    title: "Arthur Myron Horwitz - Dual Identities: Living in Meir's Shadow",
    description: "A personal exploration of second-generation trauma and identity. Inheriting history, carrying its echoes.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arthur Myron Horwitz - Dual Identities: Living in Meir's Shadow",
    description: "A personal exploration of second-generation trauma and identity. Inheriting history, carrying its echoes.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${merriweather.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-off-white text-black">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
