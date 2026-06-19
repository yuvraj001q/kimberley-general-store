'use client';

import { Product } from '@/types';
import { ShoppingBag, Check, Clock } from 'lucide-react';

const products: Product[] = [
  { id: '1', name: 'Strong Coffee', description: 'Rich, bold, and freshly brewed every morning. The fuel for every Beaver Valley adventure.', price: 3.50, category: 'Beverages', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80', available: true, preOrderable: false },
  { id: '2', name: 'Fresh Sourdough Bread', description: 'Slow-fermented with wild yeast. Crusty exterior, soft and tangy inside. Baked fresh on weekends.', price: 8.00, category: 'Bakery', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80', available: true, preOrderable: true },
  { id: '3', name: 'Butter Tarts', description: 'A Canadian classic. Flaky pastry, rich filling, perfectly sweet. Available weekends only.', price: 4.50, category: 'Bakery', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80', available: true, preOrderable: true },
  { id: '4', name: "Justin's Oven Frozen Dinners", description: 'Home-style meals prepared with local ingredients. Ready to heat and enjoy after a long day on the trail.', price: 14.00, category: 'Prepared Foods', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80', available: true, preOrderable: true },
  { id: '5', name: "Justin's Oven Sauces", description: 'Small-batch sauces made with locally sourced produce. Perfect for pasta, pizza, or dipping.', price: 9.00, category: 'Pantry', image: 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=600&q=80', available: true, preOrderable: true },
  { id: '6', name: 'Bath & Body Products', description: 'Handcrafted soaps, balms, and lotions from Beaver Valley artisans. Natural and nourishing.', price: 12.00, category: 'Artisan', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80', available: true, preOrderable: false },
  { id: '7', name: 'Canadian Pottery', description: 'Hand-thrown mugs, bowls, and plates by local ceramicists. Each piece is one of a kind.', price: 35.00, category: 'Artisan', image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80', available: true, preOrderable: false },
  { id: '8', name: 'Local Art', description: 'Paintings, prints, and photographs capturing the beauty of the Beaver Valley and surrounding hills.', price: 45.00, category: 'Artisan', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80', available: true, preOrderable: false },
];

interface GoodsProps {
  onPreOrder: () => void;
}

export default function Goods({ onPreOrder }: GoodsProps) {
  return (
    <section className="py-24 md:py-32 bg-heritage-bg" id="goods">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16" data-reveal>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-heritage-secondary mb-4">Local Goods</span>
          <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-tight tracking-tight mb-4">
            From Our Shelves
          </h2>
          <p className="text-heritage-muted max-w-lg mx-auto">
            Carefully curated products from the Beaver Valley and beyond.
            Every item tells a story of local craft and quality.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product.id} data-reveal className="bg-white rounded-2xl border border-heritage-border overflow-hidden group hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${product.image}')` }}
                />
                <div className="absolute top-3 right-3">
                  {product.available ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-green-50 text-green-700 text-[0.65rem] font-semibold rounded-full">
                      <Check className="w-3 h-3" /> In Stock
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-50 text-amber-700 text-[0.65rem] font-semibold rounded-full">
                      <Clock className="w-3 h-3" /> Seasonal
                    </span>
                  )}
                </div>
                <div className="absolute bottom-3 left-3 text-[0.65rem] font-semibold tracking-wider uppercase text-white/90 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  {product.category}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold mb-1">{product.name}</h3>
                <p className="text-sm text-heritage-muted leading-relaxed mb-4 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-heritage-primary">${product.price.toFixed(2)}</span>
                  {product.preOrderable ? (
                    <button onClick={onPreOrder} className="inline-flex items-center gap-1.5 text-xs font-semibold text-heritage-secondary hover:text-heritage-primary transition-colors">
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Pre-Order
                    </button>
                  ) : (
                    <span className="text-xs text-heritage-muted">In Store Only</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { products };
