'use client';

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { AuthState, User } from '@/types';

const AuthContext = createContext<AuthState | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('kgs_auth');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setUser(parsed.user);
        setIsLoggedIn(parsed.isLoggedIn);
      } catch { /* ignore */ }
    }
  }, []);

  const persist = useCallback((u: User | null, loggedIn: boolean) => {
    localStorage.setItem('kgs_auth', JSON.stringify({ user: u, isLoggedIn: loggedIn }));
  }, []);

  const login = useCallback(async (email: string, _password: string): Promise<boolean> => {
    await new Promise(r => setTimeout(r, 600));
    const u: User = { id: crypto.randomUUID(), name: email.split('@')[0], email };
    setUser(u);
    setIsLoggedIn(true);
    persist(u, true);
    return true;
  }, [persist]);

  const register = useCallback(async (name: string, email: string, _password: string): Promise<boolean> => {
    await new Promise(r => setTimeout(r, 800));
    const u: User = { id: crypto.randomUUID(), name, email };
    setUser(u);
    setIsLoggedIn(true);
    persist(u, true);
    return true;
  }, [persist]);

  const logout = useCallback(() => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('kgs_auth');
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthState {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
