import React, { useState } from 'react';
import { BASECAMP_DAYS, BASECAMP_PRE_ASSESSMENTS, BASECAMP_FAQS } from '../data/basecampData';
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
  TreePine
} from 'lucide-react';
import { motion } from 'motion/react';

interface BasecampViewProps {
  onOpenJoin: () => void;
  onOpenBasecampReview: () => void;
  onNavigate: (page: PageId) => void;
}

export const BasecampView: React.FC<BasecampViewProps> = ({
  onOpenJoin,
  onOpenBasecampReview,
  onNavigate
}) => {
  const [activeDay, setActiveDay] = useState<number>(1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const currentDayData = BASECAMP_DAYS.find(d => d.dayNumber === activeDay) || BASECAMP_DAYS[0];

  return (
    <div className="pt-24 pb-20 bg-[#F7F5F2]">
      
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-[#1A1A1A] text-white border-b border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C] bg-white px-2 py-0.5">
                2.5-Day Men's Executive & Life Retreat
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[0.9] mb-6">
              Reconnect. Refocus. Move forward.
            </h1>

            {/* Philosophy quote */}
            <div className="p-6 bg-white/5 border border-white/10 mb-6 font-editorial italic text-base sm:text-lg text-[#F7F5F2]/90 leading-relaxed">
              “A basecamp isn't the destination. It's where people stop, prepare, connect, assess where they are, and get ready for the next climb.”
            </div>

            <p className="text-sm sm:text-base text-[#F7F5F2]/80 leading-relaxed max-w-2xl">
              A premium 2.5-day men's experience for professionals, fathers, entrepreneurs, newcomers, leaders, and men navigating career and life transitions in the foothills of the Canadian Rockies.
            </p>

            {/* Location & Upcoming Cohort */}
            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-[#F7F5F2]/80">
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 font-bold">
                <MapPin className="w-3.5 h-3.5 text-[#C27339]" />
                Calgary & Kananaskis Foothills, Alberta
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 font-bold">
                <Users className="w-3.5 h-3.5 text-[#2D4F3C]" />
                Capped at 12–16 Participants
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 font-bold">
                <Calendar className="w-3.5 h-3.5 text-[#C27339]" />
                Next Date: Fall 2026 Cohort
              </span>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
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

      {/* Tone & What Basecamp Feels Like */}
      <section className="py-16 bg-white border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C] block mb-2">
              The Environment
            </span>
            <h2 className="text-3xl font-black tracking-tight text-[#1A1A1A]">
              Grounded, intelligent, and unpretentious.
            </h2>
            <p className="text-xs text-[#1A1A1A]/70 mt-2">
              We strictly avoid clinical therapy tropes and aggressive military bootcamps. Basecamp is an elevated space designed for thoughtful men.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            <div className="p-6 bg-[#F7F5F2] border border-[#1A1A1A]/10 space-y-2">
              <Users className="w-5 h-5 text-[#2D4F3C]" />
              <h4 className="text-xs font-black text-[#1A1A1A] uppercase tracking-wider">Meaningful Connection</h4>
              <p className="text-xs text-[#1A1A1A]/70">Conversations without posturing or social resumes.</p>
            </div>

            <div className="p-6 bg-[#F7F5F2] border border-[#1A1A1A]/10 space-y-2">
              <Compass className="w-5 h-5 text-[#C27339]" />
              <h4 className="text-xs font-black text-[#1A1A1A] uppercase tracking-wider">Personal Reflection</h4>
              <p className="text-xs text-[#1A1A1A]/70">Solo reflection hours to decompress from survival mode.</p>
            </div>

            <div className="p-6 bg-[#F7F5F2] border border-[#1A1A1A]/10 space-y-2">
              <TreePine className="w-5 h-5 text-[#2D4F3C]" />
              <h4 className="text-xs font-black text-[#1A1A1A] uppercase tracking-wider">Alpine Nature</h4>
              <p className="text-xs text-[#1A1A1A]/70">Guided trail walks and mountain foothill vistas.</p>
            </div>

            <div className="p-6 bg-[#F7F5F2] border border-[#1A1A1A]/10 space-y-2">
              <Utensils className="w-5 h-5 text-[#C27339]" />
              <h4 className="text-xs font-black text-[#1A1A1A] uppercase tracking-wider">Communal Meals</h4>
              <p className="text-xs text-[#1A1A1A]/70">Locally sourced chef dinners around the long table.</p>
            </div>

            <div className="p-6 bg-[#F7F5F2] border border-[#1A1A1A]/10 space-y-2">
              <Flame className="w-5 h-5 text-[#2D4F3C]" />
              <h4 className="text-xs font-black text-[#1A1A1A] uppercase tracking-wider">Fireside Candor</h4>
              <p className="text-xs text-[#1A1A1A]/70">Honest brotherhood and 90-day accountability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The 3-Day Retreat Journey */}
      <section className="py-20 bg-[#F7F5F2] border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C] block mb-2">
              Retreat Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#1A1A1A]">
              The 2.5-Day Retreat Arc
            </h2>
            <p className="text-xs text-[#1A1A1A]/70 mt-2">
              Every hour is purposefully sequenced to move from decompression to deep diagnosis and concrete execution.
            </p>
          </div>

          {/* 3 Day Selectors */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
            {BASECAMP_DAYS.map((d) => (
              <button
                key={d.dayNumber}
                onClick={() => setActiveDay(d.dayNumber)}
                className={`p-6 text-left transition-all border ${
                  activeDay === d.dayNumber
                    ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                    : 'bg-white hover:bg-[#F7F5F2] text-[#1A1A1A] border-[#1A1A1A]/10'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${activeDay === d.dayNumber ? 'text-[#C27339]' : 'text-[#1A1A1A]/50'}`}>
                    DAY 0{d.dayNumber}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider font-bold opacity-80">
                    Theme: {d.theme}
                  </span>
                </div>
                <h3 className="text-base font-black">
                  {d.title}
                </h3>
              </button>
            ))}
          </div>

          {/* Active Day Schedule */}
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="p-8 bg-white border border-[#1A1A1A]/15 space-y-6"
          >
            <div className="border-b border-[#1A1A1A]/10 pb-4">
              <span className="text-[10px] font-mono font-bold text-[#C27339] uppercase tracking-wider block mb-1">
                Day 0{currentDayData.dayNumber} Focus • {currentDayData.theme}
              </span>
              <h3 className="text-2xl font-black text-[#1A1A1A]">
                {currentDayData.title}
              </h3>
              <p className="text-xs text-[#1A1A1A]/70 mt-1">
                {currentDayData.description}
              </p>
            </div>

            {/* Activities Timeline */}
            <div className="space-y-3 pt-2">
              {currentDayData.activities.map((act, aIdx) => (
                <div key={aIdx} className="p-4 bg-[#F7F5F2] border border-[#1A1A1A]/10 grid grid-cols-1 sm:grid-cols-12 gap-3 items-start">
                  <div className="sm:col-span-3">
                    <span className="text-xs font-mono font-bold text-[#C27339] block">
                      {act.time}
                    </span>
                    <span className="inline-block mt-1 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-white border border-[#1A1A1A]/10 text-[#2D4F3C]">
                      {act.pillar}
                    </span>
                  </div>
                  <div className="sm:col-span-9">
                    <h4 className="text-xs font-black text-[#1A1A1A] uppercase tracking-wider">
                      {act.title}
                    </h4>
                    <p className="text-xs text-[#1A1A1A]/70 mt-1 leading-relaxed">
                      {act.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* Pre-Retreat Assessment Details */}
      <section className="py-16 bg-white border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C] block mb-2">
              Grounded Reflection Tools
            </span>
            <h2 className="text-3xl font-black tracking-tight text-[#1A1A1A]">
              Pre-Retreat Diagnostic Architecture
            </h2>
            <p className="text-xs text-[#1A1A1A]/70 mt-2">
              Before stepping foot in the mountains, each participant completes structured baseline reflection tools. We use personality frameworks as aids for reflection and dialogue — never as predictive labels or rigid boxes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BASECAMP_PRE_ASSESSMENTS.map((item, idx) => (
              <div key={idx} className="p-6 bg-[#F7F5F2] border border-[#1A1A1A]/10 space-y-2">
                <span className="text-[10px] font-mono font-bold text-[#C27339]">
                  TOOL 0{idx + 1}
                </span>
                <h4 className="text-sm font-black text-[#1A1A1A]">
                  {item.name}
                </h4>
                <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-[#F7F5F2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C] block mb-2">
              Common Inquiries
            </span>
            <h2 className="text-3xl font-black tracking-tight text-[#1A1A1A]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {BASECAMP_FAQS.map((faq, idx) => (
              <div 
                key={idx}
                className="p-6 bg-white border border-[#1A1A1A]/10 cursor-pointer"
                onClick={() => toggleFaq(idx)}
              >
                <div className="flex items-center justify-between gap-4">
                  <h4 className="text-sm font-black text-[#1A1A1A]">
                    {faq.q}
                  </h4>
                  <ChevronDown className={`w-4 h-4 text-[#1A1A1A]/50 shrink-0 transition-transform ${openFaq === idx ? 'rotate-180 text-[#2D4F3C]' : ''}`} />
                </div>
                {openFaq === idx && (
                  <p className="mt-4 pt-4 border-t border-[#1A1A1A]/10 text-xs text-[#1A1A1A]/70 leading-relaxed">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
