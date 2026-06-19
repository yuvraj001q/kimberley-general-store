'use client';

import { Coffee, Mountain, Users, Bike } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 md:py-32 bg-white border-t border-heritage-border" id="heritage">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div data-reveal className="relative rounded-2xl overflow-hidden aspect-[4/5]">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80')",
              }}
            />
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-full text-sm font-semibold text-heritage-primary tracking-wide">
              Since 1905
            </div>
          </div>

          <div data-reveal>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-heritage-secondary mb-4">Our Heritage</span>
            <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-tight tracking-tight mb-6">
              A Century of<br />Community & Craft
            </h2>
            <p className="text-heritage-muted leading-relaxed mb-6">
              The original 1905 building has served as the beating heart of Beaver Valley
              for over a century. Strong coffee brewed fresh every morning. Sourdough bread
              pulled warm from the oven. Front porch conversations that last longer than
              anyone intends.
            </p>
            <p className="text-heritage-muted leading-relaxed mb-8">
              Cyclists pause mid-ride for butter tarts. Hikers heading up Old Baldy stock
              up on supplies. Locals gather around the wood stove in winter. Every season
              brings its own rhythm to the store.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Coffee, label: 'Strong Coffee', desc: 'Freshly brewed daily' },
                { icon: Mountain, label: 'Old Baldy Views', desc: 'Heart of the valley' },
                { icon: Bike, label: 'Cyclist Friendly', desc: 'Rest stop on every route' },
                { icon: Users, label: 'Community Hub', desc: 'Since 1905' },
              ].map(item => (
                <div key={item.label} className="p-4 bg-heritage-bg rounded-xl border border-heritage-border">
                  <item.icon className="w-5 h-5 text-heritage-secondary mb-2" />
                  <div className="text-sm font-semibold text-heritage-text">{item.label}</div>
                  <div className="text-xs text-heritage-muted">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
