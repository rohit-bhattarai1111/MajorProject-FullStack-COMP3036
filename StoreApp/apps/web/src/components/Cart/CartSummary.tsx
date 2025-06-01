import { useCartStore } from '@/store/cart';

interface CartSummaryProps {
  onProceed: () => void;
}

export default function CartSummary({ onProceed }: CartSummaryProps) {
  const { items } = useCartStore();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="sticky top-24 bg-white rounded-xl shadow p-6 flex flex-col gap-4 min-w-[280px]">
      <div className="text-xl font-bold mb-2">Cart Summary</div>
      <div className="flex justify-between">
        <span>Total Items:</span>
        <span>{totalItems}</span>
      </div>
      <div className="flex justify-between font-semibold">
        <span>Subtotal:</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <button
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors"
        onClick={onProceed}
        disabled={items.length === 0}
      >
        Proceed to Payment
      </button>
    </div>
  );
}



