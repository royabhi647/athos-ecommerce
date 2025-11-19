// src/components/ProductGrid.tsx
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import type { Product } from '../types/product';

export default function ProductGrid() {
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

  if (loading) {
    return (
      <div className="px-6 py-20 text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-900 border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return <div className="px-6 py-20 text-center text-red-600">{error}</div>;
  }

  return (
    <div className="px-6 py-8">
      <h2 className="text-2xl font-bold mb-6">Products</h2>
      <p className="text-gray-600 mb-8">All Categories</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}