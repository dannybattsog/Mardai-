import React from 'react';
import { PageId } from '../types';
import { ArrowRight, Sparkles } from 'lucide-react';
import seriesCollectionImg from '../assets/images/regenerated_image_1791994218671.png';

// Stripe Payment Link for the Human Systems first-release deck (CA$129, one-time).
const STRIPE_HUMAN_SYSTEMS_URL = 'https://buy.stripe.com/8x23cw9R00OJ53WchUdIA00';

interface HomeSeriesSpotlightProps {
  onNavigate: (page: PageId) => void;
}

export const HomeSeriesSpotlight: React.FC<HomeSeriesSpotlightProps> = ({
  onNavigate
}) => {
  return (
    <section
      id="human-systems-preorder"
      aria-label="Spotlight"
      className="py-16 md:py-20 bg-[#E5E7EB] text-[#1A1A1A] border-b border-[#1A1A1A]/15"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 bg-[#C27339] rounded-full"></span>
          <h2 className="text-xs font-mono uppercase tracking-[0.28em] font-black text-[#1A1A1A]">
            Spotlight
          </h2>
          <div className="h-px flex-1 bg-[#1A1A1A]/15"></div>
        </header>

        <div
          className="bg-[#DFDFE2] text-[#1A1A1A] border border-[#1A1A1A]/15 shadow-xl p-6 sm:p-10 lg:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Product Imagery */}
            <div className="lg:col-span-6">
              <div className="overflow-hidden shadow-xl border border-[#1A1A1A]/15 bg-[#D4D5D9] group">
                <img
                  src={seriesCollectionImg}
                  alt="Mardai Human Systems - First Edition Boxed Mental Model Card Deck"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>

            {/* Spotlight Content & Buy CTA */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1A1A1A] border border-[#1A1A1A] text-[#D4AF37] text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>First Release — Pre-Order Open</span>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A1A1A] tracking-tight leading-[1.05]">
                  Mardai Human Systems
                </h3>
                <p className="text-lg sm:text-xl font-editorial italic text-[#9E5623] mt-1.5">
                  "Understand yourself. Understand the world."
                </p>
              </div>

              <p className="text-sm sm:text-base font-light text-[#1A1A1A]/85 leading-relaxed">
                100 frameworks designed to help you think better, make better decisions, understand yourself and others to lead a fulfilling life and career. Currently in final production — pre-order guarantees first-edition boxed shipment.
              </p>

              {/* What's in the box */}
              <div className="p-4 bg-[#E5E7EB] border border-[#1A1A1A]/15 space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-[0.22em] font-bold text-[#2D4F3C] block">
                  What's in the box
                </span>
                <p className="text-xs sm:text-sm text-[#1A1A1A]/90 leading-relaxed">
                  Beautifully designed 100 thick matte linen cards, wooden card holder, AI prompts instructions.
                </p>
              </div>

              {/* Price + Big Gold Buy Button */}
              <div className="pt-1 space-y-3">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl sm:text-4xl font-black font-mono text-[#1A1A1A] tracking-tight">
                    CA$129.00
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#1A1A1A]/65">
                    Collection 01 • First Edition
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={STRIPE_HUMAN_SYSTEMS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#D4AF37] hover:bg-[#c5a12f] text-[#0A2540] px-8 py-4 text-sm font-black uppercase tracking-[0.16em] transition-all font-mono shadow-lg"
                  >
                    <span>Pre-Order Now — CA$129</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <button
                    type="button"
                    onClick={() => onNavigate('series')}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 bg-[#1A1A1A] hover:bg-[#2D4F3C] text-white text-xs font-bold uppercase tracking-[0.15em] transition-all font-mono"
                  >
                    <span>Explore All 5 Collections</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </button>
                </div>

                <p className="text-[11px] font-mono text-[#1A1A1A]/70">
                  One-time payment · Secure checkout via Stripe
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
