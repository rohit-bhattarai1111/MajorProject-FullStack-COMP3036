 /**
 * @file components/Product/ProductCard.tsx
 * @description Product card component that displays individual product information
 * Shows product image, name, price, and add to cart button
 */

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@repo/utils';
import { useCartStore } from '@/store/cart';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({ ...product, quantity: 1 });
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col items-center text-center relative">
      <Link href={`/products/${product.id}`} className="block w-full">
        <div className="relative w-full aspect-[4/3] max-h-48 flex items-center justify-center mb-4 overflow-hidden rounded-lg bg-gray-50">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            priority
          />
        </div>
        <h3 className="text-lg font-bold text-[#1F2937] mb-1 line-clamp-2">{product.name}</h3>
        <p className="text-[#9CA3AF] text-sm mb-2 line-clamp-2">{product.description}</p>
      </Link>
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="text-xl font-extrabold text-[#004225]">${product.price.toFixed(2)}</span>
      </div>
      <button
        onClick={handleAddToCart}
        className="w-full bg-[#004225] text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-[#FFCC00] hover:text-[#004225] transition-colors duration-200"
      >
        Add to Cart
      </button>
    </div>
  );
}