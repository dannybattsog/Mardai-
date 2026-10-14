import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  ArrowRight,
  Compass,
  CheckCircle2,
  Quote,
  Activity,
  Briefcase,
  Heart,
  Coins,
  Users,
  Search,
  Filter,
  Layers,
  Play,
  RotateCw,
  Sliders
} from 'lucide-react';
import { motion } from 'motion/react';

interface PhilosophySectionProps {
  onNavigate: (page: PageId) => void;
  onOpenBasecampReview: () => void;
}

export const PhilosophySection: React.FC<PhilosophySectionProps> = ({
  onNavigate,
  onOpenBasecampReview
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [activeDimension, setActiveDimension] = useState<number>(0);

  // Section 7: The Mardai Development System
  const systemSteps = [
    {
      name: 'ASSESS',
      subtitle: 'Understand where you are.',
      description: 'An honest, objective audit of your current baseline, capabilities, friction points, and energy leaks across the core dimensions of life.',
      inAction: 'Structured diagnostic reviews and personal mapping without self-delusion or superficial motivation.'
    },
    {
      name: 'PRIORITIZE',
      subtitle: 'Identify what matters most.',
      description: 'Progress does not mean trying to fix everything at once. We isolate the highest-leverage constraints where change will create the greatest impact.',
      inAction: 'Second-order prioritization and constraint mapping to identify the single bottleneck that unlocks forward momentum.'
    },
    {
      name: 'DESIGN',
      subtitle: 'Choose frameworks and create an approach.',
      description: 'Select proven mental models, operational systems, and behavioral frameworks tailored specifically to your context and objectives.',
      inAction: 'Translating research, systems thinking, and decision science into simple, napkin-clear operating tools.'
    },
    {
      name: 'ACT',
      subtitle: 'Turn insight into behaviour.',
      description: 'Knowing what to do is not the same as doing it. We translate frameworks into disciplined daily routines, commitments, and executable sprints.',
      inAction: '90-day execution blueprints, weekly cadences, and unambiguous micro-habits that survive real-world chaos.'
    },
    {
      name: 'CONNECT',
      subtitle: 'Build relationships and accountability.',
      description: 'Development becomes sustainable when supported by trusted peers, facilitators, and mentors who provide candor, encouragement, and accountability.',
      inAction: 'Intimate cohort gatherings, 1-on-1 peer accountability pacts, and warm community introductions.'
    },
    {
      name: 'REVIEW',
      subtitle: 'Measure what changed.',
      description: 'Pause to evaluate tangible outcomes, behavioral shifts, and unexpected second-order consequences against your original baseline.',
      inAction: 'Quarterly review protocols that celebrate genuine progress and illuminate blind spots.'
    },
    {
      name: 'ADAPT',
      subtitle: 'Begin the next development cycle.',
      description: 'Development is not a one-time event with a finish line. Integrate the lessons learned and orient yourself toward the next climb.',
      inAction: 'Refining goals, recalibrating systems, and initiating the next iteration of deliberate growth.'
    }
  ];

  // Section 8: Five Development Dimensions
  const dimensions = [
    {
      id: 'self',
      title: 'Self & Direction',
      icon: Compass,
      color: '#2D4F3C',
      description: 'Clarifying who you are, what you stand for, and where you are deliberately aiming.',
      components: ['Purpose & Mission', 'Values & Non-negotiables', 'Priorities & Boundaries', 'Self-awareness', 'Personal Direction']
    },
    {
      id: 'career',
      title: 'Career & Capability',
      icon: Briefcase,
      color: '#C27339',
      description: 'Building modern professional leverage, strategic positioning, and adaptive skills.',
      components: ['Career Direction & Strategy', 'Skills & Technical Depth', 'Professional Positioning', 'Lifelong Learning', 'Leadership & Influence', 'Adaptability in the AI Era']
    },
    {
      id: 'health',
      title: 'Health & Energy',
      icon: Activity,
      color: '#2D4F3C',
      disclaimer: 'Personal wellbeing & sustainable daily habits. Mardai does not provide medical diagnosis or treatment.',
      description: 'Cultivating the physiological energy, movement, and recovery that make sustained performance possible.',
      components: ['Daily Habit Formation', 'Physical Movement & Strength', 'Energy Management & Focus', 'Sleep Routines & Recovery', 'Personal Wellbeing']
    },
    {
      id: 'financial',
      title: 'Financial Wellbeing',
      icon: Coins,
      color: '#C27339',
      disclaimer: 'Practical awareness, planning & habits. Mardai does not provide regulated financial or investment advice.',
      description: 'Aligning income, career strategy, and intentional decision-making with long-term peace of mind.',
      components: ['Financial Awareness & Reality', 'Clear Financial Goals', 'Spending & Saving Habits', 'Long-term Planning & Compounding', 'Career-Income Connection', 'High-Stakes Decision Making']
    },
    {
      id: 'connection',
      title: 'Connection',
      icon: Users,
      color: '#2D4F3C',
      description: 'Nurturing the relational fabric that sustains human resilience, meaning, and mutual support.',
      components: ['Family & Close Ties', 'Deep Friendships', 'Professional Network & Trust', 'Active Community', 'Authentic Communication', 'Belonging & Contribution']
    }
  ];

  return (
    <div id="system" className="space-y-0">
      
      {/* SECTION 6: THE PROBLEM */}
      <section className="py-24 bg-white border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C]">
                The Reality of Modern Life
              </span>
              <span className="w-1 h-1 bg-[#2D4F3C] rounded-full"></span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#1A1A1A] leading-[0.95] mb-8">
              Life develops whether we design it or not.
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-8 text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
              <div className="p-3 bg-[#F7F5F2] border border-[#1A1A1A]/10">Careers change.</div>
              <div className="p-3 bg-[#F7F5F2] border border-[#1A1A1A]/10">Priorities change.</div>
              <div className="p-3 bg-[#F7F5F2] border border-[#1A1A1A]/10">Our health changes.</div>
              <div className="p-3 bg-[#F7F5F2] border border-[#1A1A1A]/10">Financial duties change.</div>
              <div className="p-3 bg-[#F7F5F2] border border-[#1A1A1A]/10">Relationships change.</div>
              <div className="p-3 bg-[#F7F5F2] border border-[#1A1A1A]/10">Technology changes work.</div>
            </div>

            <p className="text-lg sm:text-xl font-light text-[#1A1A1A] leading-relaxed mb-6">
              Yet we rarely stop to look at these areas together.
            </p>

            <p className="text-base text-[#1A1A1A]/80 leading-relaxed mb-6">
              We consume advice, watch videos, read books and learn new ideas — but knowing more does not automatically create progress. Mardai exists to bridge the gap between knowing and doing.
            </p>

            <p className="text-base text-[#1A1A1A]/80 leading-relaxed">
              We help people understand their current position, identify what matters, apply useful frameworks, take deliberate action, and connect with people who help that progress continue.
            </p>
          </div>

          {/* Core Philosophy Banner */}
          <div className="p-8 sm:p-12 bg-[#F7F5F2] border border-[#1A1A1A]/15 relative overflow-hidden">
            <div className="max-w-4xl space-y-6">
              <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C] block">
                The Mardai Philosophy
              </span>

              <h3 className="text-2xl sm:text-3xl font-black text-[#1A1A1A] tracking-tight">
                Human development should not be left entirely to chance.
              </h3>

              <p className="text-sm sm:text-base text-[#1A1A1A]/80 leading-relaxed">
                We accumulate experience, knowledge, responsibilities and relationships throughout life. But experience alone does not guarantee progress. Mardai believes development becomes more powerful when we deliberately understand where we are, identify what matters, apply useful frameworks, take action, and surround ourselves with people who challenge and support us.
              </p>

              {/* Transformation Chain */}
              <div className="pt-4 border-t border-[#1A1A1A]/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-mono font-bold">
                <div className="p-3 bg-white border border-[#1A1A1A]/10">
                  <span className="text-[#2D4F3C] block text-[10px]">01</span>
                  Ideas into frameworks.
                </div>
                <div className="p-3 bg-white border border-[#1A1A1A]/10">
                  <span className="text-[#C27339] block text-[10px]">02</span>
                  Frameworks into action.
                </div>
                <div className="p-3 bg-white border border-[#1A1A1A]/10">
                  <span className="text-[#2D4F3C] block text-[10px]">03</span>
                  Action into progress.
                </div>
                <div className="p-3 bg-white border border-[#1A1A1A]/10">
                  <span className="text-[#C27339] block text-[10px]">04</span>
                  Individual progress into shared growth.
                </div>
              </div>

              <p className="text-xs sm:text-sm font-semibold text-[#1A1A1A]/70 pt-2 italic">
                Because people develop better when development is intentional — and when they don't do it alone.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 7: THE MARDAI DEVELOPMENT SYSTEM */}
      <section className="py-24 bg-[#F7F5F2] border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C]">
                The Mardai Development System
              </span>
              <span className="w-1 h-1 bg-[#2D4F3C] rounded-full"></span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#1A1A1A] leading-[0.95] mb-4">
              Development is a system.
            </h2>

            <p className="text-base sm:text-lg text-[#1A1A1A]/80 leading-relaxed">
              Mardai applies this 7-step methodology across all programs, retreats, media, and organizational engagements. Development is not an emotional impulse; it is an ongoing disciplined cycle.
            </p>
          </div>

          {/* System Interactive Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Step list selector */}
            <div className="lg:col-span-5 space-y-2">
              {systemSteps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <button
                    key={step.name}
                    onClick={() => setActiveStep(idx)}
                    className={`w-full text-left p-4 transition-all flex items-center justify-between border ${
                      isActive 
                        ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-sm' 
                        : 'bg-white hover:bg-white/80 text-[#1A1A1A] border-[#1A1A1A]/10'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-[11px] font-mono font-bold ${
                        isActive ? 'text-[#C27339]' : 'text-[#2D4F3C]'
                      }`}>
                        0{idx + 1}
                      </span>
                      <span className="text-sm font-black tracking-wider uppercase">
                        {step.name}
                      </span>
                    </div>
                    <span className={`text-xs ${isActive ? 'text-white/70' : 'text-[#1A1A1A]/60'}`}>
                      {step.subtitle}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Step Detail Card */}
            <div className="lg:col-span-7 p-8 sm:p-12 bg-white border border-[#1A1A1A] shadow-md">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#1A1A1A]/10">
                <span className="text-xs font-mono font-bold text-[#C27339] uppercase tracking-widest">
                  Step 0{activeStep + 1} of 07
                </span>
                <span className="text-xs uppercase font-bold text-[#2D4F3C] px-2.5 py-1 bg-[#F7F5F2] border border-[#1A1A1A]/10">
                  Development Cycle
                </span>
              </div>

              <h3 className="text-3xl font-black text-[#1A1A1A] tracking-tight mb-2">
                {systemSteps[activeStep].name}
              </h3>
              
              <p className="text-lg font-bold text-[#2D4F3C] mb-6">
                {systemSteps[activeStep].subtitle}
              </p>

              <div className="space-y-6 text-sm text-[#1A1A1A]/80 leading-relaxed">
                <div>
                  <h4 className="text-[11px] uppercase tracking-wider font-black text-[#1A1A1A] mb-1">
                    System Function
                  </h4>
                  <p>{systemSteps[activeStep].description}</p>
                </div>

                <div className="p-4 bg-[#F7F5F2] border border-[#1A1A1A]/10">
                  <h4 className="text-[11px] uppercase tracking-wider font-black text-[#2D4F3C] mb-1">
                    How Mardai Applies This
                  </h4>
                  <p className="text-xs text-[#1A1A1A]/80">{systemSteps[activeStep].inAction}</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#1A1A1A]/10 flex items-center justify-between">
                <button
                  onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : systemSteps.length - 1))}
                  className="text-xs uppercase tracking-wider font-bold text-[#1A1A1A]/60 hover:text-[#1A1A1A]"
                >
                  ← Previous
                </button>
                <button
                  onClick={() => setActiveStep((prev) => (prev < systemSteps.length - 1 ? prev + 1 : 0))}
                  className="text-xs uppercase tracking-wider font-bold text-[#2D4F3C] hover:underline flex items-center gap-1"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 8: HUMAN DEVELOPMENT AREAS */}
      <section className="py-24 bg-white border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C]">
                Five Core Dimensions
              </span>
              <span className="w-1 h-1 bg-[#2D4F3C] rounded-full"></span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#1A1A1A] leading-[0.95] mb-4">
              Progress is bigger than one part of life.
            </h2>

            <p className="text-base sm:text-lg text-[#1A1A1A]/80 leading-relaxed">
              Mardai considers human development holistically. Focusing exclusively on career while neglecting health, relationships, or personal direction creates fragility. We navigate these five dimensions together.
            </p>
          </div>

          {/* 5 Dimensions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dimensions.map((dim, idx) => {
              const Icon = dim.icon;
              return (
                <div 
                  key={dim.id}
                  className="p-8 bg-[#F7F5F2] border border-[#1A1A1A]/10 flex flex-col justify-between hover:bg-white hover:border-[#1A1A1A]/30 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-10 h-10 bg-white border border-[#1A1A1A]/10 flex items-center justify-center text-[#2D4F3C]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#1A1A1A]/40">
                        DIMENSION 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-[#1A1A1A] tracking-tight mb-2">
                      {dim.title}
                    </h3>

                    <p className="text-xs text-[#1A1A1A]/70 leading-relaxed mb-6">
                      {dim.description}
                    </p>

                    {/* Key facets */}
                    <div className="space-y-1.5 pt-4 border-t border-[#1A1A1A]/10 mb-6">
                      {dim.components.map((comp, cIdx) => (
                        <div key={cIdx} className="flex items-center gap-2 text-xs text-[#1A1A1A]/80">
                          <span className="w-1 h-1 rounded-full bg-[#2D4F3C]"></span>
                          <span>{comp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {dim.disclaimer && (
                    <div className="mt-4 pt-3 border-t border-[#1A1A1A]/10 text-[10px] text-[#1A1A1A]/50 italic leading-tight">
                      {dim.disclaimer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Diagnostic invitation banner */}
          <div className="mt-12 p-6 sm:p-8 bg-[#1A1A1A] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-black tracking-tight text-white mb-1">
                Assess where you stand across these 5 dimensions.
              </h4>
              <p className="text-xs text-white/70 max-w-xl">
                Take our complimentary reflection tool to measure your baseline, spot energy leaks, and identify your immediate development priority.
              </p>
            </div>
            <button
              onClick={onOpenBasecampReview}
              className="bg-[#2D4F3C] hover:bg-[#3C6D58] text-white px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-2"
            >
              <span>Take Breakthrough Review</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C27339]" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
