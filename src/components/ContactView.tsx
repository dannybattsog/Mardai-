import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  Mail, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Calendar, 
  Building2, 
  Mountain, 
  Briefcase,
  Phone,
  ShieldCheck
} from 'lucide-react';

interface ContactViewProps {
  onNavigate: (page: PageId) => void;
  onShowToast: (title: string, message?: string, type?: 'success' | 'error' | 'info') => void;
}

export const ContactView: React.FC<ContactViewProps> = ({
  onNavigate,
  onShowToast
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('general');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      onShowToast('Invalid Email', 'Please provide a valid email address.', 'error');
      return;
    }
    setIsSent(true);
    onShowToast('Message Dispatched', `Thank you, ${name || 'friend'}. A Mardai advisor will reply to ${email} within 24 hours.`, 'success');
  };

  return (
    <div className="pt-24 pb-20 bg-[#F7F5F2]">
      
      {/* Header with Bold Typography */}
      <section className="py-16 md:py-24 bg-[#F7F5F2] border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C]">
                Get in Touch
              </span>
              <span className="w-1 h-1 bg-[#2D4F3C] rounded-full"></span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#1A1A1A] leading-[0.9] mb-6">
              Start the conversation.
            </h1>

            <p className="text-xl font-light text-[#1A1A1A]/90 leading-relaxed max-w-2xl">
              Whether you are an individual exploring Basecamp or Breakthrough, or an organizational leader seeking custom workshops, we welcome thoughtful inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Details */}
      <section className="py-20 bg-white border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Information */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C] block mb-2">
                  Headquarters
                </span>
                <h3 className="text-2xl font-bold text-[#1A1A1A]">
                  Calgary & Alberta, Canada
                </h3>
                <p className="mt-2 text-xs text-[#1A1A1A]/70 leading-relaxed">
                  In-person retreats hosted across the Canadian Rocky Mountain foothills (Kananaskis & Banff region). Corporate workshops delivered globally in person and via live interactive studios.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#1A1A1A]/10">
                <div className="flex items-center gap-3 text-xs text-[#1A1A1A]">
                  <div className="w-8 h-8 bg-[#F7F5F2] border border-[#1A1A1A]/10 flex items-center justify-center text-[#2D4F3C]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#1A1A1A]/50 block">Inquiries</span>
                    <span>connect@mardaigroup.com</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-[#1A1A1A]">
                  <div className="w-8 h-8 bg-[#F7F5F2] border border-[#1A1A1A]/10 flex items-center justify-center text-[#2D4F3C]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#1A1A1A]/50 block">Location</span>
                    <span>Calgary, Alberta • Canadian Rockies</span>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-[#F7F5F2] border border-[#1A1A1A]/10 space-y-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#C27339] block">
                  Quick Routing
                </span>
                <p className="text-xs text-[#1A1A1A]/80 leading-relaxed">
                  Looking to register for a specific cohort?
                </p>
                <div className="pt-2 flex flex-wrap gap-2">
                  <button
                    onClick={() => onNavigate('breakthrough')}
                    className="px-3 py-1.5 bg-white border border-[#1A1A1A]/15 text-[11px] font-bold text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors"
                  >
                    Breakthrough Sprint →
                  </button>
                  <button
                    onClick={() => onNavigate('basecamp')}
                    className="px-3 py-1.5 bg-white border border-[#1A1A1A]/15 text-[11px] font-bold text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors"
                  >
                    Basecamp Retreat →
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 bg-[#F7F5F2] p-8 sm:p-10 border border-[#1A1A1A]/15">
              {isSent ? (
                <div className="p-8 bg-white border border-[#2D4F3C]/40 text-center space-y-4">
                  <CheckCircle2 className="w-10 h-10 text-[#2D4F3C] mx-auto" />
                  <h4 className="text-2xl font-bold text-[#1A1A1A]">
                    Message Dispatched
                  </h4>
                  <p className="text-xs text-[#1A1A1A]/70 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to Mardai. A member of our executive advisory team will review your message and respond promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C] block mb-2">
                      Inquiry Form
                    </span>
                    <h3 className="text-2xl font-bold text-[#1A1A1A]">
                      Send Us a Message
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1A1A1A] mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 bg-white border border-[#1A1A1A]/20 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#2D4F3C]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1A1A1A] mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 bg-white border border-[#1A1A1A]/20 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#2D4F3C]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1A1A1A] mb-1">
                      Inquiry Topic
                    </label>
                    <select
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-[#1A1A1A]/20 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#2D4F3C]"
                    >
                      <option value="general">General Inquiries & Strategic Advisory</option>
                      <option value="breakthrough">Mardai Breakthrough (Career Acceleration)</option>
                      <option value="basecamp">Mardai Basecamp (2.5-Day Men's Retreat)</option>
                      <option value="workshops">Corporate Workshops & Team Transformation</option>
                      <option value="community">Mardai Community & Calgary Breakfasts</option>
                      <option value="speaking">Keynotes & Speaking Engagements</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1A1A1A] mb-1">
                      Your Message / Context
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share a brief overview of your current transition, team objectives, or specific questions..."
                      className="w-full px-4 py-3 bg-white border border-[#1A1A1A]/20 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#2D4F3C]"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="bg-[#1A1A1A] hover:bg-[#2D4F3C] text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
                    >
                      <span>Send Direct Message</span>
                      <ArrowRight className="w-4 h-4 text-[#C27339]" />
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
