import React, { useState } from 'react';
import { INSIGHT_CATEGORIES, INSIGHT_ITEMS } from '../data/beyondInsightsData';
import { InsightCategory, InsightItem, PageId } from '../types';
import { 
  Search, 
  ArrowRight, 
  BookOpen, 
  Video, 
  Clock, 
  CheckCircle2,
  MessageSquareQuote,
  Mail,
  Sparkles,
  Layers,
  FileText
} from 'lucide-react';
import { motion } from 'motion/react';

interface BeyondViewProps {
  onOpenFramework: (insight: InsightItem) => void;
  onOpenBasecampReview: () => void;
  onNavigate: (page: PageId) => void;
  onShowToast: (title: string, message?: string, type?: 'success' | 'error' | 'info') => void;
}

export const BeyondView: React.FC<BeyondViewProps> = ({
  onOpenFramework,
  onOpenBasecampReview,
  onNavigate,
  onShowToast
}) => {
  const [selectedCategory, setSelectedCategory] = useState<InsightCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const filteredInsights = INSIGHT_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      onShowToast('Invalid Email', 'Please provide a valid email address.', 'error');
      return;
    }
    onShowToast('Subscribed to Beyond', 'You will receive ideas worth applying directly in your inbox.', 'success');
    setNewsletterEmail('');
  };

  const participantStories = [
    {
      name: 'Marcus K.',
      role: 'VP of Engineering, Clean Energy',
      location: 'Calgary, AB',
      story: '“I was overwhelmed by reactive firefighting. The second-order thinking frameworks and Basecamp pause gave me the mental clarity to restructure our 40-person division without losing momentum.”',
      pathway: 'Basecamp & Workshops'
    },
    {
      name: 'Elena R.',
      role: 'Director of People & Culture',
      location: 'Edmonton, AB',
      story: '“Mardai’s human-centered AI workshop completely shifted how our executive leadership views technological adoption. It wasn’t tech hype—it was pragmatic behavior change.”',
      pathway: 'Workshops'
    },
    {
      name: 'David O.',
      role: 'Senior Project Manager → Director',
      location: 'Calgary, AB',
      story: '“Breakthrough helped me translate 12 years of specialized engineering into a compelling leadership narrative. I was able to clarify my direction and execute with real confidence.”',
      pathway: 'Breakthrough'
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-[#F7F5F2]">
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-[#F7F5F2] border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C]">
                Mardai Beyond • Education & Media
              </span>
              <span className="w-1 h-1 bg-[#2D4F3C] rounded-full"></span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#1A1A1A] leading-[0.9] mb-6">
              Ideas worth applying.
            </h1>

            <p className="text-xl sm:text-2xl font-light text-[#1A1A1A] leading-relaxed mb-6 font-editorial italic">
              “Useful ideas become valuable when they change how we think, decide and act.”
            </p>

            <p className="text-base text-[#1A1A1A]/80 leading-relaxed max-w-2xl mb-8">
              Mardai Beyond is Mardai’s public education and media platform. It explores respected frameworks, systems-thinking concepts, research, practical tools, and emerging ideas and translates them into everyday application.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl">
              <Search className="w-4 h-4 text-[#1A1A1A]/50 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search frameworks (e.g., Second-Order, Eisenhower, AI, Career)..."
                className="w-full pl-11 pr-4 py-3.5 bg-white border border-[#1A1A1A]/20 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#2D4F3C]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Category Navigation Pills */}
        <div className="space-y-3 pb-8 border-b border-[#1A1A1A]/10">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#1A1A1A]/60 block">
              Organized by Development Categories
            </span>
            <span className="text-[10px] text-[#1A1A1A]/50">
              Showing {filteredInsights.length} framework{filteredInsights.length === 1 ? '' : 's'}
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {INSIGHT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as InsightCategory)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#1A1A1A] text-white'
                    : 'bg-white hover:bg-[#1A1A1A]/5 text-[#1A1A1A]/70 border border-[#1A1A1A]/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Formats Ribbon */}
        <div className="pt-4 pb-8 flex flex-wrap items-center gap-2 text-[11px] text-[#1A1A1A]/70">
          <span className="font-bold text-[#1A1A1A] uppercase tracking-wider text-[10px]">Formats:</span>
          <span className="px-2.5 py-1 bg-white border border-[#1A1A1A]/10">Framework Explainers</span>
          <span className="px-2.5 py-1 bg-white border border-[#1A1A1A]/10">Articles</span>
          <span className="px-2.5 py-1 bg-white border border-[#1A1A1A]/10">Practical Tools</span>
          <span className="px-2.5 py-1 bg-white border border-[#1A1A1A]/10">Videos & Notes</span>
          <span className="px-2.5 py-1 bg-white border border-[#1A1A1A]/10">Interviews & Conversations</span>
          <span className="px-2.5 py-1 bg-white border border-[#1A1A1A]/10">Participant Stories</span>
        </div>

        {/* Grid of Frameworks & Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInsights.map((insight, idx) => (
            <motion.div
              key={insight.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              onClick={() => onOpenFramework(insight)}
              className="p-7 bg-white border border-[#1A1A1A]/10 hover:border-[#1A1A1A] transition-all duration-200 cursor-pointer flex flex-col justify-between group shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] uppercase tracking-wider font-bold mb-3">
                  <span className="text-[#2D4F3C]">
                    {insight.categoryLabel}
                  </span>
                  <span className="text-[#1A1A1A]/50 flex items-center gap-1 font-mono">
                    <Clock className="w-3 h-3" />
                    {insight.readTime}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="inline-block px-2 py-0.5 bg-[#F7F5F2] border border-[#1A1A1A]/10 text-[9px] font-mono uppercase tracking-widest text-[#1A1A1A]/70">
                    {insight.format}
                  </span>
                </div>

                <h3 className="text-xl font-black text-[#1A1A1A] group-hover:text-[#2D4F3C] transition-colors leading-snug">
                  {insight.title}
                </h3>

                <p className="text-xs text-[#1A1A1A]/70 mt-2 line-clamp-3 leading-relaxed">
                  {insight.summary}
                </p>

                {/* Key takeaway preview */}
                <div className="mt-4 pt-3 border-t border-[#1A1A1A]/10 space-y-1">
                  <div className="text-[10px] font-mono font-bold text-[#C27339] uppercase tracking-wider">
                    Core Application:
                  </div>
                  <p className="text-xs text-[#1A1A1A]/80 line-clamp-2">
                    {insight.keyTakeaways[0]}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1A1A1A]/10 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#1A1A1A] group-hover:text-[#2D4F3C]">
                <span className="flex items-center gap-1.5">
                  {insight.interactiveFrameworkType && (
                    <span className="px-1.5 py-0.5 bg-[#F7F5F2] border border-[#C27339]/30 text-[#C27339] text-[10px] font-mono">
                      Interactive Tool
                    </span>
                  )}
                  <span>Explore Idea</span>
                </span>
                <ArrowRight className="w-4 h-4 text-[#C27339] group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* NEWSLETTER CTA: GET IDEAS WORTH APPLYING */}
        <div className="mt-16 p-8 sm:p-12 bg-white border border-[#1A1A1A]/15 shadow-sm">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <Mail className="w-4 h-4 text-[#2D4F3C]" />
              <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C]">
                Mardai Beyond Newsletter
              </span>
            </div>
            
            <h3 className="text-3xl font-black text-[#1A1A1A] tracking-tight mb-2">
              Get ideas worth applying.
            </h3>
            
            <p className="text-sm text-[#1A1A1A]/80 leading-relaxed mb-6">
              Subscribe to receive weekly practical frameworks, systems-thinking tools, and actionable insights delivered directly to your inbox. No spam; only ideas that change how you think, decide, and act.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="flex-1 px-4 py-3 bg-[#F7F5F2] border border-[#1A1A1A]/20 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#2D4F3C]"
              />
              <button
                type="submit"
                className="bg-[#1A1A1A] hover:bg-[#2D4F3C] text-white px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap"
              >
                Get Ideas Worth Applying
              </button>
            </form>
          </div>
        </div>

        {/* Stories from Mardai Participants */}
        <div className="mt-20">
          <div className="max-w-2xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#2D4F3C] block mb-2">
              Real Stories
            </span>
            <h3 className="text-3xl font-black tracking-tight text-[#1A1A1A]">
              Stories from Mardai Participants
            </h3>
            <p className="text-xs text-[#1A1A1A]/70 mt-2">
              How leaders and professionals translate Mardai ideas into measurable behavioral change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {participantStories.map((item, idx) => (
              <div key={idx} className="p-7 bg-white border border-[#1A1A1A]/10 space-y-4">
                <MessageSquareQuote className="w-6 h-6 text-[#C27339]" />
                <p className="text-xs sm:text-sm text-[#1A1A1A]/80 leading-relaxed italic font-editorial">
                  {item.story}
                </p>
                <div className="pt-4 border-t border-[#1A1A1A]/10 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-[#1A1A1A] block">{item.name}</span>
                    <span className="text-[#1A1A1A]/50 text-[10px] block">{item.role} • {item.location}</span>
                  </div>
                  <span className="px-2 py-0.5 bg-[#F7F5F2] border border-[#1A1A1A]/10 text-[10px] font-bold text-[#2D4F3C]">
                    {item.pathway}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
