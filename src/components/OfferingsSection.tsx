import React from 'react';
import { PageId } from '../types';
import { 
  ArrowRight, 
  Check, 
  Layers, 
  BookOpen, 
  Briefcase, 
  Mountain, 
  Building2, 
  Users,
  ArrowDown
} from 'lucide-react';
import { motion } from 'motion/react';

interface OfferingsSectionProps {
  onNavigate: (page: PageId) => void;
}

export const OfferingsSection: React.FC<OfferingsSectionProps> = ({ onNavigate }) => {
  // The Four Primary Consumer Offerings mapped to Learn -> Apply -> Experience -> Belong
  const journeyStages = [
    {
      stageNumber: '01',
      stageAction: 'LEARN',
      title: 'MARDAI SERIES',
      tagline: 'Five collections. 500 models. One philosophy.',
      description: 'A premium collection of practical thinking tools and card decks bringing together 500 carefully selected frameworks from psychology, business, leadership, strategy, and human development.',
      supporting: 'Five collections: 01 Human Systems (100 models — first release out soon), 02 Leadership Systems, 03 Career Systems, 04 Business Systems, 05 Power & Influence Systems. Every card includes a 7-part practical anatomy and guided AI prompts.',
      ctaText: 'Explore Mardai Series',
      pageId: 'series' as PageId,
      icon: BookOpen,
      color: '#D4AF37'
    },
    {
      stageNumber: '02',
      stageAction: 'APPLY',
      title: 'MARDAI BREAKTHROUGH',
      tagline: 'Turn insight into progress.',
      description: 'Breakthrough is Mardai’s structured individual development program. Participants assess important areas of their lives, determine where change would create the greatest impact, apply relevant frameworks, and create practical actions for progress.',
      supporting: 'Areas may include: personal direction, career, health and energy, financial wellbeing, relationships and connection.',
      ctaText: 'Explore Breakthrough',
      pageId: 'breakthrough' as PageId,
      icon: Briefcase,
      color: '#C27339'
    },
    {
      stageNumber: '03',
      stageAction: 'EXPERIENCE',
      title: 'MARDAI BASECAMP',
      tagline: 'Reconnect. Refocus. Move forward.',
      description: 'A premium 2-day men’s development and connection experience bringing Mardai’s ideas, frameworks, reflection and human connection together.',
      supporting: 'Stepping away from everyday routines into the foothills of the Canadian Rockies to reflect, build relationships, and prepare for the next climb.',
      ctaText: 'Discover Basecamp',
      pageId: 'basecamp' as PageId,
      icon: Mountain,
      color: '#2D4F3C'
    },
    {
      stageNumber: '04',
      stageAction: 'BELONG',
      title: 'MARDAI COMMUNITY',
      tagline: 'Progress is better together.',
      description: 'Mardai Community creates continuity after programs and experiences through relationships, accountability, learning, networking and shared opportunities.',
      supporting: 'Programs end. Retreats end. Workshops end. Relationships do not have to. Continuity across the entire Mardai ecosystem.',
      ctaText: 'Explore Community',
      pageId: 'community' as PageId,
      icon: Users,
      color: '#C27339'
    }
  ];

  return (
    <section id="journey" className="py-24 bg-[#F7F5F2] border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#1A1A1A]/10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C]">
                The Mardai Journey
              </span>
              <span className="w-1 h-1 bg-[#2D4F3C] rounded-full"></span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#1A1A1A] leading-[0.95]">
              Learn. Apply. Experience. Belong.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#1A1A1A]/80 leading-relaxed">
              These are not four unrelated businesses. They are four connected parts of one human-development ecosystem.
            </p>
          </div>

          {/* Journey Flow Indicator */}
          <div className="hidden lg:flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#1A1A1A]/60 bg-white p-3 border border-[#1A1A1A]/10">
            <span>Learn</span>
            <span>→</span>
            <span>Apply</span>
            <span>→</span>
            <span>Experience</span>
            <span>→</span>
            <span>Belong</span>
          </div>
        </div>

        {/* 4 Connected Journey Cards in Sequence */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {journeyStages.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={stage.stageNumber}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="p-8 bg-white border border-[#1A1A1A]/10 hover:border-[#1A1A1A] transition-all flex flex-col justify-between shadow-xs relative group"
              >
                <div>
                  {/* Top Stage Header */}
                  <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-[#1A1A1A]/10">
                    <span className="text-xs font-mono font-black tracking-widest text-[#2D4F3C]">
                      {stage.stageNumber} — {stage.stageAction}
                    </span>
                    <div className="w-8 h-8 bg-[#F7F5F2] border border-[#1A1A1A]/10 flex items-center justify-center text-[#2D4F3C] group-hover:bg-[#1A1A1A] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-black tracking-tight text-[#1A1A1A] mb-1">
                    {stage.title}
                  </h3>
                  
                  <p className="text-xs font-mono font-bold text-[#C27339] mb-4">
                    {stage.tagline}
                  </p>

                  <p className="text-xs text-[#1A1A1A]/80 leading-relaxed mb-4">
                    {stage.description}
                  </p>

                  <p className="text-[11px] text-[#1A1A1A]/60 italic leading-relaxed pt-3 border-t border-[#1A1A1A]/10 mb-6">
                    {stage.supporting}
                  </p>
                </div>

                <button
                  onClick={() => onNavigate(stage.pageId)}
                  className="w-full mt-4 py-3 px-4 bg-[#F7F5F2] group-hover:bg-[#1A1A1A] text-[#1A1A1A] group-hover:text-white text-[11px] font-bold uppercase tracking-[0.16em] transition-all flex items-center justify-center gap-2 border border-[#1A1A1A]/10"
                >
                  <span>{stage.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C27339] group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* B2B ORGANIZATIONAL CAPABILITY (Moved outside consumer 4-part journey) */}
        <div className="mt-12 p-8 sm:p-12 bg-white border border-[#1A1A1A]/15 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C]">
                  For Organizations
                </span>
                <span className="w-1 h-1 bg-[#2D4F3C] rounded-full"></span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#1A1A1A] tracking-tight">
                MARDAI WORKSHOPS — for organizations
              </h3>
              <p className="text-sm font-bold text-[#C27339]">
                Develop people. Strengthen connection. Build capability.
              </p>
              <p className="text-xs sm:text-sm text-[#1A1A1A]/80 leading-relaxed max-w-3xl">
                Mardai adapts its frameworks and development methodology for teams, leaders, and organizations. Potential areas span human development, leadership capability, team effectiveness, systems thinking, employee connection, and navigating the AI era through customized workshops and learning journeys.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <button
                onClick={() => onNavigate('workshops')}
                className="w-full sm:w-auto bg-[#1A1A1A] hover:bg-[#2D4F3C] text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] transition-all flex items-center justify-center gap-2 group"
              >
                <span>Work With Mardai</span>
                <ArrowRight className="w-4 h-4 text-[#C27339] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
