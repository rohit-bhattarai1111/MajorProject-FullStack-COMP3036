import { products } from '@repo/utils';
import ProductDetail from '@/components/Product/Detail';

interface Props {
  params: { id: string };
}

export default function ProductDetailPage({ params }: Props) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return <div className="text-center py-20 text-2xl">Product not found.</div>;
  }

  return <ProductDetail product={product} />;
} 