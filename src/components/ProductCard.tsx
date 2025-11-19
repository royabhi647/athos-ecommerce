// src/components/ProductCard.tsx
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import type { Product } from '../types/product';

export default function ProductCard({ product }: { product: Product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="h-64 bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full max-w-full object-contain p-4"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.title}</h3>

        <div className="flex items-center gap-2 mb-3">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span key={i}>
                {i < Math.floor(product.rating.rate) ? '★' : '☆'}
              </span>
            ))}
          </div>
          <span className="text-sm text-gray-600">({product.rating.count})</span>
        </div>

        <div className="mb-4">
          <span className="font-bold text-xl">${product.price.toFixed(2)}</span>
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full bg-blue-900 text-white py-3 rounded-lg font-medium hover:bg-blue-800 transition"
        >
          ADD TO BAG
        </button>
      </div>
    </div>
  );
}