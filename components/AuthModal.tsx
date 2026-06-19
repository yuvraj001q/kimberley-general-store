'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { X, Mail, Lock, User as UserIcon } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function AuthModal({ isOpen, onClose, onSuccess }: AuthModalProps) {
  const { login, register } = useAuth();
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const reset = () => { setName(''); setEmail(''); setPassword(''); setError(''); setLoading(false); };
  const handleClose = () => { reset(); onClose(); };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      let success = false;
      if (mode === 'login') {
        success = await login(email, password);
      } else {
        if (!name.trim()) { setError('Name is required'); setLoading(false); return; }
        success = await register(name, email, password);
      }
      if (success) { reset(); onSuccess(); }
      else setError('Something went wrong. Please try again.');
    } catch { setError('Something went wrong.'); }
    finally { setLoading(false); }
  };

  return (
    <div className={`fixed inset-0 z-[2000] flex items-center justify-center p-6 transition-all duration-300 ${isOpen ? 'bg-black/40 backdrop-blur-sm opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={handleClose}>
      <div className={`bg-white rounded-2xl w-full max-w-[440px] max-h-[90vh] overflow-y-auto relative transition-all duration-300 shadow-2xl ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-5'}`} onClick={e => e.stopPropagation()}>
        <button onClick={handleClose} className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full hover:bg-heritage-bg transition-colors text-heritage-muted z-10" aria-label="Close">
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 pb-0 text-center">
          <h2 className="font-heading text-2xl font-semibold mb-1">{mode === 'login' ? 'Welcome Back' : 'Join the Community'}</h2>
          <p className="text-sm text-heritage-muted">{mode === 'login' ? 'Sign in to manage your pre-orders' : 'Create an account to start ordering'}</p>
        </div>

        <div className="p-8">
          <div className="flex gap-0 mb-6 bg-heritage-bg rounded-full p-1">
            {(['login', 'register'] as const).map(m => (
              <button key={m} onClick={() => { setMode(m); setError(''); }} className={`flex-1 py-2.5 text-sm font-semibold rounded-full transition-all ${mode === m ? 'bg-white text-heritage-text shadow-sm' : 'text-heritage-muted'}`}>
                {m === 'login' ? 'Login' : 'Register'}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            {mode === 'register' && (
              <div className="mb-4">
                <label className="block text-xs font-semibold text-heritage-muted mb-1.5">Full Name</label>
                <div className="relative">
                  <UserIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-heritage-muted" />
                  <input type="text" placeholder="Your name" value={name} onChange={e => setName(e.target.value)} required className="w-full pl-10 pr-4 py-3 bg-heritage-bg border border-heritage-border rounded-xl text-sm outline-none focus:border-heritage-secondary focus:ring-2 focus:ring-heritage-secondary/10 transition-all" />
                </div>
              </div>
            )}
            <div className="mb-4">
              <label className="block text-xs font-semibold text-heritage-muted mb-1.5">Email</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-heritage-muted" />
                <input type="email" placeholder="you@email.com" value={email} onChange={e => setEmail(e.target.value)} required className="w-full pl-10 pr-4 py-3 bg-heritage-bg border border-heritage-border rounded-xl text-sm outline-none focus:border-heritage-secondary focus:ring-2 focus:ring-heritage-secondary/10 transition-all" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-xs font-semibold text-heritage-muted mb-1.5">Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-heritage-muted" />
                <input type="password" placeholder="At least 6 characters" value={password} onChange={e => setPassword(e.target.value)} required minLength={6} className="w-full pl-10 pr-4 py-3 bg-heritage-bg border border-heritage-border rounded-xl text-sm outline-none focus:border-heritage-secondary focus:ring-2 focus:ring-heritage-secondary/10 transition-all" />
              </div>
            </div>
            {error && <p className="text-red-500 text-xs mb-4">{error}</p>}
            <button type="submit" disabled={loading} className="w-full py-3.5 bg-heritage-primary text-white rounded-full font-semibold text-sm hover:bg-heritage-primary/90 hover:-translate-y-0.5 hover:shadow-lg transition-all disabled:opacity-60 flex items-center justify-center gap-2">
              {loading ? <span className="spinner" /> : mode === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
