import React from 'react';
import { PageId } from '../types';
import { ArrowRight, Compass, Shield, Check, Mountain, Users, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroSectionProps {
  onNavigate: (page: PageId) => void;
  onOpenFindPath: () => void;
  onOpenBasecampReview: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenFindPath,
  onOpenBasecampReview
}) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#F7F5F2] border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Eyebrow Label */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C]">
            Human Development & Practical Strategy
          </span>
          <span className="w-1 h-1 bg-[#2D4F3C] rounded-full"></span>
        </motion.div>

        {/* Massive Master Headline in Bold Typography */}
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-[104px] font-black tracking-[-0.04em] text-[#1A1A1A] leading-[0.88] max-w-5xl mb-8"
        >
          Progress by design.
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-2xl font-light text-[#1A1A1A]/90 max-w-3xl leading-relaxed mb-10"
        >
          Mardai helps people and organizations move forward with greater clarity, capability, confidence, and connection.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#offerings"
            className="bg-[#1A1A1A] hover:bg-[#2D4F3C] text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] transition-all shadow-sm flex items-center gap-2 group"
          >
            <span>Explore Mardai</span>
            <ArrowRight className="w-4 h-4 text-[#C27339] group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={onOpenFindPath}
            className="border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] transition-all flex items-center gap-2"
          >
            <Compass className="w-4 h-4 text-[#2D4F3C]" />
            <span>Find Your Next Step</span>
          </button>

          <button
            onClick={onOpenBasecampReview}
            className="text-xs font-bold uppercase tracking-wider text-[#2D4F3C] hover:underline px-4 py-4 flex items-center gap-1.5"
          >
            <span>Take Your Breakthrough Review</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>

        {/* Positioning Statement Card */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 sm:mt-20 p-8 sm:p-10 bg-white border border-[#1A1A1A]/10 shadow-xs max-w-4xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-1 flex md:justify-center">
              <div className="w-10 h-10 bg-[#F7F5F2] border border-[#1A1A1A]/15 flex items-center justify-center text-[#2D4F3C]">
                <Compass className="w-5 h-5" />
              </div>
            </div>
            <div className="md:col-span-11 space-y-2">
              <p className="text-base sm:text-lg font-medium text-[#1A1A1A] leading-relaxed">
                “Careers change. Organizations evolve. Technology accelerates. Life rarely moves in a straight line.
              </p>
              <p className="text-xs sm:text-sm text-[#1A1A1A]/70 leading-relaxed">
                Mardai provides practical frameworks, transformative experiences, professional development, and meaningful community to help you navigate what comes next.”
              </p>
            </div>
          </div>
        </motion.div>

        {/* 4 Core Pillars */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl text-[11px] font-bold uppercase tracking-wider text-[#1A1A1A]/70">
          <div className="flex items-center gap-2 p-3 bg-white/70 border border-[#1A1A1A]/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2D4F3C]"></span>
            <span>Practical Frameworks</span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-white/70 border border-[#1A1A1A]/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C27339]"></span>
            <span>Systems Thinking</span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-white/70 border border-[#1A1A1A]/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2D4F3C]"></span>
            <span>Responsible AI</span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-white/70 border border-[#1A1A1A]/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C27339]"></span>
            <span>Enduring Community</span>
          </div>
        </div>

      </div>
    </section>
  );
};
