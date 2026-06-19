'use client';

import { useAuth } from '@/context/AuthContext';
import Dashboard from '@/components/Dashboard';

export default function AuthenticatedContent() {
  const { user } = useAuth();
  if (!user) return null;
  return <Dashboard />;
}
