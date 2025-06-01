// apps/web/src/components/Cart/CartItemList.tsx
import { useCartStore } from '@/store/cart';
import CartItem from './CartItem';

export default function CartItemList() {
  const { items } = useCartStore();
  if (!items.length) {
    return <div className="text-center text-gray-500 py-12">Your cart is empty.</div>;
  }
  return (
    <div>
      {items.map(item => <CartItem key={item.id} item={item} />)}
    </div>
  );
}