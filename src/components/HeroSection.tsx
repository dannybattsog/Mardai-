import React from 'react';
import { PageId } from '../types';
import { ArrowRight, Calendar, Compass, Users, Sparkles, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroSectionProps {
  onNavigate: (page: PageId) => void;
  onOpenRegister: (city?: string) => void;
  onOpenBasecampReview: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenRegister,
  onOpenBasecampReview
}) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-[#1A1A1A] text-[#F7F5F2] border-b border-white/10">
      
      {/* Background Photo 1: Alpine Sunrise Journey & Motivation */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transform scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      {/* Dark Scrim / Vignette for WCAG AA readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/95 via-[#1A1A1A]/90 to-[#1A1A1A]/80 z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-black/40 z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Eyebrow Label */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-black text-[#C27339] bg-white/5 px-3 py-1 border border-white/10">
            Human Connection and Development Company
          </span>
          <span className="w-1.5 h-1.5 bg-[#2D4F3C] rounded-full hidden sm:inline-block"></span>
          <span className="text-xs text-[#F7F5F2]/70 font-mono hidden sm:inline-block">
            Calgary • Edmonton • Toronto • Vancouver
          </span>
        </motion.div>

        {/* Master Positioning Headline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-3 mb-8 max-w-5xl"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-black tracking-[-0.04em] text-white leading-[0.96]">
            Learn Continuously.<br />
            Grow Intentionally.<br />
            <span className="text-[#C27339] font-editorial italic font-normal">
              Connect Deeply.
            </span>
          </h1>
        </motion.div>

        {/* Supporting Copy */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4 max-w-3xl mb-10"
        >
          <p className="text-lg sm:text-xl font-light text-[#F7F5F2]/90 leading-relaxed">
            Practical thinking tools, mental model card decks, transformative experiences, and high-trust peer communities for people who want to navigate complexity, master human systems, and build what comes next.
          </p>
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-white/50">
            500 Mental Models • Transformative Experiences • One Connected Philosophy
          </p>
        </motion.div>

        {/* Primary CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4"
        >
          <button
            onClick={() => scrollToSection('upcoming-events')}
            className="bg-[#C27339] hover:bg-[#a85e2b] text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] transition-all shadow-lg flex items-center gap-2.5 group"
          >
            <Calendar className="w-4 h-4" />
            <span>Find an Event</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => scrollToSection('the-world-is-changing')}
            className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] transition-all flex items-center gap-2"
          >
            <Compass className="w-4 h-4 text-[#2D4F3C]" />
            <span>Explore Mardai</span>
          </button>

          <button
            onClick={onOpenBasecampReview}
            className="text-xs font-bold uppercase tracking-wider text-[#F7F5F2]/70 hover:text-white px-3 py-4 flex items-center gap-1.5 transition-colors"
          >
            <span>Take Development Diagnostic</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C27339]" />
          </button>
        </motion.div>

        {/* Quick City Anchors */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl"
        >
          <div 
            onClick={() => scrollToSection('upcoming-events')}
            className="p-3.5 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-white group-hover:text-[#C27339] transition-colors">
                CALGARY
              </span>
              <span className="w-1.5 h-1.5 bg-[#2D4F3C] rounded-full"></span>
            </div>
            <p className="text-[11px] text-[#F7F5F2]/60 mt-1">Nov 8 • Flagship Event</p>
          </div>

          <div 
            onClick={() => scrollToSection('upcoming-events')}
            className="p-3.5 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-white group-hover:text-[#C27339] transition-colors">
                EDMONTON
              </span>
              <span className="text-[9px] font-mono text-[#C27339] uppercase">Waitlist</span>
            </div>
            <p className="text-[11px] text-[#F7F5F2]/60 mt-1">Spring 2026</p>
          </div>

          <div 
            onClick={() => scrollToSection('upcoming-events')}
            className="p-3.5 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-white group-hover:text-[#C27339] transition-colors">
                TORONTO
              </span>
              <span className="text-[9px] font-mono text-[#C27339] uppercase">Waitlist</span>
            </div>
            <p className="text-[11px] text-[#F7F5F2]/60 mt-1">Spring 2026</p>
          </div>

          <div 
            onClick={() => scrollToSection('upcoming-events')}
            className="p-3.5 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-white group-hover:text-[#C27339] transition-colors">
                VANCOUVER
              </span>
              <span className="text-[9px] font-mono text-[#C27339] uppercase">Waitlist</span>
            </div>
            <p className="text-[11px] text-[#F7F5F2]/60 mt-1">Fall 2026</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
