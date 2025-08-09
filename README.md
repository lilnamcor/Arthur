# Arthur Myron Horwitz - Dual Identities: Living in Meir's Shadow

A Next.js 14 website for author Arthur Myron Horwitz to promote the book 'Dual Identities: Living in Meir's Shadow'.

## Features

- Modern, dignified design with respectful Holocaust themes
- Responsive layout with mobile-first approach
- Accessibility compliant (WCAG AA)
- SEO optimized with proper metadata
- TypeScript for type safety
- Tailwind CSS for styling
- Framer Motion for subtle animations

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- ESLint/Prettier

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Add the author photo:
   - Place `author-photo.jpg` in the `public/` directory
   - The photo should be of Arthur Myron Horwitz speaking at an event with candles in the foreground
   - Recommended size: 800x800px or larger for good quality
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                    # App Router pages
│   ├── author/            # About the Author page
│   ├── book/              # About the Book page
│   ├── contact/           # Contact page
│   ├── themes/            # Themes page
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── SiteHeader.tsx     # Navigation header
│   ├── SiteFooter.tsx     # Footer
│   ├── Hero.tsx          # Hero section
│   ├── Card.tsx          # Card component
│   └── ...
├── config/               # Site configuration
│   └── site.ts          # Site metadata and links
└── lib/                  # Utility functions
    └── utils.ts         # Utility functions
```

## Content Management

- Site configuration: `src/config/site.ts`
- Page content: Edit the respective page files in `src/app/`
- Styling: Tailwind CSS classes in component files
- Images: Place in `public/` directory

## Deployment

The site is ready for deployment on Vercel, Netlify, or any other hosting platform that supports Next.js.

## Accessibility

- WCAG AA compliant
- Keyboard navigation support
- Screen reader friendly
- High contrast design
- Focus states for all interactive elements

## License

This project is private and confidential.
