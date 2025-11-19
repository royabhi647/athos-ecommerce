import { useEffect, useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import type { Product } from '../types/product';

interface ProductGridProps {
  selectedCategory: string;
  sortOrder: 'normal' | 'high-to-low' | 'low-to-high';
  searchTerm: string;
}

export default function ProductGrid({ selectedCategory, sortOrder, searchTerm }: ProductGridProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then((data: Product[]) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load products');
        setLoading(false);
        console.error(err);
      });
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'all') {
      result = result.filter(product => product.category === selectedCategory);
    }

    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase();
      result = result.filter(product =>
        product.title.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower) ||
        product.category.toLowerCase().includes(searchLower)
      );
    }

    if (sortOrder === 'high-to-low') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOrder === 'low-to-high') {
      result.sort((a, b) => a.price - b.price);
    }

    return result;
  }, [products, selectedCategory, sortOrder, searchTerm]);

  if (loading) {
    return (
      <div className="px-6 py-20 text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-900 border-t-transparent"></div>
        <p className="mt-4 text-gray-600">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="px-6 py-20 text-center">
        <div className="text-red-600 text-lg mb-4">{error}</div>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="px-6 py-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Products</h2>
        <p className="text-gray-600">
          {selectedCategory === 'all'
            ? 'All Categories'
            : selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
        </p>
        <p className="text-sm text-gray-500 mt-1">
          {filteredAndSortedProducts.length} product{filteredAndSortedProducts.length !== 1 ? 's' : ''} found
        </p>
      </div>

      {filteredAndSortedProducts.length === 0 ? (
        <div className="text-center py-20">
          <svg
            className="w-24 h-24 mx-auto text-gray-300 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
          <p className="text-gray-500">Try adjusting your filters or search term</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAndSortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}