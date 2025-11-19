export default function FilterSortBar() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-6 py-4 bg-gray-50 border-b">
      <div className="flex items-center gap-4 text-sm">
        <span className="text-gray-600">Filter</span>
        <select className="border rounded-lg px-4 py-2 text-gray-700">
          <option>Men's clothing</option>
          <option>Women's clothing</option>
          <option>Skincare</option>
        </select>
      </div>

      <div className="flex flex-wrap items-center gap-3 text-sm">
        <button className="px-4 py-2 bg-blue-900 text-white rounded-full">Normal</button>
        <button className="px-4 py-2 border rounded-full hover:bg-gray-100">High to low</button>
        <button className="px-4 py-2 border rounded-full hover:bg-gray-100">Low to high</button>
        <input
          type="text"
          placeholder="Search by product name"
          className="border rounded-full px-4 py-2 text-sm w-48"
        />
      </div>
    </div>
  );
}