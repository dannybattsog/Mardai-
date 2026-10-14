import React, { useState } from 'react';
import { PageId, MardaiEvent } from '../types';
import { MARDAI_EVENTS, EVENT_FOUR_PILLARS, EVENT_DAY_RHYTHM } from '../data/eventsData';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Coffee, 
  Briefcase, 
  TrendingUp, 
  Award, 
  Handshake, 
  MessageSquare
} from 'lucide-react';

interface EventsViewProps {
  onNavigate: (page: PageId) => void;
  onSelectEvent: (event: MardaiEvent, mode: 'register' | 'waitlist') => void;
  onOpenBasecampReview: () => void;
}

export const EventsView: React.FC<EventsViewProps> = ({
  onNavigate,
  onSelectEvent,
  onOpenBasecampReview
}) => {
  const [selectedCity, setSelectedCity] = useState<string>('ALL');

  const filteredEvents = selectedCity === 'ALL'
    ? MARDAI_EVENTS
    : MARDAI_EVENTS.filter(e => e.city.toLowerCase() === selectedCity.toLowerCase());

  const audienceGroups = [
    'Internationally experienced professionals translating capabilities into Canadian value',
    'Ambitious newcomers establishing careers and professional foundations',
    'Established professionals seeking next-level leadership or sector transition',
    'Aspiring entrepreneurs and small business owners building in Canada',
    'Professionals seeking high-trust community and meaningful accountability',
    'Individuals preparing for technological change, AI adoption, and evolving industries'
  ];

  return (
    <div className="pt-24 pb-20 bg-[#F7F5F2]">
      
      {/* Hero Banner with Inspiration / Motivation background */}
      <section className="relative py-20 md:py-28 bg-[#1A1A1A] text-[#F7F5F2] border-b border-white/10 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-25"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1800&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/95 via-[#1A1A1A]/90 to-[#1A1A1A]/85 z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] font-bold text-[#C27339] bg-white/5 px-3 py-1 border border-white/10">
                FLAGSHIP FULL-DAY EXPERIENCES
              </span>
              <span className="w-1.5 h-1.5 bg-[#2D4F3C] rounded-full"></span>
              <span className="text-xs text-[#F7F5F2]/70 font-mono">Calgary • Edmonton • Toronto • Vancouver</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[0.95]">
              Mardai: From Surviving<br />
              <span className="text-[#C27339] font-editorial italic font-normal">
                to Thriving.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#F7F5F2]/85 leading-relaxed font-light">
              A one-day human development, career, business, and connection experience for people building their future in Canada.
            </p>

            <div className="p-5 bg-white/5 border border-white/10 text-xs sm:text-sm text-[#F7F5F2]/80 font-editorial italic leading-relaxed">
              “Spend one meaningful day learning how Canadian systems work, understanding where opportunities are heading, strengthening financial and career literacy, meeting professionals who navigated similar journeys, and building relationships for what comes next.”
            </div>
          </div>
        </div>
      </section>

      {/* City Events Grid */}
      <section className="py-20 bg-white border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#2D4F3C] font-bold block mb-2">
                SCHEDULED CITIES
              </span>
              <h2 className="text-3xl font-black text-[#1A1A1A]">
                Select Your City Gathering
              </h2>
            </div>

            {/* Filter */}
            <div className="flex flex-wrap items-center gap-2">
              {['ALL', 'Calgary', 'Edmonton', 'Toronto', 'Vancouver'].map(city => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-all border ${
                    selectedCity === city
                      ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                      : 'bg-[#F7F5F2] text-[#1A1A1A]/70 border-[#1A1A1A]/15 hover:border-[#1A1A1A]'
                  }`}
                >
                  {city === 'ALL' ? 'All Gatherings' : city}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredEvents.map(event => (
              <div 
                key={event.id}
                className="bg-[#F7F5F2] border border-[#1A1A1A]/15 overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden bg-zinc-900">
                    <img 
                      src={event.image} 
                      alt={`Mardai ${event.city}`} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-2.5 py-1 bg-black/90 text-white font-mono text-[10px] font-bold uppercase">
                        {event.city}
                      </span>
                      {event.status === 'available' ? (
                        <span className="px-2.5 py-1 bg-[#2D4F3C] text-white font-mono text-[10px] font-bold uppercase">
                          Confirmed • Register Now
                        </span>
                      ) : (
                        <span className="px-2.5 py-1 bg-[#C27339] text-white font-mono text-[10px] font-bold uppercase">
                          Coming Soon
                        </span>
                      )}
                    </div>

                    {event.status === 'available' && event.ticketPrice && (
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                        <span className="text-xl font-black">{event.ticketPrice}</span>
                        {event.seatsRemaining && (
                          <span className="text-[11px] font-mono bg-black/70 px-2 py-0.5">
                            {event.seatsRemaining} seats remaining
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="p-6 sm:p-8 space-y-4">
                    <div>
                      <h3 className="text-2xl font-black text-[#1A1A1A]">
                        {event.eventName}
                      </h3>
                      <p className="text-xs text-[#1A1A1A]/70 mt-1 font-editorial italic">
                        {event.subtitle}
                      </p>
                    </div>

                    <div className="space-y-2 py-3 border-y border-[#1A1A1A]/10 text-xs text-[#1A1A1A]/80">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#2D4F3C]" />
                        <span className="font-bold">{event.date} • {event.time}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-[#C27339] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold">{event.venue}</span>
                          <span className="text-[#1A1A1A]/60 block text-[11px]">{event.address}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#1A1A1A]/80 leading-relaxed">
                      {event.description}
                    </p>

                    {/* Speakers list if available */}
                    {event.speakers && event.speakers.length > 0 && (
                      <div className="pt-2 border-t border-[#1A1A1A]/10">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#1A1A1A]/60 font-bold block mb-2">
                          Featured Faculty & Facilitators:
                        </span>
                        <div className="space-y-2">
                          {event.speakers.map((spk, idx) => (
                            <div key={idx} className="flex items-center justify-between text-xs bg-white p-2.5 border border-[#1A1A1A]/10">
                              <div>
                                <span className="font-bold text-[#1A1A1A]">{spk.name}</span>
                                <span className="text-[11px] text-[#1A1A1A]/60 block">{spk.role}</span>
                              </div>
                              <span className="text-[9px] font-mono px-2 py-0.5 bg-[#F7F5F2] text-[#2D4F3C] font-bold uppercase">
                                {spk.category}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0">
                  {event.status === 'available' ? (
                    <button
                      onClick={() => onSelectEvent(event, 'register')}
                      className="w-full py-3.5 px-6 bg-[#1A1A1A] hover:bg-[#2D4F3C] text-white text-xs font-bold uppercase tracking-[0.16em] transition-colors flex items-center justify-center gap-2 group"
                    >
                      <span>Register for {event.city}</span>
                      <ArrowRight className="w-4 h-4 text-[#C27339] group-hover:translate-x-1 transition-transform" />
                    </button>
                  ) : (
                    <button
                      onClick={() => onSelectEvent(event, 'waitlist')}
                      className="w-full py-3.5 px-6 bg-white hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-white border border-[#1A1A1A] text-xs font-bold uppercase tracking-[0.16em] transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Join the Priority Waitlist</span>
                      <ArrowRight className="w-4 h-4 text-[#C27339]" />
                    </button>
                  )}
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Four Event Pillars & Schedule */}
      <section className="py-20 bg-[#F7F5F2] border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#2D4F3C] font-bold block mb-2">
              CURRICULUM ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A]">
              The Four Event Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EVENT_FOUR_PILLARS.map(p => (
              <div key={p.num} className="p-8 bg-white border border-[#1A1A1A]/10 space-y-4">
                <span className="text-xs font-mono font-bold text-[#C27339]">PILLAR {p.num}</span>
                <h3 className="text-xl font-black text-[#1A1A1A]">{p.title}</h3>
                <p className="text-xs text-[#1A1A1A]/70 font-editorial italic">“{p.subtitle}”</p>
                <ul className="space-y-2 pt-2 border-t border-[#1A1A1A]/10">
                  {p.subjects.map((s, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#1A1A1A]/80">
                      <span className="w-1.5 h-1.5 bg-[#2D4F3C] rounded-full shrink-0 mt-1.5"></span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who the events are for (Section 12 & 27: Positive capability narrative) */}
      <section className="py-20 bg-white border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#2D4F3C] font-bold block mb-2">
              PARTICIPANT PROFILE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A]">
              For People Building Their Next Chapter in Canada
            </h2>
            <p className="text-sm text-[#1A1A1A]/70 mt-2">
              We celebrate international experience rather than positioning participants through a deficit narrative.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {audienceGroups.map((text, i) => (
              <div key={i} className="p-6 bg-[#F7F5F2] border border-[#1A1A1A]/10 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2D4F3C] shrink-0 mt-0.5" />
                <p className="text-xs font-bold text-[#1A1A1A] leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Sponsors Section (Section 26) */}
      <section className="py-20 bg-[#F7F5F2] border-b border-[#1A1A1A]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#C27339] font-bold block">
            COLLABORATION & IMPACT
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A]">
            Partner with Mardai
          </h2>
          <p className="text-sm sm:text-base text-[#1A1A1A]/80 max-w-2xl mx-auto leading-relaxed">
            Connect your organization with ambitious professionals, entrepreneurs, and community builders who are actively investing in their future in Canada.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-[#1A1A1A] hover:bg-[#2D4F3C] text-white text-xs font-bold uppercase tracking-[0.16em] transition-colors"
            >
              Become a Partner
            </button>
          </div>
          <p className="text-[11px] text-[#1A1A1A]/60 font-mono">
            Supporting employers, financial institutions, educational partners, and professional associations.
          </p>
        </div>
      </section>

    </div>
  );
};
