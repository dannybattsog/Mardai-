import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  ArrowRight, 
  Linkedin, 
  Youtube, 
  Instagram, 
  Facebook,
  MapPin, 
  Check,
  Globe
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenBasecampReview: () => void;
  onShowToast: (title: string, message?: string, type?: 'success' | 'error' | 'info') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenBasecampReview,
  onShowToast
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      onShowToast('Invalid Email', 'Please enter a valid email address.', 'error');
      return;
    }
    onShowToast('Subscribed to Mardai Beyond', `You'll receive our monthly frameworks and insights at ${newsletterEmail}`, 'success');
    setNewsletterEmail('');
  };

  return (
    <footer className="bg-[#1A1A1A] text-[#F7F5F2] pt-20 pb-12 border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Column (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-black tracking-[-0.04em] text-white">
                MARDAI
              </span>
              <span className="w-1.5 h-1.5 bg-[#2D4F3C] rounded-full"></span>
            </div>

            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#C27339]">
              Progress by design.
            </p>

            <p className="text-xs leading-relaxed text-[#F7F5F2]/70 max-w-sm">
              Mardai helps individuals, professionals, teams, and organizations move forward with greater clarity, capability, confidence, and connection.
            </p>

            <div className="space-y-1.5 text-xs text-[#F7F5F2]/60 pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C27339] shrink-0" />
                <span>Calgary AB, Toronto ON, Vancouver BC</span>
              </div>
              <div className="flex items-center gap-2 pl-6 text-[#F7F5F2]/50">
                <Globe className="w-3.5 h-3.5 text-[#2D4F3C] shrink-0" />
                <span>Ulaanbaatar, Mongolia (International)</span>
              </div>
            </div>

            {/* Master Brand Promise */}
            <div className="p-4 bg-white/5 border border-white/10 text-xs text-[#F7F5F2]/80 italic leading-relaxed font-editorial">
              “Progress does not happen by accident. It happens when you intentionally design your direction, your capability, and your relationships.”
            </div>
          </div>

          {/* Offerings Column */}
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.25em] font-black text-white">
              Offerings
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button 
                  onClick={() => onNavigate('beyond')}
                  className="text-[#F7F5F2]/70 hover:text-white transition-colors text-left"
                >
                  Mardai Beyond
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('breakthrough')}
                  className="text-[#F7F5F2]/70 hover:text-white transition-colors text-left"
                >
                  Mardai Breakthrough
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('basecamp')}
                  className="text-[#F7F5F2]/70 hover:text-white transition-colors text-left"
                >
                  Mardai Basecamp
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('workshops')}
                  className="text-[#F7F5F2]/70 hover:text-white transition-colors text-left"
                >
                  Mardai Workshops
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('community')}
                  className="text-[#F7F5F2]/70 hover:text-white transition-colors text-left"
                >
                  Mardai Community
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation & Resources */}
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.25em] font-black text-white">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button 
                  onClick={() => onNavigate('about')}
                  className="text-[#F7F5F2]/70 hover:text-white transition-colors text-left"
                >
                  About & Philosophy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('insights')}
                  className="text-[#F7F5F2]/70 hover:text-white transition-colors text-left"
                >
                  Insights & Frameworks
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenBasecampReview}
                  className="text-[#F7F5F2]/70 hover:text-white transition-colors text-left flex items-center gap-1 font-bold"
                >
                  <span>Your Breakthrough Review</span>
                  <span className="text-[9px] px-1.5 py-0.5 bg-[#2D4F3C] text-white">Free</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="text-[#F7F5F2]/70 hover:text-white transition-colors text-left"
                >
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.25em] font-black text-white">
              Mardai Beyond Newsletter
            </h4>
            <p className="text-xs text-[#F7F5F2]/70 leading-relaxed">
              Bi-weekly practical frameworks on systems thinking, career architecture, leadership, and responsible AI.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="name@organization.com"
                className="w-full px-3.5 py-2.5 bg-white/5 border border-white/15 text-xs text-white placeholder-[#F7F5F2]/40 focus:outline-none focus:border-[#2D4F3C]"
                required
              />
              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-[#2D4F3C] hover:bg-[#3C6D58] text-white text-xs font-bold uppercase tracking-[0.15em] transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-2.5">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 bg-white/5 border border-white/10 flex items-center justify-center text-[#F7F5F2]/70 hover:text-white hover:border-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 bg-white/5 border border-white/10 flex items-center justify-center text-[#F7F5F2]/70 hover:text-white hover:border-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 bg-white/5 border border-white/10 flex items-center justify-center text-[#F7F5F2]/70 hover:text-white hover:border-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 bg-white/5 border border-white/10 flex items-center justify-center text-[#F7F5F2]/70 hover:text-white hover:border-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#F7F5F2]/50">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>© {new Date().getFullYear()} MARDAI. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span>Beyond | Breakthrough | Basecamp | Workshops | Community</span>
          </div>

          <div className="flex items-center gap-6">
            <button 
              onClick={() => onShowToast('Privacy Policy', 'Mardai respects participant confidentiality and personal data integrity.')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => onShowToast('Terms of Engagement', 'Standard educational, advisory, and retreat engagement terms.')}
              className="hover:text-white transition-colors"
            >
              Terms of Engagement
            </button>
            <button 
              onClick={() => onShowToast('Accessibility Statement', 'Mardai is committed to accessible, inclusive digital experiences and physical venues.')}
              className="hover:text-white transition-colors"
            >
              Accessibility
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
