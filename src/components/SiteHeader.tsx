"use client";

import { useState, useEffect, useRef, useLayoutEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { SocialMediaLinks } from "@/components/SocialMediaLinks";
import { SocialMediaDropdown } from "@/components/SocialMediaDropdown";
import { NavigationDropdown } from "@/components/NavigationDropdown";
import { componentUtils } from "@/lib/design-system";

// Main navigation items (always visible)
const mainNavigation = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
];

// Dropdown navigation items
const aboutDropdown = [
  { name: "Author", href: "/author", description: "Learn about Arthur M. Horwitz" },
  { name: "Book", href: "/book", description: "Discover the story behind the book" },
  { name: "Second Generation", href: "/second-generation", description: "Understanding second-generation Holocaust survivors and inherited trauma" },
  { name: "Themes", href: "/themes", description: "Explore key themes" },
];

const resourcesDropdown = [
  { name: "Events", href: "/events", description: "Upcoming speaking events" },
  { name: "Press", href: "/press", description: "Media coverage" },
  { name: "Contact", href: "/contact", description: "Get in touch" },
];

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(80);
  const [menuHeight, setMenuHeight] = useState(0);
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Combined navigation for mobile menu
  const mobileNavigation = [
    ...mainNavigation,
    ...aboutDropdown.map(item => ({ name: item.name, href: item.href })),
    ...resourcesDropdown.map(item => ({ name: item.name, href: item.href })),
  ];

  // Handle body scroll locking when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Restore body scroll
      document.body.style.overflow = '';
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Calculate header height
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        setHeaderHeight(height);
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    
    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  // Calculate menu height when it opens
  useEffect(() => {
    if (mobileMenuOpen && menuRef.current) {
      // Small delay to ensure content is rendered
      const timer = setTimeout(() => {
        if (menuRef.current) {
          const height = menuRef.current.scrollHeight;
          setMenuHeight(height);
        }
      }, 10);
      
      return () => clearTimeout(timer);
    }
  }, [mobileMenuOpen]);

  const handleHeaderClick = (e: React.MouseEvent) => {
    // Don't close if clicking on interactive elements
    const target = e.target as HTMLElement;
    if (target.closest('button, a, [role="button"], [data-interactive]')) {
      return;
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      ref={headerRef} 
      className="sticky top-0 z-50 w-full border-b border-brown/20 bg-parchment/95 backdrop-blur supports-[backdrop-filter]:bg-parchment/60"
      onClick={handleHeaderClick}
    >
      <nav 
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" 
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 focus:outline-none focus:ring-0" onClick={() => setMobileMenuOpen(false)}>
            <span className="sr-only">{siteConfig.name}</span>
            <h1 className={`text-xl font-serif font-bold ${componentUtils.text.primary}`}>
              {siteConfig.name}
            </h1>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className={`-m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 ${componentUtils.text.secondary} hover:bg-burgundy/10 hover:text-burgundy transition-colors duration-200 cursor-pointer`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close main menu" : "Open main menu"}
          >
            <span className="sr-only">{mobileMenuOpen ? "Close main menu" : "Open main menu"}</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8 lg:items-center">
          {/* Main navigation items */}
          {mainNavigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium leading-6 ${componentUtils.text.secondary} hover:text-burgundy transition-colors duration-200`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          
          {/* About dropdown */}
          <NavigationDropdown label="About" items={aboutDropdown} />
          
          {/* Resources dropdown */}
          <NavigationDropdown label="Resources" items={resourcesDropdown} />
        </div>

        {/* Desktop social media dropdown and CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          <SocialMediaDropdown />
          <Link
            href="/book"
            className="text-sm font-medium leading-6 bg-gradient-to-r from-burgundy to-brown hover:from-burgundy/90 hover:to-brown/90 px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer text-white shadow-sm hover:shadow-md"
            onClick={() => setMobileMenuOpen(false)}
          >
            Buy the Book
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay - only covers content area, not header */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                top: `${headerHeight}px`,
                height: `calc(100vh - ${headerHeight}px)`
              }}
              className="fixed left-0 right-0 z-[100] bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Mobile menu panel */}
            <motion.div
              ref={menuRef}
              initial={{ height: 0 }}
              animate={{ height: menuHeight || 0 }}
              exit={{ height: 0 }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              style={{
                top: `${headerHeight}px`,
                maxHeight: `calc(100vh - ${headerHeight}px)`
              }}
              className="fixed left-0 right-0 z-[101] w-full overflow-hidden bg-parchment shadow-2xl border-b border-brown/20"
            >
              <div className="px-6 py-6">
                <div className="flow-root">
                  <div className="-my-6 divide-y divide-brown/20">
                    <div className="space-y-1 py-2">
                      {mobileNavigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 ${componentUtils.text.secondary} hover:bg-burgundy/10 hover:text-burgundy transition-colors duration-200`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    <div className="py-6">
                      <div className="mb-6">
                        <p className={`text-sm mb-3 ${componentUtils.text.secondary}`}>Follow Arthur on social media</p>
                        <SocialMediaLinks size="sm" />
                      </div>
                      <Link
                        href="/book"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-medium leading-7 bg-gradient-to-r from-burgundy to-brown hover:from-burgundy/90 hover:to-brown/90 transition-all duration-200 cursor-pointer text-white shadow-sm hover:shadow-md"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Buy the Book
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
