import { useState } from "react";

export default function Sidebar() {
  const [menuActive, setMenuActive] = useState<number>(0)
  return (
    <aside className="hidden md:block w-24 bg-[#334685] text-white fixed left-0 top-16 h-[calc(100vh-4rem)]">
      <nav className="flex flex-col items-center gap-4">
        <button className={`flex flex-col items-center gap-2 text-center px-4 py-3 w-full cursor-pointer ${menuActive == 0 ? "bg-[#223165]" : ""}`} onClick={() => setMenuActive(0)}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
          <span className="text-xs">Products</span>
        </button>

        <button className={`flex flex-col items-center gap-2 text-center px-4 py-3 w-full cursor-pointer ${menuActive == 1 ? "bg-[#223165]" : ""}`} onClick={() => setMenuActive(1)}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
          <span className="text-xs">Bundle</span>
        </button>
      </nav>
    </aside>
  );
}