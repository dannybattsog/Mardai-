import React from 'react';
import { ClipboardCheck, ArrowRight, ShieldCheck, Sparkles, CheckCircle } from 'lucide-react';

interface LeadMagnetReviewBannerProps {
  onOpenBasecampReview: () => void;
}

export const LeadMagnetReviewBanner: React.FC<LeadMagnetReviewBannerProps> = ({
  onOpenBasecampReview
}) => {
  return (
    <section className="py-20 bg-[#1A1A1A] text-white relative overflow-hidden border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 bg-white/5 border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column (Content) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#2D4F3C] text-white text-[10px] font-black uppercase tracking-[0.2em]">
              <ClipboardCheck className="w-3.5 h-3.5 text-[#C27339]" />
              <span>Complimentary Strategic Tool</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              Your Breakthrough Review
            </h2>

            <p className="text-sm sm:text-base text-[#F7F5F2]/80 leading-relaxed">
              Assess where you truly stand across 8 core dimensions before deciding your next inflection move:
            </p>

            {/* 8 Dimensions Tags Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-xs text-[#F7F5F2]/90">
              <span className="p-2.5 bg-white/5 border border-white/10 flex items-center gap-2 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C27339]"></span>
                Career
              </span>
              <span className="p-2.5 bg-white/5 border border-white/10 flex items-center gap-2 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2D4F3C]"></span>
                Health
              </span>
              <span className="p-2.5 bg-white/5 border border-white/10 flex items-center gap-2 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C27339]"></span>
                Relationships
              </span>
              <span className="p-2.5 bg-white/5 border border-white/10 flex items-center gap-2 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2D4F3C]"></span>
                Finances
              </span>
              <span className="p-2.5 bg-white/5 border border-white/10 flex items-center gap-2 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C27339]"></span>
                Learning
              </span>
              <span className="p-2.5 bg-white/5 border border-white/10 flex items-center gap-2 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2D4F3C]"></span>
                Purpose
              </span>
              <span className="p-2.5 bg-white/5 border border-white/10 flex items-center gap-2 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C27339]"></span>
                Community
              </span>
              <span className="p-2.5 bg-white/5 border border-white/10 flex items-center gap-2 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2D4F3C]"></span>
                Next 90 Days
              </span>
            </div>
          </div>

          {/* Right Column (CTA Card) */}
          <div className="lg:col-span-5 bg-[#1A1A1A] p-6 sm:p-8 border border-white/15 space-y-4">
            <div className="flex items-center gap-2 text-[10px] font-black text-[#C27339] uppercase tracking-[0.2em]">
              <Sparkles className="w-4 h-4" />
              <span>Interactive Diagnostic + Action Plan</span>
            </div>

            <p className="text-xs text-[#F7F5F2]/70 leading-relaxed">
              Takes ~3 minutes. Receive instant visual score diagnostics, personalized growth recommendations, and access to the Mardai 90-day execution framework.
            </p>

            <button
              onClick={onOpenBasecampReview}
              className="w-full py-4 px-6 bg-[#2D4F3C] hover:bg-[#3C6D58] text-white text-xs font-bold uppercase tracking-[0.15em] transition-all flex items-center justify-center gap-2 group"
            >
              <span>Take Your Breakthrough Review</span>
              <ArrowRight className="w-4 h-4 text-[#C27339] group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="flex items-center justify-center gap-4 text-[10px] text-[#F7F5F2]/50 font-mono pt-1 uppercase tracking-wider">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2D4F3C]" /> 100% Confidential
              </span>
              <span>•</span>
              <span>Calgary & Alberta</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
