'use client';

import { Store, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-heritage-text text-white">
      <div className="w-full max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12 pb-12 border-b border-white/10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-heritage-secondary rounded-lg flex items-center justify-center">
                <Store className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading text-lg font-semibold">Kimberley General Store</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed mb-4">
              Heart of the Beaver Valley since 1905. A historic gathering place for locals and visitors alike.
            </p>
            <div className="space-y-2 text-sm text-white/50">
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Kimberley, Ontario</div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> (519) 555-0105</div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> hello@kimberleygeneral.store</div>
            </div>
          </div>

          {[
            { title: 'Visit', links: ['Heritage', 'Goods', 'Artisans', 'Community'] },
            { title: 'Services', links: ['Pre-Order', 'Local Delivery', 'Bulk Orders', 'Gift Cards'] },
            { title: 'Hours', links: ['Mon-Fri: 7am – 6pm', 'Saturday: 8am – 5pm', 'Sunday: 9am – 3pm', 'Holiday Hours Vary'] },
          ].map(col => (
            <div key={col.title}>
              <h4 className="text-xs font-bold tracking-widest uppercase text-white/40 mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">&copy; {new Date().getFullYear()} Kimberley General Store. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {['Instagram', 'Facebook', 'Newsletter'].map(s => (
              <a key={s} href="#" className="text-xs text-white/40 hover:text-white transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
