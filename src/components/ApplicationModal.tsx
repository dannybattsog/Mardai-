import React, { useState } from 'react';
import { 
  X, 
  ArrowRight, 
  CheckCircle2, 
  Mountain, 
  Briefcase, 
  Building2, 
  ShieldCheck
} from 'lucide-react';

export type ApplicationType = 'breakthrough' | 'basecamp' | 'workshops' | 'general';

interface ApplicationModalProps {
  isOpen: boolean;
  programType?: ApplicationType;
  type?: ApplicationType;
  onClose: () => void;
  onShowToast: (title: string, message?: string, type?: 'success' | 'error' | 'info') => void;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  programType,
  type,
  onClose,
  onShowToast
}) => {
  const activeType = programType || type || 'general';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    experienceYears: '5-10',
    primaryGoal: '',
    preferredDate: '',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const getTitleAndDetails = () => {
    switch (activeType) {
      case 'breakthrough':
        return {
          title: 'Apply for Mardai Breakthrough',
          subtitle: '6-Week Structured Career Advancement Program',
          badge: 'Career Accelerator',
          icon: Briefcase,
          cta: 'Submit Breakthrough Application',
          prompt: 'What is your immediate career goal or transition challenge?'
        };
      case 'basecamp':
        return {
          title: 'Join the Next Mardai Basecamp',
          subtitle: '2.5-Day Men\'s Reflection & Leadership Experience (Calgary / Rockies)',
          badge: 'Executive Retreat',
          icon: Mountain,
          cta: 'Reserve Basecamp Consideration',
          prompt: 'What brings you to Basecamp and what do you hope to reset?'
        };
      case 'workshops':
        return {
          title: 'Book a Workshop Strategy Conversation',
          subtitle: 'Tailored B2B Training & Organizational Transformation',
          badge: 'Organizational Training',
          icon: Building2,
          cta: 'Request Strategy Call',
          prompt: 'What are your team\'s primary priorities or transformation needs?'
        };
      default:
        return {
          title: 'Connect with Mardai',
          subtitle: 'Start a conversation with our team',
          badge: 'Inquiry',
          icon: Briefcase,
          cta: 'Send Message',
          prompt: 'How can we support you?'
        };
    }
  };

  const info = getTitleAndDetails();
  const Icon = info.icon;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      onShowToast('Missing Fields', 'Please provide your name and email address.', 'error');
      return;
    }
    setIsSubmitted(true);
    onShowToast(
      'Application Received',
      `Thank you, ${formData.name}. Danny and the Mardai team will review your details and reach out within 24 hours.`,
      'success'
    );
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-[#F7F5F2] max-w-2xl w-full max-h-[92vh] overflow-y-auto border border-[#1A1A1A] shadow-2xl p-6 sm:p-8 relative">
        
        {/* Header */}
        <div className="flex items-start justify-between pb-6 border-b border-[#1A1A1A]/10 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#1A1A1A] text-white flex items-center justify-center shrink-0">
              <Icon className="w-4 h-4 text-[#C27339]" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] px-2 py-0.5 bg-[#2D4F3C] text-white inline-block mb-1">
                {info.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#1A1A1A] tracking-tight">
                {info.title}
              </h3>
              <p className="text-xs text-[#1A1A1A]/60 mt-0.5">
                {info.subtitle}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#1A1A1A]/60 hover:text-[#1A1A1A] hover:bg-[#1A1A1A]/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="py-6">
          {isSubmitted ? (
            <div className="p-8 bg-white border border-[#1A1A1A]/15 text-center space-y-4 shadow-sm animate-in zoom-in-95 duration-200">
              <div className="w-10 h-10 bg-[#F7F5F2] text-[#2D4F3C] flex items-center justify-center mx-auto border border-[#1A1A1A]/10">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-black text-[#1A1A1A]">
                Application Successfully Submitted
              </h4>
              <p className="text-xs text-[#1A1A1A]/70 max-w-md mx-auto leading-relaxed">
                We have received your submission. Because we maintain strict cohort size limits and tailored B2B engagements, a member of our leadership team will personally review your background and reach out to schedule an introductory alignment call.
              </p>
              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-[#1A1A1A] hover:bg-[#2D4F3C] text-white text-xs font-bold uppercase tracking-[0.15em]"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-[#1A1A1A] uppercase tracking-wider mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Michael Vance"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#1A1A1A]/20 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#2D4F3C]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black text-[#1A1A1A] uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#1A1A1A]/20 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#2D4F3C]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-[#1A1A1A] uppercase tracking-wider mb-1">
                    Current Role / Title
                  </label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    placeholder="e.g. Senior Director / Lead Engineer"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#1A1A1A]/20 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#2D4F3C]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black text-[#1A1A1A] uppercase tracking-wider mb-1">
                    Organization / Company
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Energy, Tech, Healthcare"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#1A1A1A]/20 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#2D4F3C]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black text-[#1A1A1A] uppercase tracking-wider mb-1">
                  {info.prompt} *
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.primaryGoal}
                  onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                  placeholder="Share a brief overview of your current situation and what outcome you are aiming for..."
                  className="w-full px-3.5 py-2.5 bg-white border border-[#1A1A1A]/20 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#2D4F3C]"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-[#1A1A1A] hover:bg-[#2D4F3C] text-white text-xs font-bold uppercase tracking-[0.15em] transition-colors flex items-center justify-center gap-2 group"
                >
                  <span>{info.cta}</span>
                  <ArrowRight className="w-4 h-4 text-[#C27339] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-[10px] font-bold text-[#1A1A1A]/60 uppercase tracking-wider pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2D4F3C]" /> Strict Confidentiality
                </span>
                <span>•</span>
                <span>Calgary, Alberta & Remote</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
