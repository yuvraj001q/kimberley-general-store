import type { Metadata } from 'next';
import './globals.css';
import { AuthProvider } from '@/context/AuthContext';

export const metadata: Metadata = {
  title: 'Kimberley General Store — Heart of the Beaver Valley Since 1905',
  description: 'A historic gathering place for locals, cyclists, hikers, and visitors exploring Old Baldy and the Beaver Valley.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
