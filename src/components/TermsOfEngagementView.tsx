import React, { useEffect } from 'react';
import { PageId } from '../types';

interface TermsOfEngagementViewProps {
  onNavigate: (page: PageId) => void;
}

const SECTIONS: { title: string; body: string[] }[] = [
  {
    title: 'Who we are',
    body: [
      'These terms cover your use of mardai.ca and your participation in Mardai programs, events, and retreats. Mardai Inc. is based in Calgary, Alberta, Canada. By using this site or registering for a program, you agree to these terms. Questions: connect@mardai.ca.',
    ],
  },
  {
    title: 'Our programs',
    body: [
      'Mardai offers the MARDAI Series card decks; Breakthrough, a 6-week career development program; Basecamp, a 2-day men\u2019s development and alpine connection retreat; workshops; and full-day events. Program descriptions on this site are summaries — dates, venues, fees, and inclusions are confirmed in writing when you register.',
    ],
  },
  {
    title: 'Registration and fees',
    body: [
      'Breakthrough is $1,450 CAD, with a 2-part installment plan available. Full-day events are $189 CAD. Basecamp fees are confirmed at the time of registration. Fees are arranged directly with our team; we do not take card payments through this website. Your place is confirmed once we confirm your registration and your fee arrangement is in place.',
    ],
  },
  {
    title: 'Cancellations',
    body: [
      'If you cancel 14 or more days before your program or event starts, you receive a full refund of the fees you have paid. If you cancel within 14 days of the start, please contact connect@mardai.ca as soon as you know — we will handle it case by case. If Mardai cancels a program or event, any fees you have paid for it are refunded in full.',
    ],
  },
  {
    title: 'Participation',
    body: [
      'Our programs work best when everyone participates in good faith: show up prepared, respect other participants and facilitators, and keep what others share in confidence. Mardai may ask a participant to leave a program if their conduct disrupts others; in that case any refund is handled under the cancellation terms above.',
    ],
  },
  {
    title: 'Health and safety',
    body: [
      'Basecamp and some events involve outdoor and mountain activity. You are responsible for judging your own fitness for the activities involved, and for telling us about any health condition or access need that affects your participation when you register, so we can plan with you.',
    ],
  },
  {
    title: 'Our content',
    body: [
      'The frameworks, card decks, materials, and program content on this site and in our programs belong to Mardai Inc. (or our licensors). You may use them for your own personal development. Please do not reproduce, distribute, or sell them without our written permission.',
    ],
  },
  {
    title: 'Not professional advice',
    body: [
      'Mardai\u2019s content and programs are educational and developmental. They are not medical, mental-health, legal, or financial advice, and they do not replace a qualified professional. If you need that kind of help, please speak to one.',
    ],
  },
  {
    title: 'Liability',
    body: [
      'We run our programs with care, but participation — including outdoor activity — carries some risk, and you take part at your own risk. To the extent permitted by the laws of Alberta, Mardai Inc. is not liable for indirect or consequential loss arising from your use of this site or participation in a program.',
    ],
  },
  {
    title: 'Changes and governing law',
    body: [
      'We may update these terms; the version published on this page applies. These terms are governed by the laws of Alberta and the laws of Canada applicable there.',
    ],
  },
];

export const TermsOfEngagementView: React.FC<TermsOfEngagementViewProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="pt-24 pb-20 bg-[#F7F5F2]">
      <section className="py-16 md:py-20 border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C]">
              Legal — Terms
            </span>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mt-4" style={{ fontFamily: 'Georgia, serif' }}>
              Terms of Engagement
            </h1>
            <p className="text-sm text-[#1A1A1A]/70 leading-relaxed mt-4">
              The plain-language terms for using this website and joining a Mardai program, event, or retreat.
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
                Questions about these terms? Email us at{' '}
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
