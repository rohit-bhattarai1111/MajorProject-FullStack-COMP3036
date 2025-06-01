/**
 * @file app/page.tsx
 * @description Modern, visually appealing Cricket Store homepage with hero and featured products
 */
'use client';

import { useEffect, useState } from 'react';
import { products } from '@repo/utils';
import ProductCard from '@/components/Product/ProductCard';
import AppLayout from '@/components/Layout/AppLayout';

const FEATURED_COUNT = 1; // Show 1 at a time for a true slider
const SLIDE_INTERVAL = 1000; // 1 second

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % products.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  // Get the featured product(s) for the current slide
  const featured = products.slice(index, index + FEATURED_COUNT);
  if (featured.length < FEATURED_COUNT) {
    featured.push(...products.slice(0, FEATURED_COUNT - featured.length));
  }

  return (
    <AppLayout>
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[520px] flex items-center justify-center bg-[url('/cricket-hero.jpg')] bg-cover bg-center rounded-b-3xl shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 font-poppins drop-shadow-lg">Gear Up Like a Pro</h1>
          <p className="text-lg md:text-2xl mb-8 font-medium text-gray-200">Explore the finest cricket bats, balls, and apparel.</p>
          <a
            href="/products"
            className="inline-block bg-[#FFCC00] text-[#004225] font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-400 transition text-lg font-poppins"
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* Featured Products Carousel */}
      <section className="bg-[#F2F2F2] py-16 px-2">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#1F2937] mb-2 font-poppins">Featured Products</h2>
          <p className="text-center text-[#9CA3AF] mb-10 text-lg">Our top-selling premium cricket gear.</p>
          <div className="flex justify-center items-center transition-all duration-500 min-h-[420px]">
            {featured.map((product) => (
              <div key={product.id} className="w-full max-w-xs mx-auto animate-fade-in">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
