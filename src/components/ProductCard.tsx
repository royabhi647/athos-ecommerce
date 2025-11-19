import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../store/cartSlice';
import type { Product } from '../types/product';
import type { RootState } from '../store/store';

export default function ProductCard({ product }: { product: Product }) {
  const dispatch = useDispatch();
  const isInCart = useSelector((state: RootState) =>
    state.cart.items.some(item => item.id === product.id)
  );

  const handleCartAction = () => {
    if (isInCart) {
      dispatch(removeFromCart(product.id));
    } else {
      dispatch(addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      }));
    }
  };

  const truncateTitle = (title: string, maxLength: number = 60) => {
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + '...';
    }
    return title;
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
      <div className="h-64 bg-gray-50 flex items-center justify-center p-4 flex-shrink-0">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-semibold text-lg mb-2 uppercase tracking-wide text-sm">
          {truncateTitle(product.title)}
        </h3>

        <div className="flex items-center gap-2 mb-3">
          <div className="flex text-yellow-400 text-sm">
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
          onClick={handleCartAction}
          className={`w-full py-3 rounded-lg font-medium transition mt-auto cursor-pointer ${
            isInCart
              ? 'bg-red-600 hover:bg-red-700 text-white'
              : 'bg-white border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
          }`}
        >
          {isInCart ? 'REMOVE FROM BAG' : 'ADD TO BAG'}
        </button>
      </div>
    </div>
  );
}