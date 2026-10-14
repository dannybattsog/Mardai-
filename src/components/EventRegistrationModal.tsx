import React, { useState } from 'react';
import { MardaiEvent, EventRegistrationData } from '../types';
import { 
  X, 
  CheckCircle2, 
  MapPin, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Users, 
  Sparkles,
  BookOpen,
  Send,
  MessageSquare
} from 'lucide-react';

interface EventRegistrationModalProps {
  isOpen: boolean;
  event: MardaiEvent | null;
  mode: 'register' | 'waitlist';
  onClose: () => void;
  onShowToast: (title: string, message?: string, type?: 'success' | 'error' | 'info') => void;
}

export const EventRegistrationModal: React.FC<EventRegistrationModalProps> = ({
  isOpen,
  event,
  mode,
  onClose,
  onShowToast
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<EventRegistrationData>({
    eventId: event?.id || '',
    city: event?.city || 'Calgary',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    careerStage: 'Mid-Career / Experienced Professional',
    industry: 'Technology & Digital',
    currentProfessionalSituation: 'Employed, building my next chapter',
    mainReasonForAttending: 'To expand my network and understand Canadian career & business opportunities',
    priorityTopic: 'Career & Opportunity',
    referralSource: 'LinkedIn',
    linkedIn: '',
    consentUpdates: true
  });

  if (!isOpen || !event) return null;

  const isWaitlist = mode === 'waitlist' || event.status === 'coming_soon';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email) {
      onShowToast('Required Fields', 'Please provide your first name, last name, and email.', 'error');
      return;
    }
    setSubmitted(true);
    onShowToast(
      isWaitlist ? 'Added to Priority Waitlist' : 'Registration Confirmed',
      `Welcome to Mardai ${event.city}. Check ${formData.email} for your confirmation pack.`,
      'success'
    );
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1A1A1A]/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative bg-[#F7F5F2] w-full max-w-2xl border border-[#1A1A1A]/20 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#1A1A1A] text-[#F7F5F2] p-6 sm:p-8 flex items-start justify-between relative border-b border-white/10">
          <div className="space-y-1.5 max-w-lg">
            <div className="inline-flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold text-[#C27339] uppercase tracking-widest">
                {isWaitlist ? 'PRIORITY WAITLIST' : 'EVENT REGISTRATION'}
              </span>
              <span className="w-1 h-1 bg-white/40 rounded-full"></span>
              <span className="text-[10px] uppercase font-bold text-white/70 tracking-wider">
                {event.city}, Canada
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              {event.eventName}
            </h2>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#F7F5F2]/75 pt-1">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#2D4F3C]" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#2D4F3C]" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C27339]" />
                <span>{event.venue}</span>
              </div>
            </div>
          </div>

          <button 
            onClick={resetAndClose}
            className="text-white/60 hover:text-white p-2 hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {submitted ? (
            /* Post-Registration Flow (Section 24: "You're joining more than an event") */
            <div className="space-y-6 py-4">
              <div className="p-6 bg-white border border-[#2D4F3C]/30 space-y-4">
                <div className="w-12 h-12 bg-[#2D4F3C] text-white flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#2D4F3C] uppercase tracking-widest block mb-1">
                    {isWaitlist ? 'WAITLIST CONFIRMED' : 'RESERVATION RECEIVED'}
                  </span>
                  <h3 className="text-2xl font-black text-[#1A1A1A]">
                    You’re joining more than an event.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#1A1A1A]/80 mt-2 leading-relaxed">
                    Thank you, <span className="font-bold text-[#1A1A1A]">{formData.firstName}</span>. An onboarding brief and calendar invite have been dispatched to <span className="font-mono font-bold text-[#2D4F3C]">{formData.email}</span>.
                  </p>
                </div>
              </div>

              {/* Three Next Steps */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold text-[#1A1A1A] uppercase tracking-wider">
                  Recommended next steps before the event:
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 bg-white border border-[#1A1A1A]/10 space-y-1.5">
                    <div className="w-6 h-6 bg-[#2D4F3C]/10 text-[#2D4F3C] flex items-center justify-center text-xs font-bold font-mono">
                      01
                    </div>
                    <h5 className="text-xs font-bold text-[#1A1A1A]">Join Local Community</h5>
                    <p className="text-[11px] text-[#1A1A1A]/70 leading-normal">
                      Connect with Mardai {event.city} chapter members and introduce your background.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-[#1A1A1A]/10 space-y-1.5">
                    <div className="w-6 h-6 bg-[#2D4F3C]/10 text-[#2D4F3C] flex items-center justify-center text-xs font-bold font-mono">
                      02
                    </div>
                    <h5 className="text-xs font-bold text-[#1A1A1A]">Pre-Event Toolkit</h5>
                    <p className="text-[11px] text-[#1A1A1A]/70 leading-normal">
                      Receive the Mardai Development Diagnostic & 5-Dimension assessment questions.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-[#1A1A1A]/10 space-y-1.5">
                    <div className="w-6 h-6 bg-[#2D4F3C]/10 text-[#2D4F3C] flex items-center justify-center text-xs font-bold font-mono">
                      03
                    </div>
                    <h5 className="text-xs font-bold text-[#1A1A1A]">Table Introductions</h5>
                    <p className="text-[11px] text-[#1A1A1A]/70 leading-normal">
                      We curate small table groups based on complementary industries and career stages.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#F7F5F2] border border-[#1A1A1A]/10 text-[11px] text-[#1A1A1A]/70 leading-relaxed">
                <span className="font-bold text-[#1A1A1A]">Privacy Commitment:</span> Mardai never sells or publicly publishes attendee personal information. Data is used exclusively for event facilitation and curated peer introductions.
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="px-6 py-3 bg-[#1A1A1A] hover:bg-[#2D4F3C] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Close & Return to Mardai
                </button>
              </div>
            </div>
          ) : (
            /* Registration Form */
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="p-3.5 bg-white border border-[#1A1A1A]/10 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#C27339] font-bold block">Event Access</span>
                  <span className="font-bold text-[#1A1A1A]">
                    {isWaitlist ? 'Waitlist (Priority Access)' : `Confirmed Seat • ${event.ticketPrice || '$189 CAD'}`}
                  </span>
                </div>
                {event.seatsRemaining && (
                  <span className="text-[10px] font-mono text-[#2D4F3C] bg-[#2D4F3C]/10 px-2 py-1 font-bold">
                    {event.seatsRemaining} seats remaining
                  </span>
                )}
              </div>

              {/* Name fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#1A1A1A]/20 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#2D4F3C]"
                    placeholder="e.g. Danny"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#1A1A1A]/20 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#2D4F3C]"
                    placeholder="e.g. Battsog"
                  />
                </div>
              </div>

              {/* Contact info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#1A1A1A]/20 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#2D4F3C]"
                    placeholder="name@organization.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#1A1A1A]/20 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#2D4F3C]"
                    placeholder="+1 (403) 000-0000"
                  />
                </div>
              </div>

              {/* Career Stage & Industry */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                    Career Stage
                  </label>
                  <select
                    value={formData.careerStage}
                    onChange={(e) => setFormData({ ...formData, careerStage: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#1A1A1A]/20 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#2D4F3C]"
                  >
                    <option>Internationally Experienced Professional</option>
                    <option>Mid-Career / Experienced Professional</option>
                    <option>Senior / Director / Leadership</option>
                    <option>Career Transition / Reinventing</option>
                    <option>Entrepreneur / Founder / Small Business</option>
                    <option>Recent Graduate / Emerging Professional</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                    Industry / Sector
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#1A1A1A]/20 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#2D4F3C]"
                  >
                    <option>Technology & Software</option>
                    <option>Energy, CleanTech & Engineering</option>
                    <option>Finance, Banking & Accounting</option>
                    <option>Healthcare & Life Sciences</option>
                    <option>Business Operations & HR</option>
                    <option>Consulting & Professional Services</option>
                    <option>Trades, Construction & Project Management</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              {/* Current Situation & Primary Reason */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                    Current Professional Situation
                  </label>
                  <input
                    type="text"
                    value={formData.currentProfessionalSituation}
                    onChange={(e) => setFormData({ ...formData, currentProfessionalSituation: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#1A1A1A]/20 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#2D4F3C]"
                    placeholder="e.g. Working as senior analyst; exploring leadership or business ownership"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                      Which Topic Matters Most To You?
                    </label>
                    <select
                      value={formData.priorityTopic}
                      onChange={(e) => setFormData({ ...formData, priorityTopic: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#1A1A1A]/20 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#2D4F3C]"
                    >
                      <option>Pillar 1: Thrive in Canada & Social Capital</option>
                      <option>Pillar 2: Understand What's Next (AI & Work)</option>
                      <option>Pillar 3: Money, Tax & Business Fundamentals</option>
                      <option>Pillar 4: Career Strategy & Advancement</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                      LinkedIn Profile URL (Optional)
                    </label>
                    <input
                      type="url"
                      value={formData.linkedIn}
                      onChange={(e) => setFormData({ ...formData, linkedIn: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#1A1A1A]/20 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#2D4F3C]"
                      placeholder="https://linkedin.com/in/yourname"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                    How did you hear about Mardai?
                  </label>
                  <select
                    value={formData.referralSource}
                    onChange={(e) => setFormData({ ...formData, referralSource: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#1A1A1A]/20 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#2D4F3C]"
                  >
                    <option>LinkedIn</option>
                    <option>Friend or Colleague Referral</option>
                    <option>Community Organization or Association</option>
                    <option>Instagram or Social Media</option>
                    <option>Search / Mardai Series & Newsletter</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              {/* Consent checkbox */}
              <div className="pt-2 border-t border-[#1A1A1A]/10">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.consentUpdates}
                    onChange={(e) => setFormData({ ...formData, consentUpdates: e.target.checked })}
                    className="mt-0.5 accent-[#2D4F3C]"
                  />
                  <span className="text-[11px] text-[#1A1A1A]/80 leading-relaxed">
                    I consent to receive event details, preparation exercises, and invitations to Mardai community gatherings. I understand I can unsubscribe anytime.
                  </span>
                </label>
              </div>

              {/* Submit CTA */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-[#1A1A1A] hover:bg-[#2D4F3C] text-white text-xs font-bold uppercase tracking-[0.15em] transition-all flex items-center justify-center gap-2 group"
                >
                  <span>{isWaitlist ? 'Join the Priority Waitlist' : 'Complete Event Registration'}</span>
                  <ArrowRight className="w-4 h-4 text-[#C27339] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
