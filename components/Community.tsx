'use client';

import { Bike, Mountain, CakeSlice, Palette, Calendar } from 'lucide-react';

const items = [
  { icon: Bike, title: 'Cyclists Welcome', desc: 'Secure bike parking, water refills, and the best butter tarts on any cycling route through the valley.' },
  { icon: Mountain, title: 'Hikers Rest Stop', desc: 'Stock up before heading up Old Baldy. Maps, snacks, and a warm drink for the journey ahead.' },
  { icon: CakeSlice, title: 'Fresh Weekend Baking', desc: 'Sourdough, butter tarts, and seasonal treats baked fresh every Friday and Saturday morning.' },
  { icon: Palette, title: 'Supporting Local Makers', desc: 'Every shelf tells a story. We partner with Beaver Valley artisans to bring you unique, handcrafted goods.' },
  { icon: Calendar, title: 'Seasonal Events', desc: 'From winter markets to maple syrup festivals, there\'s always something happening at the store.' },
];

export default function Community() {
  return (
    <section className="py-24 md:py-32 bg-white border-t border-heritage-border">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16" data-reveal>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-heritage-secondary mb-4">Community</span>
          <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-tight tracking-tight mb-4">
            More Than a Store
          </h2>
          <p className="text-heritage-muted max-w-lg mx-auto">
            The Kimberley General Store is where the Beaver Valley comes together.
            A gathering place for every season, every reason.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={item.title} data-reveal className={`p-8 bg-heritage-bg rounded-2xl border border-heritage-border hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ${i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
              <div className="w-12 h-12 bg-heritage-primary/10 rounded-xl flex items-center justify-center mb-5">
                <item.icon className="w-6 h-6 text-heritage-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-heritage-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
