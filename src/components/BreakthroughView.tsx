import React, { useState } from 'react';
import { BREAKTHROUGH_PHASES, BREAKTHROUGH_FAQS } from '../data/breakthroughData';
import { PageId } from '../types';
import { 
  Briefcase, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Target, 
  ChevronDown,
  ShieldCheck,
  Zap,
  Compass,
  Activity,
  Coins,
  Users,
  AlertCircle,
  HelpCircle,
  Layers,
  Sliders,
  Check
} from 'lucide-react';
import { motion } from 'motion/react';
import { ProgramContactForm } from './ProgramContactForm';

interface BreakthroughViewProps {
  onOpenApply: () => void;
  onOpenBasecampReview: () => void;
  onNavigate: (page: PageId) => void;
  onShowToast?: (title: string, message?: string, type?: 'success' | 'error' | 'info') => void;
}

export const BreakthroughView: React.FC<BreakthroughViewProps> = ({
  onOpenApply,
  onOpenBasecampReview,
  onNavigate,
  onShowToast = () => {}
}) => {
  const [activePhase, setActivePhase] = useState<number>(1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Interactive Development Map State
  const [selectedPriority, setSelectedPriority] = useState<string>('career');
  const [mapScores, setMapScores] = useState<Record<string, { current: number; desired: number; action: string }>>({
    self: { 
      current: 6, 
      desired: 9, 
      action: 'Clarify 3 non-negotiables & core personal direction' 
    },
    career: { 
      current: 5, 
      desired: 9, 
      action: 'Build transferable capability model & reposition for executive scope' 
    },
    health: { 
      current: 6, 
      desired: 8, 
      action: 'Establish non-negotiable 7-hour sleep window & 4x strength routine' 
    },
    financial: { 
      current: 5, 
      desired: 8, 
      action: 'Map cash flow systems & align income goals with 5-year freedom plan' 
    },
    connection: { 
      current: 7, 
      desired: 9, 
      action: 'Institute weekly relationship check-in & high-trust peer accountability' 
    }
  });

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const currentPhaseData = BREAKTHROUGH_PHASES.find(p => p.phaseNumber === activePhase) || BREAKTHROUGH_PHASES[0];

  const mapDimensions = [
    { id: 'self', label: 'Self & Direction', icon: Compass, desc: 'Purpose, values, boundaries, self-awareness' },
    { id: 'career', label: 'Career & Capability', icon: Briefcase, desc: 'Strategy, positioning, leadership, adaptability' },
    { id: 'health', label: 'Health & Energy', icon: Activity, desc: 'Habits, movement, vitality, sleep recovery' },
    { id: 'financial', label: 'Financial Wellbeing', icon: Coins, desc: 'Awareness, goals, opportunity cost, compounding' },
    { id: 'connection', label: 'Connection', icon: Users, desc: 'Relationships, trust, network, authentic community' },
  ];

  return (
    <div className="pt-24 pb-20 bg-[#F7F5F2]">
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-[#F7F5F2] border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C]">
                02 — APPLY • Individual Human Development Program
              </span>
              <span className="w-1 h-1 bg-[#2D4F3C] rounded-full"></span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#1A1A1A] leading-[0.9] mb-6">
              Turn insight into progress.
            </h1>

            <p className="text-xl sm:text-2xl font-light text-[#1A1A1A] leading-relaxed mb-6">
              A structured human-development program that helps you understand where you are, identify what matters most, apply useful frameworks, and build practical actions for what comes next.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenApply}
                className="bg-[#1A1A1A] hover:bg-[#2D4F3C] text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] transition-all shadow-sm flex items-center gap-2 group"
              >
                <span>Start Your Breakthrough</span>
                <ArrowRight className="w-4 h-4 text-[#C27339] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenBasecampReview}
                className="border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] transition-all flex items-center gap-2"
              >
                <span>Take Diagnostic Review</span>
              </button>
            </div>

            {/* Cohort status */}
            <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-[#1A1A1A]/60">
              <span className="flex items-center gap-1.5 font-bold">
                <span className="w-2 h-2 rounded-full bg-[#2D4F3C]"></span>
                Next Cohort: Enrolling Now (Strictly Capped at 15 Seats)
              </span>
              <span>•</span>
              <span>Calgary In-Person & Virtual Live</span>
            </div>
          </div>
        </div>
      </section>

      {/* KEY NARRATIVE: Most programs start with answers. Breakthrough starts with questions. */}
      <section className="py-20 bg-white border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C]">
                  The Core Approach
                </span>
                <span className="w-1 h-1 bg-[#2D4F3C] rounded-full"></span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#1A1A1A] leading-[1.05]">
                Most development programs start with answers. Breakthrough starts with questions.
              </h2>
              
              <p className="text-base text-[#1A1A1A]/80 leading-relaxed">
                Generic programs hand you one-size-fits-all prescriptions. But before applying any framework, you must examine your reality with precision.
              </p>
              
              <p className="text-sm text-[#1A1A1A]/70 leading-relaxed">
                Participants do <strong>not</strong> try to improve everything simultaneously. Breakthrough isolates your primary constraint so that effort compounds rather than dissipates.
              </p>
            </div>

            <div className="lg:col-span-7 bg-[#F7F5F2] border border-[#1A1A1A]/10 p-8 sm:p-10 space-y-4">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#2D4F3C]">
                The Six Diagnostic Questions of Breakthrough:
              </span>
              <div className="space-y-3">
                {[
                  'Where are you now? (The honest baseline across 5 dimensions)',
                  'What matters most? (Separating true signal from external noise)',
                  'Where is the greatest gap between your current and desired situation?',
                  'What is actually preventing progress? (Root causes vs. superficial symptoms)',
                  'Which frameworks could help? (Pragmatic systems engineered for your context)',
                  'What actions would create meaningful change? (Disciplined 90-day behavior)'
                ].map((q, qIdx) => (
                  <div key={qIdx} className="p-3.5 bg-white border border-[#1A1A1A]/10 flex items-start gap-3">
                    <span className="text-xs font-mono font-bold text-[#C27339] shrink-0 mt-0.5">
                      0{qIdx + 1}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#1A1A1A]">
                      {q}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INTERACTIVE COMPONENT: THE MARDAI DEVELOPMENT MAP */}
      <section className="py-20 bg-[#F7F5F2] border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C]">
                Interactive Tool
              </span>
              <span className="w-1 h-1 bg-[#2D4F3C] rounded-full"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#1A1A1A] leading-[1.0]">
              The Mardai Development Map
            </h2>
            <p className="mt-3 text-sm text-[#1A1A1A]/80 leading-relaxed">
              Experience the core diagnostic tool of Breakthrough. Select your baseline, assess the gap, and designate your single primary priority for the next 90 days.
            </p>
          </div>

          {/* Development Map Matrix */}
          <div className="bg-white border border-[#1A1A1A]/15 shadow-sm p-6 sm:p-10">
            <div className="grid grid-cols-12 gap-4 pb-4 border-b border-[#1A1A1A]/10 text-[11px] font-mono font-bold uppercase tracking-wider text-[#1A1A1A]/60 hidden md:grid">
              <div className="col-span-4">Dimension</div>
              <div className="col-span-2 text-center">Current (1-10)</div>
              <div className="col-span-2 text-center">Desired (1-10)</div>
              <div className="col-span-2 text-center">Primary Priority</div>
              <div className="col-span-2 text-right">Gap Analysis</div>
            </div>

            <div className="divide-y divide-[#1A1A1A]/10">
              {mapDimensions.map((dim) => {
                const isSelected = selectedPriority === dim.id;
                const score = mapScores[dim.id] || { current: 5, desired: 8, action: '' };
                const gap = score.desired - score.current;
                const Icon = dim.icon;

                return (
                  <div key={dim.id} className={`py-5 transition-colors ${isSelected ? 'bg-[#F7F5F2]/70 -mx-6 px-6 sm:-mx-10 sm:px-10' : ''}`}>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                      
                      {/* Dimension Name & Description */}
                      <div className="md:col-span-4 flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#F7F5F2] border border-[#1A1A1A]/10 flex items-center justify-center text-[#2D4F3C] shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-black text-[#1A1A1A]">
                            {dim.label}
                          </h4>
                          <p className="text-[11px] text-[#1A1A1A]/60">
                            {dim.desc}
                          </p>
                        </div>
                      </div>

                      {/* Current Score Slider */}
                      <div className="md:col-span-2 flex flex-col items-center">
                        <div className="text-xs font-mono font-bold text-[#1A1A1A] mb-1">
                          Current: {score.current}/10
                        </div>
                        <input
                          type="range"
                          min="1"
                          max="10"
                          value={score.current}
                          onChange={(e) => {
                            const val = parseInt(e.target.value);
                            setMapScores(prev => ({
                              ...prev,
                              [dim.id]: { ...prev[dim.id], current: val }
                            }));
                          }}
                          className="w-28 accent-[#2D4F3C] cursor-pointer"
                        />
                      </div>

                      {/* Desired Score Slider */}
                      <div className="md:col-span-2 flex flex-col items-center">
                        <div className="text-xs font-mono font-bold text-[#2D4F3C] mb-1">
                          Desired: {score.desired}/10
                        </div>
                        <input
                          type="range"
                          min={score.current}
                          max="10"
                          value={score.desired}
                          onChange={(e) => {
                            const val = parseInt(e.target.value);
                            setMapScores(prev => ({
                              ...prev,
                              [dim.id]: { ...prev[dim.id], desired: val }
                            }));
                          }}
                          className="w-28 accent-[#C27339] cursor-pointer"
                        />
                      </div>

                      {/* Priority Selector */}
                      <div className="md:col-span-2 flex justify-center">
                        <button
                          onClick={() => setSelectedPriority(dim.id)}
                          className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                            isSelected 
                              ? 'bg-[#1A1A1A] text-white' 
                              : 'bg-white border border-[#1A1A1A]/20 text-[#1A1A1A]/70 hover:border-[#1A1A1A]'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 text-[#C27339]" />}
                          <span>{isSelected ? 'Focus Area' : 'Select'}</span>
                        </button>
                      </div>

                      {/* Gap Status */}
                      <div className="md:col-span-2 text-right">
                        <span className={`inline-block px-2.5 py-1 text-xs font-mono font-bold ${
                          gap >= 3 ? 'bg-[#C27339]/10 text-[#C27339]' : 'bg-[#2D4F3C]/10 text-[#2D4F3C]'
                        }`}>
                          Gap: +{gap} pts {gap >= 3 ? '(High Leverage)' : ''}
                        </span>
                      </div>

                    </div>

                    {/* Action line when selected */}
                    {isSelected && (
                      <div className="mt-4 pt-3 border-t border-[#1A1A1A]/10 text-xs flex items-center gap-2">
                        <span className="font-bold uppercase tracking-wider text-[#2D4F3C] text-[10px]">
                          Target Breakthrough Action:
                        </span>
                        <span className="text-[#1A1A1A]/80 font-medium">
                          {score.action}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Map Outcome Summary */}
            <div className="mt-8 p-6 bg-[#F7F5F2] border border-[#1A1A1A]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#2D4F3C] block">
                  Designated Primary Constraint:
                </span>
                <p className="text-sm sm:text-base font-black text-[#1A1A1A]">
                  Focusing on {mapDimensions.find(d => d.id === selectedPriority)?.label} will drive your 90-day breakthrough without dispersing energy.
                </p>
              </div>

              <button
                onClick={onOpenApply}
                className="bg-[#1A1A1A] hover:bg-[#2D4F3C] text-white px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-2"
              >
                <span>Apply With This Map</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C27339]" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* THE 7-STEP DEVELOPMENT SYSTEM APPLIED TO BREAKTHROUGH */}
      <section className="py-20 bg-white border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C] block mb-2">
              The Breakthrough Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#1A1A1A]">
              The 7-Step Development Roadmap
            </h2>
            <p className="text-xs text-[#1A1A1A]/70 mt-2">
              From diagnostic audit through prioritized design, executable action, peer accountability, and ongoing adaptation.
            </p>
          </div>

          {/* Phase Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-6">
            {BREAKTHROUGH_PHASES.map((p) => (
              <button
                key={p.phaseNumber}
                onClick={() => setActivePhase(p.phaseNumber)}
                className={`p-4 text-left transition-all border ${
                  activePhase === p.phaseNumber
                    ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                    : 'bg-[#F7F5F2] hover:bg-white text-[#1A1A1A] border-[#1A1A1A]/10'
                }`}
              >
                <span className="text-[10px] font-mono font-bold text-[#C27339] block">
                  STEP 0{p.phaseNumber}
                </span>
                <span className="text-xs font-black block truncate mt-0.5">
                  {p.stepName}
                </span>
              </button>
            ))}
          </div>

          {/* Active Phase Card */}
          <motion.div
            key={activePhase}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="p-8 bg-[#F7F5F2] border border-[#1A1A1A]/15 grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-[#C27339]">
                  Phase 0{currentPhaseData.phaseNumber} of 06
                </span>
                <span className="text-[#1A1A1A]/30">•</span>
                <span className="text-xs text-[#2D4F3C] uppercase tracking-wider font-bold">
                  {currentPhaseData.stepName}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#1A1A1A]">
                {currentPhaseData.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#1A1A1A]/80 leading-relaxed">
                {currentPhaseData.focus}
              </p>

              {/* Tangibles / Deliverables */}
              <div className="pt-4 space-y-2">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1A1A1A] block">
                  Weekly Tangible Deliverables
                </span>
                <div className="space-y-2">
                  {currentPhaseData.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#1A1A1A]/80 p-2.5 bg-white border border-[#1A1A1A]/10">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2D4F3C] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Proprietary Tools */}
            <div className="lg:col-span-5 bg-white p-6 border border-[#1A1A1A]/10 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2D4F3C] block mb-3">
                  Applied Frameworks & Toolkits
                </span>
                <div className="space-y-2">
                  {currentPhaseData.tools.map((tool, tIdx) => (
                    <div key={tIdx} className="p-3 bg-[#F7F5F2] border border-[#1A1A1A]/10 text-xs font-bold text-[#1A1A1A] flex items-center justify-between">
                      <span>{tool}</span>
                      <Zap className="w-3.5 h-3.5 text-[#C27339]" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#1A1A1A]/10">
                <button
                  onClick={onOpenApply}
                  className="w-full py-3.5 px-4 bg-[#1A1A1A] hover:bg-[#2D4F3C] text-white text-xs font-bold uppercase tracking-[0.15em] transition-colors flex items-center justify-center gap-2"
                >
                  <span>Start Your Breakthrough</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C27339]" />
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* WHO IT'S FOR & WHAT'S INCLUDED */}
      <section className="py-20 bg-[#F7F5F2] border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Who It's For */}
            <div className="p-8 sm:p-10 bg-white border border-[#1A1A1A]/10 space-y-6">
              <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C] block">
                Candidate Profile
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#1A1A1A] tracking-tight">
                Who Breakthrough is for.
              </h3>
              
              <ul className="space-y-4 text-xs sm:text-sm text-[#1A1A1A]/80">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2D4F3C] mt-2 shrink-0"></span>
                  <span><strong>Professionals in Transition:</strong> Leaders, managers, or specialists feeling stagnant who need a clear direction rather than guesswork.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2D4F3C] mt-2 shrink-0"></span>
                  <span><strong>High-Capacity Generalists:</strong> Individuals struggling to focus because they are pulled in ten directions at once.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2D4F3C] mt-2 shrink-0"></span>
                  <span><strong>Grounded Action-Oriented People:</strong> Those who are tired of motivational fluff and want practical frameworks they can measure.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2D4F3C] mt-2 shrink-0"></span>
                  <span><strong>People Seeking Accountability:</strong> Individuals who know what to do conceptually but need structure and peers to follow through.</span>
                </li>
              </ul>
            </div>

            {/* What's Included & Investment */}
            <div className="p-8 sm:p-10 bg-white border border-[#1A1A1A]/10 space-y-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#C27339] block">
                  Program Structure & Investment
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#1A1A1A] tracking-tight">
                  What's included in your cohort.
                </h3>

                <ul className="mt-4 space-y-3 text-xs text-[#1A1A1A]/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2D4F3C] shrink-0" />
                    <span>6 Weekly Interactive Cohort Strategy Labs (90 mins each)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2D4F3C] shrink-0" />
                    <span>Comprehensive Mardai Development Map & Diagnostic Profile</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2D4F3C] shrink-0" />
                    <span>One-on-One Personalized Roadmap Strategy Session</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2D4F3C] shrink-0" />
                    <span>Curated Peer Accountability Pairings & Weekly Check-ins</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2D4F3C] shrink-0" />
                    <span>Lifetime Access to Mardai Community Gatherings upon graduation</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-[#1A1A1A]/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#1A1A1A]/60 block">Cohort Tuition</span>
                  <span className="text-2xl font-black text-[#1A1A1A]">$1,450 CAD</span>
                  <span className="text-[10px] text-[#1A1A1A]/50 block">Flexible 2-part installment plan available</span>
                </div>

                <button
                  onClick={onOpenApply}
                  className="bg-[#2D4F3C] hover:bg-[#3C6D58] text-white px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C27339]" />
                </button>
              </div>
            </div>

          </div>

          {/* CLEAR DISCLAIMERS (Verbatim requirement from Section 11) */}
          <div className="mt-12 p-6 bg-white border border-[#1A1A1A]/20">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#C27339] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1A1A1A]">
                  Clear Disclaimers & Boundaries
                </h4>
                <p className="text-[11px] text-[#1A1A1A]/70 leading-relaxed">
                  Mardai Breakthrough is an educational and human-development program. It does <strong>not</strong> provide medical, clinical, or psychological therapy. It does <strong>not</strong> guarantee employment, promotions, specific salary figures, or investment returns. Personal progress is an individual endeavor that depends on your own discernment, agency, and disciplined real-world execution.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FAQS SECTION */}
      <section className="py-20 bg-white border-b border-[#1A1A1A]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C] block mb-2">
              Common Questions
            </span>
            <h2 className="text-3xl font-black tracking-tight text-[#1A1A1A]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {BREAKTHROUGH_FAQS.map((faq, idx) => (
              <div 
                key={idx}
                className="p-6 bg-[#F7F5F2] border border-[#1A1A1A]/10 cursor-pointer hover:bg-white transition-colors"
                onClick={() => toggleFaq(idx)}
              >
                <div className="flex items-center justify-between gap-4">
                  <h4 className="text-sm font-black text-[#1A1A1A]">
                    {faq.q}
                  </h4>
                  <ChevronDown className={`w-4 h-4 text-[#1A1A1A]/50 shrink-0 transition-transform ${openFaq === idx ? 'rotate-180 text-[#2D4F3C]' : ''}`} />
                </div>
                {openFaq === idx && (
                  <p className="mt-4 pt-4 border-t border-[#1A1A1A]/10 text-xs text-[#1A1A1A]/80 leading-relaxed">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 p-8 sm:p-10 bg-[#1A1A1A] text-white space-y-6">
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
              Ready to turn insight into deliberate progress?
            </h3>
            <p className="text-xs text-[#F7F5F2]/70 max-w-xl leading-relaxed">
              Applications are reviewed individually to ensure cohort balance and commitment. Join the upcoming cohort to build your system.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenApply}
                className="px-8 py-4 bg-[#2D4F3C] hover:bg-[#3C6D58] text-white text-xs font-bold uppercase tracking-[0.15em] transition-all inline-flex items-center gap-2"
              >
                <span>Start Your Breakthrough</span>
                <ArrowRight className="w-4 h-4 text-[#C27339]" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT BREAKTHROUGH ADVISORS VIA connect@mardai.ca */}
      <section id="breakthrough-contact" className="py-20 bg-[#F7F5F2] border-t border-[#1A1A1A]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProgramContactForm
            programTitle="Mardai Breakthrough"
            subtitle="Have specific questions about cohort timing, 1-on-1 development scope, corporate professional development subsidies, or confidential circumstances? Reach out directly via connect@mardai.ca."
            defaultTopic="Cohort Schedule & Admission"
            topicOptions={[
              { label: 'Cohort Schedule & Admission Criteria', value: 'Cohort Schedule & Admission Criteria' },
              { label: 'Executive / Corporate Sponsorship & Invoicing', value: 'Executive / Corporate Sponsorship & Invoicing' },
              { label: 'Confidential 1-on-1 Pacing & Fit Discussion', value: 'Confidential 1-on-1 Pacing & Fit Discussion' },
              { label: 'Career Transition / Next Chapter Assessment', value: 'Career Transition / Next Chapter Assessment' },
              { label: 'General Program Inquiries', value: 'General Program Inquiries' }
            ]}
            theme="light"
            onShowToast={onShowToast}
          />
        </div>
      </section>

    </div>
  );
};
