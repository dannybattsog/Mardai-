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
    onShowToast('Subscribed to Mardai Series', `You'll receive our monthly frameworks, mental models, and deck updates at ${newsletterEmail}`, 'success');
    setNewsletterEmail('');
  };

  return (
    <footer className="bg-[#1A1A1A] text-[#F7F5F2] pt-20 pb-12 border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Column (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <span 
                style={{ fontFamily: 'Georgia, serif' }}
                className="text-2xl font-black tracking-[-0.04em] text-[#F7F5F2]"
              >
                MARDAI
              </span>
              <span className="w-1.5 h-1.5 bg-[#2D4F3C] rounded-full"></span>
            </div>

            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#C27339]">
              Human Connection and Development Company
            </p>

            <p className="text-xs leading-relaxed text-[#F7F5F2]/75 max-w-sm">
              Helping people learn continuously, grow intentionally, and connect deeply through practical thinking tools, mental model card decks, structured experiences, and high-trust community.
            </p>

            <div className="space-y-1.5 text-xs text-[#F7F5F2]/60 pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C27339] shrink-0" />
                <span>Calgary & Alberta Foothills (Headquarters)</span>
              </div>
              <div className="flex items-center gap-2 pl-6 text-[#F7F5F2]/50">
                <Globe className="w-3.5 h-3.5 text-[#2D4F3C] shrink-0" />
                <span>Toronto • Vancouver • Global Online</span>
              </div>
            </div>

            {/* Master Brand Philosophy */}
            <div className="p-4 bg-white/5 border border-white/10 text-xs text-[#F7F5F2]/80 italic leading-relaxed font-editorial">
              “Human development should not be left to chance. It requires honesty about reality, useful frameworks, small practical actions, and human connection.”
            </div>
          </div>

          {/* The Offerings Column */}
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.25em] font-black text-white">
              Offerings & Programs
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button 
                  onClick={() => onNavigate('series')}
                  className="text-[#F7F5F2]/70 hover:text-white transition-colors text-left flex items-center gap-1.5"
                >
                  <span className="text-[#D4AF37] font-mono text-[10px]">01</span>
                  <span>Mardai Series (500 Models)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('events')}
                  className="text-[#F7F5F2]/70 hover:text-white transition-colors text-left flex items-center gap-1.5"
                >
                  <span className="text-[#C27339] font-mono text-[10px]">02</span>
                  <span>Mardai Events (Canada)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('breakthrough')}
                  className="text-[#F7F5F2]/70 hover:text-white transition-colors text-left flex items-center gap-1.5"
                >
                  <span className="text-[#2D4F3C] font-mono text-[10px]">03</span>
                  <span>Mardai Breakthrough</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('basecamp')}
                  className="text-[#F7F5F2]/70 hover:text-white transition-colors text-left flex items-center gap-1.5"
                >
                  <span className="text-[#C27339] font-mono text-[10px]">04</span>
                  <span>Mardai Basecamp (2 Days)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('workshops')}
                  className="text-[#F7F5F2]/70 hover:text-white transition-colors text-left flex items-center gap-1.5"
                >
                  <span className="text-[#2D4F3C] font-mono text-[10px]">05</span>
                  <span>Mardai Workshops (Orgs)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('community')}
                  className="text-[#F7F5F2]/70 hover:text-white transition-colors text-left flex items-center gap-1.5"
                >
                  <span className="text-[#C27339] font-mono text-[10px]">06</span>
                  <span>Mardai Community</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation & Resources */}
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.25em] font-black text-white">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button 
                  onClick={() => onNavigate('about')}
                  className="text-[#F7F5F2]/70 hover:text-white transition-colors"
                >
                  About Mardai & Founder
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('insights')}
                  className="text-[#F7F5F2]/70 hover:text-white transition-colors"
                >
                  Mardai Insights
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="text-[#F7F5F2]/70 hover:text-white transition-colors"
                >
                  Contact & Partnerships
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.25em] font-black text-white">
              Mardai Series & Frameworks
            </h4>
            <p className="text-xs text-[#F7F5F2]/70 leading-relaxed">
              Bi-weekly practical frameworks, mental models, decision systems, and priority notifications for card deck releases.
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
                <span>Subscribe Free</span>
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
            <span>© {new Date().getFullYear()} MARDAI Inc. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-[#D4AF37]">Learn continuously • Grow intentionally • Connect deeply</span>
          </div>

          <div className="flex items-center gap-6">
            <button 
              onClick={() => onShowToast('Privacy Policy', 'Mardai respects participant confidentiality and personal data integrity.')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => onShowToast('Terms of Engagement', 'Standard educational, development, and retreat engagement terms.')}
              className="hover:text-white transition-colors"
            >
              Terms of Engagement
            </button>
            <button 
              onClick={() => onShowToast('Accessibility Statement', 'Mardai is committed to accessible, inclusive experiences.')}
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
