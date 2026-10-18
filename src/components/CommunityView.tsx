import React, { useState } from 'react';
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
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [roleInterest, setRoleInterest] = useState('builder');
  const [isJoined, setIsJoined] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      onShowToast('Invalid Email', 'Please provide a valid email address.', 'error');
      return;
    }
    setIsJoined(true);
    onShowToast('Community Request Dispatched', `Thank you, ${name || 'friend'}! Your invitation request has been routed to connect@mardai.ca. An advisor will reach out to ${email} with details.`, 'success');
    setEmail('');
    setName('');
  };

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
    { title: 'Monthly In-Person Gatherings', desc: 'Structured morning roundtables and evening conversations in Calgary and regional hubs.' },
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
              <a
                href="#join-community-form"
                className="px-6 py-3.5 bg-[#1A1A1A] hover:bg-[#2D4F3C] text-white text-xs font-bold uppercase tracking-[0.15em] transition-colors inline-flex items-center gap-2"
              >
                <span>Join the Community</span>
                <ArrowRight className="w-4 h-4 text-[#C27339]" />
              </a>
              <button
                type="button"
                onClick={() => {
                  if (onContactWithMessage) {
                    onContactWithMessage(
                      'community',
                      'Hello Mardai team,\n\nI would like to connect with the Mardai Community and learn about upcoming monthly gatherings, roundtables, and membership in Calgary and across Canada.'
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

      {/* JOIN COMMUNITY INVITATION */}
      <section id="join-community-form" className="py-20 bg-white border-b border-[#1A1A1A]/10 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 bg-[#F7F5F2] border border-[#1A1A1A]/15 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#1A1A1A]/10 pb-4">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C] block mb-1">
                  Get Connected
                </span>
                <h2 className="text-3xl font-black tracking-tight text-[#1A1A1A]">
                  Join the Community
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-[#1A1A1A]/70 leading-relaxed">
                  Whether you are an alumnus of Basecamp, a Breakthrough participant, or a committed professional who resonates with deliberate human development, we invite you to connect.
                </p>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-white border border-[#1A1A1A]/15 text-[11px] font-mono text-[#2D4F3C] self-start sm:self-auto shrink-0">
                <Mail className="w-3.5 h-3.5" />
                <span>connect@mardai.ca</span>
              </div>
            </div>

            {isJoined ? (
              <div className="p-6 bg-white border border-[#2D4F3C]/40 text-[#2D4F3C] space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Invitation Request Received</span>
                </div>
                <p className="text-xs text-[#1A1A1A]/80">
                  Thank you for reaching out. We will send details about our upcoming monthly gathering and community onboarding.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#1A1A1A] block mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full p-3 bg-white border border-[#1A1A1A]/20 text-xs focus:outline-none focus:border-[#2D4F3C]"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#1A1A1A] block mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      className="w-full p-3 bg-white border border-[#1A1A1A]/20 text-xs focus:outline-none focus:border-[#2D4F3C]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#1A1A1A] block mb-1">
                    How do you see yourself participating?
                  </label>
                  <select
                    value={roleInterest}
                    onChange={(e) => setRoleInterest(e.target.value)}
                    className="w-full p-3 bg-white border border-[#1A1A1A]/20 text-xs focus:outline-none focus:border-[#2D4F3C]"
                  >
                    <option value="builder">As a Builder (working actively on my personal/career development)</option>
                    <option value="contributor">As a Contributor (sharing ideas, tools & practical knowledge)</option>
                    <option value="mentor">As a Mentor (sharing experience & guidance)</option>
                    <option value="connector">As a Connector (introducing people & strengthening community)</option>
                  </select>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 bg-[#1A1A1A] hover:bg-[#2D4F3C] text-white text-xs font-bold uppercase tracking-[0.15em] transition-all flex items-center justify-center gap-2"
                  >
                    <span>Join the Community</span>
                    <ArrowRight className="w-4 h-4 text-[#C27339]" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (onContactWithMessage) {
                        onContactWithMessage(
                          'community',
                          'Hello Mardai team,\n\nI would like to join the Mardai Community (monthly breakfast gatherings, roundtables, and practitioner network in Calgary and across Canada).\n\nPlease let me know how to get involved.'
                        );
                      } else {
                        onNavigate('contact');
                      }
                    }}
                    className="w-full sm:w-auto px-6 py-4 bg-white hover:bg-[#F7F5F2] text-[#1A1A1A] border border-[#1A1A1A]/20 text-xs font-bold uppercase tracking-[0.15em] transition-colors flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4 text-[#2D4F3C]" />
                    <span>Send Us a Message</span>
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      </section>

    </div>
  );
};
