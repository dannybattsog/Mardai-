import React, { useEffect } from 'react';
import { PageId } from '../types';

interface AccessibilityViewProps {
  onNavigate: (page: PageId) => void;
}

const SECTIONS: { title: string; body: string[] }[] = [
  {
    title: 'Our commitment',
    body: [
      'Mardai exists to help people learn, grow, and connect — that includes people with disabilities. We aim to make our website and our programs usable by everyone, and we use the Web Content Accessibility Guidelines (WCAG) 2.1, level AA, as our guide.',
    ],
  },
  {
    title: 'This website',
    body: [
      'We aim for this site to work with keyboard navigation, screen readers, and browser text resizing; to keep text readable with enough contrast; and to give images descriptive text. If you find a barrier on this site, please tell us — see Contact us below.',
    ],
  },
  {
    title: 'Programs and events',
    body: [
      'Venues and outdoor settings vary, and Basecamp involves mountain activity. When you register, tell us about any access need — mobility, hearing, vision, dietary, or anything else — and we will work with you on what is possible for that program or event. Program materials can be provided in alternate formats on request.',
    ],
  },
  {
    title: 'Contact us',
    body: [
      'To report a barrier, request an accommodation, or ask for materials in another format, email connect@mardai.ca. Tell us what you were trying to do and what would help. We aim to reply within 24 hours.',
    ],
  },
  {
    title: 'Ongoing work',
    body: [
      'Accessibility is part of how we review this site and our programs as they change. This statement was last updated on the date above and will be reviewed when we make significant changes.',
    ],
  },
];

export const AccessibilityView: React.FC<AccessibilityViewProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="pt-24 pb-20 bg-[#F7F5F2]">
      <section className="py-16 md:py-20 border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C]">
              Legal — Accessibility
            </span>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mt-4" style={{ fontFamily: 'Georgia, serif' }}>
              Accessibility
            </h1>
            <p className="text-sm text-[#1A1A1A]/70 leading-relaxed mt-4">
              Everyone should be able to use this site and join a Mardai program. Here is what we aim for, and how to reach us when something gets in the way.
            </p>
            <p className="text-[11px] uppercase tracking-wider text-[#1A1A1A]/50 mt-6">
              Last updated: November 12, 2026
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-10">
            {SECTIONS.map((section, i) => (
              <div key={section.title}>
                <h2 className="text-2xl font-bold tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
                  {String(i + 1).padStart(2, '0')} — {section.title}
                </h2>
                {section.body.map((paragraph, j) => (
                  <p key={j} className="text-sm leading-relaxed text-[#1A1A1A]/80 mt-3">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}

            <div className="pt-8 border-t border-[#1A1A1A]/10">
              <p className="text-sm leading-relaxed text-[#1A1A1A]/80">
                Questions about accessibility? Email us at{' '}
                <a href="mailto:connect@mardai.ca" className="underline decoration-[#C27339] decoration-2 underline-offset-4">
                  connect@mardai.ca
                </a>
                .
              </p>
              <button
                type="button"
                onClick={() => onNavigate('home')}
                className="mt-6 px-5 py-2.5 bg-[#1A1A1A] hover:bg-[#2D4F3C] text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                ← Back to home
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
