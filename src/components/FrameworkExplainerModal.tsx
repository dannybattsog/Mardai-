import React, { useState } from 'react';
import { InsightItem, PageId } from '../types';
import { 
  X, 
  CheckCircle2, 
  Sliders
} from 'lucide-react';

interface FrameworkExplainerModalProps {
  insight: InsightItem | null;
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (page: PageId) => void;
  onShowToast?: (title: string, message?: string, type?: 'success' | 'error' | 'info') => void;
}

export const FrameworkExplainerModal: React.FC<FrameworkExplainerModalProps> = ({
  insight,
  isOpen,
  onClose
}) => {
  const [secondOrderTier, setSecondOrderTier] = useState<1 | 2 | 3>(1);

  if (!isOpen || !insight) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-[#F7F5F2] max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[#1A1A1A] shadow-2xl p-6 sm:p-8 relative">
        
        {/* Header */}
        <div className="flex items-start justify-between pb-6 border-b border-[#1A1A1A]/10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] px-2 py-0.5 bg-[#2D4F3C] text-white">
                {insight.categoryLabel}
              </span>
              <span className="text-xs text-[#1A1A1A]/50 font-mono">
                {insight.format} • {insight.readTime}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#1A1A1A] tracking-tight">
              {insight.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#1A1A1A]/60 hover:text-[#1A1A1A] hover:bg-[#1A1A1A]/5 transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="py-6 space-y-6">
          <p className="text-sm sm:text-base text-[#1A1A1A] font-medium leading-relaxed italic bg-white p-5 border border-[#1A1A1A]/10 font-editorial">
            “{insight.summary}”
          </p>

          {/* Interactive Framework Simulator if available */}
          {insight.interactiveFrameworkType === 'second-order' && (
            <div className="p-6 bg-white border border-[#1A1A1A]/15 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2D4F3C] flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5" /> Interactive Simulation: Second-Order Consequence Cascade
                </span>
                <span className="text-xs font-mono text-[#1A1A1A]/50">Scenario Sandbox</span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setSecondOrderTier(1)}
                  className={`py-2 px-3 text-xs font-bold uppercase tracking-wider transition-all ${
                    secondOrderTier === 1 
                      ? 'bg-[#1A1A1A] text-white' 
                      : 'bg-[#F7F5F2] hover:bg-[#1A1A1A]/5 text-[#1A1A1A] border border-[#1A1A1A]/10'
                  }`}
                >
                  1st Order (0-30d)
                </button>
                <button
                  onClick={() => setSecondOrderTier(2)}
                  className={`py-2 px-3 text-xs font-bold uppercase tracking-wider transition-all ${
                    secondOrderTier === 2 
                      ? 'bg-[#1A1A1A] text-white' 
                      : 'bg-[#F7F5F2] hover:bg-[#1A1A1A]/5 text-[#1A1A1A] border border-[#1A1A1A]/10'
                  }`}
                >
                  2nd Order (1-6m)
                </button>
                <button
                  onClick={() => setSecondOrderTier(3)}
                  className={`py-2 px-3 text-xs font-bold uppercase tracking-wider transition-all ${
                    secondOrderTier === 3 
                      ? 'bg-[#1A1A1A] text-white' 
                      : 'bg-[#F7F5F2] hover:bg-[#1A1A1A]/5 text-[#1A1A1A] border border-[#1A1A1A]/10'
                  }`}
                >
                  3rd Order (6-18m)
                </button>
              </div>

              <div className="p-4 bg-[#F7F5F2] border border-[#1A1A1A]/10 text-xs leading-relaxed space-y-2">
                {secondOrderTier === 1 && (
                  <div>
                    <span className="font-bold text-[#1A1A1A] block mb-1">Immediate Gain (First-Order):</span>
                    <p className="text-[#1A1A1A]/70">
                      Example: Implementing a mandatory daily logging requirement. The immediate visible result is a 100% submission rate and a feeling of managerial control.
                    </p>
                  </div>
                )}
                {secondOrderTier === 2 && (
                  <div>
                    <span className="font-bold text-[#C27339] block mb-1">Behavioral Adaptation (Second-Order):</span>
                    <p className="text-[#1A1A1A]/70">
                      Employees begin optimizing for logging compliance rather than innovative problem-solving. Deep focus blocks are fractured; high-performers feel distrusted.
                    </p>
                  </div>
                )}
                {secondOrderTier === 3 && (
                  <div>
                    <span className="font-bold text-[#2D4F3C] block mb-1">Equilibrium State (Third-Order):</span>
                    <p className="text-[#1A1A1A]/70">
                      Culture shifts toward bureaucratic risk-aversion. Top strategic talent quietly seeks roles with greater autonomy; junior staff relies on rubber-stamped metrics.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Key Takeaways */}
          <div className="p-6 bg-white border border-[#1A1A1A]/10 space-y-3">
            <h4 className="text-[10px] uppercase tracking-[0.25em] font-black text-[#1A1A1A]">
              Core Principles & Takeaways
            </h4>
            <ul className="space-y-2">
              {insight.keyTakeaways.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-[#1A1A1A]/80">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2D4F3C] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Full Paragraphs */}
          <div className="space-y-4 text-xs sm:text-sm text-[#1A1A1A]/80 leading-relaxed">
            {insight.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Author footer */}
          <div className="pt-6 border-t border-[#1A1A1A]/10 flex items-center justify-between text-xs text-[#1A1A1A]/60">
            <span>Published by {insight.author} • {insight.date}</span>
            <button
              onClick={onClose}
              className="px-5 py-2.5 bg-[#1A1A1A] hover:bg-[#2D4F3C] text-white text-xs font-bold uppercase tracking-[0.15em]"
            >
              Close Framework
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
