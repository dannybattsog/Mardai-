import React, { useState } from 'react';
import { BASECAMP_DAYS, BASECAMP_FAQS } from '../data/basecampData';
import { PageId } from '../types';
import { 
  Mountain, 
  ArrowRight, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Users, 
  Flame, 
  Utensils, 
  Compass, 
  ChevronDown,
  TreePine,
  ShieldCheck,
  Footprints,
  Coffee,
  HeartHandshake
} from 'lucide-react';
import { motion } from 'motion/react';
import { ProgramContactForm } from './ProgramContactForm';

interface BasecampViewProps {
  onOpenJoin: () => void;
  onOpenBasecampReview: () => void;
  onNavigate: (page: PageId) => void;
  onShowToast?: (title: string, message?: string, type?: 'success' | 'error' | 'info') => void;
}

export const BasecampView: React.FC<BasecampViewProps> = ({
  onOpenJoin,
  onOpenBasecampReview,
  onNavigate,
  onShowToast = () => {}
}) => {
  const [activeDay, setActiveDay] = useState<number>(1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const retreatPhases = [
    {
      phase: 'ARRIVE',
      question: 'Where am I?',
      day: 'Friday Evening & Saturday Morning',
      description: 'Step away from reactive routines. Decompress, disconnect from device noise, and take an honest baseline audit without posturing or executive armor.',
      highlights: ['Foothills arrival & cabin check-in', 'Shared welcome dinner around the long table', 'Opening fireside circle: Grounding & baseline reflection']
    },
    {
      phase: 'EXPLORE',
      question: 'What matters now?',
      day: 'Saturday Afternoon & Evening',
      description: 'Engage with practical frameworks across the 5 dimensions. Examine friction points, career plateaus, health habits, family ties, and personal direction in deep, authentic conversation.',
      highlights: ['Guided reflection walk along pine ridges', 'Framework intensive: Root-cause prioritization', 'Intimate roundtable dinners & unguarded fireside dialogue']
    },
    {
      phase: 'MOVE FORWARD',
      question: 'What happens next?',
      day: 'Sunday Morning & Afternoon',
      description: 'Translate clarity into commitments. Draft your concrete 90-day execution plan, establish mutual peer accountability pacts, and prepare for the return home.',
      highlights: ['Individual 90-day roadmap drafting', 'Peer commitments & accountability pairings', 'Closing brotherhood circle & sendoff lunch']
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-[#F7F5F2]">
      
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-[#1A1A1A] text-white border-b border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C] bg-white px-2.5 py-0.5">
                03 — EXPERIENCE • Men's Development & Connection Experience
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[0.9] mb-6">
              Reconnect. Refocus. Move forward.
            </h1>

            {/* Core Basecamp Metaphor Quote */}
            <div className="p-6 sm:p-8 bg-white/5 border border-white/10 mb-8">
              <p className="font-editorial italic text-lg sm:text-xl text-[#F7F5F2]/95 leading-relaxed">
                “A basecamp isn't the destination. It's where people stop, prepare, connect, assess where they are, and get ready for the next climb.”
              </p>
            </div>

            <p className="text-base sm:text-lg text-[#F7F5F2]/85 leading-relaxed max-w-2xl mb-8">
              A 2-day men's development and connection experience bringing reflection, practical frameworks, shared experiences, and meaningful relationships together.
            </p>

            {/* Location & Upcoming Cohort Details */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-[#F7F5F2]/80 mb-10">
              <span className="flex items-center gap-1.5 px-3.5 py-2 bg-white/5 border border-white/10 font-bold">
                <MapPin className="w-3.5 h-3.5 text-[#C27339]" />
                Kananaskis Foothills, Alberta (Rockies)
              </span>
              <span className="flex items-center gap-1.5 px-3.5 py-2 bg-white/5 border border-white/10 font-bold">
                <Users className="w-3.5 h-3.5 text-[#2D4F3C]" />
                Capped at 12–16 Participants
              </span>
              <span className="flex items-center gap-1.5 px-3.5 py-2 bg-white/5 border border-white/10 font-bold">
                <Calendar className="w-3.5 h-3.5 text-[#C27339]" />
                Upcoming Dates: Fall 2026 Cohort
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenJoin}
                className="bg-[#2D4F3C] hover:bg-[#3C6D58] text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] transition-all flex items-center gap-2"
              >
                <span>Join the Next Basecamp</span>
                <ArrowRight className="w-4 h-4 text-[#C27339]" />
              </button>

              <button
                onClick={onOpenBasecampReview}
                className="bg-transparent hover:bg-white hover:text-[#1A1A1A] text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] border border-white/30 transition-all"
              >
                <span>Take Pre-Retreat Review</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* WHAT BASECAMP CREATES (Verbatim from Section 12) */}
      <section className="py-20 bg-white border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C] block mb-2">
              The Intention
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#1A1A1A] leading-tight">
              What Basecamp creates.
            </h2>
            <p className="text-base text-[#1A1A1A]/80 mt-4 leading-relaxed">
              Basecamp provides a structured 2-day environment where men deliberately step away from everyday noise, deadlines, and responsibilities to:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: 'Reflect on Current Life & Direction',
                text: 'Pause the relentless momentum of daily firefighting to assess where you are actually heading across your career, health, and family.',
                icon: Compass
              },
              {
                title: 'Honest Conversations Without Posturing',
                text: 'A rare space where professional masks and competitive status games are left at the door. Talk candidly about real challenges.',
                icon: HeartHandshake
              },
              {
                title: 'Explore Practical Frameworks',
                text: 'Engage with Mardai systems thinking, decision matrices, and habit architectures translated into napkin-simple everyday tools.',
                icon: ShieldCheck
              },
              {
                title: 'Connect with Grounded Men',
                text: 'Surround yourself with high-character men navigating similar inflection points, career crossroads, and family transitions.',
                icon: Users
              },
              {
                title: 'Build Enduring Relationships',
                text: 'Form genuine friendships and accountability partnerships that continue long after returning home through Mardai Community.',
                icon: TreePine
              },
              {
                title: 'Determine What to Take Forward',
                text: 'Leave with a concrete, prioritized 90-day plan for your life, career, and primary relationships rather than vague inspiration.',
                icon: ArrowRight
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-7 bg-[#F7F5F2] border border-[#1A1A1A]/10 flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 bg-white border border-[#1A1A1A]/10 flex items-center justify-center text-[#2D4F3C] mb-4">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-black text-[#1A1A1A] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* STRUCTURED AROUND: ARRIVE → EXPLORE → MOVE FORWARD */}
      <section className="py-20 bg-[#F7F5F2] border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C] block mb-2">
              The Progression Arc
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#1A1A1A]">
              Arrive. Explore. Move forward.
            </h2>
            <p className="text-xs sm:text-sm text-[#1A1A1A]/70 mt-2">
              The 2 days are sequenced around three foundational questions that anchor human development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {retreatPhases.map((phase, idx) => (
              <div key={idx} className="p-8 bg-white border border-[#1A1A1A]/15 flex flex-col justify-between shadow-xs">
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#1A1A1A]/10">
                    <span className="text-xs font-mono font-black text-[#2D4F3C]">
                      0{idx + 1} — {phase.phase}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-[#C27339] uppercase">
                      {phase.day}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-[#1A1A1A] mb-3">
                    “{phase.question}”
                  </h3>

                  <p className="text-xs text-[#1A1A1A]/80 leading-relaxed mb-6">
                    {phase.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-[#1A1A1A]/10">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#1A1A1A]/60 block">
                      Key Experiences:
                    </span>
                    {phase.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-[#1A1A1A]/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2D4F3C] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ATMOSPHERE & BOUNDARIES: What Basecamp Is & Is Not */}
      <section className="py-20 bg-white border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C] block">
                Atmosphere & Standards
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#1A1A1A]">
                Grounded, intelligent, and unpretentious.
              </h2>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
                Basecamp blends the natural grandeur of the Canadian Rockies foothills with nourishing chef-prepared meals, quiet reflection walks, fireside dialogue, and rigorous personal development.
              </p>
              
              <div className="p-6 bg-[#F7F5F2] border border-[#1A1A1A]/10 space-y-2 text-xs text-[#1A1A1A]/80">
                <span className="font-bold uppercase tracking-wider text-[#2D4F3C] block text-[10px]">
                  Setting & Comfort:
                </span>
                <p>Private/semi-private upscale cabin accommodations in Alberta foothills, all gourmet meals, non-alcoholic craft beverages, retreat journal, and facilitation included.</p>
              </div>
            </div>

            {/* Clear Boundaries: What It Is NOT */}
            <div className="lg:col-span-7 bg-[#F7F5F2] border border-[#1A1A1A]/15 p-8 sm:p-10 space-y-4">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#1A1A1A] block">
                Explicit Retreat Boundaries (What Basecamp Is NOT):
              </span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-4 bg-white border border-[#1A1A1A]/10">
                  <span className="text-red-600 font-bold block mb-1">✕ Not Clinical Therapy</span>
                  <p className="text-[#1A1A1A]/70">We do not provide medical diagnosis, clinical mental health treatment, or psychological trauma counseling.</p>
                </div>
                <div className="p-4 bg-white border border-[#1A1A1A]/10">
                  <span className="text-red-600 font-bold block mb-1">✕ Not Military Bootcamp</span>
                  <p className="text-[#1A1A1A]/70">No drill sergeants, artificial humiliation, or performative aggression. Growth requires safety and candor.</p>
                </div>
                <div className="p-4 bg-white border border-[#1A1A1A]/10">
                  <span className="text-red-600 font-bold block mb-1">✕ Not Extreme Adventure</span>
                  <p className="text-[#1A1A1A]/70">No survivalist stunts or high-risk feats. Physical activities are gentle mountain walks and outdoor breathwork.</p>
                </div>
                <div className="p-4 bg-white border border-[#1A1A1A]/10">
                  <span className="text-red-600 font-bold block mb-1">✕ Not Motivational Hype</span>
                  <p className="text-[#1A1A1A]/70">No fire-walking, screaming affirmations, or hollow emotional highs. Only practical frameworks and genuine connection.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FAQS */}
      <section className="py-20 bg-[#F7F5F2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C] block mb-2">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl font-black tracking-tight text-[#1A1A1A]">
              Everything you need to know about Basecamp.
            </h2>
          </div>

          <div className="space-y-3">
            {BASECAMP_FAQS.map((faq, idx) => (
              <div 
                key={idx}
                className="p-6 bg-white border border-[#1A1A1A]/10 cursor-pointer hover:border-[#1A1A1A] transition-colors"
                onClick={() => toggleFaq(idx)}
              >
                <div className="flex items-center justify-between gap-4">
                  <h4 className="text-sm font-black text-[#1A1A1A]">
                    {faq.q}
                  </h4>
                  <ChevronDown className={`w-4 h-4 text-[#1A1A1A]/50 shrink-0 transition-transform ${openFaq === idx ? 'rotate-180 text-[#2D4F3C]' : ''}`} />
                </div>
                {openFaq === idx && (
                  <p className="mt-4 pt-4 border-t border-[#1A1A1A]/10 text-xs text-[#1A1A1A]/80 leading-relaxed">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 p-8 sm:p-10 bg-[#1A1A1A] text-white space-y-6">
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
              Ready for the pause before your next climb?
            </h3>
            <p className="text-xs text-[#F7F5F2]/70 max-w-xl leading-relaxed">
              Basecamp cohorts are strictly capped at 12–16 participants to ensure conversational depth and personal connection. Reserve your spot for the upcoming Rockies retreat.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenJoin}
                className="px-8 py-4 bg-[#2D4F3C] hover:bg-[#3C6D58] text-white text-xs font-bold uppercase tracking-[0.15em] transition-all inline-flex items-center gap-2"
              >
                <span>Join the Next Basecamp</span>
                <ArrowRight className="w-4 h-4 text-[#C27339]" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT BASECAMP HOSTS VIA connect@mardai.ca */}
      <section id="basecamp-contact" className="py-20 bg-[#F7F5F2] border-t border-[#1A1A1A]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProgramContactForm
            programTitle="Mardai Basecamp"
            subtitle="Questions regarding cabin accommodations, retreat logistics in the Kananaskis foothills, physical requirements, or cohort composition? Reach our retreat hosts directly via connect@mardai.ca."
            defaultTopic="Retreat Dates & Accommodation"
            topicOptions={[
              { label: 'Retreat Dates & Foothills Lodge Accommodation', value: 'Retreat Dates & Foothills Lodge Accommodation' },
              { label: 'Cohort Dynamics & Attendee Profile (Men’s Retreat)', value: 'Cohort Dynamics & Attendee Profile (Men’s Retreat)' },
              { label: 'Dietary & Logistics Questions', value: 'Dietary & Logistics Questions' },
              { label: 'Private Executive / Corporate Retreat Inquiries', value: 'Private Executive / Corporate Retreat Inquiries' },
              { label: 'General Basecamp Questions', value: 'General Basecamp Questions' }
            ]}
            theme="light"
            onShowToast={onShowToast}
          />
        </div>
      </section>

    </div>
  );
};
