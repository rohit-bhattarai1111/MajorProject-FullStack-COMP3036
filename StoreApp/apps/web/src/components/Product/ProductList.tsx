'use client';

import { Product } from '@repo/utils';
import ProductCard from './Product';

interface ProductListProps {
  products: Product[];
  isLoading?: boolean;
}

export default function ProductList({ products, isLoading = false }: ProductListProps) {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!products.length) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-900">No products found</h2>
        <p className="mt-2 text-gray-600">Please check back later for new products.</p>
      </div>
    );
  }

  return (
    <section>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2 tracking-tight">Featured Products</h2>
        <p className="text-gray-500 text-lg">Browse our curated selection of premium cricket gear.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}