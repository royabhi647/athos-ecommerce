interface FilterSortBarProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortOrder: 'normal' | 'high-to-low' | 'low-to-high';
  onSortChange: (sort: 'normal' | 'high-to-low' | 'low-to-high') => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export default function FilterSortBar({
  categories,
  selectedCategory,
  onCategoryChange,
  sortOrder,
  onSortChange,
  searchTerm,
  onSearchChange,
}: FilterSortBarProps) {
  return (
    <div className="flex flex-col md:flex-row gap-x-40 items-start md:items-center gap-4 px-6 py-4 bg-gray-50 border-b">
      <div className="flex flex-col items-start text-sm">
        <span className="text-gray-600 font-medium">Filter</span>
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="border rounded-lg px-4 py-2 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
        >
          <option value="all">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col items-start">
        <span className="text-sm text-gray-600">Sort by</span>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <button
            onClick={() => onSortChange('normal')}
            className={`px-4 py-2 rounded-full transition cursor-pointer ${sortOrder === 'normal'
                ? 'border border-blue-900 text-black'
                : 'border hover:bg-gray-100'
              }`}
          >
            Normal
          </button>
          <button
            onClick={() => onSortChange('high-to-low')}
            className={`px-4 py-2 rounded-full transition cursor-pointer ${sortOrder === 'high-to-low'
                ? 'border border-blue-900 text-black'
                : 'border hover:bg-gray-100'
              }`}
          >
            High to low
          </button>
          <button
            onClick={() => onSortChange('low-to-high')}
            className={`px-4 py-2 rounded-full transition cursor-pointer ${sortOrder === 'low-to-high'
                ? 'border border-blue-900 text-black'
                : 'border hover:bg-gray-100'
              }`}
          >
            Low to high
          </button>
          <div className="relative">
            <input
              type="text"
              placeholder="Search by product name"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="bg-[#FFF] border border-gray-400 rounded-full px-4 py-2 w-80 text-sm placeholder-blue-300 outline-none"
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
      </div>
    </div>
  );
}