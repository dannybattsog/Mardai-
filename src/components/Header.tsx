import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { 
  Menu, 
  X, 
  ArrowRight,
  ClipboardCheck
} from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenBasecampReview: () => void;
  onOpenFindPath: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenBasecampReview,
  onOpenFindPath
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'beyond', label: 'Beyond' },
    { id: 'breakthrough', label: 'Breakthrough' },
    { id: 'basecamp', label: 'Basecamp' },
    { id: 'workshops', label: 'Workshops' },
    { id: 'community', label: 'Community' },
    { id: 'about', label: 'About' },
    { id: 'insights', label: 'Insights' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled 
          ? 'bg-[#F7F5F2]/95 backdrop-blur-md border-b border-[#1A1A1A]/10 shadow-xs' 
          : 'bg-[#F7F5F2]/80 backdrop-blur-sm border-b border-[#1A1A1A]/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logotype */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 text-left focus:outline-none group"
        >
          <span className="text-2xl font-black tracking-[-0.04em] text-[#1A1A1A]">
            MARDAI
          </span>
          <span className="w-1.5 h-1.5 bg-[#2D4F3C] rounded-full group-hover:scale-125 transition-transform"></span>
        </button>

        {/* Desktop Navigation with Bold Typography aesthetic */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors relative ${
                  isActive 
                    ? 'text-[#1A1A1A]' 
                    : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#2D4F3C]"></span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenBasecampReview}
            className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1A1A1A]/80 hover:text-[#1A1A1A] px-4 py-2.5 border border-[#1A1A1A]/20 hover:border-[#1A1A1A] transition-all flex items-center gap-1.5"
            title="Take the 8-dimension reflection tool"
          >
            <ClipboardCheck className="w-3.5 h-3.5 text-[#2D4F3C]" />
            <span>Breakthrough Review</span>
          </button>

          <button
            onClick={onOpenFindPath}
            className="bg-[#1A1A1A] hover:bg-[#2D4F3C] text-white px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center gap-2 group"
          >
            <span>Next Step</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C27339] group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1A1A1A] hover:bg-[#1A1A1A]/5 focus:outline-none"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F7F5F2] border-b border-[#1A1A1A]/10 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="grid grid-cols-2 gap-2 pt-1 pb-3 border-b border-[#1A1A1A]/10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-3 py-2.5 text-xs font-bold uppercase tracking-wider ${
                  currentPage === item.id
                    ? 'bg-[#1A1A1A] text-white'
                    : 'text-[#1A1A1A]/70 hover:bg-[#1A1A1A]/5 bg-white border border-[#1A1A1A]/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBasecampReview();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs uppercase tracking-wider font-bold text-[#1A1A1A] bg-white border border-[#1A1A1A]/20"
            >
              <ClipboardCheck className="w-4 h-4 text-[#2D4F3C]" />
              <span>Take Your Breakthrough Review</span>
            </button>
            
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenFindPath();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs uppercase tracking-wider font-bold text-white bg-[#1A1A1A]"
            >
              <span>Find Your Next Step</span>
              <ArrowRight className="w-4 h-4 text-[#C27339]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
