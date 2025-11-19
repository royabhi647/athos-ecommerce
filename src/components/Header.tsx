import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';

interface HeaderProps {
  headerSearchTerm: string;
  onHeaderSearchChange: (term: string) => void;
}

export default function Header({ headerSearchTerm, onHeaderSearchChange }: HeaderProps) {
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const itemCount = useSelector((state: RootState) => 
    state.cart.items.reduce((sum, item) => sum + item.qty, 0)
  );

  return (
    <header className="bg-[#334685] text-white py-4 px-6 flex justify-between items-center sticky top-0 z-10 shadow-lg">
      <div className="flex items-center gap-20">
        <div className="bg-[#FFF] text-[#695CDA] rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg ml-2">
          SS
        </div>
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Show products based on search"
            value={headerSearchTerm}
            onChange={(e) => onHeaderSearchChange(e.target.value)}
            className="bg-[#FFF] text-black rounded-full px-4 py-2 w-[380px] md:w-[460px] text-sm placeholder-blue-300 outline-none"
          />
          <svg
            className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-blue-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
              {itemCount}
            </span>
          )}
        </div>
        <span className="font-semibold">Total Price: ${totalPrice.toFixed(2)}</span>
      </div>
    </header>
  );
}