"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { SocialMediaLinks } from "@/components/SocialMediaLinks";
import { CTAButton } from "@/components/CTAButton";
import { componentUtils } from "@/lib/design-system";

export function Hero() {
  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${componentUtils.background.primary}`}>
      {/* Historical gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-white to-gray-100 historical-texture" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`text-4xl font-serif font-bold tracking-tight sm:text-6xl ${componentUtils.text.primary}`}
            >
              Inheriting history, carrying its echoes.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`mt-6 text-lg leading-8 max-w-4xl mx-auto lg:mx-0 ${componentUtils.text.secondary}`}
            >
              A personal exploration of second-generation trauma and identity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <CTAButton variant="primary" size="lg">
                Buy the Book Now
              </CTAButton>
              <CTAButton variant="outline" size="lg">
                Learn More
              </CTAButton>
            </motion.div>

            {/* Social Media Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 flex justify-center lg:justify-start"
            >
              <div className="text-center lg:text-left">
                <p className={`text-sm mb-3 ${componentUtils.text.secondary}`}>Follow Arthur on social media</p>
                <SocialMediaLinks size="sm" />
              </div>
            </motion.div>
          </motion.div>

          {/* Book Cover */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-80 h-96 lg:w-96 lg:h-[500px] shadow-2xl">
              {/* Book cover image */}
              <div className="absolute inset-0 rounded-2xl border border-brown/20 overflow-hidden bg-parchment shadow-xl">
                <Image
                  src="/book-cover.jpg"
                  alt={siteConfig.book.title + " book cover"}
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              
              {/* Historical book spine effect */}
              <div className="absolute -right-2 top-0 bottom-0 w-4 bg-gradient-to-b from-burgundy to-brown rounded-r-xl shadow-lg" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
