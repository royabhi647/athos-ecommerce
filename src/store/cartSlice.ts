import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  qty: number;
}

interface CartState {
  items: CartItem[];
  totalPrice: number;
}

const calculateTotal = (items: CartItem[]) =>
  items.reduce((sum, item) => sum + item.price * item.qty, 0);

const initialState: CartState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, 'qty'>>) => {
      const existing = state.items.find(item => item.id === action.payload.id);
      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({ ...action.payload, qty: 1 });
      }
      state.totalPrice = calculateTotal(state.items);
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      state.totalPrice = calculateTotal(state.items);
    },

    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },

    updateQuantity: (state, action: PayloadAction<{ id: number; qty: number }>) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.qty = action.payload.qty;
        if (item.qty <= 0) {
          state.items = state.items.filter(i => i.id !== action.payload.id);
        }
      }
      state.totalPrice = calculateTotal(state.items);
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;