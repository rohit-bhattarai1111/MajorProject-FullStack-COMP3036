/**
 * @file components/Product/Detail.tsx
 * @description Enhanced product detail page with appealing, responsive card layout and hover effects.
 */

'use client';

import Image from 'next/image';
import { Product } from '@repo/utils';
import { useCartStore } from '@/store/cart';
import Link from 'next/link';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({ ...product, quantity: 1 });
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-gradient-to-br from-blue-50 to-white py-10">
      <div
        className="
          flex flex-col lg:flex-row gap-8
          bg-white rounded-3xl shadow-xl
          hover:shadow-2xl transition-shadow duration-300
          p-8 max-w-5xl w-full
          group
        "
        tabIndex={0}
      >
        {/* Product Image Card */}
        <div
          className="
            flex-1 flex items-center justify-center
            rounded-2xl overflow-hidden
            bg-gray-100
            transition-transform duration-300 group-hover:scale-105
          "
        >
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="object-contain w-full h-80"
            priority
          />
        </div>

        {/* Product Info Card */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{product.name}</h1>
            <p className="text-lg text-gray-600 mb-4">{product.description}</p>
            <span className="inline-block text-2xl font-bold text-blue-700 mb-6">${product.price.toFixed(2)}</span>
          </div>
          <div className="flex flex-col gap-4">
            <button
              onClick={handleAddToCart}
              className="
                w-full bg-blue-600 text-white px-6 py-3 rounded-xl
                font-semibold text-lg shadow hover:bg-blue-700
                transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400
              "
            >
              Add to Cart
            </button>
            <Link
              href="/"
              className="
                w-full text-center bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-xl
                font-semibold text-lg shadow hover:bg-blue-50
                transition-colors duration-200
              "
            >
              Back to Products
            </Link>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-6">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Product Details</h3>
            <p className="text-sm text-gray-600">Product ID: {product.id}</p>
            {/* Add more product details as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}