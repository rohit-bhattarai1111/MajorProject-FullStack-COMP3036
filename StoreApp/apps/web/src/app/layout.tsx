/**
 * @file app/layout.tsx
 * @description Root layout for the Next.js app. Wraps all pages with <html> and <body> tags as required.
 */

import './globals.css';
import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
} 