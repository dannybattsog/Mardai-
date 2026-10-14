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
  Briefcase,
  Target,
  RefreshCw,
  GitBranch
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
  const [activeCategory, setActiveCategory] = useState<string>('human-development');

  const selectedCategoryData = WORKSHOP_CATEGORIES.find(c => c.id === activeCategory) || WORKSHOP_CATEGORIES[0];

  const capabilityAreas = [
    'Human Development',
    'Leadership Development',
    'Team Effectiveness',
    'Systems Thinking',
    'Constructive Communication',
    'Employee Connection',
    'Personal Effectiveness',
    'AI-Era Capability',
    'Change Readiness',
    'Learning & Development',
    'Organizational Transformation'
  ];

  return (
    <div className="pt-24 pb-20 bg-[#F7F5F2]">
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-[#F7F5F2] border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C]">
                MARDAI WORKSHOPS — FOR ORGANIZATIONS
              </span>
              <span className="w-1 h-1 bg-[#2D4F3C] rounded-full"></span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#1A1A1A] leading-[0.9] mb-6">
              Develop people.<br />Strengthen connection.<br />Build capability.
            </h1>

            <p className="text-xl sm:text-2xl font-light text-[#1A1A1A] leading-relaxed mb-6 font-editorial italic">
              “Adapting Mardai frameworks and development methodology for organizations.”
            </p>

            <p className="text-sm sm:text-base text-[#1A1A1A]/80 leading-relaxed max-w-2xl mb-8">
              We partner with forward-thinking leadership teams to design practical, customized development programs that elevate personal effectiveness, deepen team trust, and build durable organizational capabilities.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBook}
                className="bg-[#1A1A1A] hover:bg-[#2D4F3C] text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] transition-all shadow-sm flex items-center gap-2 group"
              >
                <span>Work With Mardai</span>
                <ArrowRight className="w-4 h-4 text-[#C27339] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenBasecampReview}
                className="border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] transition-all"
              >
                <span>Explore Diagnostic Assessment</span>
              </button>
            </div>

            {/* Credibility statement */}
            <div className="mt-8 pt-6 border-t border-[#1A1A1A]/10 flex flex-wrap items-center gap-6 text-[11px] uppercase tracking-widest text-[#1A1A1A]/60 font-semibold">
              <span>Customized for Canadian & North American Teams</span>
              <span>•</span>
              <span>Calgary In-Person & Remote Facilitation</span>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITY AREAS (Verbatim from Section 16) */}
      <section className="py-16 bg-white border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C] block mb-2">
              Organizational Focus
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#1A1A1A]">
              Areas where we help organizations evolve.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {capabilityAreas.map((area, idx) => (
              <span 
                key={idx} 
                className="px-4 py-2.5 bg-[#F7F5F2] border border-[#1A1A1A]/10 text-xs font-bold text-[#1A1A1A] flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#2D4F3C]"></span>
                <span>{area}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4 CORE CURRICULUMS */}
      <section className="py-20 bg-[#F7F5F2] border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C] block mb-2">
              Modular Curriculums
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1A1A1A]">
              Frameworks engineered for practical workplace adoption.
            </h2>
          </div>

          {/* Pillars Tab Selector */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-8">
            {WORKSHOP_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`p-5 text-left transition-all border ${
                  activeCategory === cat.id
                    ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                    : 'bg-white hover:bg-[#F7F5F2] text-[#1A1A1A] border-[#1A1A1A]/10'
                }`}
              >
                <span className={`text-[10px] font-mono font-bold block mb-1 ${activeCategory === cat.id ? 'text-[#C27339]' : 'text-[#2D4F3C]'}`}>
                  {cat.title}
                </span>
                <span className="text-xs font-black block">
                  {cat.subtitle}
                </span>
              </button>
            ))}
          </div>

          {/* Active Curriculum Detailed Card */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="p-8 sm:p-10 bg-white border border-[#1A1A1A]/15 grid grid-cols-1 lg:grid-cols-12 gap-8 shadow-sm"
          >
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-[#C27339] uppercase tracking-wider block mb-1">
                  {selectedCategoryData.title}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#1A1A1A]">
                  {selectedCategoryData.subtitle}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[#1A1A1A]/80 leading-relaxed">
                {selectedCategoryData.description}
              </p>

              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1A1A1A] block mb-3">
                  Core Topics Covered:
                </span>
                <div className="space-y-2">
                  {selectedCategoryData.topics.map((t, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#1A1A1A]/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2D4F3C] shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Outcomes */}
            <div className="lg:col-span-5 bg-[#F7F5F2] p-6 border border-[#1A1A1A]/10 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2D4F3C] block mb-3">
                  Measurable Business Outcomes:
                </span>
                <div className="space-y-3">
                  {selectedCategoryData.outcomes.map((o, idx) => (
                    <div key={idx} className="p-3 bg-white border border-[#1A1A1A]/10 text-xs font-bold text-[#1A1A1A] flex items-start gap-2">
                      <span className="text-[#C27339] font-bold">✓</span>
                      <span>{o}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onOpenBook}
                className="w-full py-3.5 px-4 bg-[#1A1A1A] hover:bg-[#2D4F3C] text-white text-xs font-bold uppercase tracking-[0.15em] transition-colors flex items-center justify-center gap-2"
              >
                <span>Work With Mardai</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C27339]" />
              </button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* DELIVERY FORMATS */}
      <section className="py-20 bg-white border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C] block mb-2">
              Flexible Engagement
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1A1A1A]">
              Delivery Formats
            </h2>
            <p className="text-xs text-[#1A1A1A]/70 mt-2">
              From concise 90-minute executive keynotes to immersive multi-week learning journeys.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {WORKSHOP_FORMATS.map((fmt, idx) => (
              <div key={idx} className="p-6 bg-[#F7F5F2] border border-[#1A1A1A]/10 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#C27339] uppercase tracking-wider block">
                    {fmt.duration}
                  </span>
                  <h3 className="text-base font-black text-[#1A1A1A] mt-1 mb-2">
                    {fmt.name}
                  </h3>
                  <p className="text-xs text-[#1A1A1A]/70 leading-relaxed mb-4">
                    {fmt.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#1A1A1A]/10 text-[11px] text-[#1A1A1A]/60">
                  <span className="font-bold text-[#2D4F3C] block mb-0.5">Ideal For:</span>
                  <span>{fmt.idealFor}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* THE 7-STEP DEVELOPMENT METHODOLOGY (Verbatim from Section 16) */}
      <section className="py-20 bg-[#F7F5F2] border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C] block mb-2">
              Organizational Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1A1A1A]">
              The 7-Step Mardai Development System
            </h2>
            <p className="text-xs text-[#1A1A1A]/70 mt-2">
              Every organizational engagement follows a disciplined, systemic progression rather than isolated lectures.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-3">
            {METHODOLOGY_STEPS.map((m, idx) => (
              <div key={idx} className="p-5 bg-white border border-[#1A1A1A]/10 flex flex-col justify-between space-y-3">
                <span className="text-xs font-mono font-bold text-[#C27339]">
                  STEP {m.step}
                </span>
                <div>
                  <h4 className="text-sm font-black text-[#1A1A1A] mb-1">
                    {m.name}
                  </h4>
                  <p className="text-[11px] text-[#1A1A1A]/70 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-[#1A1A1A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C] bg-white px-2.5 py-0.5 inline-block">
            Customized Organizational Development
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            Ready to develop your people and build capability?
          </h2>
          <p className="text-xs sm:text-sm text-[#F7F5F2]/75 max-w-xl mx-auto leading-relaxed">
            Let’s discuss your team’s context, current bottlenecks, and how Mardai frameworks can be adapted for your organization.
          </p>
          <div className="pt-4 flex justify-center">
            <button
              onClick={onOpenBook}
              className="px-8 py-4 bg-[#2D4F3C] hover:bg-[#3C6D58] text-white text-xs font-bold uppercase tracking-[0.15em] transition-all flex items-center gap-2"
            >
              <span>Work With Mardai</span>
              <ArrowRight className="w-4 h-4 text-[#C27339]" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
