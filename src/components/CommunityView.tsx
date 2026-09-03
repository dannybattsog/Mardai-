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
  Check
} from 'lucide-react';
import { motion } from 'motion/react';

interface CommunityViewProps {
  onOpenBasecampReview: () => void;
  onNavigate: (page: PageId) => void;
  onShowToast: (title: string, message?: string, type?: 'success' | 'error' | 'info') => void;
}

export const CommunityView: React.FC<CommunityViewProps> = ({
  onOpenBasecampReview,
  onNavigate,
  onShowToast
}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [interest, setInterest] = useState('breakfast');
  const [isJoined, setIsJoined] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      onShowToast('Invalid Email', 'Please provide a valid email address.', 'error');
      return;
    }
    setIsJoined(true);
    onShowToast('Community Invitation Sent', `Welcome, ${name || 'friend'}! We'll send event invitations and cohort updates to ${email}.`, 'success');
    setEmail('');
    setName('');
  };

  return (
    <div className="pt-24 pb-20 bg-[#F7F5F2]">
      
      {/* Hero Section with Bold Typography */}
      <section className="py-16 md:py-24 bg-[#F7F5F2] border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C]">
                Connection & Ongoing Practice
              </span>
              <span className="w-1 h-1 bg-[#2D4F3C] rounded-full"></span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#1A1A1A] leading-[0.9] mb-6">
              Progress is better together.
            </h1>

            <p className="text-xl font-light text-[#1A1A1A]/90 leading-relaxed max-w-2xl">
              An intelligent, grounded community for professionals, leaders, founders, and retreat alumni who value substantive dialogue, shared accountability, and thoughtful growth.
            </p>

            {/* Quick stats / Highlights */}
            <div className="mt-8 flex flex-wrap items-center gap-6 text-[11px] uppercase tracking-widest text-[#1A1A1A]/60 font-semibold pt-4 border-t border-[#1A1A1A]/10">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#C27339]" /> Calgary & Alberta Hub
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#2D4F3C]" /> Monthly Gatherings
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#2D4F3C]" /> No Sales Pitches
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Community Formats */}
      <section className="py-20 bg-white border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C] block mb-2">
              Gathering Formats
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1A1A1A]">
              Curated spaces for honest dialogue and peer accountability.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Format 1 */}
            <div className="p-8 bg-[#F7F5F2] border border-[#1A1A1A]/10 space-y-4">
              <div className="w-10 h-10 bg-white border border-[#1A1A1A]/15 flex items-center justify-center text-[#2D4F3C]">
                <Coffee className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono font-bold text-[#C27339] uppercase tracking-wider block">
                Monthly In-Person
              </span>
              <h3 className="text-xl font-bold text-[#1A1A1A]">
                The Basecamp Breakfasts
              </h3>
              <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">
                Casual, structured early morning breakfasts in downtown Calgary. One focused prompt, zero posturing, and high-quality peer exchange.
              </p>
              <ul className="space-y-1.5 text-xs text-[#1A1A1A]/80 pt-2 border-t border-[#1A1A1A]/10">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#2D4F3C]" />
                  <span>Capped at 14 participants</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#2D4F3C]" />
                  <span>Rotating topical themes</span>
                </li>
              </ul>
            </div>

            {/* Format 2 */}
            <div className="p-8 bg-[#F7F5F2] border border-[#1A1A1A]/10 space-y-4">
              <div className="w-10 h-10 bg-white border border-[#1A1A1A]/15 flex items-center justify-center text-[#2D4F3C]">
                <Flame className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono font-bold text-[#C27339] uppercase tracking-wider block">
                Quarterly Program
              </span>
              <h3 className="text-xl font-bold text-[#1A1A1A]">
                90-Day Accountability Pods
              </h3>
              <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">
                Small, committed cohorts of 4–5 professionals who meet bi-weekly to review priority goals, celebrate wins, and remove roadblocks.
              </p>
              <ul className="space-y-1.5 text-xs text-[#1A1A1A]/80 pt-2 border-t border-[#1A1A1A]/10">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#2D4F3C]" />
                  <span>Structured sprint check-ins</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#2D4F3C]" />
                  <span>Peer feedback & accountability</span>
                </li>
              </ul>
            </div>

            {/* Format 3 */}
            <div className="p-8 bg-[#F7F5F2] border border-[#1A1A1A]/10 space-y-4">
              <div className="w-10 h-10 bg-white border border-[#1A1A1A]/15 flex items-center justify-center text-[#2D4F3C]">
                <MessageSquare className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono font-bold text-[#C27339] uppercase tracking-wider block">
                Asynchronous & Digital
              </span>
              <h3 className="text-xl font-bold text-[#1A1A1A]">
                The Mardai Exchange
              </h3>
              <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">
                A private curated discussion group where members share practical frameworks, job opportunities, AI tools, and book recommendations.
              </p>
              <ul className="space-y-1.5 text-xs text-[#1A1A1A]/80 pt-2 border-t border-[#1A1A1A]/10">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#2D4F3C]" />
                  <span>Signal over noise</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#2D4F3C]" />
                  <span>Moderated for quality</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Join Community Registration */}
      <section className="py-20 bg-[#F7F5F2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 bg-white border border-[#1A1A1A]/15 shadow-sm space-y-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C] block mb-2">
                Join the Network
              </span>
              <h2 className="text-3xl font-black tracking-tight text-[#1A1A1A]">
                Request an Invitation to the Mardai Community
              </h2>
              <p className="mt-2 text-sm text-[#1A1A1A]/70 leading-relaxed">
                We review every inquiry to ensure mutual fit and maintain an environment of high trust, curiosity, and practical value.
              </p>
            </div>

            {isJoined ? (
              <div className="p-6 bg-[#EFECE6] border border-[#2D4F3C]/40 text-[#2D4F3C] space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Application received</span>
                </div>
                <p className="text-xs text-[#1A1A1A]/80">
                  Thank you for your interest in joining the Mardai community. We'll be in touch with details on upcoming Calgary gatherings.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1A1A1A] mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Marcus Vance"
                      className="w-full px-4 py-3 bg-[#F7F5F2] border border-[#1A1A1A]/20 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#2D4F3C]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1A1A1A] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 bg-[#F7F5F2] border border-[#1A1A1A]/20 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#2D4F3C]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1A1A1A] mb-1">
                    Primary Interest
                  </label>
                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full px-4 py-3 bg-[#F7F5F2] border border-[#1A1A1A]/20 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#2D4F3C]"
                  >
                    <option value="breakfast">Calgary Basecamp Breakfasts (In-Person)</option>
                    <option value="pods">90-Day Accountability Pods</option>
                    <option value="exchange">The Mardai Digital Exchange</option>
                    <option value="all">All Community Initiatives</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="bg-[#1A1A1A] hover:bg-[#2D4F3C] text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
                  >
                    <span>Submit Community Request</span>
                    <ArrowRight className="w-4 h-4 text-[#C27339]" />
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
