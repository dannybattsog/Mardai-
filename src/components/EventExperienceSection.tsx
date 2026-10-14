import React from 'react';
import { PageId } from '../types';
import { EVENT_FOUR_PILLARS, EVENT_DAY_RHYTHM } from '../data/eventsData';
import { 
  Check, 
  ArrowRight, 
  Users, 
  Sparkles, 
  Clock, 
  Coffee, 
  BookOpen, 
  Lightbulb, 
  Compass, 
  MessageSquare,
  ShieldCheck
} from 'lucide-react';

interface EventExperienceSectionProps {
  onNavigate: (page: PageId) => void;
  onOpenRegister: () => void;
}

export const EventExperienceSection: React.FC<EventExperienceSectionProps> = ({
  onNavigate,
  onOpenRegister
}) => {
  const formatCategories = [
    { title: 'LEARN', desc: 'Expert presentations and practical, actionable frameworks.' },
    { title: 'REFLECT', desc: 'Individual exercises that help apply ideas to your unique situation.' },
    { title: 'DISCUSS', desc: 'Facilitated small-table conversations with peer cross-pollination.' },
    { title: 'CONNECT', desc: 'Structured networking with professionals who share your trajectory.' },
    { title: 'MEET', desc: 'Meet leaders, founders, CPAs, and HR executives who navigated the path.' },
    { title: 'PLAN', desc: 'Leave with a concrete 90-day execution roadmap and accountability.' },
    { title: 'BELONG', desc: 'Seamless transition into the ongoing Mardai Community ecosystem.' }
  ];

  return (
    <div className="space-y-0">
      
      {/* =========================================================================
          SECTION 5: ONE DAY. FOUR PILLARS.
          ========================================================================= */}
      <section className="py-24 md:py-32 bg-white text-[#1A1A1A] border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] font-bold text-[#2D4F3C]">
                CURRICULUM ARCHITECTURE
              </span>
              <span className="w-1 h-1 bg-[#C27339] rounded-full"></span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[#1A1A1A]">
              One Day. Four Pillars.
            </h2>
            <p className="text-base text-[#1A1A1A]/75 mt-3 leading-relaxed">
              Organized to address the real-world realities of building a successful professional life in Canada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EVENT_FOUR_PILLARS.map((pillar) => (
              <div 
                key={pillar.num}
                className="p-8 sm:p-10 bg-[#F7F5F2] border border-[#1A1A1A]/15 space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#C27339] tracking-widest">
                      PILLAR {pillar.num}
                    </span>
                    <span className="w-2 h-2 bg-[#2D4F3C] rounded-full"></span>
                  </div>

                  <h3 className="text-2xl font-black text-[#1A1A1A] tracking-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#1A1A1A]/75 font-editorial italic">
                    “{pillar.subtitle}”
                  </p>

                  <ul className="space-y-2.5 pt-3 border-t border-[#1A1A1A]/10">
                    {pillar.subjects.map((subj, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2.5 text-xs text-[#1A1A1A]/80 leading-relaxed">
                        <span className="w-1.5 h-1.5 bg-[#2D4F3C] rounded-full shrink-0 mt-1.5"></span>
                        <span>{subj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 text-[10px] font-mono text-[#1A1A1A]/50 uppercase tracking-widest">
                  Integrated into all Mardai city gatherings
                </div>
              </div>
            ))}
          </div>

          {/* Educational Disclaimer banner */}
          <div className="mt-8 p-4 bg-[#F7F5F2] border border-[#1A1A1A]/10 text-[11px] text-[#1A1A1A]/70 leading-relaxed flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#2D4F3C] shrink-0" />
            <p>
              <span className="font-bold text-[#1A1A1A]">Educational Stance:</span> Financial, tax, and legal topics are presented strictly as structured education and general frameworks. Mardai events do not provide individualized regulated financial or legal advice.
            </p>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 6: COME FOR THE KNOWLEDGE. LEAVE WITH CONNECTIONS.
          Includes Background Photo 5: Shared meal & authentic table connections
          ========================================================================= */}
      <section className="relative py-24 md:py-32 bg-[#1A1A1A] text-[#F7F5F2] overflow-hidden border-b border-white/10">
        
        {/* Background Photo 5: Warm communal table connection & shared meals (non-repeating) */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1800&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/95 via-[#1A1A1A]/90 to-[#1A1A1A]/85 z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] font-bold text-[#C27339]">
                  THE EVENT PROMISE
                </span>
                <span className="w-1.5 h-1.5 bg-[#2D4F3C] rounded-full"></span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[0.95]">
                Come for the knowledge.<br />
                <span className="text-[#C27339] font-editorial italic font-normal">
                  Leave with connections.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-[#F7F5F2]/80 leading-relaxed font-light">
                The presentations matter. But some of the most valuable conversations may happen at your table, over lunch, during a break, or through an introduction that would never otherwise have happened.
              </p>

              <div className="p-6 bg-white/5 border border-white/10 space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C27339]">
                  Deliberate Design Formula
                </span>
                <p className="text-2xl font-black text-white">
                  KNOWLEDGE + CONNECTION
                </p>
                <p className="text-xs text-[#F7F5F2]/70 leading-relaxed">
                  We reject 8-hour passive lecture slide decks. Mardai events synthesize presentation rigor with human warmth, active small-group reflection, and high-trust introductions.
                </p>
              </div>

              {/* 7 Interactive Modes */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                {formatCategories.map((f, i) => (
                  <div key={i} className="p-3 bg-white/5 border border-white/10">
                    <span className="text-[10px] font-mono font-bold text-[#2D4F3C] block">{f.title}</span>
                    <p className="text-[11px] text-[#F7F5F2]/70 mt-0.5 leading-tight">{f.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenRegister}
                  className="bg-[#C27339] hover:bg-[#a85e2b] text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] transition-all flex items-center gap-2 group"
                >
                  <span>Register for Next Gathering</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Event Day Rhythm Card */}
            <div className="lg:col-span-6 bg-[#F7F5F2] text-[#1A1A1A] p-6 sm:p-8 border border-[#1A1A1A]/20 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-[#1A1A1A]/10 mb-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#2D4F3C] font-bold block">
                    THE EVENT EXPERIENCE
                  </span>
                  <h3 className="text-xl font-black text-[#1A1A1A]">
                    A Day in the Life
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#1A1A1A]/60 font-mono">
                  <Clock className="w-3.5 h-3.5 text-[#C27339]" />
                  <span>8:30 AM – 5:30 PM</span>
                </div>
              </div>

              <div className="space-y-2.5 max-h-[440px] overflow-y-auto pr-1">
                {EVENT_DAY_RHYTHM.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-3 bg-white border border-[#1A1A1A]/10 flex items-start gap-3 hover:border-[#2D4F3C] transition-colors"
                  >
                    <span className="text-xs font-mono font-bold text-[#C27339] shrink-0 w-16">
                      {item.time}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-[#1A1A1A]">
                        {item.title}
                      </p>
                    </div>
                    <span className="text-[9px] font-mono px-2 py-0.5 bg-[#F7F5F2] text-[#1A1A1A]/70 uppercase shrink-0">
                      {item.type}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-[#1A1A1A]/10 text-[11px] text-[#1A1A1A]/60 flex items-center justify-between">
                <span>Vegetarian & Halal lunch options provided</span>
                <span className="font-mono text-[#2D4F3C] font-bold">100% Interactive</span>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
