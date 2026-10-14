import React from 'react';
import { PageId } from '../types';
import { 
  ArrowRight, 
  Compass, 
  Users, 
  Mountain, 
  Building2, 
  BookOpen, 
  CheckCircle2, 
  HeartHandshake, 
  Sparkles,
  Globe2,
  Calendar,
  Layers,
  Award
} from 'lucide-react';

interface EcosystemSectionProps {
  onNavigate: (page: PageId) => void;
  onOpenRegister: () => void;
  onOpenBasecampReview: () => void;
  onOpenFindPath: () => void;
}

export const EcosystemSection: React.FC<EcosystemSectionProps> = ({
  onNavigate,
  onOpenRegister,
  onOpenBasecampReview,
  onOpenFindPath
}) => {
  const communityRoles = [
    {
      role: 'MEMBER',
      desc: 'Participates actively in gatherings and develops personal capabilities.',
      color: '#2D4F3C'
    },
    {
      role: 'CONTRIBUTOR',
      desc: 'Shares practical industry knowledge, Canadian experience, and lessons learned.',
      color: '#C27339'
    },
    {
      role: 'MENTOR',
      desc: 'Supports and guides newer members navigating career and personal transitions.',
      color: '#2D4F3C'
    },
    {
      role: 'CONNECTOR',
      desc: 'Introduces peers across sectors, opening unexpected opportunities and partnerships.',
      color: '#C27339'
    },
    {
      role: 'COMMUNITY LEADER',
      desc: 'Helps facilitate city chapters, roundtable discussions, and local gatherings.',
      color: '#1A1A1A'
    }
  ];

  return (
    <div className="space-y-0">
      
      {/* =========================================================================
          SECTION 7: YOUR DEVELOPMENT DOESN'T END THERE
          Ecosystem: Breakthrough, Basecamp, Workshops
          ========================================================================= */}
      <section className="py-24 md:py-32 bg-[#F7F5F2] text-[#1A1A1A] border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] font-bold text-[#2D4F3C]">
                THE DEEPER PROGRESSION
              </span>
              <span className="w-1 h-1 bg-[#C27339] rounded-full"></span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[#1A1A1A]">
              Your development doesn’t end there.
            </h2>
            <p className="text-base text-[#1A1A1A]/75 mt-3 leading-relaxed">
              One-day events spark clarity and new relationships. For individuals and teams ready for deeper transformation, Mardai provides targeted programs:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Mardai Breakthrough */}
            <div 
              onClick={() => onNavigate('breakthrough')}
              className="bg-white border border-[#1A1A1A]/15 p-8 flex flex-col justify-between hover:border-[#2D4F3C] transition-all cursor-pointer group shadow-xs hover:shadow-md"
            >
              <div className="space-y-4">
                <span className="text-[10px] font-mono font-bold text-[#C27339] uppercase tracking-widest block">
                  DEVELOP + APPLY
                </span>
                <h3 className="text-2xl font-black text-[#1A1A1A] group-hover:text-[#2D4F3C] transition-colors">
                  Mardai Breakthrough
                </h3>
                <p className="text-xs font-editorial italic text-[#1A1A1A]/70">
                  “Turn insight into progress.”
                </p>
                <p className="text-xs text-[#1A1A1A]/80 leading-relaxed">
                  A structured individual-development program across five dimensions: Life & Direction, Career, Health & Energy, Financial Wellbeing, and Connection.
                </p>
                <div className="pt-2 text-[11px] text-[#1A1A1A]/60 font-mono">
                  Process: Assess → Prioritize → Design → Act → Review → Adapt
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#1A1A1A]/10 flex items-center justify-between">
                <span className="text-xs font-bold text-[#1A1A1A]">Explore Program</span>
                <ArrowRight className="w-4 h-4 text-[#C27339] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 2: Mardai Basecamp */}
            <div 
              onClick={() => onNavigate('basecamp')}
              className="bg-white border border-[#1A1A1A]/15 p-8 flex flex-col justify-between hover:border-[#2D4F3C] transition-all cursor-pointer group shadow-xs hover:shadow-md"
            >
              <div className="space-y-4">
                <span className="text-[10px] font-mono font-bold text-[#2D4F3C] uppercase tracking-widest block">
                  EXPERIENCE + CONNECT DEEPLY
                </span>
                <h3 className="text-2xl font-black text-[#1A1A1A] group-hover:text-[#2D4F3C] transition-colors">
                  Mardai Basecamp
                </h3>
                <p className="text-xs font-editorial italic text-[#1A1A1A]/70">
                  “Reconnect. Refocus. Move forward.”
                </p>
                <p className="text-xs text-[#1A1A1A]/80 leading-relaxed">
                  A 2.5-day men's human-development and alpine connection retreat in the Alberta foothills. Reflection, shared meals, outdoor challenge, and strategic life calibration.
                </p>
                <div className="pt-2 text-[11px] text-[#1A1A1A]/60 font-mono">
                  “A basecamp isn’t the destination. It’s where you prepare for the next climb.”
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#1A1A1A]/10 flex items-center justify-between">
                <span className="text-xs font-bold text-[#1A1A1A]">Discover Basecamp</span>
                <ArrowRight className="w-4 h-4 text-[#C27339] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 3: Mardai Workshops */}
            <div 
              onClick={() => onNavigate('workshops')}
              className="bg-white border border-[#1A1A1A]/15 p-8 flex flex-col justify-between hover:border-[#2D4F3C] transition-all cursor-pointer group shadow-xs hover:shadow-md"
            >
              <div className="space-y-4">
                <span className="text-[10px] font-mono font-bold text-[#1A1A1A] uppercase tracking-widest block">
                  FOR ORGANIZATIONS
                </span>
                <h3 className="text-2xl font-black text-[#1A1A1A] group-hover:text-[#2D4F3C] transition-colors">
                  Mardai Workshops
                </h3>
                <p className="text-xs font-editorial italic text-[#1A1A1A]/70">
                  “Develop people. Strengthen teams. Navigate change.”
                </p>
                <p className="text-xs text-[#1A1A1A]/80 leading-relaxed">
                  Customized capability sessions for organizations navigating technological change, team alignment, AI adoption, and cross-functional leadership.
                </p>
                <div className="pt-2 text-[11px] text-[#1A1A1A]/60 font-mono">
                  Method: Diagnose → Design → Facilitate → Apply → Measure
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#1A1A1A]/10 flex items-center justify-between">
                <span className="text-xs font-bold text-[#1A1A1A]">Work With Mardai</span>
                <ArrowRight className="w-4 h-4 text-[#C27339] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 8: THE EVENT IS ONE DAY. THE COMMUNITY CONTINUES.
          Mardai Community & Flywheel
          ========================================================================= */}
      <section className="py-24 md:py-32 bg-white text-[#1A1A1A] border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] font-bold text-[#2D4F3C]">
                  BELONG + CONTINUE
                </span>
                <span className="w-1 h-1 bg-[#C27339] rounded-full"></span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[#1A1A1A] leading-tight">
                The event is one day.<br />
                <span className="text-[#C27339] font-editorial italic font-normal">
                  The community continues.
                </span>
              </h2>

              <p className="text-base text-[#1A1A1A]/85 leading-relaxed font-light">
                Information is everywhere. Meaningful relationships are harder to build. Mardai Community brings together people who want to continue developing themselves while helping others develop too.
              </p>

              <blockquote className="p-5 bg-[#F7F5F2] border-l-2 border-[#2D4F3C] text-sm text-[#1A1A1A]/85 font-editorial italic leading-relaxed">
                “Progress is better together. Community is the connective tissue across the entire Mardai ecosystem.”
              </blockquote>

              {/* The Community Flywheel Model (Section 28) */}
              <div className="p-6 bg-[#F7F5F2] border border-[#1A1A1A]/10 space-y-3">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#2D4F3C] block">
                  THE COMMUNITY FLYWHEEL
                </span>
                <p className="text-xs text-[#1A1A1A]/75 leading-relaxed">
                  A visitor attends a Mardai Event → Gains practical knowledge and initial connections → Deepens capability via Breakthrough or Basecamp → Joins Community for accountability → Grows from Member into Contributor and Mentor → Helps the next person entering the door.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={() => onNavigate('community')}
                  className="bg-[#1A1A1A] hover:bg-[#2D4F3C] text-white px-8 py-3.5 text-xs font-bold uppercase tracking-[0.16em] transition-all flex items-center gap-2 group"
                >
                  <span>Explore Community</span>
                  <ArrowRight className="w-4 h-4 text-[#C27339] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* The 5 Community Roles */}
            <div className="lg:col-span-6 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#1A1A1A]/60 font-bold block mb-2">
                Five Pathways to Belong & Contribute:
              </span>

              {communityRoles.map((roleItem, idx) => (
                <div 
                  key={idx}
                  className="p-4 bg-[#F7F5F2] border border-[#1A1A1A]/10 flex items-start gap-4 hover:bg-white transition-colors"
                >
                  <div 
                    className="w-8 h-8 text-white flex items-center justify-center font-mono font-bold text-xs shrink-0"
                    style={{ backgroundColor: roleItem.color }}
                  >
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">
                      {roleItem.role}
                    </h4>
                    <p className="text-xs text-[#1A1A1A]/70 mt-0.5 leading-relaxed">
                      {roleItem.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 9: FOR ORGANIZATIONS (Mardai Workshops)
          ========================================================================= */}
      <section className="py-24 md:py-32 bg-[#1A1A1A] text-[#F7F5F2] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] font-bold text-[#C27339]">
                  ENTERPRISE CAPABILITY & TEAMS
                </span>
                <span className="w-1 h-1 bg-[#2D4F3C] rounded-full"></span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
                Develop people.<br />
                Strengthen teams.<br />
                <span className="text-[#C27339] font-editorial italic font-normal">
                  Navigate change.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-[#F7F5F2]/80 leading-relaxed font-light">
                Mardai works with organizations that recognize technological transformation succeeds only when accompanied by human capability, trust, clear decision making, and deep team alignment.
              </p>

              {/* 5-Step Organizational System */}
              <div className="p-6 bg-white/5 border border-white/10 space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#2D4F3C] font-bold block">
                  ORGANIZATIONAL DELIVERY SYSTEM
                </span>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-white">
                  <span className="px-2.5 py-1 bg-white/10">Diagnose</span>
                  <span className="text-[#C27339]">→</span>
                  <span className="px-2.5 py-1 bg-white/10">Design</span>
                  <span className="text-[#C27339]">→</span>
                  <span className="px-2.5 py-1 bg-white/10">Facilitate</span>
                  <span className="text-[#C27339]">→</span>
                  <span className="px-2.5 py-1 bg-white/10">Apply</span>
                  <span className="text-[#C27339]">→</span>
                  <span className="px-2.5 py-1 bg-white/10">Measure</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('workshops')}
                  className="bg-[#2D4F3C] hover:bg-[#3d6951] text-white px-8 py-3.5 text-xs font-bold uppercase tracking-[0.16em] transition-all flex items-center gap-2 group"
                >
                  <span>Work With Mardai</span>
                  <ArrowRight className="w-4 h-4 text-[#C27339] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 bg-white/5 border border-white/10 space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#C27339]">
                  Focus Areas for Organizations
                </h4>
                <ul className="space-y-2 text-xs text-[#F7F5F2]/80">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#2D4F3C] rounded-full"></span>
                    <span>AI-Enabled Work & Human Collaboration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#2D4F3C] rounded-full"></span>
                    <span>Leadership Under High Ambiguity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#2D4F3C] rounded-full"></span>
                    <span>Systems Thinking & Cross-Functional Decision Making</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#2D4F3C] rounded-full"></span>
                    <span>Team Trust, Candor & Change Readiness</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-white/5 border border-white/10 text-xs text-[#F7F5F2]/70 font-mono">
                Formats: 90-min keynotes, half-day intensive workshops, or multi-week leadership cohorts.
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 10: IDEAS WORTH APPLYING (Mardai Insights)
          ========================================================================= */}
      <section className="py-24 md:py-32 bg-[#F7F5F2] text-[#1A1A1A] border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] font-bold text-[#2D4F3C]">
                  PRACTICAL THOUGHT LEADERSHIP
                </span>
                <span className="w-1 h-1 bg-[#C27339] rounded-full"></span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[#1A1A1A]">
                Ideas Worth Applying
              </h2>
              <p className="text-base text-[#1A1A1A]/75 mt-2">
                Frameworks, mental models, and discussions on systems thinking, career capability, and human connection.
              </p>
            </div>

            <button
              onClick={() => onNavigate('insights')}
              className="text-xs font-bold uppercase tracking-wider text-[#2D4F3C] hover:text-[#1A1A1A] flex items-center gap-1.5 transition-colors group"
            >
              <span>Explore All Insights</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C27339] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* 4 Questions Philosophy Card */}
          <div className="p-8 bg-white border border-[#1A1A1A]/15 mb-8">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#C27339] font-bold block mb-2">
              THE MARDAI CONTENT FILTER
            </span>
            <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">
              Every insight must answer four fundamental questions:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-[#F7F5F2] border border-[#1A1A1A]/10">
                <span className="text-xs font-mono font-bold text-[#2D4F3C] block">01</span>
                <span className="text-xs font-bold text-[#1A1A1A] mt-1 block">What is the idea?</span>
                <p className="text-[11px] text-[#1A1A1A]/70 mt-1">Grounding the concept with precision.</p>
              </div>
              <div className="p-4 bg-[#F7F5F2] border border-[#1A1A1A]/10">
                <span className="text-xs font-mono font-bold text-[#2D4F3C] block">02</span>
                <span className="text-xs font-bold text-[#1A1A1A] mt-1 block">Why does it matter?</span>
                <p className="text-[11px] text-[#1A1A1A]/70 mt-1">Connecting theory to tangible stakes.</p>
              </div>
              <div className="p-4 bg-[#F7F5F2] border border-[#1A1A1A]/10">
                <span className="text-xs font-mono font-bold text-[#2D4F3C] block">03</span>
                <span className="text-xs font-bold text-[#1A1A1A] mt-1 block">How can I apply it?</span>
                <p className="text-[11px] text-[#1A1A1A]/70 mt-1">Actionable behavioral shift this week.</p>
              </div>
              <div className="p-4 bg-[#F7F5F2] border border-[#1A1A1A]/10">
                <span className="text-xs font-mono font-bold text-[#2D4F3C] block">04</span>
                <span className="text-xs font-bold text-[#1A1A1A] mt-1 block">Who could I discuss it with?</span>
                <p className="text-[11px] text-[#1A1A1A]/70 mt-1">Sparking peer dialogue and relational depth.</p>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 11: ABOUT MARDAI / FOUNDER
          ========================================================================= */}
      <section className="py-24 md:py-32 bg-white text-[#1A1A1A] border-b border-[#1A1A1A]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 sm:p-12 bg-[#F7F5F2] border border-[#1A1A1A]/15 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#1A1A1A]/10">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#2D4F3C] font-bold block mb-1">
                  FOUNDING ARCHITECTURE
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#1A1A1A]">
                  Danny Battsog
                </h3>
                <p className="text-xs font-mono text-[#C27339] font-bold">
                  Founder & Principal Advisor, Mardai
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#1A1A1A]/70">
                <Globe2 className="w-4 h-4 text-[#2D4F3C]" />
                <span>Calgary, Alberta • Human Development Practitioner</span>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#1A1A1A]/80 leading-relaxed font-light">
              <p>
                Mardai grew out of firsthand observation: high-achieving, capable professionals frequently operate in isolation, reacting to demanding circumstances rather than authoring deliberate trajectories.
              </p>
              <p>
                As an HR professional, adult learning practitioner, and systems facilitator who has built a life across international borders, Danny established Mardai to provide the missing infrastructure: practical frameworks, real-world reflection, and enduring peer communities.
              </p>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                onClick={() => onNavigate('about')}
                className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] hover:text-[#2D4F3C] flex items-center gap-1.5 group"
              >
                <span>Read Full About & Philosophy</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C27339] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 12: FINAL CTA
          Includes Background Photo 6: Alpine trail ridge bathed in morning light (Motivation, Journey, Together)
          ========================================================================= */}
      <section className="relative py-28 md:py-36 bg-[#1A1A1A] text-[#F7F5F2] overflow-hidden">
        
        {/* Background Photo 6: Inspiring high mountain trail ridge in morning sun (non-repeating) */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transform scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=2000&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/95 via-[#1A1A1A]/90 to-[#1A1A1A]/80 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-black/40 z-0" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 mx-auto">
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.3em] font-bold text-[#C27339] bg-white/5 px-3 py-1 border border-white/10">
              BUILD WHAT COMES NEXT
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight">
            Build what comes next.<br />
            <span className="text-[#C27339] font-editorial italic font-normal">
              Together.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#F7F5F2]/85 max-w-2xl mx-auto font-light leading-relaxed">
            The world is changing quickly. Navigating it requires more than technology—it requires capable people, deliberate frameworks, and genuine relationships.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenRegister}
              className="bg-[#C27339] hover:bg-[#a85e2b] text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] transition-all shadow-xl flex items-center gap-2 group"
            >
              <Calendar className="w-4 h-4" />
              <span>Find an Event</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('community')}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] transition-all flex items-center gap-2"
            >
              <Users className="w-4 h-4 text-[#2D4F3C]" />
              <span>Join the Community</span>
            </button>
          </div>

          <div className="pt-8 text-xs text-white/50 font-mono">
            Calgary • Edmonton • Toronto • Vancouver • Global Community
          </div>

        </div>
      </section>

    </div>
  );
};
