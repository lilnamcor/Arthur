"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-off-white paper-grain overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-off-white/50" />
      
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
              className="text-4xl font-serif font-bold tracking-tight text-black sm:text-6xl"
            >
              Inheriting history, carrying its echoes.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-lg leading-8 text-deep-gray max-w-4xl mx-auto lg:mx-0"
            >
              A personal exploration of second-generation trauma and identity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-md bg-sepia px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-sepia/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sepia focus:ring-offset-2"
              >
                Learn More
              </Link>
              <Link
                href="/book#buy"
                className="inline-flex items-center justify-center rounded-md border border-deep-gray px-6 py-3 text-base font-medium text-deep-gray shadow-sm hover:bg-deep-gray hover:text-off-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-deep-gray focus:ring-offset-2"
              >
                Pre-Order / Buy
              </Link>
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
              <div className="absolute inset-0 rounded-lg border border-deep-gray/20 overflow-hidden">
                <Image
                  src="/book-cover.jpg"
                  alt={siteConfig.book.title + " book cover"}
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              
              {/* Book spine effect */}
              <div className="absolute -right-2 top-0 bottom-0 w-4 bg-gradient-to-b from-sepia to-muted-gold rounded-r-lg shadow-lg" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
