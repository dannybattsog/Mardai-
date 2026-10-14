import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  X, 
  ArrowRight, 
  ArrowLeft, 
  Compass, 
  Briefcase, 
  Mountain, 
  Building2, 
  BookOpen
} from 'lucide-react';

interface FindYourPathModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageId) => void;
  onOpenBasecampReview?: () => void;
}

export const FindYourPathModal: React.FC<FindYourPathModalProps> = ({
  isOpen,
  onClose,
  onNavigate
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [userRole, setUserRole] = useState<string>('');
  const [transitionType, setTransitionType] = useState<string>('');

  if (!isOpen) return null;

  const roleOptions = [
    { id: 'professional', label: 'Experienced Professional / Specialist', desc: 'Seeking career clarity, advancement, or role pivot.' },
    { id: 'leader-man', label: 'Leader, Father or Entrepreneur', desc: 'Navigating life load, seeking deep reset and high-trust peer brotherhood.' },
    { id: 'hr-leader', label: 'HR, L&D Leader or Executive', desc: 'Seeking practical workshops and transformation for a team or organization.' },
    { id: 'lifelong-learner', label: 'Thinker & Continuous Learner', desc: 'Interested in mental models, systems thinking, and modern tools.' }
  ];

  const transitionOptions = [
    { id: 'career-pivot', label: 'Navigating a major career change or plateau' },
    { id: 'leadership-step', label: 'Stepping into leadership & needing new capability' },
    { id: 'survival-mode', label: 'Feeling stuck, fatigued, or in survival mode' },
    { id: 'ai-future', label: 'Adapting to AI and the changing future of work' },
    { id: 'team-change', label: 'Leading organizational change or growing a team' },
    { id: 'brotherhood', label: 'Looking for stronger professional and personal connections' }
  ];

  const calculateRecommendation = () => {
    if (userRole === 'hr-leader' || transitionType === 'team-change') {
      return {
        title: 'Mardai Workshops',
        tagline: 'Better people. Better teams. Better performance.',
        pageId: 'workshops' as PageId,
        icon: Building2,
        reason: 'Your goal is organizational impact. Mardai Workshops brings practical systems thinking, AI personal effectiveness, and team communication into your workplace.'
      };
    }
    if (userRole === 'leader-man' || transitionType === 'survival-mode' || transitionType === 'brotherhood') {
      return {
        title: 'Mardai Basecamp',
        tagline: 'Reconnect. Refocus. Move forward.',
        pageId: 'basecamp' as PageId,
        icon: Mountain,
        reason: 'You need an immersive pause away from daily responsibilities. Basecamp provides a 2-day mountain experience for meaningful reflection, career alignment, and brotherhood.'
      };
    }
    if (userRole === 'professional' || transitionType === 'career-pivot' || transitionType === 'leadership-step') {
      return {
        title: 'Mardai Breakthrough',
        tagline: 'Build your next career move.',
        pageId: 'breakthrough' as PageId,
        icon: Briefcase,
        reason: 'Breakthrough is our 6-week structured career accelerator designed to clarify your value proposition, optimize your executive positioning, and execute your next career move.'
      };
    }
    return {
      title: 'Mardai Series & Community',
      tagline: 'Five collections. 500 models. One philosophy.',
      pageId: 'series' as PageId,
      icon: BookOpen,
      reason: 'Start with our foundational 500 mental models and practical thinking tools, beginning with Mardai Human Systems (100 models).'
    };
  };

  const rec = calculateRecommendation();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-[#F7F5F2] max-w-2xl w-full border border-[#1A1A1A] shadow-2xl p-6 sm:p-8 relative">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[#1A1A1A]/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#1A1A1A] text-white flex items-center justify-center">
              <Compass className="w-4 h-4 text-[#C27339]" />
            </div>
            <div>
              <h3 className="text-base font-black text-[#1A1A1A]">Find Your Next Step</h3>
              <p className="text-xs text-[#1A1A1A]/60">Step {step} of 3 • Personalized Mardai Pathway Match</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#1A1A1A]/60 hover:text-[#1A1A1A] hover:bg-[#1A1A1A]/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Steps */}
        <div className="py-6">
          {step === 1 && (
            <div className="space-y-4">
              <h4 className="text-xl font-black text-[#1A1A1A]">
                Which best describes your current role or context?
              </h4>
              <div className="space-y-2">
                {roleOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setUserRole(opt.id);
                      setStep(2);
                    }}
                    className={`w-full p-4 text-left border transition-all flex items-start justify-between group ${
                      userRole === opt.id 
                        ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' 
                        : 'bg-white hover:bg-white/90 text-[#1A1A1A] border-[#1A1A1A]/10 hover:border-[#1A1A1A]'
                    }`}
                  >
                    <div>
                      <span className="font-bold text-xs block uppercase tracking-wider">{opt.label}</span>
                      <span className={`text-xs mt-0.5 block ${userRole === opt.id ? 'text-white/70' : 'text-[#1A1A1A]/60'}`}>
                        {opt.desc}
                      </span>
                    </div>
                    <ArrowRight className={`w-4 h-4 shrink-0 mt-1 transition-transform group-hover:translate-x-1 ${userRole === opt.id ? 'text-[#C27339]' : 'text-[#1A1A1A]/40'}`} />
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h4 className="text-xl font-black text-[#1A1A1A]">
                What is your primary transition point or objective?
              </h4>
              <div className="space-y-2">
                {transitionOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setTransitionType(opt.id);
                      setStep(3);
                    }}
                    className={`w-full p-4 text-left border transition-all flex items-center justify-between group ${
                      transitionType === opt.id 
                        ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' 
                        : 'bg-white hover:bg-white/90 text-[#1A1A1A] border-[#1A1A1A]/10 hover:border-[#1A1A1A]'
                    }`}
                  >
                    <span className="font-bold text-xs uppercase tracking-wider">{opt.label}</span>
                    <ArrowRight className={`w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 ${transitionType === opt.id ? 'text-[#C27339]' : 'text-[#1A1A1A]/40'}`} />
                  </button>
                ))}
              </div>
              
              <div className="pt-2">
                <button
                  onClick={() => setStep(1)}
                  className="text-xs font-bold text-[#1A1A1A]/60 hover:text-[#1A1A1A] flex items-center gap-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="p-6 bg-white border border-[#1A1A1A]/15 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] px-2.5 py-1 bg-[#2D4F3C] text-white">
                    Your Best Match
                  </span>
                </div>

                <div>
                  <h4 className="text-2xl font-black text-[#1A1A1A]">
                    {rec.title}
                  </h4>
                  <p className="text-xs font-mono font-bold text-[#C27339] mt-0.5">
                    {rec.tagline}
                  </p>
                </div>

                <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">
                  {rec.reason}
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      onClose();
                      onNavigate(rec.pageId);
                    }}
                    className="w-full py-3.5 px-6 bg-[#1A1A1A] hover:bg-[#2D4F3C] text-white text-xs font-bold uppercase tracking-[0.15em] transition-colors flex items-center justify-center gap-2 group"
                  >
                    <span>Go to {rec.title}</span>
                    <ArrowRight className="w-4 h-4 text-[#C27339] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-[#1A1A1A]/60 font-bold">
                <button
                  onClick={() => setStep(2)}
                  className="hover:text-[#1A1A1A] flex items-center gap-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Change criteria
                </button>
                
                <button
                  onClick={() => {
                    setUserRole('');
                    setTransitionType('');
                    setStep(1);
                  }}
                  className="hover:underline"
                >
                  Start over
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
