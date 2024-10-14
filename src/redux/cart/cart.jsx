import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
