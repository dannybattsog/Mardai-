import React from 'react';
import { PageId } from '../types';
import { 
  ArrowRight, 
  MapPin, 
  Sparkles, 
  Target, 
  Layers, 
  Compass, 
  ShieldCheck, 
  Brain,
  Quote,
  CheckCircle2,
  Globe2,
  BookOpen,
  Briefcase
} from 'lucide-react';

interface AboutViewProps {
  onNavigate: (page: PageId) => void;
  onOpenBasecampReview: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onNavigate,
  onOpenBasecampReview
}) => {
  const beliefs = [
    {
      title: 'Clarity before action.',
      description: 'Activity without orientation is just exhaustion. Before rushing into execution or career shifts, define where you are and what truly matters.'
    },
    {
      title: 'Frameworks should be useful, not impressive.',
      description: 'We avoid academic jargon and theoretical posturing. If a mental model cannot be drawn on a napkin and applied the next morning, we do not teach it.'
    },
    {
      title: 'People grow faster through meaningful relationships.',
      description: 'Growth is accelerated in high-trust, low-ego environments where peers challenge each other honestly without superficial competition.'
    },
    {
      title: 'Self-awareness is valuable only when translated into action.',
      description: 'Insight without behavioral change is just entertainment. Every reflection exercise must culminate in measurable, disciplined execution.'
    },
    {
      title: 'Technology should increase human capability, not replace human judgment.',
      description: 'We leverage AI and modern tools to eliminate drudgery and multiply leverage, while fiercely protecting human discernment, ethics, and empathy.'
    },
    {
      title: 'Progress compounds.',
      description: 'Lasting transformation is rarely the result of a single explosive breakthrough. It is the steady accumulation of small, intentional, designed decisions.'
    },
    {
      title: 'Learning should change behaviour.',
      description: 'The test of true learning is not what you know, but how you operate under pressure, how you lead teams, and how you design your next move.'
    },
    {
      title: 'Community creates opportunity.',
      description: 'The highest-leverage career inflection points and organizational breakthroughs happen through warm relationships, trust, and shared accountability.'
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-[#F7F5F2]">
      
      {/* Hero Section with Bold Typography */}
      <section className="py-16 md:py-24 bg-[#F7F5F2] border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C]">
                Origin & Purpose
              </span>
              <span className="w-1 h-1 bg-[#2D4F3C] rounded-full"></span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#1A1A1A] leading-[0.9] mb-6">
              Why Mardai exists.
            </h1>

            <p className="text-xl font-light text-[#1A1A1A]/90 leading-relaxed max-w-2xl">
              Many people are capable, experienced, hardworking, and ambitious, yet still find themselves operating in survival mode.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story & The Core Problem */}
      <section className="py-20 bg-white border-b border-[#1A1A1A]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            
            <div className="p-8 sm:p-12 bg-[#F7F5F2] border border-[#1A1A1A]/15 space-y-6">
              <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C] block">
                The Foundational Observation
              </span>
              <p className="text-lg sm:text-xl text-[#1A1A1A]/90 leading-relaxed">
                Every day, talented professionals and dedicated leaders find themselves constantly responding to work demands, bills, responsibilities, immigration complexities, career uncertainty, family obligations, rapid technological changes, and endless noise.
              </p>
              <p className="text-xl sm:text-2xl font-light text-[#1A1A1A] leading-snug font-editorial italic border-l-2 border-[#C27339] pl-6 my-6">
                “What becomes possible when people have the space, frameworks, relationships, and support to stop reacting and deliberately build what comes next?”
              </p>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
                Mardai was founded around that exact question. We build intentional development environments—through educational media, career accelerators, mountain retreats, organizational workshops, and an enduring community—to replace reactive survival with intentional progress by design.
              </p>
            </div>

            {/* Principal Advisor Profile: Danny Battsog */}
            <div className="p-8 sm:p-12 bg-white border border-[#1A1A1A]/15 space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#1A1A1A]/10">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C] block mb-1">
                    Leadership & Advisory
                  </span>
                  <h2 className="text-3xl font-black tracking-tight text-[#1A1A1A]">
                    Danny Battsog
                  </h2>
                  <p className="text-xs font-mono font-bold text-[#C27339] mt-0.5">
                    Principal Advisor & Founder, Mardai
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#1A1A1A]/60">
                  <Globe2 className="w-4 h-4 text-[#2D4F3C]" />
                  <span>Calgary, AB • Cross-Industry Facilitator</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-8 space-y-4 text-xs sm:text-sm text-[#1A1A1A]/80 leading-relaxed">
                  <p>
                    Danny Battsog is an HR and people professional, learning and development practitioner, career development facilitator, and systems-thinking enthusiast. With a deep background in enterprise LMS architectures, HR technology implementations, and adult learning design, Danny approaches human development with engineer-like precision and human warmth.
                  </p>
                  <p>
                    As an international professional and immigrant who has navigated complex career inflection points across different countries, regulatory environments, and industries, Danny brings a grounded, highly empathetic perspective to career strategy and professional transitions.
                  </p>
                  <p>
                    Rather than relying on inflated motivational tropes or hollow success formulas, Danny’s work is grounded in a simple conviction: <strong>professional and personal development should lead directly to practical, measurable action.</strong>
                  </p>
                </div>

                <div className="md:col-span-4 bg-[#F7F5F2] p-6 border border-[#1A1A1A]/10 space-y-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1A1A1A] block">
                    Core Practice Areas
                  </span>
                  <ul className="space-y-2 text-xs text-[#1A1A1A]/70">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2D4F3C]"></span>
                      <span>HR & People Strategy</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C27339]"></span>
                      <span>L&D & Facilitation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2D4F3C]"></span>
                      <span>LMS & HR Technology</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C27339]"></span>
                      <span>Systems Thinking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2D4F3C]"></span>
                      <span>Executive Retreats</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What Mardai Believes */}
      <section className="py-20 bg-[#F7F5F2] border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C] block mb-2">
              Our Operating Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#1A1A1A]">
              What Mardai believes.
            </h2>
            <p className="text-xs text-[#1A1A1A]/70 mt-2">
              Eight foundational principles that govern our curriculum, retreat design, and advisory engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {beliefs.map((item, idx) => (
              <div key={idx} className="p-7 bg-white border border-[#1A1A1A]/10 space-y-3 flex flex-col justify-between hover:border-[#1A1A1A]/30 transition-colors">
                <div>
                  <span className="text-xs font-mono font-bold text-[#C27339] block mb-2">
                    0{idx + 1}
                  </span>
                  <h3 className="text-base font-black text-[#1A1A1A] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#1A1A1A]/70 leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#1A1A1A]/10">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#2D4F3C] font-bold">
                    Core Principle
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* The 5-Part Integrated Ecosystem */}
      <section className="py-20 bg-white border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C] block mb-2">
              The Mardai Continuum
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1A1A1A]">
              One coherent operating system across individual and organizational progress.
            </h2>
          </div>

          <div className="space-y-4">
            <div 
              onClick={() => onNavigate('beyond')}
              className="p-6 bg-[#F7F5F2] hover:bg-white border border-[#1A1A1A]/10 transition-all cursor-pointer flex items-center justify-between group"
            >
              <div>
                <span className="text-[10px] font-mono font-bold text-[#2D4F3C] uppercase tracking-wider block">01. Educational Media</span>
                <h3 className="text-lg font-bold text-[#1A1A1A] group-hover:text-[#2D4F3C] transition-colors">Mardai Beyond</h3>
                <p className="text-xs text-[#1A1A1A]/70">Practical frameworks, mental models, and bi-weekly digests.</p>
              </div>
              <ArrowRight className="w-5 h-5 text-[#C27339] group-hover:translate-x-1 transition-transform" />
            </div>

            <div 
              onClick={() => onNavigate('breakthrough')}
              className="p-6 bg-[#F7F5F2] hover:bg-white border border-[#1A1A1A]/10 transition-all cursor-pointer flex items-center justify-between group"
            >
              <div>
                <span className="text-[10px] font-mono font-bold text-[#C27339] uppercase tracking-wider block">02. Career Accelerator</span>
                <h3 className="text-lg font-bold text-[#1A1A1A] group-hover:text-[#2D4F3C] transition-colors">Mardai Breakthrough</h3>
                <p className="text-xs text-[#1A1A1A]/70">Structured 6-week career positioning and sprint accelerator.</p>
              </div>
              <ArrowRight className="w-5 h-5 text-[#C27339] group-hover:translate-x-1 transition-transform" />
            </div>

            <div 
              onClick={() => onNavigate('basecamp')}
              className="p-6 bg-[#F7F5F2] hover:bg-white border border-[#1A1A1A]/10 transition-all cursor-pointer flex items-center justify-between group"
            >
              <div>
                <span className="text-[10px] font-mono font-bold text-[#2D4F3C] uppercase tracking-wider block">03. Men's Retreat</span>
                <h3 className="text-lg font-bold text-[#1A1A1A] group-hover:text-[#2D4F3C] transition-colors">Mardai Basecamp</h3>
                <p className="text-xs text-[#1A1A1A]/70">2.5-day men's executive reset in the Rocky Mountain foothills.</p>
              </div>
              <ArrowRight className="w-5 h-5 text-[#C27339] group-hover:translate-x-1 transition-transform" />
            </div>

            <div 
              onClick={() => onNavigate('workshops')}
              className="p-6 bg-[#F7F5F2] hover:bg-white border border-[#1A1A1A]/10 transition-all cursor-pointer flex items-center justify-between group"
            >
              <div>
                <span className="text-[10px] font-mono font-bold text-[#1A1A1A] uppercase tracking-wider block">04. Corporate Training</span>
                <h3 className="text-lg font-bold text-[#1A1A1A] group-hover:text-[#2D4F3C] transition-colors">Mardai Workshops</h3>
                <p className="text-xs text-[#1A1A1A]/70">Custom organizational programs for leadership, systems thinking, and AI.</p>
              </div>
              <ArrowRight className="w-5 h-5 text-[#C27339] group-hover:translate-x-1 transition-transform" />
            </div>

            <div 
              onClick={() => onNavigate('community')}
              className="p-6 bg-[#F7F5F2] hover:bg-white border border-[#1A1A1A]/10 transition-all cursor-pointer flex items-center justify-between group"
            >
              <div>
                <span className="text-[10px] font-mono font-bold text-[#1A1A1A]/60 uppercase tracking-wider block">05. Ongoing Practice</span>
                <h3 className="text-lg font-bold text-[#1A1A1A] group-hover:text-[#2D4F3C] transition-colors">Mardai Community</h3>
                <p className="text-xs text-[#1A1A1A]/70">Calgary breakfasts, 90-day pods, and exchange network.</p>
              </div>
              <ArrowRight className="w-5 h-5 text-[#C27339] group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1A1A1A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Ready to assess where you are?
          </h2>
          <p className="text-sm font-light text-[#F7F5F2]/80 max-w-xl mx-auto leading-relaxed">
            Take the complimentary 3-minute Breakthrough Review to audit your 8 core life and career dimensions.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenBasecampReview}
              className="bg-[#2D4F3C] hover:bg-[#3C6D58] text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] transition-all shadow-md inline-flex items-center gap-2"
            >
              <span>Take Your Breakthrough Review</span>
              <ArrowRight className="w-4 h-4 text-[#C27339]" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

