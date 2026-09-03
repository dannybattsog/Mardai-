import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  PauseCircle, 
  Search, 
  Users, 
  Wrench, 
  ArrowUpRight, 
  ArrowRight,
  Compass,
  CheckCircle2,
  Quote
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

  const steps = [
    {
      step: '01',
      title: 'Diagnose',
      subtitle: 'Measure the baseline',
      icon: Search,
      description: 'You cannot design progress from an inaccurate map. We help individuals and teams step back from reactive fire-fighting to take an honest, objective audit of their current state.',
      howMardaiHelps: 'Through diagnostic reviews, capability audits, and root-cause analysis rather than superficial motivational pep talks.'
    },
    {
      step: '02',
      title: 'Clarify',
      subtitle: 'Focus on what truly matters',
      icon: PauseCircle,
      description: 'Cut through cognitive noise and conflicting priorities. Identify your highest-leverage inflection points, core non-negotiables, and strategic direction.',
      howMardaiHelps: 'Second-order thinking models, decision matrices, and executive positioning frameworks that eliminate low-value friction.'
    },
    {
      step: '03',
      title: 'Equip',
      subtitle: 'Build modern capability',
      icon: Wrench,
      description: 'Acquire practical systems thinking, responsible AI tools, compelling value articulation, and resilient leadership habits that compound over time.',
      howMardaiHelps: 'Applied workshop modules, executive communication scripts, AI workflow blueprints, and operational playbooks.'
    },
    {
      step: '04',
      title: 'Connect',
      subtitle: 'Engage high-trust peers',
      icon: Users,
      description: 'Intentional growth accelerates when surrounded by grounded peers and facilitators who offer candor, mutual accountability, and unvarnished feedback.',
      howMardaiHelps: 'Intimate cohort retreats, curated mastermind roundtables, and a committed alumni network across Calgary and Canada.'
    },
    {
      step: '05',
      title: 'Execute',
      subtitle: 'Move forward with intention',
      icon: ArrowUpRight,
      description: 'Translate clarity into measurable momentum. Design your life, career, and organization with a focused 90-day operating cadence.',
      howMardaiHelps: 'Disciplined quarterly milestones, structured weekly sprint rituals, and ongoing peer check-ins.'
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C]">
              Master Brand Philosophy
            </span>
            <span className="w-1 h-1 bg-[#2D4F3C] rounded-full"></span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#1A1A1A] leading-[0.95]">
            Progress by design.
          </h2>

          <div className="mt-8 p-8 bg-[#F7F5F2] border border-[#1A1A1A]/10 space-y-4">
            <Quote className="w-6 h-6 text-[#C27339]" />
            <p className="text-xl sm:text-2xl font-light text-[#1A1A1A] leading-snug font-editorial italic">
              “Progress does not happen by accident or through reactive effort. It happens when you intentionally design your direction, your capability, and your relationships.”
            </p>
          </div>

          <p className="mt-8 text-base text-[#1A1A1A]/80 leading-relaxed">
            Mardai exists to help individuals, professionals, teams, and organizations move forward with greater <strong>clarity</strong>, <strong>capability</strong>, <strong>confidence</strong>, and <strong>connection</strong>. Whether through ideas and media, career acceleration, facilitated retreats, organizational workshops, or our professional community, every Mardai initiative is engineered for tangible, intentional forward movement.
          </p>

          {/* The 4 Core Pillars of Progress by Design */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 bg-[#F7F5F2] border border-[#1A1A1A]/10">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2D4F3C] block mb-1">
                01 • Clarity
              </span>
              <p className="text-xs text-[#1A1A1A]/70">
                Understanding where you are, cutting noise, and seeing the terrain accurately.
              </p>
            </div>
            <div className="p-4 bg-[#F7F5F2] border border-[#1A1A1A]/10">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C27339] block mb-1">
                02 • Capability
              </span>
              <p className="text-xs text-[#1A1A1A]/70">
                Equipping yourself and your team with modern frameworks, systems thinking, and AI.
              </p>
            </div>
            <div className="p-4 bg-[#F7F5F2] border border-[#1A1A1A]/10">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2D4F3C] block mb-1">
                03 • Confidence
              </span>
              <p className="text-xs text-[#1A1A1A]/70">
                Grounded conviction built on real value positioning and disciplined execution.
              </p>
            </div>
            <div className="p-4 bg-[#F7F5F2] border border-[#1A1A1A]/10">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C27339] block mb-1">
                04 • Connection
              </span>
              <p className="text-xs text-[#1A1A1A]/70">
                Genuine relationships, high-trust peer exchange, and collective momentum.
              </p>
            </div>
          </div>
        </div>

        {/* The 5-Step Visual Journey */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-4 border-b border-[#1A1A1A]/10 pb-3">
            <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#1A1A1A]">
              The Intentional Progress Framework
            </span>
            <span className="text-xs text-[#1A1A1A]/50">
              Select stage to view operating framework
            </span>
          </div>

          {/* Stepper Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = activeStep === idx;
              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 text-left transition-all border ${
                    isSelected 
                      ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-md' 
                      : 'bg-[#F7F5F2] hover:bg-white text-[#1A1A1A] border-[#1A1A1A]/10'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-mono font-bold ${isSelected ? 'text-[#C27339]' : 'text-[#1A1A1A]/50'}`}>
                      {item.step}
                    </span>
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-[#2D4F3C]' : 'text-[#1A1A1A]/60'}`} />
                  </div>
                  <h3 className="text-base font-black tracking-tight mb-0.5">
                    {item.title}
                  </h3>
                  <p className={`text-xs ${isSelected ? 'text-white/70' : 'text-[#1A1A1A]/60'}`}>
                    {item.subtitle}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Step Detailed Card */}
          <motion.div 
            key={activeStep}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-6 p-8 bg-[#F7F5F2] border border-[#1A1A1A]/15 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-[#C27339] uppercase tracking-wider">
                  Phase {steps[activeStep].step} / 05
                </span>
                <span className="text-[#1A1A1A]/30">•</span>
                <h4 className="text-2xl font-black text-[#1A1A1A]">
                  {steps[activeStep].title} — {steps[activeStep].subtitle}
                </h4>
              </div>

              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
                {steps[activeStep].description}
              </p>

              <div className="p-4 bg-white border border-[#1A1A1A]/10 space-y-1">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2D4F3C] block">
                  How Mardai Operationalizes This
                </span>
                <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">
                  {steps[activeStep].howMardaiHelps}
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center space-y-4 border-t lg:border-t-0 lg:border-l border-[#1A1A1A]/10 lg:pl-8">
              <span className="text-[10px] uppercase tracking-[0.2em] font-black text-[#1A1A1A]">
                Ready to take action?
              </span>
              <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">
                You do not need every answer before moving forward. You need clarity about where you are and a deliberate next step.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={onOpenBasecampReview}
                  className="px-5 py-3 bg-[#1A1A1A] hover:bg-[#2D4F3C] text-white text-xs font-bold uppercase tracking-[0.15em] transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Take Breakthrough Review</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C27339]" />
                </button>
                <a
                  href="#offerings"
                  className="px-5 py-3 bg-white border border-[#1A1A1A]/20 hover:border-[#1A1A1A] text-[#1A1A1A] text-xs font-bold uppercase tracking-[0.15em] transition-all text-center"
                >
                  <span>Explore Offerings</span>
                </a>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
