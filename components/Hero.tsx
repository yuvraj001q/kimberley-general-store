'use client';

import { ShoppingCart, ArrowRight } from 'lucide-react';

interface HeroProps {
  onShop: () => void;
  onPreOrder: () => void;
}

export default function Hero({ onShop, onPreOrder }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-heritage-bg">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-heritage-bg via-heritage-bg/90 to-heritage-bg/70 z-10" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(30%)',
          }}
        />
      </div>

      <div className="relative z-20 w-full max-w-[1200px] mx-auto px-6 pt-32 pb-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-heritage-primary/10 rounded-full mb-8 animate-[fadeIn_0.8s_ease_both]">
            <div className="w-2 h-2 bg-heritage-secondary rounded-full animate-pulse" />
            <span className="text-xs font-semibold tracking-widest uppercase text-heritage-primary">Est. 1905</span>
          </div>

          <h1 className="font-heading text-[clamp(2.8rem,7vw,5.5rem)] font-semibold leading-[1.05] tracking-tight mb-8 animate-[fadeIn_0.8s_ease_0.1s_both]">
            Heart of the<br />
            <span className="text-heritage-primary italic">Beaver Valley</span><br />
            Since 1905.
          </h1>

          <p className="text-lg text-heritage-muted max-w-lg leading-relaxed mb-10 animate-[fadeIn_0.8s_ease_0.2s_both]">
            A historic gathering place for locals, cyclists, hikers, and visitors
            exploring Old Baldy and the Beaver Valley.
          </p>

          <div className="flex flex-wrap gap-4 animate-[fadeIn_0.8s_ease_0.3s_both]">
            <button onClick={onShop} className="inline-flex items-center gap-2 px-8 py-4 bg-heritage-primary text-white rounded-full font-semibold text-sm hover:bg-heritage-primary/90 hover:-translate-y-0.5 hover:shadow-lg transition-all">
              <ShoppingCart className="w-4 h-4" />
              Shop Local Goods
            </button>
            <button onClick={onPreOrder} className="inline-flex items-center gap-2 px-8 py-4 border-2 border-heritage-border text-heritage-text rounded-full font-semibold text-sm hover:border-heritage-text hover:-translate-y-0.5 transition-all">
              Pre-Order Weekend Favorites
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2">
        <span className="text-[0.65rem] font-semibold tracking-widest uppercase text-heritage-muted">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-heritage-secondary to-transparent animate-pulse" />
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
