'use client';

import { useState } from 'react';
import AppLayout from '@/components/Layout/AppLayout';
import CartItemList from '@/components/Cart/CartItemList';
import CartSummary from '@/components/Cart/CartSummary';
import PaymentModal from '@/components/Cart/PaymentModal';

export default function CartPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <AppLayout>
      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto py-10 px-2">
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
          <CartItemList />
        </div>
        <div className="lg:w-1/3 w-full">
          <CartSummary onProceed={() => setShowModal(true)} />
        </div>
      </div>
      <PaymentModal open={showModal} onClose={() => setShowModal(false)} />
    </AppLayout>
  );
}



