import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Copy, Check, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

interface ProgramContactFormProps {
  programTitle: string;
  subtitle?: string;
  defaultTopic?: string;
  topicOptions?: { label: string; value: string }[];
  theme?: 'light' | 'dark';
  onShowToast: (title: string, message?: string, type?: 'success' | 'error' | 'info') => void;
}

export const ProgramContactForm: React.FC<ProgramContactFormProps> = ({
  programTitle,
  subtitle = "Have questions or want to discuss this program? Reach out to our advisory team directly.",
  defaultTopic = "General Inquiry",
  topicOptions,
  theme = 'light',
  onShowToast
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [topic, setTopic] = useState(defaultTopic);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const isDark = theme === 'dark';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('connect@mardai.ca');
    setCopiedEmail(true);
    onShowToast('Email Copied', 'connect@mardai.ca copied to clipboard', 'info');
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      onShowToast('Invalid Email', 'Please provide a valid email address.', 'error');
      return;
    }
    if (!message.trim()) {
      onShowToast('Message Required', 'Please enter your message or question.', 'error');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      onShowToast(
        'Inquiry Sent',
        `Your message regarding ${programTitle} has been routed to connect@mardai.ca. An advisor will respond within 24 hours.`,
        'success'
      );
    }, 500);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setOrganization('');
    setMessage('');
    setIsSent(false);
  };

  return (
    <div className={`border ${isDark ? 'bg-[#0A1A2A] border-white/15 text-white' : 'bg-white border-[#1A1A1A]/15 text-[#1A1A1A]'} p-6 sm:p-10 transition-colors shadow-sm`}>
      
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-current/10">
        <div>
          <div className="inline-flex items-center gap-2 mb-2">
            <span className={`text-[10px] uppercase font-mono font-bold tracking-[0.22em] ${isDark ? 'text-[#D4AF37]' : 'text-[#2D4F3C]'}`}>
              Direct Contact • {programTitle}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#2D4F3C] animate-pulse"></span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
            Contact Us via <span className="underline decoration-[#C27339] decoration-2 underline-offset-4">connect@mardai.ca</span>
          </h3>
          <p className={`text-xs mt-1.5 max-w-xl ${isDark ? 'text-white/70' : 'text-[#1A1A1A]/70'} leading-relaxed`}>
            {subtitle}
          </p>
        </div>

        {/* Quick Email Pill / Direct Link */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <a
            href={`mailto:connect@mardai.ca?subject=${encodeURIComponent(`[${programTitle}] Customer Inquiry`)}`}
            className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono font-medium border transition-colors ${
              isDark 
                ? 'bg-white/10 hover:bg-white/20 border-white/20 text-[#D4AF37]' 
                : 'bg-[#F7F5F2] hover:bg-[#EDE9E3] border-[#1A1A1A]/15 text-[#2D4F3C]'
            }`}
            title="Open in your default email client"
          >
            <Mail className="w-3.5 h-3.5 shrink-0" />
            <span>connect@mardai.ca</span>
          </a>
          <button
            type="button"
            onClick={handleCopyEmail}
            className={`p-2 border transition-colors ${
              isDark 
                ? 'bg-white/5 hover:bg-white/15 border-white/15 text-white/70 hover:text-white' 
                : 'bg-[#F7F5F2] hover:bg-[#EDE9E3] border-[#1A1A1A]/15 text-[#1A1A1A]/70 hover:text-[#1A1A1A]'
            }`}
            title="Copy email to clipboard"
            aria-label="Copy email"
          >
            {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Main Body */}
      {isSent ? (
        <div className={`py-12 px-6 text-center space-y-4 my-4 border ${isDark ? 'bg-white/5 border-white/15' : 'bg-[#F7F5F2] border-[#2D4F3C]/20'}`}>
          <CheckCircle2 className="w-12 h-12 text-[#2D4F3C] mx-auto animate-bounce" />
          <h4 className="text-2xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>
            Inquiry Dispatched to connect@mardai.ca
          </h4>
          <p className={`text-xs max-w-lg mx-auto leading-relaxed ${isDark ? 'text-white/80' : 'text-[#1A1A1A]/80'}`}>
            Thank you, <strong>{name || 'valued contact'}</strong>. Your message regarding <strong>{programTitle}</strong> has been forwarded to our team at <strong>connect@mardai.ca</strong>. A senior advisor will review your notes and respond to <strong>{email}</strong> within 24 hours.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleReset}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors border ${
                isDark ? 'bg-white/10 hover:bg-white/20 border-white/20 text-white' : 'bg-white hover:bg-neutral-100 border-[#1A1A1A]/20 text-[#1A1A1A]'
              }`}
            >
              Send Another Note
            </button>
            <a
              href={`mailto:connect@mardai.ca?subject=${encodeURIComponent(`[${programTitle}] Follow-up: ${name}`)}`}
              className="px-5 py-2.5 bg-[#2D4F3C] hover:bg-[#3C6D58] text-white text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email Us Directly</span>
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {/* Full Name */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider mb-1.5 opacity-80">
                Your Name <span className="text-[#C27339]">*</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Jordan Vance"
                className={`w-full px-3.5 py-2.5 text-xs border focus:outline-none focus:border-[#2D4F3C] transition-colors ${
                  isDark 
                    ? 'bg-white/10 border-white/20 text-white placeholder-white/40' 
                    : 'bg-[#F7F5F2] border-[#1A1A1A]/20 text-[#1A1A1A] placeholder-[#1A1A1A]/40'
                }`}
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider mb-1.5 opacity-80">
                Email Address <span className="text-[#C27339]">*</span>
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@organization.com"
                className={`w-full px-3.5 py-2.5 text-xs border focus:outline-none focus:border-[#2D4F3C] transition-colors ${
                  isDark 
                    ? 'bg-white/10 border-white/20 text-white placeholder-white/40' 
                    : 'bg-[#F7F5F2] border-[#1A1A1A]/20 text-[#1A1A1A] placeholder-[#1A1A1A]/40'
                }`}
              />
            </div>

            {/* Organization / Role */}
            <div className="sm:col-span-2 lg:col-span-1">
              <label className="block text-[11px] font-bold uppercase tracking-wider mb-1.5 opacity-80">
                Role or Organization <span className="opacity-50 text-[10px]">(Optional)</span>
              </label>
              <input
                type="text"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                placeholder="e.g. Founder, Director, or Independent"
                className={`w-full px-3.5 py-2.5 text-xs border focus:outline-none focus:border-[#2D4F3C] transition-colors ${
                  isDark 
                    ? 'bg-white/10 border-white/20 text-white placeholder-white/40' 
                    : 'bg-[#F7F5F2] border-[#1A1A1A]/20 text-[#1A1A1A] placeholder-[#1A1A1A]/40'
                }`}
              />
            </div>
          </div>

          {/* Topic Selector */}
          {topicOptions && topicOptions.length > 0 && (
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider mb-1.5 opacity-80">
                Specific Area of Inquiry
              </label>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className={`w-full px-3.5 py-2.5 text-xs border focus:outline-none focus:border-[#2D4F3C] transition-colors ${
                  isDark 
                    ? 'bg-[#0F2338] border-white/20 text-white' 
                    : 'bg-[#F7F5F2] border-[#1A1A1A]/20 text-[#1A1A1A]'
                }`}
              >
                {topicOptions.map((opt, idx) => (
                  <option key={idx} value={opt.value} className={isDark ? 'bg-[#0F2338] text-white' : 'bg-white text-black'}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Message Textarea */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider mb-1.5 opacity-80">
              Message or Specific Questions <span className="text-[#C27339]">*</span>
            </label>
            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={`Share details regarding your interest in ${programTitle}, timing requirements, team considerations, or specific questions for the Mardai team...`}
              className={`w-full px-3.5 py-2.5 text-xs border focus:outline-none focus:border-[#2D4F3C] transition-colors ${
                isDark 
                  ? 'bg-white/10 border-white/20 text-white placeholder-white/40' 
                  : 'bg-[#F7F5F2] border-[#1A1A1A]/20 text-[#1A1A1A] placeholder-[#1A1A1A]/40'
              }`}
            />
          </div>

          {/* Footer of Form: Guarantees & Submit Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-[11px] opacity-70">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C27339]" />
                24-Hour Response Window
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2D4F3C]" />
                Confidential & Direct
              </span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full sm:w-auto px-8 py-3.5 font-bold uppercase tracking-[0.16em] text-xs transition-all flex items-center justify-center gap-2 ${
                isDark
                  ? 'bg-[#D4AF37] hover:bg-[#E5C158] text-[#0A1A2A]'
                  : 'bg-[#17375E] hover:bg-[#204a7c] text-white'
              }`}
            >
              {isSubmitting ? (
                <span>Routing to connect@mardai.ca...</span>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Send to connect@mardai.ca</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 opacity-70" />
                </>
              )}
            </button>
          </div>
        </form>
      )}

    </div>
  );
};
