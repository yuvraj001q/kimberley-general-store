'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { products } from './Goods';
import { X, Plus, Minus, Calendar, Clock, FileText, Check } from 'lucide-react';
import { PreOrderItem } from '@/types';

interface PreOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const preOrderProducts = products.filter(p => p.preOrderable);

const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];

export default function PreOrderModal({ isOpen, onClose }: PreOrderModalProps) {
  const { user } = useAuth();
  const [items, setItems] = useState<PreOrderItem[]>(
    preOrderProducts.map(p => ({ product: p, quantity: 0 }))
  );
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const updateQty = (id: string, delta: number) => {
    setItems(prev => prev.map(item =>
      item.product.id === id
        ? { ...item, quantity: Math.max(0, Math.min(20, item.quantity + delta)) }
        : item
    ));
  };

  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const getTomorrow = () => {
    const d = new Date(); d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  };

  const handleSubmit = async () => {
    if (!pickupDate || !pickupTime || itemCount === 0) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setOrderNumber(`KGS-${Math.floor(10000 + Math.random() * 90000)}`);
    setConfirmed(true);
    setLoading(false);
  };

  const reset = () => {
    setItems(preOrderProducts.map(p => ({ product: p, quantity: 0 })));
    setPickupDate(''); setPickupTime(''); setNotes('');
    setConfirmed(false); setOrderNumber('');
  };

  const handleClose = () => { reset(); onClose(); };

  const selectedItems = items.filter(i => i.quantity > 0);

  return (
    <div className={`fixed inset-0 z-[2000] flex items-center justify-center p-4 transition-all duration-300 ${isOpen ? 'bg-black/40 backdrop-blur-sm opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={handleClose}>
      <div className={`bg-white rounded-2xl w-full max-w-[640px] max-h-[90vh] overflow-y-auto relative transition-all duration-300 shadow-2xl ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-5'}`} onClick={e => e.stopPropagation()}>
        <button onClick={handleClose} className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full hover:bg-heritage-bg transition-colors text-heritage-muted z-10" aria-label="Close">
          <X className="w-5 h-5" />
        </button>

        {!confirmed ? (
          <>
            <div className="p-8 pb-4 text-center border-b border-heritage-border">
              <h2 className="font-heading text-2xl font-semibold mb-1">Pre-Order for Pickup</h2>
              <p className="text-sm text-heritage-muted">Ordering as {user?.name}</p>
            </div>

            <div className="p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-heritage-muted mb-4">Select Items</h3>
              <div className="space-y-3 mb-8">
                {items.map(item => (
                  <div key={item.product.id} className="flex items-center gap-4 p-4 bg-heritage-bg rounded-xl border border-heritage-border">
                    <div className="w-14 h-14 rounded-lg bg-cover bg-center flex-shrink-0" style={{ backgroundImage: `url('${item.product.image}')` }} />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold">{item.product.name}</div>
                      <div className="text-xs text-heritage-muted">${item.product.price.toFixed(2)} each</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => updateQty(item.product.id, -1)} className="w-8 h-8 rounded-full bg-white border border-heritage-border flex items-center justify-center hover:border-heritage-text transition-colors disabled:opacity-30" disabled={item.quantity === 0}>
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-8 text-center text-sm font-semibold">{item.quantity}</span>
                      <button onClick={() => updateQty(item.product.id, 1)} className="w-8 h-8 rounded-full bg-white border border-heritage-border flex items-center justify-center hover:border-heritage-text transition-colors">
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-heritage-muted mb-1.5">
                    <Calendar className="w-3.5 h-3.5" /> Pickup Date
                  </label>
                  <input type="date" min={getTomorrow()} value={pickupDate} onChange={e => setPickupDate(e.target.value)} required className="w-full px-4 py-3 bg-heritage-bg border border-heritage-border rounded-xl text-sm outline-none focus:border-heritage-secondary transition-all" />
                </div>
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-heritage-muted mb-1.5">
                    <Clock className="w-3.5 h-3.5" /> Pickup Time
                  </label>
                  <select value={pickupTime} onChange={e => setPickupTime(e.target.value)} required className="w-full px-4 py-3 bg-heritage-bg border border-heritage-border rounded-xl text-sm outline-none focus:border-heritage-secondary transition-all appearance-none">
                    <option value="">Select time</option>
                    {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="flex items-center gap-1.5 text-xs font-semibold text-heritage-muted mb-1.5">
                  <FileText className="w-3.5 h-3.5" /> Special Requests (optional)
                </label>
                <textarea placeholder="Any allergies, special requests, or notes..." value={notes} onChange={e => setNotes(e.target.value)} rows={3} className="w-full px-4 py-3 bg-heritage-bg border border-heritage-border rounded-xl text-sm outline-none focus:border-heritage-secondary transition-all resize-none" />
              </div>

              {itemCount > 0 && (
                <div className="p-4 bg-heritage-primary/5 rounded-xl mb-6 border border-heritage-primary/10">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-heritage-muted">Items ({itemCount})</span>
                    <span className="font-semibold">${total.toFixed(2)}</span>
                  </div>
                  {selectedItems.map(i => (
                    <div key={i.product.id} className="flex justify-between text-xs text-heritage-muted">
                      <span>{i.quantity}x {i.product.name}</span>
                      <span>${(i.product.price * i.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              )}

              <button onClick={handleSubmit} disabled={loading || itemCount === 0 || !pickupDate || !pickupTime} className="w-full py-3.5 bg-heritage-primary text-white rounded-full font-semibold text-sm hover:bg-heritage-primary/90 hover:-translate-y-0.5 hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2">
                {loading ? <span className="spinner" /> : 'Place Pre-Order'}
              </button>
            </div>
          </>
        ) : (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4" style={{ animation: 'checkBounce 0.5s ease' }}>
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="font-heading text-2xl font-semibold mb-2">Order Confirmed!</h2>
            <p className="text-sm text-heritage-muted mb-1">Thank you, {user?.name}</p>
            <div className="text-lg font-heading font-semibold text-heritage-secondary mb-6 tracking-wider">{orderNumber}</div>

            <div className="text-left bg-heritage-bg rounded-xl p-5 mb-6 space-y-2">
              {selectedItems.map(i => (
                <div key={i.product.id} className="flex justify-between text-sm">
                  <span>{i.quantity}x {i.product.name}</span>
                  <span className="font-medium">${(i.product.price * i.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t border-heritage-border pt-2 flex justify-between text-sm font-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="text-xs text-heritage-muted pt-1">
                Pickup: {pickupDate} at {pickupTime}
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-xs font-semibold mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              Reserved For Pickup
            </div>

            <div className="flex flex-col gap-2">
              <button onClick={reset} className="w-full py-3 bg-heritage-primary text-white rounded-full font-semibold text-sm hover:bg-heritage-primary/90 transition-all">
                Place Another Order
              </button>
              <button onClick={handleClose} className="w-full py-3 text-heritage-muted hover:text-heritage-text text-sm font-medium transition-colors">
                Return Home
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
