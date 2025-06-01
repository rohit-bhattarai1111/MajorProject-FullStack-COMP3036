import { products } from '@repo/utils';
import ProductCard from '@/components/Product/ProductCard';
import AppLayout from '@/components/Layout/AppLayout';

export default function ProductsPage() {
  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-extrabold mb-8 text-center font-poppins">All Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
