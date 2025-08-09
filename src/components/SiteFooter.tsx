import Link from "next/link";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-off-white paper-grain">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-serif font-bold mb-4">{siteConfig.name}</h3>
            <p className="text-off-white/80">
              A personal exploration of second-generation trauma and identity. 
              Inheriting history, carrying its echoes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/author" className="text-off-white/80 hover:text-sepia transition-colors duration-200">
                  About the Author
                </Link>
              </li>
              <li>
                <Link href="/book" className="text-off-white/80 hover:text-sepia transition-colors duration-200">
                  About the Book
                </Link>
              </li>
              <li>
                <Link href="/themes" className="text-off-white/80 hover:text-sepia transition-colors duration-200">
                  Themes
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-off-white/80 hover:text-sepia transition-colors duration-200">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href={"mailto:" + siteConfig.contact.email}
                  className="text-off-white/80 hover:text-sepia transition-colors duration-200"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-off-white/80 hover:text-sepia transition-colors duration-200">
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 border-t border-deep-gray/20 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-off-white/60">
                © {currentYear} {siteConfig.name}. All rights reserved.
              </p>
            </div>
            
            {/* Remembrance line */}
            <div className="text-center">
              <p className="text-sm text-off-white/60 font-serif italic">
                &quot;Remember. Never forget.&quot;
              </p>
            </div>

            {/* Legal links */}
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm text-off-white/60 hover:text-sepia transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-off-white/60 hover:text-sepia transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
