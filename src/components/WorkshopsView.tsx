import React, { useState } from 'react';
import { WORKSHOP_CATEGORIES, WORKSHOP_FORMATS, METHODOLOGY_STEPS } from '../data/workshopsData';
import { PageId } from '../types';
import { 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  Users, 
  Layers, 
  ChevronRight, 
  Check, 
  ShieldCheck, 
  TrendingUp, 
  Cpu, 
  Compass,
  Briefcase
} from 'lucide-react';
import { motion } from 'motion/react';

interface WorkshopsViewProps {
  onOpenBook: () => void;
  onOpenBasecampReview: () => void;
  onNavigate: (page: PageId) => void;
}

export const WorkshopsView: React.FC<WorkshopsViewProps> = ({
  onOpenBook,
  onOpenBasecampReview,
  onNavigate
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('think-better');

  const selectedCategoryData = WORKSHOP_CATEGORIES.find(c => c.id === activeCategory) || WORKSHOP_CATEGORIES[0];

  return (
    <div className="pt-24 pb-20 bg-[#F7F5F2]">
      
      {/* Hero Section with Bold Typography styling */}
      <section className="py-16 md:py-24 bg-[#F7F5F2] border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C]">
                Organizational Development & Capability
              </span>
              <span className="w-1 h-1 bg-[#2D4F3C] rounded-full"></span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#1A1A1A] leading-[0.9] mb-6">
              Better people.<br />Better teams.<br />Better performance.
            </h1>

            <p className="text-xl font-light text-[#1A1A1A]/90 leading-relaxed max-w-2xl">
              Practical, high-impact workshops and leadership programs designed to build clarity, emotional intelligence, systems thinking, and effective modern AI workflows in your organization.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBook}
                className="bg-[#1A1A1A] hover:bg-[#2D4F3C] text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] transition-all shadow-sm flex items-center gap-2 group"
              >
                <span>Book a Strategy Conversation</span>
                <ArrowRight className="w-4 h-4 text-[#C27339] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenBasecampReview}
                className="border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] transition-all"
              >
                Explore Diagnostic Assessment
              </button>
            </div>

            {/* Credibility statement */}
            <div className="mt-8 pt-6 border-t border-[#1A1A1A]/10 flex flex-wrap items-center gap-6 text-[11px] uppercase tracking-widest text-[#1A1A1A]/60 font-semibold">
              <span>Tailored for Canadian & Global Enterprise</span>
              <span>•</span>
              <span>Calgary In-Person & Remote Live</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Pillars */}
      <section className="py-20 bg-white border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C] block mb-2">
              Four Core Curriculums
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1A1A1A]">
              Modular workshop frameworks built for practical adoption.
            </h2>
          </div>

          {/* Pillars Tab Selector */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {WORKSHOP_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`p-5 text-left transition-all border ${
                  activeCategory === cat.id
                    ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-md'
                    : 'bg-[#F7F5F2] hover:bg-white text-[#1A1A1A] border-[#1A1A1A]/10'
                }`}
              >
                <span className={`text-[10px] font-black uppercase tracking-[0.2em] block mb-1 ${
                  activeCategory === cat.id ? 'text-[#C27339]' : 'text-[#2D4F3C]'
                }`}>
                  {cat.title}
                </span>
                <span className="text-sm font-bold block">
                  {cat.subtitle}
                </span>
              </button>
            ))}
          </div>

          {/* Active Category Breakdown */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="p-8 sm:p-10 bg-[#F7F5F2] border border-[#1A1A1A]/15 grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#2D4F3C] block mb-1">
                  {selectedCategoryData.title}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A]">
                  {selectedCategoryData.subtitle}
                </h3>
                <p className="mt-3 text-sm text-[#1A1A1A]/80 leading-relaxed">
                  {selectedCategoryData.description}
                </p>
              </div>

              {/* Topics Covered */}
              <div className="space-y-2">
                <span className="text-[11px] uppercase tracking-widest font-black text-[#1A1A1A] block">
                  Key Topics & Modules
                </span>
                <div className="space-y-2">
                  {selectedCategoryData.topics.map((t, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#1A1A1A]/80 p-3 bg-white border border-[#1A1A1A]/10">
                      <Check className="w-4 h-4 text-[#2D4F3C] shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Measurable Outcomes */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 border border-[#1A1A1A]/15 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#2D4F3C] block mb-3">
                  Measurable Business Outcomes
                </span>
                <div className="space-y-3">
                  {selectedCategoryData.outcomes.map((out, oIdx) => (
                    <div key={oIdx} className="p-3 bg-[#F7F5F2] border border-[#1A1A1A]/10 text-xs font-medium text-[#1A1A1A] flex items-center gap-2.5">
                      <TrendingUp className="w-4 h-4 text-[#C27339] shrink-0" />
                      <span>{out}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#1A1A1A]/10">
                <button
                  onClick={onOpenBook}
                  className="w-full py-3.5 px-4 bg-[#1A1A1A] hover:bg-[#2D4F3C] text-white text-xs font-bold uppercase tracking-[0.15em] transition-all flex items-center justify-center gap-2"
                >
                  <span>Request Custom Agenda</span>
                  <ArrowRight className="w-4 h-4 text-[#C27339]" />
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Engagement Formats */}
      <section className="py-20 bg-[#F7F5F2] border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C] block mb-2">
              Delivery Formats
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1A1A1A]">
              Flexible delivery models tailored to your schedule.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WORKSHOP_FORMATS.map((fmt, idx) => (
              <div key={idx} className="p-8 bg-white border border-[#1A1A1A]/10 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className="text-[10px] font-mono font-bold text-[#C27339] uppercase tracking-wider">
                      {fmt.duration}
                    </span>
                    <span className="text-[10px] font-black text-[#1A1A1A]/40 uppercase tracking-widest">
                      Format 0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A]">
                    {fmt.name}
                  </h3>
                  <p className="text-xs text-[#2D4F3C] font-semibold mt-1 mb-3">
                    Ideal for: {fmt.idealFor}
                  </p>
                  <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">
                    {fmt.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1A1A1A]/10">
                  <button
                    onClick={onOpenBook}
                    className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] hover:text-[#2D4F3C] flex items-center gap-1.5"
                  >
                    <span>Inquire for your team</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C27339]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Step Methodology */}
      <section className="py-20 bg-white border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C] block mb-2">
              Our Methodology
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1A1A1A]">
              How we ensure sustainable behavioral change.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {METHODOLOGY_STEPS.map((m, idx) => (
              <div key={idx} className="p-6 bg-[#F7F5F2] border border-[#1A1A1A]/10 space-y-3">
                <span className="text-xs font-mono font-bold text-[#C27339] block">
                  {m.step}
                </span>
                <h3 className="text-base font-bold text-[#1A1A1A]">
                  {m.name}
                </h3>
                <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-[#1A1A1A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Equip your leadership and teams for what comes next.
          </h2>
          <p className="text-sm font-light text-[#F7F5F2]/80 max-w-xl mx-auto leading-relaxed">
            Schedule a 20-minute diagnostic conversation to explore workshop topics, cohort customization, and delivery options for your organization.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenBook}
              className="bg-[#2D4F3C] hover:bg-[#3C6D58] text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] transition-all shadow-md inline-flex items-center gap-2"
            >
              <span>Schedule Strategy Call</span>
              <ArrowRight className="w-4 h-4 text-[#C27339]" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
