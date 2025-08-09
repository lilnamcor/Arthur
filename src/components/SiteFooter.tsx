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
  social: [
    {
      name: "Twitter",
      href: "https://twitter.com/arthurhorwitz",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
    },
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
            <SocialMediaLinks size="md" className="justify-center" />
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
