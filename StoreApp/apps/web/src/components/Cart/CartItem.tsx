import Image from 'next/image';
import { CartItem as CartItemType, useCartStore } from '@/store/cart';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { removeItem, updateQuantity } = useCartStore();

  return (
    <div className="flex items-center gap-4 bg-white rounded-xl shadow p-4 mb-4 hover:shadow-lg transition-shadow">
      <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-lg object-contain bg-gray-50" />
      <div className="flex-1">
        <div className="font-semibold text-lg">{item.name}</div>
        <div className="text-gray-500 text-sm">${item.price.toFixed(2)} per unit</div>
        <div className="flex items-center gap-2 mt-2">
          <button
            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
          >-</button>
          <span className="px-2">{item.quantity}</span>
          <button
            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >+</button>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2">
        <div className="font-bold text-blue-700">${(item.price * item.quantity).toFixed(2)}</div>
        <button
          className="text-red-500 hover:text-red-700 text-xl"
          onClick={() => removeItem(item.id)}
          aria-label="Remove item"
        >🗑️</button>
      </div>
    </div>
  );
}
