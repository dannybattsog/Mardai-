import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Compass, 
  Brain, 
  Users, 
  TrendingUp, 
  Briefcase, 
  ShieldAlert, 
  Cpu, 
  ChevronRight, 
  Mail,
  BookOpen,
  Eye,
  Sliders,
  HelpCircle,
  Network
} from 'lucide-react';
import { MARDAI_SERIES_DECKS, CARD_ANATOMY_STEPS } from '../data/seriesData';
import seriesCollectionImg from '../assets/images/regenerated_image_1791994218671.png';

interface SeriesViewProps {
  onNavigate: (page: any) => void;
  onShowToast: (title: string, message: string, type?: 'success' | 'info' | 'warning') => void;
  onOpenBasecampReview?: () => void;
}

export const SeriesView: React.FC<SeriesViewProps> = ({
  onNavigate,
  onShowToast,
  onOpenBasecampReview
}) => {
  const [selectedDeckId, setSelectedDeckId] = useState<string>('human-systems');
  const [activeStepId, setActiveStepId] = useState<string>('understand');
  const [emailInput, setEmailInput] = useState('');
  const [selectedDeckWaitlist, setSelectedDeckWaitlist] = useState('Mardai Human Systems (First Release)');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedDeck = MARDAI_SERIES_DECKS.find(d => d.id === selectedDeckId) || MARDAI_SERIES_DECKS[0];
  const activeStep = CARD_ANATOMY_STEPS.find(s => s.id === activeStepId) || CARD_ANATOMY_STEPS[0];

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes('@')) {
      onShowToast('Invalid Email', 'Please enter a valid email address to join the priority list.', 'warning');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onShowToast(
        'Priority Waitlist Confirmed',
        `You are on the priority notification list for ${selectedDeckWaitlist}. You will receive launch announcements and preview models.`,
        'success'
      );
      setEmailInput('');
    }, 600);
  };

  const getDeckIcon = (id: string) => {
    switch (id) {
      case 'human-systems': return <Brain className="w-5 h-5" />;
      case 'leadership-systems': return <Users className="w-5 h-5" />;
      case 'career-systems': return <TrendingUp className="w-5 h-5" />;
      case 'business-systems': return <Briefcase className="w-5 h-5" />;
      case 'power-influence-systems': return <ShieldAlert className="w-5 h-5" />;
      default: return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F5F2] pt-24 pb-28 text-[#1A1A1A]">
      
      {/* 1. HERO HEADER */}
      <section className="relative overflow-hidden border-b border-[#1A1A1A]/10 bg-[#0F2338] text-white py-20 lg:py-28">
        <div className="absolute inset-0 bg-subtle-grid-dark opacity-40"></div>
        
        {/* Subtle decorative glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#C27339]/15 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-12">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-black text-[#D4AF37] bg-white/10 px-3.5 py-1.5 border border-white/15">
                The Mardai Series Collection
              </span>
              <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>
              <span className="text-xs font-mono text-white/70">
                5 Collections • 500 Models • One Philosophy
              </span>
            </div>

            {/* Master Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.02] mb-6">
              Five collections.<br />
              500 models.<br />
              <span className="text-[#D4AF37] font-editorial italic font-normal">
                One philosophy.
              </span>
            </h1>

            {/* Lead Narrative */}
            <p className="text-lg sm:text-xl font-light text-[#F7F5F2]/90 leading-relaxed mb-6">
              The Mardai Series Collection is a premium collection of practical thinking tools designed to help people understand themselves, make better decisions, navigate complexity, build meaningful relationships, and shape their futures with intention.
            </p>

            <p className="text-sm sm:text-base text-white/75 leading-relaxed font-normal mb-8">
              Each collection brings together 100 carefully selected frameworks, mental models, and practical principles from disciplines such as psychology, business, leadership, strategy, behavioural science, and human development.
            </p>

            {/* Core Philosophy Callout */}
            <div className="p-4 sm:p-5 bg-white/10 border-l-2 border-[#D4AF37] backdrop-blur-xs flex items-center justify-between gap-4">
              <p className="text-sm sm:text-base font-editorial italic text-white/95">
                "Rather than simply telling people what to think, Mardai helps them develop how to think."
              </p>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#D4AF37] whitespace-nowrap hidden sm:inline-block">
                The Mardai Method
              </span>
            </div>
          </div>

          {/* Luxury Card Decks Visual Showcase */}
          <div className="relative mt-12 pt-8 border-t border-white/10">
            <div 
              style={{ backgroundColor: '#17375E' }}
              className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 bg-[#17375E] border border-white/15 p-4 sm:p-8 rounded-xs backdrop-blur-md"
            >
              <div className="w-full lg:w-3/5 overflow-hidden shadow-2xl border border-white/20 group">
                <img 
                  src={seriesCollectionImg} 
                  alt="Mardai Series Collection - 5 Boxed Mental Model Card Decks" 
                  className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              <div className="w-full lg:w-2/5 space-y-5 text-left">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] font-mono uppercase tracking-widest font-bold">
                  First Release Out Soon
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  Mardai Human Systems
                </h3>
                <p className="text-sm font-light text-white/80 leading-relaxed">
                  100 models FOR LIFE, WORK & HUMAN CONNECTION. The foundational deck is currently in final production. Pre-order reservation guarantees first-edition boxed shipment.
                </p>

                <div className="pt-2">
                  <a
                    href="#priority-waitlist"
                    className="inline-flex items-center gap-2.5 bg-[#D4AF37] hover:bg-[#bfa035] text-[#0A2540] px-6 py-3 text-xs font-black uppercase tracking-[0.16em] transition-all font-mono shadow-md"
                  >
                    <span>Reserve First Release</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                <div className="text-[11px] font-mono text-white/60 flex items-center gap-3 pt-2">
                  <span>✦ 100 Thick Matte Linen Cards</span>
                  <span>✦ Gold Foil Box</span>
                  <span>✦ AI Guided Prompts</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. THE 5 COLLECTIONS INTERACTIVE EXPLORER */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] font-bold text-[#C27339]">
              THE 5 PILLARS OF HUMAN MASTERY
            </span>
            <span className="w-1.5 h-1.5 bg-[#2D4F3C] rounded-full"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#1A1A1A] leading-tight">
            Explore the Five Collections
          </h2>
          <p className="text-base text-[#1A1A1A]/70 mt-3 font-light">
            Each collection focuses on 100 practical mental models, frameworks, and decision systems tailored for deliberate growth.
          </p>
        </div>

        {/* Collection Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-10">
          {MARDAI_SERIES_DECKS.map((deck) => {
            const isSelected = deck.id === selectedDeckId;
            return (
              <button
                key={deck.id}
                onClick={() => setSelectedDeckId(deck.id)}
                style={isSelected ? { backgroundColor: '#17375E' } : undefined}
                className={`text-left p-4 sm:p-5 border transition-all relative flex flex-col justify-between ${
                  isSelected 
                    ? 'bg-[#17375E] text-white border-[#17375E] shadow-lg' 
                    : 'bg-white hover:bg-[#EFECE6] text-[#1A1A1A] border-[#1A1A1A]/15'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[10px] font-mono font-bold tracking-widest ${isSelected ? 'text-[#D4AF37]' : 'text-[#C27339]'}`}>
                      {deck.number}
                    </span>
                    {deck.status === 'coming_soon_first' && (
                      <span className={`text-[9px] uppercase font-mono px-1.5 py-0.5 font-bold ${isSelected ? 'bg-[#D4AF37] text-black' : 'bg-[#0F2338] text-white'}`}>
                        First Out
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm font-black tracking-tight leading-snug mb-1">
                    {deck.title.replace('Mardai ', '')}
                  </h4>
                  <p className={`text-[11px] line-clamp-2 ${isSelected ? 'text-white/70' : 'text-[#1A1A1A]/60'}`}>
                    {deck.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-current/15 flex items-center justify-between text-[10px] font-mono">
                  <span>100 Models</span>
                  <ChevronRight className={`w-3.5 h-3.5 ${isSelected ? 'text-[#D4AF37]' : 'text-[#1A1A1A]/40'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Deck Deep Dive Panel */}
        <div className="bg-white border border-[#1A1A1A]/15 shadow-sm p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left summary info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] font-bold px-2.5 py-1 bg-[#1A1A1A] text-white">
                  COLLECTION {selectedDeck.number}
                </span>
                <span className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 font-bold ${
                  selectedDeck.status === 'coming_soon_first' 
                    ? 'bg-[#2D4F3C] text-white' 
                    : 'bg-[#C27339]/20 text-[#C27339]'
                }`}>
                  {selectedDeck.statusText}
                </span>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] tracking-tight leading-tight mb-2">
                  {selectedDeck.title}
                </h3>
                <p className="text-lg font-editorial italic text-[#C27339]">
                  {selectedDeck.subtitle}
                </p>
              </div>

              <div className="space-y-4 text-sm text-[#1A1A1A]/80 leading-relaxed font-light">
                <p>{selectedDeck.description}</p>
                
                <div className="p-4 bg-[#F7F5F2] border-l-2 border-[#1A1A1A] space-y-1">
                  <p className="text-[10px] font-mono uppercase tracking-widest font-bold text-[#1A1A1A]/60">
                    Purpose
                  </p>
                  <p className="text-sm font-medium text-[#1A1A1A]">
                    {selectedDeck.purpose}
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    setSelectedDeckWaitlist(selectedDeck.title);
                    const el = document.getElementById('priority-waitlist');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{ backgroundColor: '#17375E' }}
                  className="bg-[#17375E] hover:bg-[#112946] text-white px-6 py-3 text-xs font-black uppercase tracking-[0.16em] transition-all flex items-center gap-2 font-mono"
                >
                  <span>Join Waitlist for {selectedDeck.number}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right sample models preview */}
            <div className="lg:col-span-7 bg-[#F7F5F2] border border-[#1A1A1A]/10 p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-[#1A1A1A]/10 pb-4">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#C27339]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#1A1A1A]">
                    Featured Models in {selectedDeck.title.replace('Mardai ', '')}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#1A1A1A]/60">
                  {selectedDeck.sampleModels.length} of {selectedDeck.modelCount} shown
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedDeck.sampleModels.map((model, idx) => (
                  <div 
                    key={idx}
                    className="p-4 bg-white border border-[#1A1A1A]/10 hover:border-[#1A1A1A]/30 transition-all shadow-2xs space-y-2 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 bg-[#EFECE6] text-[#1A1A1A]/80 font-bold inline-block mb-1">
                        {model.category}
                      </span>
                      <h5 className="text-sm font-bold text-[#1A1A1A] leading-snug">
                        {model.name}
                      </h5>
                    </div>
                    <p className="text-xs text-[#1A1A1A]/70 font-light leading-relaxed">
                      {model.oneLiner}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-3 bg-white border border-[#1A1A1A]/10 text-xs text-[#1A1A1A]/70 flex items-center justify-between">
                <span>Total 100 comprehensive models in this deck.</span>
                <span className="font-mono text-[10px] text-[#C27339] font-bold">Includes full card anatomy + AI prompts</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. WHAT MAKES THE MARDAI SERIES DIFFERENT? (INTERACTIVE CARD ANATOMY) */}
      <section className="py-20 lg:py-28 bg-[#EFECE6] border-y border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] font-bold text-[#2D4F3C]">
                BEYOND CONVENTIONAL FLASHCARDS
              </span>
              <span className="w-1.5 h-1.5 bg-[#2D4F3C] rounded-full"></span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#1A1A1A] leading-tight">
              What makes the Mardai Series different?
            </h2>
            
            <p className="text-base text-[#1A1A1A]/70 mt-3 font-light leading-relaxed">
              Each collection is designed to go beyond conventional educational cards. Every single model connects theory with everyday application through seven rigorous dimensions:
            </p>
          </div>

          {/* Interactive Card Anatomy Explorer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Step Selection List */}
            <div className="lg:col-span-5 space-y-2">
              {CARD_ANATOMY_STEPS.map((step, idx) => {
                const isActive = step.id === activeStepId;
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStepId(step.id)}
                    style={isActive ? { backgroundColor: '#17375E' } : undefined}
                    className={`w-full text-left p-4 border transition-all flex items-center justify-between ${
                      isActive 
                        ? 'bg-[#17375E] text-white border-[#17375E] shadow-md translate-x-1' 
                        : 'bg-white hover:bg-[#F7F5F2] text-[#1A1A1A] border-[#1A1A1A]/15'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono font-bold ${
                        isActive ? 'bg-[#D4AF37] text-black' : 'bg-[#EFECE6] text-[#1A1A1A]'
                      }`}>
                        0{idx + 1}
                      </span>
                      <div>
                        <h4 className="text-sm font-bold tracking-tight">
                          {step.title}
                        </h4>
                        <p className={`text-[11px] ${isActive ? 'text-white/70' : 'text-[#1A1A1A]/60'}`}>
                          {step.label}
                        </p>
                      </div>
                    </div>

                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#D4AF37]' : 'text-[#1A1A1A]/30'}`} />
                  </button>
                );
              })}
            </div>

            {/* Interactive Physical Card Simulator */}
            <div className="lg:col-span-7 bg-[#0A2540] text-white border border-[#1A1A1A]/20 p-6 sm:p-10 rounded-xs shadow-2xl relative">
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37]">
                  Card Anatomy Preview
                </span>
              </div>

              <div className="space-y-6">
                
                {/* Header on the card */}
                <div className="border-b border-white/15 pb-4">
                  <div className="flex items-center justify-between text-[11px] font-mono text-white/60 mb-2">
                    <span>MARDAI HUMAN SYSTEMS • #01</span>
                    <span className="text-[#D4AF37]">FIRST PRINCIPLES THINKING</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    {activeStep.title}
                  </h3>
                  <p className="text-sm font-editorial italic text-[#D4AF37] mt-1">
                    {activeStep.label}
                  </p>
                </div>

                {/* Explanation */}
                <div className="p-4 bg-white/5 border border-white/10 space-y-2">
                  <p className="text-xs uppercase font-mono tracking-widest text-white/50">
                    Architectural Purpose
                  </p>
                  <p className="text-sm text-white/90 leading-relaxed font-light">
                    {activeStep.description}
                  </p>
                </div>

                {/* Concrete Card Content Sample */}
                <div className="p-5 bg-white/10 border-l-2 border-[#D4AF37] space-y-2">
                  <p className="text-[10px] uppercase font-mono tracking-widest text-[#D4AF37] font-bold">
                    Actual Card Content Preview
                  </p>
                  <p className="text-sm sm:text-base font-serif italic text-white leading-relaxed">
                    "{activeStep.exampleSnippet}"
                  </p>
                </div>

                {/* Bottom Card Footer Details */}
                <div className="pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-white/60">
                  <span>✦ 3.5" × 5" High-GSM Matte Finish</span>
                  <span>✦ Interconnected to Collection 02–05</span>
                </div>

              </div>
            </div>

          </div>

          {/* Usage Context Box */}
          <div className="mt-12 p-6 sm:p-8 bg-white border border-[#1A1A1A]/15 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 max-w-2xl">
              <h4 className="text-base font-bold text-[#1A1A1A]">
                Versatile Application Across Contexts
              </h4>
              <p className="text-sm text-[#1A1A1A]/70 font-light">
                The collections can be used independently or together, by individuals, coaches, educators, leaders, entrepreneurs, and executive teams.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-[10px] font-mono uppercase tracking-wider font-bold">
              <span className="px-3 py-1.5 bg-[#F7F5F2] border border-[#1A1A1A]/10 text-[#1A1A1A]">Individuals</span>
              <span className="px-3 py-1.5 bg-[#F7F5F2] border border-[#1A1A1A]/10 text-[#1A1A1A]">Coaches & Mentors</span>
              <span className="px-3 py-1.5 bg-[#F7F5F2] border border-[#1A1A1A]/10 text-[#1A1A1A]">Founders & Teams</span>
            </div>
          </div>

        </div>
      </section>

      {/* 4. THE BIGGER VISION */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] font-bold text-[#C27339]">
                THE BIGGER VISION
              </span>
              <span className="w-1.5 h-1.5 bg-[#2D4F3C] rounded-full"></span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#1A1A1A] leading-tight">
              An interconnected library of human knowledge.
            </h2>

            <p className="text-lg text-[#1A1A1A]/80 font-light leading-relaxed">
              Mardai is not simply building a collection of cards. It is developing an interconnected library of human knowledge, designed to make powerful ideas more accessible, practical, and shareable.
            </p>

            <p className="text-base text-[#1A1A1A]/70 font-light leading-relaxed">
              The five series represent different but interconnected dimensions of life:
            </p>

            <div className="space-y-3 pt-2">
              {[
                { title: 'Understand yourself', deck: 'Mardai Human Systems (#01)' },
                { title: 'Lead others', deck: 'Mardai Leadership Systems (#02)' },
                { title: 'Shape your path', deck: 'Mardai Career Systems (#03)' },
                { title: 'Build value', deck: 'Mardai Business Systems (#04)' },
                { title: 'Navigate power', deck: 'Mardai Power & Influence Systems (#05)' }
              ].map((dim, idx) => (
                <div key={idx} className="flex items-center justify-between p-3.5 bg-white border border-[#1A1A1A]/10">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#C27339]">0{idx + 1}</span>
                    <span className="text-sm font-bold text-[#1A1A1A]">{dim.title}</span>
                  </div>
                  <span className="text-xs font-mono text-[#1A1A1A]/50">{dim.deck}</span>
                </div>
              ))}
            </div>

            {/* Tagline Anthem */}
            <div className="pt-6 border-t border-[#1A1A1A]/10">
              <p 
                style={{ fontFamily: 'Georgia, serif' }}
                className="text-xl sm:text-2xl font-black text-[#1A1A1A] tracking-tight"
              >
                Learn continuously.<br />
                Grow intentionally.<br />
                <span className="text-[#C27339] font-editorial italic font-normal">
                  Connect deeply.
                </span>
              </p>
            </div>
          </div>

          {/* Right Visual / Philosophy Card */}
          <div 
            style={{ backgroundColor: '#17375E' }}
            className="lg:col-span-6 bg-[#17375E] text-white p-8 sm:p-12 relative overflow-hidden shadow-xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2D4F3C]/20 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="space-y-8 relative z-10">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span 
                    style={{ fontFamily: 'Georgia, serif' }}
                    className="text-2xl font-black tracking-[-0.04em] text-white"
                  >
                    MARDAI
                  </span>
                  <span className="w-1.5 h-1.5 bg-[#2D4F3C] rounded-full"></span>
                </div>
                <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#D4AF37]">
                  Human Connection and Development Company
                </p>
              </div>

              <blockquote className="text-xl sm:text-2xl font-editorial italic text-white/95 leading-snug">
                "Modern individuals don't lack access to information. They lack structured frameworks to filter the noise, reflect honestly, and make sound decisions under pressure."
              </blockquote>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs font-mono">
                <div>
                  <span className="text-white/40 block">Total Models</span>
                  <span className="text-2xl font-bold text-[#D4AF37]">500</span>
                </div>
                <div>
                  <span className="text-white/40 block">Series Volumes</span>
                  <span className="text-2xl font-bold text-[#D4AF37]">5 Sets</span>
                </div>
              </div>

              <div className="p-4 bg-white/5 border border-white/10 text-xs text-white/70">
                Designed and curated in Canada for thinkers, leaders, and builders navigating modern complexity.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. PRIORITY WAITLIST / PRE-ORDER NOTIFICATION */}
      <section id="priority-waitlist" className="py-20 bg-[#0F2338] text-white border-t border-[#1A1A1A]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] font-bold text-[#D4AF37] bg-white/10 px-3 py-1">
              FIRST RELEASE LAUNCH NOTIFICATION
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Be the first to receive Mardai Human Systems
          </h2>

          <p className="text-base sm:text-lg font-light text-white/80 max-w-2xl mx-auto mb-8">
            Enter your email below for priority launch notifications, sample digital card previews, and early-subscriber collector pricing.
          </p>

          <form onSubmit={handleWaitlistSubmit} className="max-w-xl mx-auto space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Enter your email address..."
                className="flex-1 px-4 py-3.5 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3.5 bg-[#D4AF37] hover:bg-[#bfa035] text-[#0A2540] text-xs font-black uppercase tracking-[0.18em] transition-all font-mono whitespace-nowrap shadow-lg flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Reserving...</span>
                ) : (
                  <>
                    <span>Join Waitlist</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            <p className="text-[11px] font-mono text-white/50">
              No spam. Only product launch alerts, physical card release dates, and sample thinking models.
            </p>
          </form>

        </div>
      </section>

    </div>
  );
};
