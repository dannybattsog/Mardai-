import React from 'react';
import { PageId } from '../types';
import { 
  ArrowRight, 
  Lightbulb, 
  TrendingUp, 
  Compass, 
  Building2, 
  Users2,
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
  const routes = [
    {
      prompt: 'I want better ideas and frameworks',
      destination: 'Mardai Beyond',
      tagline: 'Ideas worth applying',
      icon: Lightbulb,
      pageId: 'beyond' as PageId,
    },
    {
      prompt: 'I want to advance my career',
      destination: 'Mardai Breakthrough',
      tagline: 'Build your next career move',
      icon: TrendingUp,
      pageId: 'breakthrough' as PageId,
    },
    {
      prompt: 'I need time to reconnect and reset',
      destination: 'Mardai Basecamp',
      tagline: 'Reconnect. Refocus. Move forward',
      icon: Compass,
      pageId: 'basecamp' as PageId,
    },
    {
      prompt: 'I want to develop my team',
      destination: 'Mardai Workshops',
      tagline: 'Better people. Better teams',
      icon: Building2,
      pageId: 'workshops' as PageId,
    },
    {
      prompt: 'I want stronger professional connections',
      destination: 'Mardai Community',
      tagline: 'Progress is better together',
      icon: Users2,
      pageId: 'community' as PageId,
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C]">
              Conversion Compass
            </span>
            <span className="w-1 h-1 bg-[#2D4F3C] rounded-full"></span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#1A1A1A] leading-[0.95]">
            What are you looking for?
          </h2>
          <p className="mt-4 text-base text-[#1A1A1A]/70 leading-relaxed">
            Select your immediate priority to jump directly to the right Mardai program, or use our interactive matching wizard.
          </p>
        </div>

        {/* 5 Pathways Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {routes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <button
                key={idx}
                onClick={() => onNavigate(item.pageId)}
                className="p-7 bg-[#F7F5F2] border border-[#1A1A1A]/10 text-left transition-all group flex flex-col justify-between hover:bg-white hover:border-[#1A1A1A]/30"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 bg-white border border-[#1A1A1A]/10 flex items-center justify-center text-[#2D4F3C]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#1A1A1A]/40">
                      0{idx + 1}
                    </span>
                  </div>

                  <p className="text-xs font-medium text-[#1A1A1A]/60 mb-1">
                    “{item.prompt}”
                  </p>
                  
                  <h3 className="text-xl font-black text-[#1A1A1A] tracking-tight group-hover:text-[#2D4F3C] transition-colors">
                    {item.destination}
                  </h3>
                  
                  <p className="text-[11px] font-mono text-[#C27339] mt-1">
                    {item.tagline}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1A1A1A]/10 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#1A1A1A] group-hover:text-[#2D4F3C]">
                  <span>Explore Pathway</span>
                  <ArrowRight className="w-4 h-4 text-[#C27339] group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            );
          })}

          {/* Interactive Wizard Card */}
          <div className="p-7 bg-[#1A1A1A] text-white border border-[#1A1A1A] flex flex-col justify-between shadow-md">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-8 h-8 bg-[#2D4F3C] flex items-center justify-center text-white">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="text-xs font-mono font-bold text-[#C27339]">
                  MATCH
                </span>
              </div>
              <h3 className="text-xl font-black tracking-tight text-white mb-2">
                Unsure which step fits?
              </h3>
              <p className="text-xs text-[#F7F5F2]/70 leading-relaxed">
                Take our 60-second interactive questionnaire to pinpoint your transition stage and receive an immediate tailored recommendation.
              </p>
            </div>

            <button
              onClick={onOpenFindPath}
              className="mt-6 w-full py-3.5 px-4 bg-[#2D4F3C] hover:bg-[#3C6D58] text-white text-xs font-bold uppercase tracking-[0.15em] transition-all flex items-center justify-center gap-2"
            >
              <span>Launch Match Wizard</span>
              <ArrowRight className="w-4 h-4 text-[#C27339]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
