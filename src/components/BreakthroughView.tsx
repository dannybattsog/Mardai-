import React, { useState } from 'react';
import { BREAKTHROUGH_WEEKS, BREAKTHROUGH_FAQS } from '../data/breakthroughData';
import { PageId } from '../types';
import { 
  Briefcase, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Target, 
  ChevronDown,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { motion } from 'motion/react';

interface BreakthroughViewProps {
  onOpenApply: () => void;
  onOpenBasecampReview: () => void;
  onNavigate: (page: PageId) => void;
}

export const BreakthroughView: React.FC<BreakthroughViewProps> = ({
  onOpenApply,
  onOpenBasecampReview,
  onNavigate
}) => {
  const [activeWeek, setActiveWeek] = useState<number>(1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const currentWeekData = BREAKTHROUGH_WEEKS.find(w => w.weekNumber === activeWeek) || BREAKTHROUGH_WEEKS[0];

  return (
    <div className="pt-24 pb-20 bg-[#F7F5F2]">
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-[#F7F5F2] border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C]">
                6-Week Career Advancement Accelerator
              </span>
              <span className="w-1 h-1 bg-[#2D4F3C] rounded-full"></span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#1A1A1A] leading-[0.9] mb-6">
              Build your next career move.
            </h1>

            <p className="text-xl font-light text-[#1A1A1A]/90 leading-relaxed mb-6">
              A structured six-week career advancement program for professionals who know they are capable of more but need clarity, positioning, strategy, and disciplined execution.
            </p>

            <p className="text-sm text-[#1A1A1A]/70 leading-relaxed">
              This is not generic career coaching or hollow cheerleader motivation. It is an end-to-end transformation process combining rigorous diagnostic audits, transferable capability positioning, AI-augmented workflows, and hidden-job-market access.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenApply}
                className="bg-[#1A1A1A] hover:bg-[#2D4F3C] text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] transition-all shadow-sm flex items-center gap-2 group"
              >
                <span>Apply for Breakthrough</span>
                <ArrowRight className="w-4 h-4 text-[#C27339] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenBasecampReview}
                className="border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] transition-all"
              >
                Take Career Diagnostic
              </button>
            </div>

            {/* Cohort status */}
            <div className="mt-8 flex items-center gap-4 text-xs text-[#1A1A1A]/60">
              <span className="flex items-center gap-1.5 font-bold">
                <span className="w-2 h-2 rounded-full bg-[#2D4F3C]"></span>
                Next Cohort: Enrolling Now (Strictly Capped at 15 Seats)
              </span>
              <span>•</span>
              <span>Calgary & Virtual Live</span>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison: Generic Coaching vs. Mardai Breakthrough */}
      <section className="py-16 bg-white border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C] block mb-2">
              Why Breakthrough Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#1A1A1A]">
              Engineered for concrete outcomes, not open-ended conversation.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {/* Traditional */}
            <div className="p-8 bg-[#F7F5F2] border border-[#1A1A1A]/10 space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1A1A1A]/50 block">
                Typical Career Coaching
              </span>
              <ul className="space-y-3 text-xs text-[#1A1A1A]/70">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Unstructured 60-minute therapy-style chats with no defined roadmap</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Generic advice to "polish your resume and apply online"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Passive listing of past job duties with no capability positioning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Leaves you alone to navigate rejection and cold outreach</span>
                </li>
              </ul>
            </div>

            {/* Mardai Breakthrough */}
            <div className="p-8 bg-[#1A1A1A] text-white border border-[#1A1A1A] space-y-4 shadow-md">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2D4F3C] bg-white px-2 py-0.5 inline-block">
                Mardai Breakthrough
              </span>
              <ul className="space-y-3 text-xs text-[#F7F5F2]/90">
                <li className="flex items-start gap-2">
                  <span className="text-[#C27339] font-bold">✓</span>
                  <span>Systematic 6-week curriculum with weekly tangibles and diagnostic checkpoints</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C27339] font-bold">✓</span>
                  <span>Translates isolated experience into high-value Transferable Capability models</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C27339] font-bold">✓</span>
                  <span>Executive narrative overhaul (ATS resume, LinkedIn brand, pitch scripts)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C27339] font-bold">✓</span>
                  <span>Hidden job market access strategies & continuous peer accountability</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The 6-Week Program Journey */}
      <section className="py-20 bg-[#F7F5F2] border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C] block mb-2">
              Curriculum Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#1A1A1A]">
              The 6-Week Transformation Roadmap
            </h2>
            <p className="text-xs text-[#1A1A1A]/70 mt-2">
              From current-state diagnostic to high-stakes interview execution and 90-day trajectory.
            </p>
          </div>

          {/* 6 Week Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-6">
            {BREAKTHROUGH_WEEKS.map((w) => (
              <button
                key={w.weekNumber}
                onClick={() => setActiveWeek(w.weekNumber)}
                className={`p-4 text-left transition-all border ${
                  activeWeek === w.weekNumber
                    ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                    : 'bg-white hover:bg-[#F7F5F2] text-[#1A1A1A] border-[#1A1A1A]/10'
                }`}
              >
                <span className="text-[10px] font-mono font-bold text-[#C27339] block">
                  WEEK 0{w.weekNumber}
                </span>
                <span className="text-xs font-black block truncate mt-0.5">
                  {w.title}
                </span>
              </button>
            ))}
          </div>

          {/* Active Week Detailed Card */}
          <motion.div
            key={activeWeek}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="p-8 bg-white border border-[#1A1A1A]/15 grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-[#C27339]">
                  Week 0{currentWeekData.weekNumber} / 06
                </span>
                <span className="text-[#1A1A1A]/30">•</span>
                <span className="text-xs text-[#1A1A1A]/70 uppercase tracking-wider font-bold">
                  {currentWeekData.theme}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#1A1A1A]">
                {currentWeekData.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#1A1A1A]/80 leading-relaxed">
                {currentWeekData.focus}
              </p>

              {/* Tangibles / Deliverables */}
              <div className="pt-4 space-y-2">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1A1A1A] block">
                  Weekly Tangible Deliverables
                </span>
                <div className="space-y-2">
                  {currentWeekData.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#1A1A1A]/80 p-2.5 bg-[#F7F5F2] border border-[#1A1A1A]/10">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2D4F3C] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Proprietary Tools */}
            <div className="lg:col-span-5 bg-[#F7F5F2] p-6 border border-[#1A1A1A]/10 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2D4F3C] block mb-3">
                  Proprietary Mardai Toolkits
                </span>
                <div className="space-y-2">
                  {currentWeekData.tools.map((tool, tIdx) => (
                    <div key={tIdx} className="p-3 bg-white border border-[#1A1A1A]/10 text-xs font-bold text-[#1A1A1A] flex items-center justify-between">
                      <span>{tool}</span>
                      <Zap className="w-3.5 h-3.5 text-[#C27339]" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#1A1A1A]/10">
                <button
                  onClick={onOpenApply}
                  className="w-full py-3.5 px-4 bg-[#1A1A1A] hover:bg-[#2D4F3C] text-white text-xs font-bold uppercase tracking-[0.15em] transition-colors flex items-center justify-center gap-2"
                >
                  <span>Apply for Next Cohort</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C27339]" />
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Included Elements & AI Integration */}
      <section className="py-16 bg-white border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C] block mb-2">
              Complete Toolset
            </span>
            <h2 className="text-3xl font-black tracking-tight text-[#1A1A1A]">
              What You Access in Breakthrough
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 bg-[#F7F5F2] border border-[#1A1A1A]/10 space-y-3">
              <span className="w-8 h-8 bg-white border border-[#1A1A1A]/10 flex items-center justify-center text-[#2D4F3C]">
                <Target className="w-4 h-4" />
              </span>
              <h4 className="text-lg font-black text-[#1A1A1A]">AI-Assisted Career Exploration</h4>
              <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">
                Learn how to construct custom AI prompting workflows to conduct deep market intelligence on hiring companies, simulate tough interview scenarios, and dissect job descriptions.
              </p>
            </div>

            <div className="p-7 bg-[#F7F5F2] border border-[#1A1A1A]/10 space-y-3">
              <span className="w-8 h-8 bg-white border border-[#1A1A1A]/10 flex items-center justify-center text-[#C27339]">
                <Sparkles className="w-4 h-4" />
              </span>
              <h4 className="text-lg font-black text-[#1A1A1A]">Cognitive & Value Profiling</h4>
              <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">
                Objective reflection frameworks to uncover your core drivers, non-negotiable workplace conditions, and distinct behavioral superpowers without pseudoscientific labeling.
              </p>
            </div>

            <div className="p-7 bg-[#F7F5F2] border border-[#1A1A1A]/10 space-y-3">
              <span className="w-8 h-8 bg-white border border-[#1A1A1A]/10 flex items-center justify-center text-[#1A1A1A]">
                <ShieldCheck className="w-4 h-4" />
              </span>
              <h4 className="text-lg font-black text-[#1A1A1A]">Structured Peer Accountability</h4>
              <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">
                Weekly check-ins with high-caliber peers who hold you accountable to your outreach, asset polishing, and interview execution goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-[#F7F5F2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C] block mb-2">
              Common Questions
            </span>
            <h2 className="text-3xl font-black tracking-tight text-[#1A1A1A]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {BREAKTHROUGH_FAQS.map((faq, idx) => (
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

          {/* Bottom CTA Banner */}
          <div className="mt-16 p-8 sm:p-10 bg-[#1A1A1A] text-white space-y-6">
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
              Ready to take your next career step with discipline?
            </h3>
            <p className="text-xs text-[#F7F5F2]/70 max-w-xl leading-relaxed">
              Applications are reviewed individually. Join the upcoming cohort to build your positioning and execute your move.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenApply}
                className="px-8 py-4 bg-[#2D4F3C] hover:bg-[#3C6D58] text-white text-xs font-bold uppercase tracking-[0.15em] transition-all inline-flex items-center gap-2"
              >
                <span>Apply for Breakthrough</span>
                <ArrowRight className="w-4 h-4 text-[#C27339]" />
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
