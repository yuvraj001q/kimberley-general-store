'use client';

import { useAuth } from '@/context/AuthContext';
import { Package, ShoppingBag, Heart, Calendar, Star, ArrowRight } from 'lucide-react';

const mockOrders = [
  { id: 'KGS-84291', date: '2025-01-18', items: '2x Butter Tarts, 1x Sourdough', status: 'Ready for Pickup', total: 17.00 },
  { id: 'KGS-83102', date: '2025-01-11', items: "1x Justin's Oven Dinner", status: 'Completed', total: 14.00 },
  { id: 'KGS-81554', date: '2025-01-04', items: '3x Butter Tarts, 2x Sourdough', status: 'Completed', total: 29.00 },
];

const favorites = [
  { name: 'Butter Tarts', times: 8 },
  { name: 'Sourdough Bread', times: 5 },
  { name: "Justin's Oven Dinners", times: 3 },
];

const events = [
  { name: 'Winter Market', date: 'Feb 8, 2025', desc: 'Local artisans showcase' },
  { name: 'Pancake Breakfast', date: 'Feb 15, 2025', desc: 'Community fundraiser' },
  { name: 'Maple Syrup Festival', date: 'Mar 1, 2025', desc: 'Tapping season celebration' },
];

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <section className="py-24 md:py-32 bg-heritage-bg" id="dashboard">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="mb-12" data-reveal>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-heritage-secondary mb-4">Your Dashboard</span>
          <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-tight">
            Welcome back, {user?.name}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8" data-reveal>
          <div className="bg-white rounded-2xl p-6 border border-heritage-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-heritage-primary/10 rounded-xl flex items-center justify-center">
                <Package className="w-5 h-5 text-heritage-primary" />
              </div>
              <div>
                <div className="text-2xl font-heading font-semibold">3</div>
                <div className="text-xs text-heritage-muted">Total Orders</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-heritage-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-heritage-secondary/10 rounded-xl flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-heritage-secondary" />
              </div>
              <div>
                <div className="text-2xl font-heading font-semibold">1</div>
                <div className="text-xs text-heritage-muted">Ready for Pickup</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-heritage-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center">
                <Heart className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <div className="text-2xl font-heading font-semibold">3</div>
                <div className="text-xs text-heritage-muted">Favorite Products</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-heritage-border overflow-hidden" data-reveal>
            <div className="p-6 border-b border-heritage-border">
              <h3 className="font-heading text-lg font-semibold">Recent Orders</h3>
            </div>
            <div className="divide-y divide-heritage-border">
              {mockOrders.map(order => (
                <div key={order.id} className="p-4 px-6 flex items-center justify-between hover:bg-heritage-bg/50 transition-colors">
                  <div>
                    <div className="text-sm font-semibold">{order.id}</div>
                    <div className="text-xs text-heritage-muted">{order.items}</div>
                    <div className="text-xs text-heritage-muted mt-0.5">{order.date}</div>
                  </div>
                  <div className="text-right">
                    <span className={`inline-block px-2.5 py-1 rounded-full text-[0.65rem] font-semibold ${order.status === 'Ready for Pickup' ? 'bg-green-50 text-green-700' : 'bg-heritage-bg text-heritage-muted'}`}>
                      {order.status}
                    </span>
                    <div className="text-sm font-semibold mt-1">${order.total.toFixed(2)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-heritage-border p-6" data-reveal>
              <h3 className="font-heading text-lg font-semibold mb-4 flex items-center gap-2">
                <Star className="w-4 h-4 text-heritage-secondary" /> Favorites
              </h3>
              <div className="space-y-3">
                {favorites.map(f => (
                  <div key={f.name} className="flex items-center justify-between p-3 bg-heritage-bg rounded-xl">
                    <span className="text-sm font-medium">{f.name}</span>
                    <span className="text-xs text-heritage-muted">Ordered {f.times}x</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-heritage-border p-6" data-reveal>
              <h3 className="font-heading text-lg font-semibold mb-4 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-heritage-secondary" /> Upcoming Events
              </h3>
              <div className="space-y-3">
                {events.map(e => (
                  <div key={e.name} className="flex items-center gap-3 p-3 bg-heritage-bg rounded-xl">
                    <div className="w-10 h-10 bg-heritage-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-4 h-4 text-heritage-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold">{e.name}</div>
                      <div className="text-xs text-heritage-muted">{e.desc}</div>
                    </div>
                    <span className="text-xs text-heritage-secondary font-medium whitespace-nowrap">{e.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
