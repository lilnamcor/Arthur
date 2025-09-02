"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { SocialMediaLinks } from "@/components/SocialMediaLinks";
import { componentUtils } from "@/lib/design-system";

// Custom breakpoint styles for 1152px
const customBreakpoint = "min-width: 1152px";

// Main navigation items (always visible)
const mainNavigation = [
  { name: "Home", href: "/" },
  { name: "About the Author", href: "/author" },
  { name: "About the Book", href: "/book" },
  { name: "Blog", href: "/blog" },
  { name: "Media & Events", href: "/events" },
  { name: "Contact", href: "/contact" },
  { name: "Newsletter Sign Up", href: "/newsletter" },
];

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(80);
  const headerRef = useRef<HTMLElement>(null);

  // Combined navigation for mobile menu
  const mobileNavigation = [
    ...mainNavigation,
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

  const handleHeaderClick = (e: React.MouseEvent) => {
    // Don't close if clicking on interactive elements
    const target = e.target as HTMLElement;
    if (target.closest('button, a, [role="button"], [data-interactive]')) {
      return;
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <style jsx>{`
        @media (${customBreakpoint}) {
          .header-desktop-only {
            display: flex !important;
          }
          .header-mobile-only {
            display: none !important;
          }
          .nav-desktop {
            padding-top: 0 !important;
            padding-bottom: 1rem !important;
          }
        }
        @media (max-width: 1151px) {
          .header-desktop-only {
            display: none !important;
          }
          .header-mobile-only {
            display: flex !important;
          }
          .nav-desktop {
            padding-top: 1rem !important;
            padding-bottom: 1rem !important;
          }
        }
      `}</style>
      <header 
        ref={headerRef} 
        className="sticky top-0 z-50 w-full border-b border-brown/20 bg-parchment/95 backdrop-blur supports-[backdrop-filter]:bg-parchment/60"
        onClick={handleHeaderClick}
      >
        {/* Desktop title - centered above navigation */}
        <div className="header-desktop-only justify-center pt-3">
          <Link href="/" className="focus:outline-none focus:ring-0" onClick={() => setMobileMenuOpen(false)}>
            <span className="sr-only">{siteConfig.name}</span>
            <h1 className={`text-2xl lg:text-3xl font-serif font-bold whitespace-nowrap ${componentUtils.text.primary}`}>
              {siteConfig.name}
            </h1>
          </Link>
        </div>

        <nav 
          className="nav-desktop mx-auto flex w-full items-center justify-between px-6 pb-4 lg:px-8" 
          aria-label="Global"
        >
          {/* Mobile/tablet layout: Menu button on left, title centered */}
          <div className="header-mobile-only items-center">
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

          {/* Mobile/tablet title - centered */}
          <div className="header-mobile-only flex-1 justify-center">
            <Link href="/" className="focus:outline-none focus:ring-0" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">{siteConfig.name}</span>
              <h1 className={`text-xl font-serif font-bold whitespace-nowrap ${componentUtils.text.primary}`}>
                {siteConfig.name}
              </h1>
            </Link>
          </div>

          {/* Desktop navigation - centered horizontally on page */}
          <div className="header-desktop-only gap-x-8 items-center">
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
          </div>

          {/* Desktop social media links and CTA */}
          <div className="header-desktop-only flex-1 justify-end items-center gap-4">
            <SocialMediaLinks size="sm" />
            <Link
              href="/book"
              className="text-sm font-medium leading-6 bg-gradient-to-r from-burgundy to-brown hover:from-burgundy/90 hover:to-brown/90 px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer text-white shadow-sm hover:shadow-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              {new Date() < new Date('2026-05-19') ? 'Pre-Order Now' : 'Buy Now'}
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
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              style={{
                top: `${headerHeight}px`,
                maxHeight: `90dvh`
              }}
              className="fixed left-0 right-0 z-[101] w-full bg-parchment shadow-2xl border-b border-brown/20 overflow-y-auto"
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
                        <SocialMediaLinks size="md" />
                      </div>
                      <Link
                        href="/book"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-medium leading-7 bg-gradient-to-r from-burgundy to-brown hover:from-burgundy/90 hover:to-brown/90 transition-all duration-200 cursor-pointer text-white shadow-sm hover:shadow-md"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {new Date() < new Date('2026-05-19') ? 'Pre-Order Now' : 'Buy Now'}
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
    </>
  );
}
