import React from 'react';
import { PageId } from '../types';
import { 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Calendar, 
  Sparkles, 
  MessageSquare, 
  Coffee, 
  Compass, 
  ShieldCheck, 
  MapPin,
  Flame,
  Check,
  Hammer,
  Share2,
  GraduationCap,
  Network,
  HeartHandshake,
  Mail
} from 'lucide-react';
import { motion } from 'motion/react';

interface CommunityViewProps {
  onOpenBasecampReview: () => void;
  onNavigate: (page: PageId) => void;
  onShowToast: (title: string, message?: string, type?: 'success' | 'error' | 'info') => void;
  onContactWithMessage?: (topic: string, message?: string) => void;
}

export const CommunityView: React.FC<CommunityViewProps> = ({
  onOpenBasecampReview,
  onNavigate,
  onShowToast,
  onContactWithMessage
}) => {

  const communityRoles = [
    {
      role: 'BUILDERS',
      tagline: 'Actively working on personal & career development',
      description: 'Individuals committed to intentional progress who use Mardai frameworks to build habits, navigate inflection points, and execute 90-day sprints.',
      icon: Hammer
    },
    {
      role: 'CONTRIBUTORS',
      tagline: 'Sharing practical ideas, tools & perspectives',
      description: 'Members who bring tested frameworks, real-world case studies, and systems-thinking insights to share during learning salons and roundtables.',
      icon: Share2
    },
    {
      role: 'MENTORS',
      tagline: 'Sharing hard-earned experience & wisdom',
      description: 'Seasoned executives, founders, and specialists offering candor, guidance, and constructive challenge to fellow members navigating similar paths.',
      icon: GraduationCap
    },
    {
      role: 'CONNECTORS',
      tagline: 'Introducing others & cultivating relationships',
      description: 'Catalysts who build bridges, welcome newcomers, create high-trust introductions, and strengthen the social fabric of the ecosystem.',
      icon: Network
    }
  ];

  const communityExperiences = [
    { title: 'Calgary Breakfasts & Monthly Gatherings', desc: 'Calgary Breakfasts: monthly morning gatherings in Calgary, alongside evening conversations in regional hubs.' },
    { title: 'Alumni Reunions & Events', desc: 'Dedicated gatherings for graduates of Basecamp, Breakthrough, and organizational workshops.' },
    { title: 'Professional Networking', desc: 'High-trust, unpretentious relationship building without transactional elevator pitches.' },
    { title: 'Peer Accountability Partnerships', desc: '1-on-1 pairings and small 4-person pods meeting bi-weekly to sustain 90-day momentum.' },
    { title: 'Warm Member Introductions', desc: 'Facilitated connections tailored to specific career, business, or life questions.' },
    { title: 'Peer Mentoring & Sounding Boards', desc: 'Grounded spaces to test high-stakes decisions with peers who understand your context.' },
    { title: 'Outdoor Foothills Activities', desc: 'Weekend trail walks, hikes, and fresh-air reflection sessions across the Alberta foothills.' },
    { title: 'Learning Salons & Guest Sessions', desc: 'Deep-dive masterclasses on systems thinking, modern AI tools, and decision science.' },
    { title: 'Career Opportunities & Referrals', desc: 'Private sharing of unlisted leadership roles, advisory seats, and strategic partnerships.' },
    { title: 'Shared Celebrations & Milestones', desc: 'Honoring genuine leaps forward, career milestones, and sustained personal breakthroughs.' }
  ];

  return (
    <div className="pt-24 pb-20 bg-[#F7F5F2]">
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-[#F7F5F2] border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C]">
                04 — BELONG • The Continuity Ecosystem
              </span>
              <span className="w-1 h-1 bg-[#2D4F3C] rounded-full"></span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#1A1A1A] leading-[0.9] mb-6">
              Progress is better together.
            </h1>

            <p className="text-xl sm:text-2xl font-light text-[#1A1A1A] leading-relaxed mb-6 font-editorial italic">
              “Development becomes more sustainable when people have relationships, accountability and a community around them.”
            </p>

            <div className="p-6 bg-white border border-[#1A1A1A]/10 mb-8 space-y-2 text-sm sm:text-base text-[#1A1A1A]/85">
              <p className="font-bold text-[#1A1A1A]">
                Programs end. Retreats end. Workshops end. Relationships do not have to.
              </p>
              <p className="text-xs sm:text-sm text-[#1A1A1A]/70 leading-relaxed">
                Mardai Community creates continuity across the entire Mardai ecosystem. It is not an impersonal, paid online membership course; it is an ongoing web of grounded human connection, mutual accountability, and shared growth.
              </p>
            </div>

            {/* Quick stats / Highlights */}
            <div className="flex flex-wrap items-center gap-6 text-[11px] uppercase tracking-widest text-[#1A1A1A]/60 font-semibold pt-4 border-t border-[#1A1A1A]/10">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#C27339]" /> Calgary & Alberta Hub
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#2D4F3C]" /> Monthly In-Person & Live
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#2D4F3C]" /> High-Trust & Pitch-Free
              </span>
            </div>

            {/* Hero Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-6">
              <button
                type="button"
                onClick={() => onNavigate('breakthrough')}
                className="px-6 py-3.5 bg-[#1A1A1A] hover:bg-[#2D4F3C] text-white text-xs font-bold uppercase tracking-[0.15em] transition-colors inline-flex items-center gap-2"
              >
                <span>Explore Mardai Programs</span>
                <ArrowRight className="w-4 h-4 text-[#C27339]" />
              </button>
              <button
                type="button"
                onClick={() => {
                  if (onContactWithMessage) {
                    onContactWithMessage(
                      'community',
                      'Hello Mardai team,\n\nI would like to connect with the Mardai Community and learn about upcoming monthly gatherings, Calgary Breakfasts, and program pathways.'
                    );
                  } else {
                    onNavigate('contact');
                  }
                }}
                className="px-6 py-3.5 bg-white hover:bg-[#F7F5F2] text-[#1A1A1A] border border-[#1A1A1A]/20 text-xs font-bold uppercase tracking-[0.15em] transition-colors inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#2D4F3C]" />
                <span>Send Us a Message</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ROLES IN THE COMMUNITY (Verbatim from Section 13) */}
      <section className="py-20 bg-white border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C] block mb-2">
              Community Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#1A1A1A]">
              How members contribute and connect.
            </h2>
            <p className="text-sm text-[#1A1A1A]/70 mt-3">
              Everyone in the Mardai Community participates through one or more active roles:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityRoles.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-7 bg-[#F7F5F2] border border-[#1A1A1A]/10 flex flex-col justify-between hover:bg-white hover:border-[#1A1A1A]/30 transition-all">
                  <div>
                    <div className="w-9 h-9 bg-white border border-[#1A1A1A]/10 flex items-center justify-center text-[#2D4F3C] mb-4">
                      <Icon className="w-4 h-4" />
                    </div>
                    
                    <span className="text-[10px] font-mono font-bold text-[#C27339] uppercase tracking-widest block mb-1">
                      Role 0{idx + 1}
                    </span>

                    <h3 className="text-xl font-black text-[#1A1A1A] mb-1">
                      {item.role}
                    </h3>

                    <p className="text-xs font-bold text-[#2D4F3C] mb-3">
                      {item.tagline}
                    </p>

                    <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* COMMUNITY EXPERIENCES (Verbatim from Section 13) */}
      <section className="py-20 bg-[#F7F5F2] border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C] block mb-2">
              Ongoing Engagements
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#1A1A1A]">
              What happens in the community.
            </h2>
            <p className="text-sm text-[#1A1A1A]/70 mt-3">
              A balanced rhythm of in-person gatherings, peer accountability, outdoor walks, and intellectual salons designed to support sustainable progress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {communityExperiences.map((exp, idx) => (
              <div key={idx} className="p-5 bg-white border border-[#1A1A1A]/10 flex items-start gap-4">
                <span className="text-xs font-mono font-bold text-[#C27339] mt-0.5 shrink-0">
                  {idx < 9 ? `0${idx + 1}` : idx + 1}
                </span>
                <div>
                  <h4 className="text-sm font-bold text-[#1A1A1A] mb-1">
                    {exp.title}
                  </h4>
                  <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PROGRAM PARTICIPANT COMMUNITY ACCESS & EXCLUSIVE PRIORITY OPPORTUNITIES */}
      <section className="py-20 bg-white border-b border-[#1A1A1A]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 bg-[#F7F5F2] border border-[#1A1A1A]/15 shadow-sm space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-[#1A1A1A]/10 pb-6">
              <div className="space-y-2 max-w-2xl">
                <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C] block">
                  Participant Continuity &amp; Priority Access
                </span>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#1A1A1A]">
                  Included for Every Mardai Program Participant
                </h2>
                <p className="text-xs sm:text-sm text-[#1A1A1A]/80 leading-relaxed">
                  There is no separate application or paid membership wall to enter the Mardai Community. Every participant in <strong>Mardai Breakthrough</strong>, <strong>Mardai Basecamp</strong>, <strong>Mardai Events</strong>, and <strong>Organizational Workshops</strong> is automatically welcomed into the community and receives <strong>exclusive priority engagement opportunities</strong>.
                </p>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#1A1A1A]/15 text-[11px] font-mono text-[#2D4F3C] self-start shrink-0">
                <Mail className="w-3.5 h-3.5" />
                <span>connect@mardai.ca</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Exclusive Priority Access to Gatherings',
                  desc: 'First-in reservations for monthly Calgary Breakfasts, intimate roundtables, fireside dialogues, and invitation-only learning salons.'
                },
                {
                  title: 'Early Cohort & Retreat Invitations',
                  desc: 'Priority seat holds and advance notice for upcoming Mardai Basecamp retreats, Breakthrough cohorts, and city events before public release.'
                },
                {
                  title: 'First-Release Mardai Series Access',
                  desc: 'Priority previews and early reservation access for upcoming Mardai Series mental model decks and practitioner frameworks.'
                },
                {
                  title: 'High-Trust Alumni & Peer Network',
                  desc: 'Ongoing 1-on-1 accountability pairings, warm introductions across sectors, and alumni reunions built on shared program foundations.'
                }
              ].map((benefit, bIdx) => (
                <div key={bIdx} className="p-5 bg-white border border-[#1A1A1A]/10 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#2D4F3C] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h3 className="text-xs sm:text-sm font-black text-[#1A1A1A]">
                      {benefit.title}
                    </h3>
                    <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onNavigate('breakthrough')}
                className="px-6 py-3.5 bg-[#1A1A1A] hover:bg-[#2D4F3C] text-white text-xs font-bold uppercase tracking-[0.15em] transition-colors inline-flex items-center gap-2"
              >
                <span>Explore Breakthrough</span>
                <ArrowRight className="w-4 h-4 text-[#C27339]" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('basecamp')}
                className="px-6 py-3.5 bg-[#2D4F3C] hover:bg-[#3C6D58] text-white text-xs font-bold uppercase tracking-[0.15em] transition-colors inline-flex items-center gap-2"
              >
                <span>Discover Basecamp</span>
                <ArrowRight className="w-4 h-4 text-[#C27339]" />
              </button>
              <button
                type="button"
                onClick={() => {
                  if (onContactWithMessage) {
                    onContactWithMessage(
                      'community',
                      'Hello Mardai team,\n\nI am interested in learning more about Mardai programs and the exclusive priority engagement opportunities available to participants.'
                    );
                  } else {
                    onNavigate('contact');
                  }
                }}
                className="px-6 py-3.5 bg-white hover:bg-[#F7F5F2] text-[#1A1A1A] border border-[#1A1A1A]/20 text-xs font-bold uppercase tracking-[0.15em] transition-colors inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#2D4F3C]" />
                <span>Send Us a Message</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
