import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem('items')) || [],
  itemCount: localStorage.getItem('itemCount') || 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
      state.itemCount++;
      localStorage.setItem('items', JSON.stringify(state.items));
      localStorage.setItem('itemCount', state.itemCount);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.itemCount--;
      localStorage.setItem('items', JSON.stringify(state.items));
      localStorage.setItem('itemCount', state.itemCount);
    },
  },
});

export const { addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;
