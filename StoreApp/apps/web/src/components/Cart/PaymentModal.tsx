import { useState } from 'react';
import { useCartStore } from '@/store/cart';

interface PaymentModalProps {
  open: boolean;
  onClose: () => void;
}

export default function PaymentModal({ open, onClose }: PaymentModalProps) {
  const [method, setMethod] = useState<'paypal' | 'credit' | 'mastercard' | null>(null);
  const [form, setForm] = useState({ email: '', card: '', name: '', expiry: '', cvv: '' });
  const [success, setSuccess] = useState(false);
  const clearCart = useCartStore((s) => s.clearCart);

  if (!open) return null;

  const handleConfirm = () => {
    setSuccess(true);
    clearCart();
    setTimeout(onClose, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md relative">
        <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-700" onClick={onClose}>✕</button>
        <h2 className="text-2xl font-bold mb-4">Choose Payment Method</h2>
        {success ? (
          <div className="text-green-600 text-xl font-semibold flex items-center gap-2">
            ✅ Payment Successful!
          </div>
        ) : (
          <>
            <div className="flex gap-3 mb-4">
              <button
                className={`flex-1 py-2 rounded-lg border ${method === 'paypal' ? 'bg-blue-100 border-blue-500' : 'border-gray-200'}`}
                onClick={() => setMethod('paypal')}
              >PayPal</button>
              <button
                className={`flex-1 py-2 rounded-lg border ${method === 'credit' ? 'bg-blue-100 border-blue-500' : 'border-gray-200'}`}
                onClick={() => setMethod('credit')}
              >Credit Card</button>
              <button
                className={`flex-1 py-2 rounded-lg border ${method === 'mastercard' ? 'bg-blue-100 border-blue-500' : 'border-gray-200'}`}
                onClick={() => setMethod('mastercard')}
              >MasterCard</button>
            </div>
            {method === 'paypal' && (
              <input
                type="email"
                placeholder="PayPal Email"
                className="w-full border rounded-lg px-3 py-2 mb-4"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              />
            )}
            {(method === 'credit' || method === 'mastercard') && (
              <div className="flex flex-col gap-2 mb-4">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full border rounded-lg px-3 py-2"
                  value={form.card}
                  onChange={e => setForm(f => ({ ...f, card: e.target.value }))}
                />
                <input
                  type="text"
                  placeholder="Name on Card"
                  className="w-full border rounded-lg px-3 py-2"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                />
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="flex-1 border rounded-lg px-3 py-2"
                    value={form.expiry}
                    onChange={e => setForm(f => ({ ...f, expiry: e.target.value }))}
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="flex-1 border rounded-lg px-3 py-2"
                    value={form.cvv}
                    onChange={e => setForm(f => ({ ...f, cvv: e.target.value }))}
                  />
                </div>
              </div>
            )}
            <button
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition-colors"
              onClick={handleConfirm}
              disabled={!method || (method === 'paypal' && !form.email) || ((method === 'credit' || method === 'mastercard') && (!form.card || !form.name || !form.expiry || !form.cvv))}
            >
              Confirm Payment
            </button>
          </>
        )}
      </div>
    </div>
  );
}



