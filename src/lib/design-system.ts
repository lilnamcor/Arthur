// Design System - Historical, respectful colors for Holocaust memoir
export const colors = {
  // Primary colors - Muted, historical, respectful
  primary: {
    charcoal: '#1a1a1a', // Deep charcoal - Primary text
    slate: '#374151',    // Muted slate - Secondary text
    burgundy: '#7c2d12', // Deep burgundy - Primary accent (respectful red)
    brown: '#92400e',    // Rich brown - Secondary accent
    cream: '#fef7ed',    // Warm cream - Background
    parchment: '#f5f1e8', // Aged parchment - Darker background
    white: '#ffffff',    // Pure white
  },
  // Accent colors - Historical gradients
  accent: {
    primary: '#7c2d12', // Burgundy
    secondary: '#92400e', // Brown
    tertiary: '#a16207', // Amber
    success: '#166534', // Dark green
    warning: '#a16207', // Amber
    error: '#991b1b', // Dark red
  },
  // Semantic colors
  semantic: {
    success: '#166534',
    warning: '#a16207',
    error: '#991b1b',
    info: '#1e40af',
  },
  // Utility colors
  utility: {
    white: '#FFFFFF',
    black: '#000000',
    gray: {
      50: '#fef7ed',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
    }
  }
} as const;

// Background variants - warm, historical backgrounds
export const backgroundVariants = {
  primary: 'bg-parchment',
  secondary: 'bg-parchment/80',
  subtle: 'bg-parchment/60',
  accent: 'bg-gradient-to-br from-burgundy/5 to-brown/5',
  dark: 'bg-charcoal',
  gradient: 'bg-gradient-to-br from-burgundy to-brown',
  warm: 'bg-gradient-to-br from-parchment to-cream',
} as const;

// Text color variants
export const textVariants = {
  primary: 'text-charcoal',
  secondary: 'text-slate',
  accent: 'text-burgundy',
  muted: 'text-gray-600',
  light: 'text-gray-500',
  white: 'text-white',
} as const;

export const buttonVariants = {
  primary: {
    base: 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer shadow-sm hover:shadow-md',
    colors: 'bg-gradient-to-r from-burgundy to-brown text-white hover:from-burgundy/90 hover:to-brown/90 focus:ring-burgundy',
    sizes: {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }
  },
  secondary: {
    base: 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer border shadow-sm hover:shadow-md',
    colors: 'bg-gradient-to-br from-parchment to-cream text-charcoal border-brown/40 hover:from-parchment/90 hover:to-cream/90 hover:border-brown/60 hover:shadow-lg focus:ring-burgundy/50 hover:scale-[1.02]',
    sizes: {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }
  },
  outline: {
    base: 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer border shadow-sm hover:shadow-md',
    colors: 'bg-transparent text-burgundy border-burgundy hover:bg-burgundy/5 hover:border-burgundy/80 focus:ring-burgundy',
    sizes: {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }
  },
  ghost: {
    base: 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
    colors: 'bg-transparent text-gray-600 hover:bg-parchment/60 hover:text-charcoal focus:ring-burgundy',
    sizes: {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }
  }
} as const;

export const cardVariants = {
  default: 'bg-parchment border border-brown/20 shadow-sm hover:shadow-md transition-all duration-200 rounded-xl',
  elevated: 'bg-parchment border border-brown/20 shadow-md hover:shadow-lg transition-all duration-200 rounded-xl',
  outlined: 'bg-parchment border-2 border-burgundy/20 shadow-sm hover:shadow-md transition-all duration-200 rounded-xl',
  filled: 'bg-burgundy/5 border border-burgundy/20 shadow-sm hover:shadow-md transition-all duration-200 rounded-xl',
  accent: 'bg-gradient-to-br from-burgundy/5 to-brown/5 border border-burgundy/20 shadow-sm hover:shadow-md transition-all duration-200 rounded-xl',
} as const;

export const sectionVariants = {
  default: 'py-16 lg:py-24',
  compact: 'py-12 lg:py-16',
  spacious: 'py-20 lg:py-32',
} as const;

// Utility function to combine classes
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

// Component-specific utilities
export const componentUtils = {
  // Button utilities
  button: {
    primary: (size: keyof typeof buttonVariants.primary.sizes = 'md') => 
      `${buttonVariants.primary.base} ${buttonVariants.primary.colors} ${buttonVariants.primary.sizes[size]}`,
    secondary: (size: keyof typeof buttonVariants.secondary.sizes = 'md') => 
      `${buttonVariants.secondary.base} ${buttonVariants.secondary.colors} ${buttonVariants.secondary.sizes[size]}`,
    outline: (size: keyof typeof buttonVariants.outline.sizes = 'md') => 
      `${buttonVariants.outline.base} ${buttonVariants.outline.colors} ${buttonVariants.outline.sizes[size]}`,
    ghost: (size: keyof typeof buttonVariants.ghost.sizes = 'md') => 
      `${buttonVariants.ghost.base} ${buttonVariants.ghost.colors} ${buttonVariants.ghost.sizes[size]}`,
  },
  // Card utilities
  card: {
    default: cardVariants.default,
    elevated: cardVariants.elevated,
    outlined: cardVariants.outlined,
    filled: cardVariants.filled,
    accent: cardVariants.accent,
  },
  // Section utilities
  section: {
    default: sectionVariants.default,
    compact: sectionVariants.compact,
    spacious: sectionVariants.spacious,
  },
  // Background utilities
  background: {
    primary: backgroundVariants.primary,
    secondary: backgroundVariants.secondary,
    subtle: backgroundVariants.subtle,
    accent: backgroundVariants.accent,
    dark: backgroundVariants.dark,
    gradient: backgroundVariants.gradient,
    warm: backgroundVariants.warm,
  },
  // Text utilities
  text: {
    primary: textVariants.primary,
    secondary: textVariants.secondary,
    accent: textVariants.accent,
    muted: textVariants.muted,
    light: textVariants.light,
    white: textVariants.white,
  }
} as const;
