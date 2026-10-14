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
  Briefcase,
  Users,
  Check,
  AlertTriangle,
  HeartHandshake
} from 'lucide-react';

interface AboutViewProps {
  onNavigate: (page: PageId) => void;
  onOpenBasecampReview: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onNavigate,
  onOpenBasecampReview
}) => {
  const principles = [
    {
      num: '01',
      title: 'Grounded practical truth over motivational hype',
      description: 'We reject empty cheerleading, toxic positivity, and performative posturing. Lasting human development begins with confronting reality honestly as it actually exists.'
    },
    {
      num: '02',
      title: 'Frameworks over open-ended advice',
      description: 'Vague wisdom evaporates by Monday morning. We provide structured systems, decision matrices, and napkin-simple models that can be immediately applied.'
    },
    {
      num: '03',
      title: 'Action over theory',
      description: 'Insight without behavioral change is merely entertainment. True learning is demonstrated when your daily routines, boundaries, and commitments visibly change.'
    },
    {
      num: '04',
      title: 'Human connection over isolated self-help',
      description: 'No one builds meaningful progress completely in isolation. Growth is dramatically accelerated when supported by high-trust relationships, candid peers, and shared accountability.'
    },
    {
      num: '05',
      title: 'Long-term development over quick fixes',
      description: 'Compounding is the most powerful force in human development. We focus on durable, deliberate progress across years, not hollow overnight transformations.'
    }
  ];

  const frictionPoints = [
    { label: 'Fragmented Attention', text: 'Constant notification pings, algorithmic feeds, and digital interruptions shatter cognitive depth.' },
    { label: 'Lack of Reflection', text: 'Days blend together in reactive firefighting, leaving zero time to question direction or purpose.' },
    { label: 'Surface-Level Connection', text: 'Networking has become transactional and performative, while authentic, vulnerable friendships erode.' },
    { label: 'Disconnected Information', text: 'Endless podcasts and articles flood our minds, but lack an integrated operating system to connect them.' },
    { label: 'Constant Busyness', text: 'Confusing activity with progress, people exhaust themselves working hard without moving forward.' },
    { label: 'Lack of Structured Frameworks', text: 'People rely on willpower rather than environmental systems and decision models designed to support them.' }
  ];

  const mardaiPOV = [
    { point: 'Honesty About Reality', desc: 'Accepting your true starting baseline across all 5 dimensions without illusion or shame.' },
    { point: 'Useful Frameworks', desc: 'Proven mental models and systems that turn abstract ambiguity into manageable components.' },
    { point: 'Small Practical Actions', desc: 'Designing low-friction daily micro-habits and 90-day sprints that reliably compound.' },
    { point: 'Human Connection', desc: 'Surrounding yourself with grounded peers who provide constructive candor and mutual accountability.' },
    { point: 'Ongoing Reflection', desc: 'Regular structured pauses—monthly check-ins and retreats—to calibrate direction before the next climb.' }
  ];

  return (
    <div className="pt-24 pb-20 bg-[#F7F5F2]">
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-[#F7F5F2] border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C]">
                THE MARDAI MISSION
              </span>
              <span className="w-1 h-1 bg-[#2D4F3C] rounded-full"></span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#1A1A1A] leading-[0.9] mb-6">
              Human development should not be left to chance.
            </h1>

            <p className="text-xl sm:text-2xl font-light text-[#1A1A1A] leading-relaxed mb-6 font-editorial italic">
              “Helping people develop deliberately through practical frameworks, structured systems, meaningful experiences, human connection, reflection, and community.”
            </p>

            <p className="text-sm sm:text-base text-[#1A1A1A]/80 leading-relaxed max-w-2xl">
              Many people are capable, hardworking, experienced, and ambitious, yet find themselves operating in survival mode—reacting to endless demands rather than deliberately authoring their lives. Mardai exists to provide the architecture for what comes next.
            </p>
          </div>
        </div>
      </section>

      {/* WHY MODERN LIFE MAKES IT HARD (Verbatim from Section 14) */}
      <section className="py-20 bg-white border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C] block mb-2">
              The Modern Problem
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#1A1A1A]">
              Why deliberate development is so difficult today.
            </h2>
            <p className="text-sm text-[#1A1A1A]/70 mt-3">
              It is not a lack of personal desire or discipline. Modern environments are structurally organized to prevent deep reflection and sustained personal agency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {frictionPoints.map((item, idx) => (
              <div key={idx} className="p-7 bg-[#F7F5F2] border border-[#1A1A1A]/10 space-y-3">
                <span className="text-xs font-mono font-bold text-[#C27339]">
                  FRICTION 0{idx + 1}
                </span>
                <h3 className="text-base font-black text-[#1A1A1A]">
                  {item.label}
                </h3>
                <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* THE MARDAI POINT OF VIEW */}
      <section className="py-20 bg-[#F7F5F2] border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C] block">
                The Mardai Stance
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#1A1A1A] leading-tight">
                Our point of view on human growth.
              </h2>
              <p className="text-base text-[#1A1A1A]/80 leading-relaxed">
                Development is not an accident. Nor is it a mystical flash of lightning. Real, sustainable human development requires five core ingredients working in continuous harmony.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-3">
              {mardaiPOV.map((p, idx) => (
                <div key={idx} className="p-5 bg-white border border-[#1A1A1A]/10 flex items-start gap-4">
                  <span className="w-6 h-6 bg-[#2D4F3C] text-white flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-[#1A1A1A]">
                      {p.point}
                    </h3>
                    <p className="text-xs text-[#1A1A1A]/70 mt-1 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* THE MARDAI OPERATING VALUES (Verbatim from Section 14) */}
      <section className="py-20 bg-white border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C] block mb-2">
              Operating Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#1A1A1A]">
              The Five Mardai Principles
            </h2>
            <p className="text-xs sm:text-sm text-[#1A1A1A]/70 mt-2">
              The foundational standards that govern every framework we design, every retreat we host, and every interaction we facilitate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((item, idx) => (
              <div key={idx} className="p-8 bg-[#F7F5F2] border border-[#1A1A1A]/10 space-y-3 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-[#C27339] block mb-2">
                    PRINCIPLE {item.num}
                  </span>
                  <h3 className="text-base font-black text-[#1A1A1A] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#1A1A1A]/70 leading-relaxed mt-3">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ORIGIN STORY: THE EVOLUTION OF MARDAI */}
      <section className="py-20 bg-[#F7F5F2] border-b border-[#1A1A1A]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="p-8 sm:p-12 bg-white border border-[#1A1A1A]/15 space-y-6">
            <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C] block">
              Origin & Evolution
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#1A1A1A]">
              From coaching and retreats to a human development company.
            </h2>
            
            <div className="space-y-4 text-xs sm:text-sm text-[#1A1A1A]/80 leading-relaxed">
              <p>
                Mardai began with a deep passion for helping individuals unlock potential through high-touch career coaching and immersive mountain retreats in Alberta. Over years of working closely with executives, career changers, fathers, founders, and professionals navigating major transitions, a clear pattern emerged:
              </p>
              
              <blockquote className="p-6 bg-[#F7F5F2] border-l-2 border-[#C27339] font-editorial italic text-base sm:text-lg text-[#1A1A1A] leading-relaxed my-4">
                “Career success cannot be separated from health, personal direction, financial peace of mind, or authentic human connection. A breakthrough in one area inevitably touches all the others.”
              </blockquote>
              
              <p>
                Coaching sessions alone were too narrow. Mountain retreats alone were too ephemeral if disconnected from everyday routines. Isolated self-help books left people overwhelmed by fragmented information without a cohesive system.
              </p>
              
              <p>
                This realization sparked the evolution of Mardai into <strong>a Human Connection and Development Company</strong>. Today, Mardai brings all of these elements into a single coherent philosophy: <em>Learn continuously</em> through practical mental models and card decks, <em>Grow intentionally</em> through disciplined personal development programs, and <em>Connect deeply</em> through transformative retreats, city events, and enduring community.
              </p>
            </div>

            {/* Founder Profile */}
            <div className="pt-8 border-t border-[#1A1A1A]/10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-black text-[#1A1A1A]">
                    Danny Battsog
                  </h3>
                  <p className="text-xs font-mono font-bold text-[#C27339]">
                    Principal Advisor & Founder, Mardai
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#1A1A1A]/60">
                  <Globe2 className="w-4 h-4 text-[#2D4F3C]" />
                  <span>Calgary, AB • Human Development Practitioner</span>
                </div>
              </div>

              <p className="mt-4 text-xs text-[#1A1A1A]/75 leading-relaxed">
                Danny is an HR and people professional, adult learning and development practitioner, and systems-thinking facilitator. As an international professional who has navigated career crossroads across borders and industries, Danny brings a grounded, warm, and highly pragmatic approach to human development.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* THE 4-PILLAR JOURNEY NAVIGATION */}
      <section className="py-20 bg-white border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C] block mb-2">
              Explore the Ecosystem
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1A1A1A]">
              The Four-Pillar Progression
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div 
              onClick={() => onNavigate('series')}
              className="p-6 bg-[#F7F5F2] hover:bg-white border border-[#1A1A1A]/10 transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-mono font-bold text-[#2D4F3C] uppercase tracking-wider block mb-1">01 — LEARN</span>
                <h3 className="text-base font-black text-[#1A1A1A] group-hover:text-[#2D4F3C] transition-colors">Mardai Series</h3>
                <p className="text-xs text-[#1A1A1A]/70 mt-2 leading-relaxed">Five collections, 500 practical models, and thinking card decks.</p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-[#1A1A1A]">
                <span>Explore Series</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C27339] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div 
              onClick={() => onNavigate('breakthrough')}
              className="p-6 bg-[#F7F5F2] hover:bg-white border border-[#1A1A1A]/10 transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-mono font-bold text-[#C27339] uppercase tracking-wider block mb-1">02 — APPLY</span>
                <h3 className="text-base font-black text-[#1A1A1A] group-hover:text-[#2D4F3C] transition-colors">Mardai Breakthrough</h3>
                <p className="text-xs text-[#1A1A1A]/70 mt-2 leading-relaxed">Structured human development program across 5 dimensions.</p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-[#1A1A1A]">
                <span>Explore Program</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C27339] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div 
              onClick={() => onNavigate('basecamp')}
              className="p-6 bg-[#F7F5F2] hover:bg-white border border-[#1A1A1A]/10 transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-mono font-bold text-[#2D4F3C] uppercase tracking-wider block mb-1">03 — EXPERIENCE</span>
                <h3 className="text-base font-black text-[#1A1A1A] group-hover:text-[#2D4F3C] transition-colors">Mardai Basecamp</h3>
                <p className="text-xs text-[#1A1A1A]/70 mt-2 leading-relaxed">2-day men's alpine reflection and connection retreat.</p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-[#1A1A1A]">
                <span>Explore Retreat</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C27339] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div 
              onClick={() => onNavigate('community')}
              className="p-6 bg-[#F7F5F2] hover:bg-white border border-[#1A1A1A]/10 transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-mono font-bold text-[#C27339] uppercase tracking-wider block mb-1">04 — BELONG</span>
                <h3 className="text-base font-black text-[#1A1A1A] group-hover:text-[#2D4F3C] transition-colors">Mardai Community</h3>
                <p className="text-xs text-[#1A1A1A]/70 mt-2 leading-relaxed">Ongoing gatherings, peer accountability, and alumni continuity.</p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-[#1A1A1A]">
                <span>Explore Community</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C27339] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
