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
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
