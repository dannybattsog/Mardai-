import React, { useEffect } from 'react';
import { X, Shield, FileText, Accessibility, Mail } from 'lucide-react';

export type LegalDocType = 'privacy' | 'terms' | 'accessibility';

interface LegalModalProps {
  isOpen: boolean;
  docType: LegalDocType | null;
  onSelectDoc: (doc: LegalDocType) => void;
  onClose: () => void;
}

interface LegalSection {
  number: string;
  title: string;
  body: string;
}

const PRIVACY_SECTIONS: LegalSection[] = [
  {
    number: '01',
    title: 'Overview & Scope',
    body: 'MARDAI Inc. ("Mardai", "we", "our") is a human connection and development company based in Calgary, Alberta, Canada. This Privacy Policy explains how we handle personal information collected through our website, program inquiries, event registrations, and diagnostic tools.'
  },
  {
    number: '02',
    title: 'What Information the Site Collects',
    body: 'We collect only the information you voluntarily choose to share with us: contact form details (name, email, organization/role, and inquiry notes), event registration or waitlist requests (city, career stage, and context), program applications, and optional diagnostic review ratings and reflections.'
  },
  {
    number: '03',
    title: 'What We Do Not Ask For',
    body: 'Our website never asks for or collects credit card numbers, banking credentials, account passwords, Social Insurance Numbers, or sensitive government identification. Any applicable program tuition or ticket settlement is arranged separately through verified invoicing or authorized payment confirmation.'
  },
  {
    number: '04',
    title: 'No Advertising or Cross-Site Tracking',
    body: 'Mardai does not run third-party advertising trackers, behavioral ad pixels, or cross-site surveillance cookies. We do not track your browsing activity across other websites or build advertising profiles on our visitors.'
  },
  {
    number: '05',
    title: 'How Submissions Reach Our Team',
    body: 'Form inquiries, waitlist requests, and program questions submitted on this site are routed directly by email to our advisory inbox at connect@mardai.ca so a human member of the Mardai team can review and respond to you personally.'
  },
  {
    number: '06',
    title: 'How We Use Your Information',
    body: 'We use your submitted details strictly to respond to your questions, review cohort or retreat applications, coordinate event and venue logistics, share requested Mardai Series or waitlist notifications, and maintain continuity for Mardai program participants.'
  },
  {
    number: '07',
    title: 'No Selling or Renting of Personal Data',
    body: 'Mardai never sells, rents, leases, or trades your personal information to data brokers, advertisers, sponsors, or unrelated third parties.'
  },
  {
    number: '08',
    title: 'Data Retention & Safeguards',
    body: 'We retain personal information only for as long as reasonably necessary to fulfill the purpose for which it was collected, support active alumni and community engagement, or satisfy applicable Canadian legal and accounting obligations. Reasonable administrative and technical safeguards are used to protect correspondence.'
  },
  {
    number: '09',
    title: 'Your Choices, Access & Deletion Rights',
    body: 'You may request access to, correction of, or deletion of your personal information—or withdraw consent and unsubscribe from future updates—at any time by emailing connect@mardai.ca. We honor deletion and opt-out requests promptly.'
  },
  {
    number: '10',
    title: 'Alberta Privacy Governance & Commissioner Office',
    body: 'Mardai handles personal information in accordance with Alberta’s Personal Information Protection Act (PIPA) and applicable Canadian privacy standards. If you have a privacy concern that remains unresolved after contacting us at connect@mardai.ca, you may contact the Office of the Information and Privacy Commissioner of Alberta (OIPC) at oipc.ab.ca or 1-888-878-4044.'
  }
];

const TERMS_SECTIONS: LegalSection[] = [
  {
    number: '01',
    title: 'Acceptance of Terms',
    body: 'By accessing this website, registering for an event, applying for a cohort, or participating in any MARDAI Inc. ("Mardai") program, you agree to these Terms of Engagement. Please read them carefully prior to registration or attendance.'
  },
  {
    number: '02',
    title: 'Mardai Programs & Offerings',
    body: 'Mardai provides structured human-development experiences and thinking tools, including Mardai Series mental model decks, Mardai Breakthrough, Mardai Basecamp (2-day men’s foothills retreat), Mardai Events, Mardai Workshops for organizations, and ongoing Mardai Community gatherings for program participants.'
  },
  {
    number: '03',
    title: 'Registration, Tuition & Fees',
    body: 'Program fees are transparent and communicated prior to enrollment: Mardai Breakthrough cohort tuition is $1,450 CAD (with a flexible 2-part installment plan available); flagship one-day Mardai Events are $189 CAD when registration is open; Mardai Basecamp fees are upon inquiry and confirmed in writing at registration (all-inclusive of lodging and chef-prepared meals); and organizational Workshops are scoped by agreement.'
  },
  {
    number: '04',
    title: 'Cancellations, Transfers & Deferrals',
    body: 'Event tickets may be transferred to a colleague or deferred to a future city date with advance written notice to connect@mardai.ca. Because Breakthrough cohorts and Basecamp mountain retreats have strictly limited seats and pre-committed lodge accommodations, specific withdrawal, refund, and deferral cutoffs are confirmed in your registration agreement.'
  },
  {
    number: '05',
    title: 'Participation, Confidentiality & Conduct',
    body: 'Mardai spaces rely on psychological safety, candor, and mutual respect. All participants agree to maintain strict peer confidentiality (do not share another participant’s personal stories or identifying details outside the room) and uphold a pitch-free, non-solicitation environment. Mardai reserves the right to remove any participant whose conduct compromises group trust or safety.'
  },
  {
    number: '06',
    title: 'Health, Safety & Outdoor / Mountain Activities',
    body: 'Mardai Basecamp and select community experiences take place in the Alberta foothills and Canadian Rockies and include optional outdoor walks, mountain trails, and breathwork. Participation in outdoor segments is always voluntary. You are responsible for assessing your own physical readiness, bringing appropriate seasonal footwear/layers, disclosing relevant allergies or medical considerations prior to arrival, and following facilitator safety instructions.'
  },
  {
    number: '07',
    title: 'Intellectual Property & Content Ownership',
    body: 'All Mardai Series mental models, the Mardai Development Map, diagnostic instruments, workbooks, visual frameworks, and website copy are the exclusive intellectual property of MARDAI Inc. Materials provided to participants are for personal or internal team development only and may not be reproduced, resold, or taught commercially without prior written consent.'
  },
  {
    number: '08',
    title: 'Educational Purpose — Not Professional Advice',
    body: 'All Mardai programs, diagnostics, card decks, and conversations are strictly educational and developmental in nature. Mardai does not provide medical, clinical, psychological, or psychiatric diagnosis or therapy, nor does it provide regulated legal, tax, accounting, or investment advice. Mardai makes no guarantees regarding employment, promotions, or financial returns.'
  },
  {
    number: '09',
    title: 'Limitation of Liability',
    body: 'To the fullest extent permitted by applicable law, MARDAI Inc., its founder, facilitators, and partners shall not be liable for any indirect, incidental, or consequential damages arising from website use or program participation. Our aggregate liability for any claim related to a paid offering shall not exceed the total fees actually paid by you for that specific program or event.'
  },
  {
    number: '10',
    title: 'Governing Law & Jurisdiction (Alberta)',
    body: 'These Terms of Engagement are governed by and construed in accordance with the laws of the Province of Alberta and the federal laws of Canada applicable therein, without regard to conflict-of-law principles. Any disputes shall be resolved exclusively in the courts located in Calgary, Alberta. Questions may be directed to connect@mardai.ca.'
  }
];

const ACCESSIBILITY_SECTIONS: LegalSection[] = [
  {
    number: '01',
    title: 'WCAG 2.1 Level AA Aim',
    body: 'Mardai is committed to making our digital tools and human-development experiences welcoming and usable for all participants. On the web, we actively work toward conformance with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.'
  },
  {
    number: '02',
    title: 'Website Accessibility Features',
    body: 'Our website is structured with semantic landmarks and clear heading hierarchies for screen readers, full keyboard navigation support across menus, forms, and modals, responsive layouts that support browser zoom and text resizing without loss of readability, and high-contrast color pairings across both light and dark surfaces.'
  },
  {
    number: '03',
    title: 'In-Person Programs, Retreats & Events',
    body: 'Because Mardai hosts events across city venues (such as Calgary Central Library and regional conference spaces) as well as mountain lodge settings in the Alberta foothills, physical layouts and trail terrain vary by location. Please let us know any mobility, visual, auditory, sensory, dietary, or learning access needs at registration so we can plan accordingly.'
  },
  {
    number: '04',
    title: 'Requesting an Accommodation (24-Hour Reply Aim)',
    body: 'If you encounter a barrier on our website, need materials in an alternative format, or require specific venue or program accommodations, please contact us directly at connect@mardai.ca. Our team aims to respond to every accessibility request within 24 hours.'
  },
  {
    number: '05',
    title: 'Ongoing Review & Continuous Improvement',
    body: 'Accessibility is an ongoing operational commitment. We periodically review new pages, interactive tools, physical card formats, and partner venues to identify and remove barriers, and we welcome constructive feedback at connect@mardai.ca.'
  }
];

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  docType,
  onSelectDoc,
  onClose
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !docType) return null;

  const docMeta: Record<LegalDocType, {
    title: string;
    subtitle: string;
    badge: string;
    sections: LegalSection[];
    icon: React.FC<{ className?: string }>;
  }> = {
    privacy: {
      title: 'Privacy Policy',
      subtitle: 'How MARDAI Inc. handles form inquiries, event registrations, diagnostic ratings, and your privacy rights under Alberta law.',
      badge: '10 Sections • Effective 2026',
      sections: PRIVACY_SECTIONS,
      icon: Shield
    },
    terms: {
      title: 'Terms of Engagement',
      subtitle: 'Program scope, registration fees, cancellations, safety boundaries, intellectual property, and Alberta governing law.',
      badge: '10 Sections • Effective 2026',
      sections: TERMS_SECTIONS,
      icon: FileText
    },
    accessibility: {
      title: 'Accessibility Statement',
      subtitle: 'Our WCAG 2.1 Level AA web commitment, physical venue considerations, and how to request accommodations.',
      badge: '5 Sections • Ongoing Review',
      sections: ACCESSIBILITY_SECTIONS,
      icon: Accessibility
    }
  };

  const current = docMeta[docType];
  const Icon = current.icon;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1A1A1A]/80 backdrop-blur-sm flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#F7F5F2] border border-[#1A1A1A] shadow-2xl max-h-[88vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1A1A1A] text-white px-6 sm:px-8 py-6 border-b border-white/10 shrink-0">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2">
                <Icon className="w-4 h-4 text-[#C27339]" />
                <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#D4AF37] font-bold">
                  {current.badge}
                </span>
              </div>
              <h2
                id="legal-modal-title"
                className="text-2xl sm:text-3xl font-black tracking-tight text-white"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                {current.title}
              </h2>
              <p className="text-xs text-[#F7F5F2]/75 max-w-2xl leading-relaxed">
                {current.subtitle}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 bg-white/10 hover:bg-white/20 text-white transition-colors shrink-0"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick switcher tabs */}
          <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap gap-2">
            {(
              [
                { id: 'privacy', label: 'Privacy Policy (10)' },
                { id: 'terms', label: 'Terms of Engagement (10)' },
                { id: 'accessibility', label: 'Accessibility (5)' }
              ] as { id: LegalDocType; label: string }[]
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => onSelectDoc(tab.id)}
                className={`px-3 py-1.5 text-[11px] font-mono font-bold uppercase tracking-wider transition-colors border ${
                  docType === tab.id
                    ? 'bg-[#2D4F3C] text-white border-[#2D4F3C]'
                    : 'bg-white/5 text-[#F7F5F2]/70 border-white/15 hover:bg-white/15 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Sections */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
          {current.sections.map((sec) => (
            <div
              key={sec.number}
              className="p-5 bg-white border border-[#1A1A1A]/10 space-y-1.5"
            >
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-mono font-bold text-[#C27339]">
                  {sec.number}
                </span>
                <h3 className="text-sm font-black text-[#1A1A1A] tracking-tight">
                  {sec.title}
                </h3>
              </div>
              <p className="text-xs sm:text-[13px] text-[#1A1A1A]/80 leading-relaxed pl-6">
                {sec.body}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 sm:px-8 py-4 bg-white border-t border-[#1A1A1A]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
          <a
            href="mailto:connect@mardai.ca"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#2D4F3C] hover:text-[#1A1A1A] font-bold transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#C27339]" />
            <span>Questions? Contact connect@mardai.ca</span>
          </a>

          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 bg-[#1A1A1A] hover:bg-[#2D4F3C] text-white text-xs font-bold uppercase tracking-[0.15em] transition-colors self-end sm:self-auto"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
