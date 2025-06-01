/**
 * @file components/Product/Product.tsx
 * @description Renders a single product summary in the product list page
 * Shows the product image, name, price, and a button to view the product details
 */

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product as ProductType } from '@repo/utils';

interface ProductProps {
  product: ProductType;
}

export default function Product({ product }: ProductProps) {
  return (
    <div className="relative flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group border border-gray-100">
      {/* SALE badge for demo */}
      <span className="absolute top-4 left-4 z-10 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">SALE</span>
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative w-full h-64 bg-gray-50 flex items-center justify-center overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            priority
          />
        </div>
      </Link>
      <div className="flex-1 flex flex-col p-6 items-center text-center">
        <Link href={`/products/${product.id}`}>
          <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors line-clamp-2 min-h-[48px]">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2 min-h-[40px]">{product.description}</p>
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-xl font-extrabold text-blue-700">${product.price.toFixed(2)}</span>
        </div>
        <Link
          href={`/products/${product.id}`}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold shadow transition-colors duration-200 mt-auto"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
