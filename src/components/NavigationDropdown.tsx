"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { componentUtils } from "@/lib/design-system";

interface NavigationDropdownProps {
  label: string;
  items: Array<{
    name: string;
    href: string;
    description?: string;
  }>;
}

export function NavigationDropdown({ label, items }: NavigationDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center cursor-pointer text-sm font-medium leading-6 ${componentUtils.text.secondary} hover:text-burgundy transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-burgundy/50 rounded-lg px-2 py-1`}
        aria-label={`${label} menu`}
        aria-expanded={isOpen}
      >
        {label}
        <svg 
          className={`ml-1 h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-56 bg-parchment rounded-lg shadow-lg border border-brown/20 py-2 z-50"
          >
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex flex-col px-4 py-2 text-sm text-slate hover:bg-burgundy/5 hover:text-burgundy transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                <span className="font-medium">{item.name}</span>
                {item.description && (
                  <span className="text-xs text-gray-500 mt-0.5">{item.description}</span>
                )}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
