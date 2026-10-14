import React from 'react';
import { PageId } from '../types';
import { 
  ArrowRight, 
  BookOpen, 
  Briefcase, 
  Mountain, 
  Users, 
  Building2,
  RotateCw,
  Sparkles
} from 'lucide-react';

interface WhatAreYouLookingForSectionProps {
  onNavigate: (page: PageId) => void;
  onOpenFindPath: () => void;
}

export const WhatAreYouLookingForSection: React.FC<WhatAreYouLookingForSectionProps> = ({
  onNavigate,
  onOpenFindPath
}) => {
  // Section 19: Where do you want to start?
  const startingPoints = [
    {
      intent: 'I want useful thinking tools and mental models.',
      destination: 'MARDAI SERIES',
      tagline: 'Five collections. 500 models. One philosophy.',
      pageId: 'series' as PageId,
      icon: BookOpen,
      action: 'Explore Series'
    },
    {
      intent: 'I want to work deliberately on my own development.',
      destination: 'MARDAI BREAKTHROUGH',
      tagline: 'Turn insight into progress',
      pageId: 'breakthrough' as PageId,
      icon: Briefcase,
      action: 'Explore Breakthrough'
    },
    {
      intent: 'I want a deeper experience and meaningful connection.',
      destination: 'MARDAI BASECAMP',
      tagline: 'Reconnect. Refocus. Move forward',
      pageId: 'basecamp' as PageId,
      icon: Mountain,
      action: 'Discover Basecamp'
    },
    {
      intent: 'I want continued relationships and accountability.',
      destination: 'MARDAI COMMUNITY',
      tagline: 'Progress is better together',
      pageId: 'community' as PageId,
      icon: Users,
      action: 'Explore Community'
    },
    {
      intent: 'I want to develop people in my organization.',
      destination: 'MARDAI WORKSHOPS — for organizations',
      tagline: 'Develop people. Strengthen connection. Build capability.',
      pageId: 'workshops' as PageId,
      icon: Building2,
      action: 'Work With Mardai'
    }
  ];

  return (
    <div className="space-y-0">
      {/* SECTION 19: WHERE DO YOU WANT TO START? */}
      <section className="py-24 bg-white border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C]">
                Self-Selection Guide
              </span>
              <span className="w-1 h-1 bg-[#2D4F3C] rounded-full"></span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#1A1A1A] leading-[0.95]">
              Where do you want to start?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#1A1A1A]/80 leading-relaxed">
              Every person and team enters the Mardai ecosystem from a different vantage point. Choose the path that matches your current priority.
            </p>
          </div>

          {/* 5 Pathways Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {startingPoints.map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  onClick={() => onNavigate(item.pageId)}
                  className="p-7 bg-[#F7F5F2] border border-[#1A1A1A]/10 text-left transition-all group flex flex-col justify-between hover:bg-white hover:border-[#1A1A1A] hover:shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-8 h-8 bg-white border border-[#1A1A1A]/10 flex items-center justify-center text-[#2D4F3C] group-hover:bg-[#1A1A1A] group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#1A1A1A]/40">
                        0{idx + 1}
                      </span>
                    </div>

                    <p className="text-sm font-semibold text-[#1A1A1A] mb-3 leading-snug">
                      “{item.intent}”
                    </p>

                    <h3 className="text-base font-black text-[#1A1A1A] tracking-tight mb-1">
                      → {item.destination}
                    </h3>
                    
                    <p className="text-xs font-mono text-[#C27339] font-bold">
                      {item.tagline}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#1A1A1A]/10 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#1A1A1A]/70 group-hover:text-[#1A1A1A]">
                    <span>{item.action}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C27339] group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 20: THE MARDAI FLYWHEEL */}
      <section className="py-20 bg-[#F7F5F2] border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 sm:p-12 bg-white border border-[#1A1A1A]/15 shadow-sm">
            <div className="max-w-3xl mb-10">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C]">
                  The Mardai Flywheel
                </span>
                <span className="w-1 h-1 bg-[#2D4F3C] rounded-full"></span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#1A1A1A] tracking-tight">
                An interconnected human development ecosystem.
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#1A1A1A]/80 leading-relaxed">
                Customers do not have to follow an inflexible sequence; entry is open at any point. But over time, each phase reinforces the next, creating compounded growth, meaningful relationships, and shared momentum.
              </p>
            </div>

            {/* Flywheel Flow Visualization */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
              
              <div className="p-4 bg-[#F7F5F2] border border-[#1A1A1A]/10 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#2D4F3C] block mb-1">01 • LEARN</span>
                  <p className="font-black text-[#1A1A1A] text-sm">Series</p>
                  <p className="text-[#1A1A1A]/70 text-[11px] mt-1">Five collections, 500 models, and structured thinking tools.</p>
                </div>
                <span className="text-[10px] font-mono text-[#C27339] mt-3 font-bold">Insight generated →</span>
              </div>

              <div className="p-4 bg-[#F7F5F2] border border-[#1A1A1A]/10 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#C27339] block mb-1">02 • APPLY</span>
                  <p className="font-black text-[#1A1A1A] text-sm">Breakthrough</p>
                  <p className="text-[#1A1A1A]/70 text-[11px] mt-1">Individual mapping, prioritization, and 90-day execution.</p>
                </div>
                <span className="text-[10px] font-mono text-[#2D4F3C] mt-3 font-bold">Action created →</span>
              </div>

              <div className="p-4 bg-[#F7F5F2] border border-[#1A1A1A]/10 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#2D4F3C] block mb-1">03 • EXPERIENCE</span>
                  <p className="font-black text-[#1A1A1A] text-sm">Basecamp</p>
                  <p className="text-[#1A1A1A]/70 text-[11px] mt-1">Intimate 2-day retreat, reflection, and honest connection.</p>
                </div>
                <span className="text-[10px] font-mono text-[#C27339] mt-3 font-bold">Bonds formed →</span>
              </div>

              <div className="p-4 bg-[#F7F5F2] border border-[#1A1A1A]/10 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#C27339] block mb-1">04 • BELONG</span>
                  <p className="font-black text-[#1A1A1A] text-sm">Community</p>
                  <p className="text-[#1A1A1A]/70 text-[11px] mt-1">Ongoing monthly gatherings, accountability, and referrals.</p>
                </div>
                <span className="text-[10px] font-mono text-[#2D4F3C] mt-3 font-bold">Support sustained →</span>
              </div>

              <div className="p-4 bg-[#1A1A1A] text-white border border-[#1A1A1A] flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#C27339] block mb-1">REINFORCING</span>
                  <p className="font-black text-white text-sm">Continuous Growth</p>
                  <p className="text-white/70 text-[11px] mt-1">Stories, mentors, contributors, connections cycle back.</p>
                </div>
                <span className="text-[10px] font-mono text-[#C27339] mt-3 font-bold">↺ Back to Series</span>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
