import React, { useEffect } from 'react';
import { PageId } from '../types';

interface PrivacyPolicyViewProps {
  onNavigate: (page: PageId) => void;
}

const SECTIONS: { title: string; body: string[] }[] = [
  {
    title: 'Who we are',
    body: [
      'Mardai Inc. ("Mardai", "we", "us") is a human development and connection company based in Calgary, Alberta, Canada. This policy explains what personal information we collect through mardai.ca, how we use it, and the choices you have. If you have any questions about this policy, email us at connect@mardai.ca.',
    ],
  },
  {
    title: 'Information you share with us',
    body: [
      'When you use a form on this site — to ask a question, join a waitlist, register for an event, apply for a program, or join the community — we collect the details you enter: your name, your email address, and anything else you include, such as your phone number, organization, role, and message. Event registrations may also include your career stage, industry, and reasons for attending. The Breakthrough diagnostic collects the self-ratings you enter.',
      'We do not ask for payment card details or passwords anywhere on this site.',
    ],
  },
  {
    title: 'Information collected automatically',
    body: [
      'This is a standard informational website. We do not run third-party advertising or cross-site tracking. Basic technical information needed to deliver the pages, such as browser type, may be logged by our hosting provider.',
    ],
  },
  {
    title: 'How we use your information',
    body: [
      'We use the information you share to: respond to your inquiries; manage registrations, waitlists, and applications; deliver our programs and events; send you the updates you asked for; and improve what we offer. We do not sell your personal information.',
    ],
  },
  {
    title: 'How form submissions reach us',
    body: [
      'Form submissions are transmitted by our form-delivery provider and delivered to our team by email at connect@mardai.ca. Only our team sees them.',
    ],
  },
  {
    title: 'Who we share it with',
    body: [
      'We share personal information only where needed to run Mardai: with service providers who help deliver the website, email, and programs, and only for those purposes; or when required by law. We do not sell or rent personal information to anyone.',
    ],
  },
  {
    title: 'How long we keep it',
    body: [
      'We keep personal information only as long as needed for the purpose it was collected for — for example, while your registration or inquiry is active — and then delete it or anonymize it. You can ask us to delete your information at any time; see Your choices below.',
    ],
  },
  {
    title: 'Your choices',
    body: [
      'You can ask us to show you the personal information we hold about you, correct it, delete it, or stop sending you updates. Email connect@mardai.ca and we will respond. If you are in Alberta, you may also contact the Office of the Information and Privacy Commissioner of Alberta.',
    ],
  },
  {
    title: 'Children',
    body: [
      'Our website and programs are intended for adults aged 18 and over. We do not knowingly collect personal information from anyone under 18.',
    ],
  },
  {
    title: 'Changes to this policy',
    body: [
      'We may update this policy as Mardai grows. The current version is always the one published on this page, with the date shown above.',
    ],
  },
];

export const PrivacyPolicyView: React.FC<PrivacyPolicyViewProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="pt-24 pb-20 bg-[#F7F5F2]">
      <section className="py-16 md:py-20 border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C]">
              Legal — Privacy
            </span>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mt-4" style={{ fontFamily: 'Georgia, serif' }}>
              Privacy Policy
            </h1>
            <p className="text-sm text-[#1A1A1A]/70 leading-relaxed mt-4">
              Your information belongs to you. This page explains what we collect through this website, what we do with it, and how to reach us about it.
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
                Questions about this policy? Email us at{' '}
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
