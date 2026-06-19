'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Menu, X, Store, LogOut, User } from 'lucide-react';

interface NavbarProps {
  onPreOrder: () => void;
  onLogin: () => void;
}

export default function Navbar({ onPreOrder, onLogin }: NavbarProps) {
  const { isLoggedIn, user, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 h-16 md:h-[72px] transition-all duration-300 flex items-center ${scrolled || menuOpen ? 'bg-heritage-bg/95 backdrop-blur-xl border-b border-heritage-border shadow-sm' : 'bg-transparent'}`}>
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 flex items-center justify-between">
          <button onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-2.5 font-heading text-lg md:text-xl font-semibold text-heritage-text tracking-tight">
            <div className="w-8 h-8 md:w-9 md:h-9 bg-heritage-primary rounded-lg flex items-center justify-center">
              <Store className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>
            <span className="hidden sm:block">Kimberley General Store</span>
            <span className="sm:hidden">KGS</span>
          </button>

          <ul className="hidden md:flex items-center gap-8">
            {[
              { label: 'Heritage', id: 'heritage' },
              { label: 'Goods', id: 'goods' },
              { label: 'Artisans', id: 'artisans' },
            ].map(link => (
              <li key={link.id}>
                <button onClick={() => handleNav(link.id)} className="text-sm font-medium text-heritage-muted hover:text-heritage-text transition-colors relative group">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-heritage-secondary group-hover:w-full transition-all" />
                </button>
              </li>
            ))}
            <li>
              <button onClick={() => { setMenuOpen(false); onPreOrder(); }} className="text-sm font-medium text-heritage-primary hover:text-heritage-primary/80 transition-colors">
                Pre-Order
              </button>
            </li>
            {isLoggedIn ? (
              <li className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-heritage-bg rounded-full text-sm font-medium">
                  <User className="w-3.5 h-3.5 text-heritage-secondary" />
                  {user?.name}
                </div>
                <button onClick={logout} className="text-heritage-muted hover:text-heritage-text transition-colors">
                  <LogOut className="w-4 h-4" />
                </button>
              </li>
            ) : (
              <li>
                <button onClick={() => { setMenuOpen(false); onLogin(); }} className="text-sm font-medium border border-heritage-border px-5 py-2 rounded-full hover:border-heritage-text transition-colors">
                  Login
                </button>
              </li>
            )}
          </ul>

          <button className="md:hidden w-10 h-10 flex items-center justify-center" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/30" onClick={() => setMenuOpen(false)} />
          <div className="absolute top-16 left-0 right-0 bg-heritage-bg/98 backdrop-blur-xl border-b border-heritage-border p-6 space-y-1 animate-[slideDown_0.2s_ease]">
            {[
              { label: 'Heritage', id: 'heritage' },
              { label: 'Goods', id: 'goods' },
              { label: 'Artisans', id: 'artisans' },
            ].map(link => (
              <button key={link.id} onClick={() => handleNav(link.id)} className="block w-full text-left px-4 py-3 text-base font-medium text-heritage-muted hover:text-heritage-text hover:bg-heritage-bg rounded-xl transition-colors">
                {link.label}
              </button>
            ))}
            <button onClick={() => { setMenuOpen(false); onPreOrder(); }} className="block w-full text-left px-4 py-3 text-base font-medium text-heritage-primary hover:bg-heritage-bg rounded-xl transition-colors">
              Pre-Order
            </button>
            {isLoggedIn ? (
              <>
                <div className="px-4 py-2 flex items-center gap-2 text-sm text-heritage-muted">
                  <User className="w-4 h-4 text-heritage-secondary" />
                  {user?.name}
                </div>
                <button onClick={() => { setMenuOpen(false); logout(); }} className="block w-full text-left px-4 py-3 text-base font-medium text-red-500 hover:bg-red-50 rounded-xl transition-colors">
                  Logout
                </button>
              </>
            ) : (
              <button onClick={() => { setMenuOpen(false); onLogin(); }} className="block w-full text-left px-4 py-3 text-base font-medium text-heritage-muted hover:text-heritage-text hover:bg-heritage-bg rounded-xl transition-colors">
                Login / Register
              </button>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
