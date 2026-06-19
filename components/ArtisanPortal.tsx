'use client';

import { useState } from 'react';
import { Palette, Building2, FileText, Globe, Upload, Check, ArrowRight } from 'lucide-react';

const categories = ['Pottery & Ceramics', 'Textiles & Fiber', 'Food & Preserves', 'Art & Photography', 'Woodwork', 'Jewelry', 'Bath & Body', 'Other'];

export default function ArtisanPortal() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', business: '', category: '', description: '', website: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-24 md:py-32 bg-heritage-bg" id="artisans">
        <div className="w-full max-w-[600px] mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6" style={{ animation: 'checkBounce 0.5s ease' }}>
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="font-heading text-3xl font-semibold mb-3">Application Received!</h2>
          <p className="text-heritage-muted mb-2">Thank you for your interest in sharing your craft with Beaver Valley.</p>
          <p className="text-sm text-heritage-muted mb-8">Our team will review your submission within 5 business days. We&apos;ll reach out to discuss next steps and schedule a time to see your work.</p>
          <button onClick={() => { setSubmitted(false); setForm({ name: '', business: '', category: '', description: '', website: '' }); }} className="px-8 py-3 bg-heritage-primary text-white rounded-full font-semibold text-sm hover:bg-heritage-primary/90 transition-all">
            Submit Another Application
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 md:py-32 bg-white border-t border-heritage-border" id="artisans">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <div data-reveal>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-heritage-secondary mb-4">Artisan Portal</span>
            <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-tight tracking-tight mb-6">
              Share Your Craft<br />With Beaver Valley
            </h2>
            <p className="text-heritage-muted leading-relaxed mb-6">
              We&apos;re always looking for talented local makers to join our shelves. Whether you
              create pottery, preserves, textiles, or artwork — if it&apos;s made with love in the
              Beaver Valley, we want to hear from you.
            </p>
            <div className="space-y-4">
              {[
                { icon: Palette, title: 'Curated Selection', desc: 'We carefully select products that match our quality standards.' },
                { icon: Building2, title: 'Local Network', desc: 'Join a community of artisans and reach new customers.' },
                { icon: Globe, title: 'Growing Audience', desc: 'Access cyclists, hikers, and tourists visiting the valley.' },
              ].map(item => (
                <div key={item.title} className="flex gap-4 p-4 bg-heritage-bg rounded-xl border border-heritage-border">
                  <item.icon className="w-5 h-5 text-heritage-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold mb-0.5">{item.title}</div>
                    <div className="text-xs text-heritage-muted">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div data-reveal>
            <form onSubmit={handleSubmit} className="bg-heritage-bg rounded-2xl p-8 border border-heritage-border">
              <h3 className="font-heading text-xl font-semibold mb-6">Apply to Sell</h3>
              <div className="space-y-4">
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-heritage-muted mb-1.5">
                    <FileText className="w-3.5 h-3.5" /> Your Name
                  </label>
                  <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 bg-white border border-heritage-border rounded-xl text-sm outline-none focus:border-heritage-secondary transition-all" placeholder="Jane Smith" />
                </div>
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-heritage-muted mb-1.5">
                    <Building2 className="w-3.5 h-3.5" /> Business Name
                  </label>
                  <input type="text" required value={form.business} onChange={e => setForm({ ...form, business: e.target.value })} className="w-full px-4 py-3 bg-white border border-heritage-border rounded-xl text-sm outline-none focus:border-heritage-secondary transition-all" placeholder="Valley Pottery" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-heritage-muted mb-1.5 block">Category</label>
                  <select required value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} className="w-full px-4 py-3 bg-white border border-heritage-border rounded-xl text-sm outline-none focus:border-heritage-secondary transition-all appearance-none">
                    <option value="">Select category</option>
                    {categories.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-heritage-muted mb-1.5">
                    <FileText className="w-3.5 h-3.5" /> Description
                  </label>
                  <textarea required rows={4} value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} className="w-full px-4 py-3 bg-white border border-heritage-border rounded-xl text-sm outline-none focus:border-heritage-secondary transition-all resize-none" placeholder="Tell us about your craft and what makes it special..." />
                </div>
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-heritage-muted mb-1.5">
                    <Globe className="w-3.5 h-3.5" /> Website (optional)
                  </label>
                  <input type="url" value={form.website} onChange={e => setForm({ ...form, website: e.target.value })} className="w-full px-4 py-3 bg-white border border-heritage-border rounded-xl text-sm outline-none focus:border-heritage-secondary transition-all" placeholder="https://..." />
                </div>
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-heritage-muted mb-1.5">
                    <Upload className="w-3.5 h-3.5" /> Product Photos
                  </label>
                  <div className="w-full px-4 py-8 bg-white border-2 border-dashed border-heritage-border rounded-xl text-center text-sm text-heritage-muted hover:border-heritage-secondary transition-colors cursor-pointer">
                    <Upload className="w-6 h-6 mx-auto mb-2 text-heritage-muted" />
                    Click to upload or drag and drop
                    <div className="text-xs mt-1">PNG, JPG up to 10MB</div>
                  </div>
                </div>
              </div>
              <button type="submit" className="w-full mt-6 py-3.5 bg-heritage-primary text-white rounded-full font-semibold text-sm hover:bg-heritage-primary/90 hover:-translate-y-0.5 hover:shadow-lg transition-all flex items-center justify-center gap-2">
                Submit Application
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
