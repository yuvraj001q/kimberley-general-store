'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Goods from '@/components/Goods';
import Community from '@/components/Community';
import ArtisanPortal from '@/components/ArtisanPortal';
import AuthenticatedContent from '@/components/AuthenticatedContent';
import Footer from '@/components/Footer';
import AuthModal from '@/components/AuthModal';
import PreOrderModal from '@/components/PreOrderModal';

export default function Home() {
  const [showAuth, setShowAuth] = useState(false);
  const [showPreOrder, setShowPreOrder] = useState(false);

  return (
    <main className="min-h-screen">
      <Navbar onPreOrder={() => setShowPreOrder(true)} onLogin={() => setShowAuth(true)} />
      <Hero onShop={() => document.getElementById('goods')?.scrollIntoView({ behavior: 'smooth' })} onPreOrder={() => setShowPreOrder(true)} />
      <About />
      <Goods onPreOrder={() => setShowPreOrder(true)} />
      <Community />
      <ArtisanPortal />
      <AuthenticatedContent />
      <Footer />
      <AuthModal isOpen={showAuth} onClose={() => setShowAuth(false)} onSuccess={() => setShowAuth(false)} />
      <PreOrderModal isOpen={showPreOrder} onClose={() => setShowPreOrder(false)} />
    </main>
  );
}
