import React from 'react';
import { PageId } from '../types';
import { ArrowRight, Sparkles, Users, Cpu, Compass, CheckCircle2, Globe2, BookOpen, Layers } from 'lucide-react';

interface SurvivingToThrivingSectionProps {
  onNavigate: (page: PageId) => void;
  onOpenRegister: (city?: string) => void;
  onOpenBasecampReview: () => void;
}

export const SurvivingToThrivingSection: React.FC<SurvivingToThrivingSectionProps> = ({
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
    <div className="space-y-0">
      
      {/* =========================================================================
          SECTION 2: THE WORLD IS CHANGING (The Central Mardai Idea)
          Includes Background Photo 2: Human collaboration in modern workshop space
          ========================================================================= */}
      <section id="the-world-is-changing" className="relative py-24 md:py-32 bg-[#1A1A1A] text-[#F7F5F2] overflow-hidden border-b border-white/10">
        
        {/* Background Photo 2: Non-repeating authentic workshop/dialogue collaboration */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1800&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-[#1A1A1A]/95 to-[#1A1A1A] z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] font-bold text-[#C27339]">
                THE CENTRAL MARDAI IDEA
              </span>
              <span className="w-1.5 h-1.5 bg-[#2D4F3C] rounded-full"></span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              The world is becoming more connected to technology.<br />
              <span className="text-[#F7F5F2]/60 font-editorial italic font-normal">
                But are we becoming more connected to each other?
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#F7F5F2]/80 leading-relaxed font-light">
              <p>
                AI is changing how we work. Automation is changing organizations. Technology is changing how we communicate, learn, and make decisions.
              </p>
              
              <p className="text-white font-medium">
                These tools create extraordinary possibilities. But navigating change takes more than technology.
              </p>

              <div className="p-6 bg-white/5 border-l-2 border-[#C27339] space-y-3">
                <p className="text-sm uppercase font-mono font-bold tracking-widest text-[#C27339]">
                  What People Still Need
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-white/90">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#2D4F3C] rounded-full"></span>
                    <span>Direction & Judgement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#2D4F3C] rounded-full"></span>
                    <span>Adaptable Capabilities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#2D4F3C] rounded-full"></span>
                    <span>Practical Knowledge</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#2D4F3C] rounded-full"></span>
                    <span>Trusted Relationships</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#2D4F3C] rounded-full"></span>
                    <span>Shared Accountability</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#2D4F3C] rounded-full"></span>
                    <span>Real Human Support</span>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#F7F5F2]/75">
                Mardai brings these things together. We create environments where people can learn, develop, share experience, build relationships, and move forward together.
              </p>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="p-8 bg-white/5 border border-white/10 space-y-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#C27339] block">
                  CORE PRINCIPLE
                </span>
                <blockquote className="text-2xl font-black text-white leading-snug">
                  “The more technology advances, the more human connection matters.”
                </blockquote>
                <p className="text-xs text-[#F7F5F2]/70 leading-relaxed">
                  We embrace technology while emphasizing the human capabilities—judgement, empathy, ethics, systems thinking, and trust—that become increasingly valuable alongside it.
                </p>
              </div>

              <div className="p-6 bg-[#2D4F3C]/20 border border-[#2D4F3C]/40 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#F7F5F2] uppercase">
                  <Compass className="w-4 h-4 text-[#C27339]" />
                  <span>The 5-Part Mardai Progression</span>
                </div>
                <p className="text-xs text-white/80 leading-relaxed">
                  Discover → Connect → Develop → Experience → Belong → Contribute.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 3: FROM SURVIVING TO THRIVING
          Includes Background Photo 3: Inspired symposium / ambitious human energy
          ========================================================================= */}
      <section id="surviving-to-thriving" className="relative py-24 md:py-32 bg-[#F7F5F2] text-[#1A1A1A] overflow-hidden border-b border-[#1A1A1A]/10">
        
        {/* Subtle Background Graphic & Texture */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C]">
                  THE CANADIAN CROSSROADS
                </span>
                <span className="w-1.5 h-1.5 bg-[#C27339] rounded-full"></span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#1A1A1A] leading-[0.95]">
                From surviving<br />
                <span className="text-[#C27339] font-editorial italic font-normal">
                  to thriving.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-[#1A1A1A]/85 leading-relaxed font-light">
                Building a life in Canada can mean navigating a new career, financial system, tax environment, business landscape, professional network, and culture — often at the same time.
              </p>

              <div className="p-6 bg-white border border-[#1A1A1A]/10 space-y-3">
                <p className="text-xs font-mono uppercase font-bold text-[#C27339]">
                  The Shift in Perspective
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="space-y-1">
                    <span className="font-bold text-[#1A1A1A] block">Surviving gets you started.</span>
                    <p className="text-[#1A1A1A]/70 text-xs">
                      Establishing your base, securing income, and handling immediate logistical requirements.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <span className="font-bold text-[#2D4F3C] block">Thriving requires something more:</span>
                    <p className="text-[#1A1A1A]/70 text-xs">
                      Knowledge, direction, relationships, opportunities, and a community around you.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
                Mardai brings people together to learn from experts, experienced professionals, entrepreneurs, community leaders, and each other. We celebrate international experience and ambitious career builders rather than defining people by deficits.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => scrollToSection('upcoming-events')}
                  className="bg-[#1A1A1A] hover:bg-[#2D4F3C] text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] transition-all shadow-md flex items-center gap-2 group"
                >
                  <span>Join a Mardai Event</span>
                  <ArrowRight className="w-4 h-4 text-[#C27339] group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onNavigate('breakthrough')}
                  className="border border-[#1A1A1A] hover:bg-white text-[#1A1A1A] px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] transition-all"
                >
                  Explore Breakthrough
                </button>
              </div>

            </div>

            {/* Visual Photo Card 3: Community & Collaborative Learning */}
            <div className="lg:col-span-5 relative">
              <div className="relative border border-[#1A1A1A]/15 bg-white shadow-xl overflow-hidden p-3">
                <div 
                  className="h-80 sm:h-96 w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80')`
                  }}
                />
                <div className="p-5 space-y-2 bg-white">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#2D4F3C] font-bold block">
                    Authentic Connection
                  </span>
                  <h3 className="text-base font-black text-[#1A1A1A]">
                    For people building their next chapter in Canada.
                  </h3>
                  <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">
                    Internationally experienced professionals, career changers, entrepreneurs, and leaders creating possibilities together.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
