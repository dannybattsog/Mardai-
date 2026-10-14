import React, { useState } from 'react';
import { BASECAMP_REVIEW_DIMENSIONS } from '../data/basecampReviewData';
import { PageId } from '../types';
import { 
  X, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Download, 
  Mail, 
  Compass, 
  RotateCcw
} from 'lucide-react';
import { motion } from 'motion/react';

interface BasecampReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageId) => void;
  onShowToast: (title: string, message?: string, type?: 'success' | 'error' | 'info') => void;
}

export const BasecampReviewModal: React.FC<BasecampReviewModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onShowToast
}) => {
  const [currentStep, setCurrentStep] = useState<'assess' | 'results'>('assess');
  const [activeDimensionIndex, setActiveDimensionIndex] = useState<number>(0);
  const [scores, setScores] = useState<{ [key: string]: number }>({
    career: 6,
    health: 6,
    relationships: 7,
    finances: 6,
    learning: 7,
    purpose: 6,
    community: 5,
    next90days: 5
  });
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const currentDim = BASECAMP_REVIEW_DIMENSIONS[activeDimensionIndex];
  const totalDimensions = BASECAMP_REVIEW_DIMENSIONS.length;

  const handleScoreChange = (dimId: string, val: number) => {
    setScores(prev => ({ ...prev, [dimId]: val }));
  };

  const handleNextDimension = () => {
    if (activeDimensionIndex < totalDimensions - 1) {
      setActiveDimensionIndex(prev => prev + 1);
    } else {
      setCurrentStep('results');
    }
  };

  const handlePrevDimension = () => {
    if (activeDimensionIndex > 0) {
      setActiveDimensionIndex(prev => prev - 1);
    }
  };

  // Compute stats
  const scoreEntries = Object.entries(scores);
  const totalScoreSum = scoreEntries.reduce((acc, [, val]) => acc + Number(val), 0);
  const averageScore = (totalScoreSum / (scoreEntries.length || 1)).toFixed(1);
  
  const sortedDimensions = [...BASECAMP_REVIEW_DIMENSIONS].sort((a, b) => scores[a.id] - scores[b.id]);
  const lowestDimension = sortedDimensions[0];
  const highestDimension = sortedDimensions[sortedDimensions.length - 1];

  const getRecommendedPathway = () => {
    if (scores.career <= 5 || scores.next90days <= 5) {
      return {
        title: 'Mardai Breakthrough',
        pageId: 'breakthrough' as PageId,
        reason: 'Your career direction or 90-day execution clarity scored lowest. Breakthrough provides a structured 6-week career positioning and execution process.'
      };
    }
    if (scores.community <= 5 || scores.purpose <= 5 || scores.health <= 5) {
      return {
        title: 'Mardai Basecamp',
        pageId: 'basecamp' as PageId,
        reason: 'Your scores indicate a need to decompress from survival mode, connect with grounded peers, and reset your baseline priorities in nature.'
      };
    }
    return {
      title: 'Mardai Series & Workshops',
      pageId: 'series' as PageId,
      reason: 'Your baseline is solid. Focus on continuous cognitive growth, high-leverage frameworks, and modern AI integration.'
    };
  };

  const recommendedPathway = getRecommendedPathway();

  const handleSaveAndEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      onShowToast('Invalid Email', 'Please enter a valid email address.', 'error');
      return;
    }
    setIsSubmitted(true);
    onShowToast('Breakthrough Diagnostic Sent', `Your 90-day personal scorecard and review roadmap has been sent to ${email}`, 'success');
  };

  const handleReset = () => {
    setScores({
      career: 6,
      health: 6,
      relationships: 7,
      finances: 6,
      learning: 7,
      purpose: 6,
      community: 5,
      next90days: 5
    });
    setActiveDimensionIndex(0);
    setCurrentStep('assess');
    setIsSubmitted(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-[#F7F5F2] max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-[#1A1A1A] shadow-2xl relative flex flex-col">
        
        {/* Modal Header */}
        <div className="sticky top-0 bg-[#F7F5F2] p-6 border-b border-[#1A1A1A]/10 flex items-center justify-between z-20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#1A1A1A] text-white flex items-center justify-center font-bold">
              <Compass className="w-4 h-4 text-[#C27339]" />
            </div>
            <div>
              <h3 className="text-base font-black text-[#1A1A1A] tracking-tight">
                Your Breakthrough Review
              </h3>
              <p className="text-xs text-[#1A1A1A]/60">
                {currentStep === 'assess' ? `Dimension ${activeDimensionIndex + 1} of ${totalDimensions}` : 'Your Diagnostic Scorecard'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#1A1A1A]/60 hover:text-[#1A1A1A] hover:bg-[#1A1A1A]/5 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 flex-1">
          {currentStep === 'assess' ? (
            <div className="space-y-8">
              
              {/* Progress Bar & Indicators */}
              <div className="space-y-2">
                <div className="h-1 w-full bg-[#1A1A1A]/10 overflow-hidden">
                  <div 
                    className="h-full bg-[#2D4F3C] transition-all duration-300"
                    style={{ width: `${((activeDimensionIndex + 1) / totalDimensions) * 100}%` }}
                  ></div>
                </div>
                
                {/* Horizontal Category Chips */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A]/70">
                  {BASECAMP_REVIEW_DIMENSIONS.map((dim, idx) => (
                    <button
                      key={dim.id}
                      onClick={() => setActiveDimensionIndex(idx)}
                      className={`px-2.5 py-1 shrink-0 transition-colors ${
                        activeDimensionIndex === idx 
                          ? 'bg-[#1A1A1A] text-white' 
                          : 'bg-white hover:bg-[#1A1A1A]/5 text-[#1A1A1A] border border-[#1A1A1A]/10'
                      }`}
                    >
                      {idx + 1}. {dim.name.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Dimension Content */}
              <motion.div
                key={currentDim.id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25 }}
                className="p-6 sm:p-8 bg-white border border-[#1A1A1A]/15 space-y-6"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#C27339] block mb-1">
                    Dimension {activeDimensionIndex + 1}
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-black text-[#1A1A1A]">
                    {currentDim.name}
                  </h4>
                  <p className="text-xs text-[#1A1A1A]/70 mt-1">
                    {currentDim.description}
                  </p>
                </div>

                {/* Question Prompt */}
                <div className="p-4 bg-[#F7F5F2] border border-[#1A1A1A]/10 text-sm font-medium text-[#1A1A1A] font-editorial italic">
                  “{currentDim.prompt}”
                </div>

                {/* Score Slider */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1A1A1A]/60">
                      Your Current Rating
                    </span>
                    <span className="text-2xl font-black text-[#2D4F3C] font-mono">
                      {scores[currentDim.id]} / 10
                    </span>
                  </div>

                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={scores[currentDim.id]}
                    onChange={(e) => handleScoreChange(currentDim.id, parseInt(e.target.value))}
                    className="w-full h-2 bg-[#1A1A1A]/10 appearance-none cursor-pointer accent-[#2D4F3C]"
                  />

                  <div className="grid grid-cols-2 gap-4 text-[11px] pt-1 text-[#1A1A1A]/70">
                    <div className="p-2.5 bg-[#F7F5F2] border border-[#1A1A1A]/10">
                      <span className="font-bold block text-[#C27339]">1-3: Low Alignment</span>
                      <span>{currentDim.lowScoreAnchor}</span>
                    </div>
                    <div className="p-2.5 bg-[#F7F5F2] border border-[#1A1A1A]/10 text-right">
                      <span className="font-bold block text-[#2D4F3C]">8-10: High Fulfillment</span>
                      <span>{currentDim.highScoreAnchor}</span>
                    </div>
                  </div>
                </div>

                {/* Guiding Reflection Prompts */}
                <div className="pt-2 border-t border-[#1A1A1A]/10 space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1A1A1A]">
                    Guiding Reflection Questions
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#1A1A1A]/80">
                    {currentDim.guidingQuestions.map((q, qIdx) => (
                      <li key={qIdx} className="flex items-start gap-2">
                        <span className="text-[#C27339] font-bold">•</span>
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={handlePrevDimension}
                  disabled={activeDimensionIndex === 0}
                  className="px-5 py-3 border border-[#1A1A1A]/20 text-xs font-bold uppercase tracking-[0.15em] text-[#1A1A1A] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white transition-colors flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <button
                  onClick={handleNextDimension}
                  className="px-6 py-3 bg-[#1A1A1A] hover:bg-[#2D4F3C] text-white text-xs font-bold uppercase tracking-[0.15em] transition-colors flex items-center gap-2"
                >
                  <span>{activeDimensionIndex === totalDimensions - 1 ? 'View Diagnostic' : 'Next Dimension'}</span>
                  <ArrowRight className="w-4 h-4 text-[#C27339]" />
                </button>
              </div>

            </div>
          ) : (
            /* RESULTS VIEW */
            <div className="space-y-8">
              
              {/* Scorecard Summary Header */}
              <div className="p-8 bg-white border border-[#1A1A1A]/15 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-[#1A1A1A]/10 pb-6 md:pb-0 md:pr-6">
                  <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#1A1A1A]/60 block mb-1">
                    Overall Breakthrough Index
                  </span>
                  <div className="text-5xl font-black text-[#1A1A1A] font-mono">
                    {averageScore} <span className="text-lg text-[#1A1A1A]/40">/ 10</span>
                  </div>
                  <p className="text-xs text-[#1A1A1A]/70 mt-2">
                    Baseline measurement of life & career equilibrium.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="p-3 bg-[#F7F5F2] border border-[#1A1A1A]/10">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2D4F3C] block">
                      Primary Anchor (Strength)
                    </span>
                    <span className="text-sm font-bold text-[#1A1A1A]">
                      {highestDimension.name} ({scores[highestDimension.id]}/10)
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="p-3 bg-[#F7F5F2] border border-[#1A1A1A]/10">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C27339] block">
                      Primary Leverage Point
                    </span>
                    <span className="text-sm font-bold text-[#1A1A1A]">
                      {lowestDimension.name} ({scores[lowestDimension.id]}/10)
                    </span>
                  </div>
                </div>
              </div>

              {/* 8 Dimensions Visual Grid */}
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-[#1A1A1A] mb-3">
                  Your 8-Dimension Breakdown
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {BASECAMP_REVIEW_DIMENSIONS.map((dim) => {
                    const score = scores[dim.id];
                    return (
                      <div key={dim.id} className="p-4 bg-white border border-[#1A1A1A]/10 space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-[#1A1A1A]">{dim.name}</span>
                          <span className={`font-mono font-bold ${score >= 8 ? 'text-[#2D4F3C]' : score >= 5 ? 'text-[#C27339]' : 'text-red-700'}`}>
                            {score}/10
                          </span>
                        </div>
                        <div className="h-1.5 w-full bg-[#1A1A1A]/10 overflow-hidden">
                          <div
                            className={`h-full transition-all ${
                              score >= 8 ? 'bg-[#2D4F3C]' : score >= 5 ? 'bg-[#C27339]' : 'bg-red-700'
                            }`}
                            style={{ width: `${score * 10}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Recommended Mardai Pathway Card */}
              <div className="p-6 bg-[#1A1A1A] text-white space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-black px-2 py-0.5 bg-[#2D4F3C] text-white">
                    Recommended Pathway
                  </span>
                </div>
                <h4 className="text-2xl font-black text-white">
                  {recommendedPathway.title}
                </h4>
                <p className="text-xs text-[#F7F5F2]/80 leading-relaxed">
                  {recommendedPathway.reason}
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      onClose();
                      onNavigate(recommendedPathway.pageId);
                    }}
                    className="px-6 py-3 bg-[#2D4F3C] hover:bg-[#3C6D58] text-white text-xs font-bold uppercase tracking-[0.15em] transition-colors inline-flex items-center gap-2"
                  >
                    <span>Explore {recommendedPathway.title}</span>
                    <ArrowRight className="w-4 h-4 text-[#C27339]" />
                  </button>
                </div>
              </div>

              {/* Email Capture for 90-Day Strategy Blueprint */}
              <div className="p-6 bg-white border border-[#1A1A1A]/15 space-y-3">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#2D4F3C]" />
                  <h4 className="text-sm font-black text-[#1A1A1A] uppercase tracking-wider">
                    Download Full 90-Day Breakthrough Action Plan
                  </h4>
                </div>
                <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">
                  We'll email you a printable PDF copy of this diagnostic along with the Mardai 90-Day Personal Sprint template.
                </p>

                {isSubmitted ? (
                  <div className="p-3 bg-[#F7F5F2] border border-[#2D4F3C] text-xs text-[#2D4F3C] font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Roadmap dispatched! Check your inbox shortly.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSaveAndEmail} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="px-3.5 py-2.5 bg-[#F7F5F2] border border-[#1A1A1A]/20 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#2D4F3C]"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="px-3.5 py-2.5 bg-[#F7F5F2] border border-[#1A1A1A]/20 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#2D4F3C]"
                      required
                    />
                    <button
                      type="submit"
                      className="py-2.5 px-4 bg-[#1A1A1A] hover:bg-[#2D4F3C] text-white text-xs font-bold uppercase tracking-[0.15em] transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Send My Report</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Reset button */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={handleReset}
                  className="text-xs text-[#1A1A1A]/60 hover:text-[#1A1A1A] flex items-center gap-1.5 font-bold"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Assessment</span>
                </button>

                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-white border border-[#1A1A1A]/20 hover:border-[#1A1A1A] text-xs font-bold uppercase tracking-wider text-[#1A1A1A]"
                >
                  Done
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
};
