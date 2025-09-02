import Link from "next/link";
import { SocialMediaLinks } from "@/components/SocialMediaLinks";
import { siteConfig } from "@/config/site";
import { componentUtils } from "@/lib/design-system";

const navigation = {
  main: [
    { name: "About the Author", href: "/author" },
    { name: "About the Book", href: "/book" },
    { name: "Themes", href: "/themes" },
    { name: "Events", href: "/events" },
    { name: "Blog", href: "/blog" },
    { name: "Press", href: "/press" },
  ],
};

export function SiteFooter() {
  return (
    <footer className={`${componentUtils.background.dark}`}>
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-8 sm:py-12 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link href={item.href} className={`text-sm leading-6 text-gray-300 hover:text-burgundy transition-colors duration-200`}>
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        
        {/* Social Media Links */}
        <div className="mt-6 flex justify-center">
          <div className="text-center">
            <p className={`text-sm text-gray-400 mb-2`}>Follow Arthur on social media</p>
            <SocialMediaLinks size="md" className="justify-center" variant="footer" />
          </div>
        </div>
        
        {/* Contact Link */}
        <div className="mt-6 flex justify-center">
          <Link
            href="/contact"
            className={`text-sm leading-6 text-gray-300 hover:text-burgundy transition-colors duration-200`}
          >
            Contact
          </Link>
        </div>
        
        {/* Copyright and Legal Links */}
        <div className="mt-6 border-t border-gray-700 pt-6">
          <p className={`text-xs leading-5 text-gray-400 text-center`}>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="mt-3 flex justify-center space-x-6 text-sm">
            <Link href="/privacy" className={`text-gray-400 hover:text-burgundy transition-colors duration-200`}>
              Privacy Policy
            </Link>
            <Link href="/terms" className={`text-gray-400 hover:text-burgundy transition-colors duration-200`}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
