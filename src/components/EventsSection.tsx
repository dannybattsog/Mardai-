import React, { useState } from 'react';
import { MardaiEvent, PageId } from '../types';
import { MARDAI_EVENTS } from '../data/eventsData';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Users, 
  CheckCircle2, 
  Sparkles,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

interface EventsSectionProps {
  onNavigate: (page: PageId) => void;
  onSelectEvent: (event: MardaiEvent, mode: 'register' | 'waitlist') => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({
  onNavigate,
  onSelectEvent
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');

  const filterOptions = [
    { id: 'ALL', label: 'All Cities' },
    { id: 'Calgary', label: 'Calgary' },
    { id: 'Edmonton', label: 'Edmonton' },
    { id: 'Toronto', label: 'Toronto' },
    { id: 'Vancouver', label: 'Vancouver' }
  ];

  const filteredEvents = selectedFilter === 'ALL'
    ? MARDAI_EVENTS
    : MARDAI_EVENTS.filter(e => e.city.toLowerCase() === selectedFilter.toLowerCase());

  return (
    <section id="upcoming-events" className="py-24 md:py-32 bg-[#F7F5F2] border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] font-bold text-[#2D4F3C]">
                ONE-DAY IMMERSIVE GATHERINGS
              </span>
              <span className="w-1 h-1 bg-[#C27339] rounded-full"></span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[#1A1A1A]">
              Mardai Events
            </h2>
            
            <p className="text-sm sm:text-base text-[#1A1A1A]/75 mt-2">
              A full day to learn, connect, and build what comes next.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('events')}
              className="text-xs font-bold uppercase tracking-wider text-[#2D4F3C] hover:text-[#1A1A1A] flex items-center gap-1.5 transition-colors group"
            >
              <span>View Full Event Concept</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C27339] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* City Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#1A1A1A]/10">
          {filterOptions.map(option => (
            <button
              key={option.id}
              onClick={() => setSelectedFilter(option.id)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all border ${
                selectedFilter === option.id
                  ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                  : 'bg-white text-[#1A1A1A]/70 border-[#1A1A1A]/15 hover:border-[#1A1A1A]'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredEvents.map(event => {
            const isAvailable = event.status === 'available';
            const isComingSoon = event.status === 'coming_soon';

            return (
              <div 
                key={event.id}
                className="bg-white border border-[#1A1A1A]/15 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-md transition-shadow group"
              >
                <div>
                  {/* Card Visual Image (Unique, non-repeating for each city) */}
                  <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-zinc-900">
                    <img 
                      src={event.image} 
                      alt={`Mardai in ${event.city}`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-2.5 py-1 bg-[#1A1A1A]/90 text-white font-mono text-[10px] font-bold uppercase tracking-wider border border-white/20">
                        {event.city}
                      </span>
                      {isAvailable ? (
                        <span className="px-2.5 py-1 bg-[#2D4F3C] text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                          Registration Open
                        </span>
                      ) : (
                        <span className="px-2.5 py-1 bg-[#C27339] text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                          Coming Soon
                        </span>
                      )}
                    </div>

                    {/* Price & Seats remaining */}
                    {isAvailable && event.ticketPrice && (
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                        <span className="text-xl font-black">{event.ticketPrice}</span>
                        {event.seatsRemaining && (
                          <span className="text-[11px] font-mono bg-black/60 px-2.5 py-1 backdrop-blur-xs">
                            {event.seatsRemaining} seats remaining
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-8 space-y-4">
                    <div>
                      <h3 className="text-2xl font-black text-[#1A1A1A] tracking-tight">
                        {event.eventName}
                      </h3>
                      <p className="text-xs text-[#1A1A1A]/70 mt-1 font-editorial italic text-base">
                        “{event.subtitle}”
                      </p>
                    </div>

                    {/* Logistics metadata */}
                    <div className="space-y-2 py-3 border-y border-[#1A1A1A]/10 text-xs text-[#1A1A1A]/80">
                      <div className="flex items-start gap-2.5">
                        <Calendar className="w-4 h-4 text-[#2D4F3C] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-[#1A1A1A]">{event.date}</span>
                          <span className="text-[#1A1A1A]/60 block sm:inline sm:ml-2">({event.time})</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <MapPin className="w-4 h-4 text-[#C27339] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-[#1A1A1A]">{event.venue}</span>
                          <span className="text-[#1A1A1A]/60 block text-[11px]">{event.address}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#1A1A1A]/80 leading-relaxed">
                      {event.description}
                    </p>

                    {/* Four Pillars Tagline */}
                    <div className="pt-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#1A1A1A]/60 font-bold block mb-1.5">
                        Four Program Pillars:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {event.pillarsCovered.map((pillar, idx) => (
                          <span 
                            key={idx}
                            className="px-2 py-0.5 bg-[#F7F5F2] border border-[#1A1A1A]/10 text-[10px] font-medium text-[#1A1A1A]"
                          >
                            {pillar}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="p-6 sm:p-8 pt-0">
                  {isAvailable ? (
                    <button
                      onClick={() => onSelectEvent(event, 'register')}
                      className="w-full py-3.5 px-6 bg-[#1A1A1A] hover:bg-[#2D4F3C] text-white text-xs font-bold uppercase tracking-[0.16em] transition-all flex items-center justify-center gap-2 group/btn"
                    >
                      <span>Register for {event.city}</span>
                      <ArrowRight className="w-4 h-4 text-[#C27339] group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  ) : (
                    <button
                      onClick={() => onSelectEvent(event, 'waitlist')}
                      className="w-full py-3.5 px-6 bg-white hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-white border border-[#1A1A1A] text-xs font-bold uppercase tracking-[0.16em] transition-all flex items-center justify-center gap-2 group/btn"
                    >
                      <span>Join the Waitlist</span>
                      <ChevronRight className="w-4 h-4 text-[#C27339] group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* City expansion note */}
        <div className="mt-12 p-6 bg-white border border-[#1A1A1A]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="space-y-1 text-center sm:text-left">
            <span className="font-bold text-[#1A1A1A]">Don't see your city listed yet?</span>
            <p className="text-[#1A1A1A]/70">
              Mardai is actively evaluating corporate hubs and municipal chapters across Canada.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-4 py-2 bg-[#F7F5F2] hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] border border-[#1A1A1A]/20 text-xs font-bold uppercase tracking-wider transition-colors shrink-0"
          >
            Request Mardai in Your City
          </button>
        </div>

      </div>
    </section>
  );
};
