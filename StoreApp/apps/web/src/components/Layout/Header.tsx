/**
 * @file components/Layout/Header.tsx
 * @description Sticky, responsive navbar with logo, navigation, cart icon, and mobile menu
 */

'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useCartStore, CartItem } from '@/store/cart';
import { useState } from 'react';
import NavBar from '@/components/Menu/NavBar';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default NavBar; 