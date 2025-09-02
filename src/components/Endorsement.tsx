import { componentUtils } from '@/lib/design-system';

interface EndorsementProps {
  quote: string;
  authorName: string;
  authorCredentials: string;
}

export default function Endorsement({ quote, authorName, authorCredentials }: EndorsementProps) {
  return (
    <div className={`mb-8 p-6 rounded-lg bg-parchment/50 border border-brown/20 ${componentUtils.text.secondary}`}>
      <div className="mb-3">
        <svg className="w-6 h-6 text-orange" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
        </svg>
      </div>
      <blockquote className="italic mb-3">
        {quote}
      </blockquote>
      <p className="text-sm leading-relaxed">
        — <span className="font-semibold">{authorName}</span>, {authorCredentials}
      </p>
    </div>
  );
}
