import React from 'react';
import { PageId } from '../types';
import { OFFERINGS } from '../data/offeringsData';
import { 
  ArrowRight, 
  Check, 
  Layers, 
  BookOpen, 
  Briefcase, 
  Mountain, 
  Building2, 
  Users 
} from 'lucide-react';
import { motion } from 'motion/react';

interface OfferingsSectionProps {
  onNavigate: (page: PageId) => void;
}

export const OfferingsSection: React.FC<OfferingsSectionProps> = ({ onNavigate }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'beyond': return BookOpen;
      case 'breakthrough': return Briefcase;
      case 'basecamp': return Mountain;
      case 'workshops': return Building2;
      case 'community': return Users;
      default: return Layers;
    }
  };

  return (
    <section id="offerings" className="py-24 bg-[#F7F5F2] border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#1A1A1A]/10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C]">
                Five Ways to Engage
              </span>
              <span className="w-1 h-1 bg-[#2D4F3C] rounded-full"></span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#1A1A1A] leading-[0.95]">
              Structured pathways for evolution.
            </h2>
          </div>
          <p className="text-sm text-[#1A1A1A]/70 max-w-sm leading-relaxed">
            From educational frameworks to intensive career sprints, executive retreats, corporate training, and ongoing community.
          </p>
        </div>

        {/* 5 Offerings Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OFFERINGS.map((offering, idx) => {
            const Icon = getIcon(offering.id);
            const isFeatured = offering.id === 'basecamp' || offering.id === 'breakthrough';
            
            return (
              <motion.div
                key={offering.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className={`p-8 bg-white flex flex-col justify-between transition-all relative border ${
                  isFeatured 
                    ? 'border-[#1A1A1A] shadow-md' 
                    : 'border-[#1A1A1A]/10 hover:border-[#1A1A1A]/30'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] px-2.5 py-1 bg-[#F7F5F2] border border-[#1A1A1A]/10 text-[#1A1A1A]">
                      {offering.badge}
                    </span>
                    <div className="w-8 h-8 bg-[#F7F5F2] border border-[#1A1A1A]/10 flex items-center justify-center text-[#2D4F3C]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-black tracking-tight text-[#1A1A1A]">
                    {offering.title}
                  </h3>
                  
                  <p className="text-xs font-mono font-bold text-[#C27339] mt-1 mb-4">
                    {offering.tagline}
                  </p>

                  <p className="text-xs text-[#1A1A1A]/70 leading-relaxed mb-6">
                    {offering.description}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-2 pt-4 border-t border-[#1A1A1A]/10 mb-8">
                    {offering.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-[#1A1A1A]/80">
                        <Check className="w-3.5 h-3.5 text-[#2D4F3C] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-2">
                  <button
                    onClick={() => onNavigate(offering.pageId)}
                    className="w-full py-3 px-4 bg-[#1A1A1A] hover:bg-[#2D4F3C] text-white text-xs font-bold uppercase tracking-[0.15em] transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>{offering.ctaText}</span>
                    <ArrowRight className="w-4 h-4 text-[#C27339] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}

          {/* 6th Card: The Coherent Ecosystem Promise */}
          <div className="p-8 bg-[#1A1A1A] text-white flex flex-col justify-between border border-[#1A1A1A] shadow-md">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] px-2.5 py-1 bg-[#2D4F3C] text-white inline-block mb-6">
                The Mardai Promise
              </span>
              <h3 className="text-2xl font-black tracking-tight text-white mb-2">
                One Coherent Operating System
              </h3>
              <p className="text-xs text-[#F7F5F2]/70 leading-relaxed mb-6">
                Mardai isn’t five disconnected services. It is a single, rigorous continuum:
              </p>
              <ul className="space-y-2 text-xs text-[#F7F5F2]/90 mb-6">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C27339]"></span>
                  <span><strong>Beyond</strong> introduces the ideas.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C27339]"></span>
                  <span><strong>Breakthrough</strong> applies them to careers.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C27339]"></span>
                  <span><strong>Basecamp</strong> creates deep personal reset.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C27339]"></span>
                  <span><strong>Workshops</strong> scales it into organizations.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C27339]"></span>
                  <span><strong>Community</strong> keeps you connected.</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#F7F5F2]/50 block">
                MARDAI • CALGARY & ALBERTA
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
