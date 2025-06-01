/**
 * @file components/Layout/AppLayout.tsx
 * @description Main layout component that wraps the entire application
 * Provides consistent layout structure with header, main content area, and footer
 */

'use client';

import { ReactNode } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}