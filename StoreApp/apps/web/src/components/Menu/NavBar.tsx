import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useCartStore, CartItem } from '@/store/cart';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

export default function NavBar() {
  const { items } = useCartStore();
  const itemCount = items.reduce((sum: number, item: CartItem) => sum + item.quantity, 0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-[#004225] shadow-md font-poppins">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-2xl font-extrabold text-[#FFCC00] tracking-tight">
          <span className="inline-block">🏏</span>
          Cricket Store
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-white hover:text-[#FFCC00] font-medium transition-colors">
              {link.label}
            </Link>
          ))}
          <Link href="/cart" className="relative">
            <ShoppingCart className="h-7 w-7 text-white hover:text-[#FFCC00]" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#FFCC00] text-[#004225] text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
        {/* Mobile Hamburger */}
        <button className="md:hidden flex items-center" onClick={() => setMenuOpen((v) => !v)} aria-label="Open menu">
          <svg className="w-7 h-7 text-[#FFCC00]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#004225] shadow-md md:hidden animate-fade-in z-40">
            <div className="flex flex-col gap-2 py-4 px-6">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-white hover:text-[#FFCC00] font-medium py-2" onClick={() => setMenuOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <Link href="/cart" className="flex items-center gap-2 text-white hover:text-[#FFCC00] font-medium py-2" onClick={() => setMenuOpen(false)}>
                <ShoppingCart className="h-6 w-6" />
                Cart
                {itemCount > 0 && (
                  <span className="ml-2 bg-[#FFCC00] text-[#004225] text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                    {itemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
} 