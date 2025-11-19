import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';

export default function Header() {
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

  return (
    <header className="bg-blue-900 text-white py-4 px-6 flex justify-between items-center sticky top-0 z-10 shadow-lg">
      <div className="flex items-center gap-3">
        <div className="bg-blue-700 rounded-full w-10 h-10 flex items-center justify-center font-bold">
          SS
        </div>
        <input
          type="text"
          placeholder="Show products based on search"
          className="hidden md:block bg-blue-800 rounded-full px-4 py-2 w-80 text-sm placeholder-blue-300 outline-none"
        />
      </div>
      <div className="flex items-center gap-2">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <span className="font-semibold">Total Price ${totalPrice.toFixed(2)}</span>
      </div>
    </header>
  );
}