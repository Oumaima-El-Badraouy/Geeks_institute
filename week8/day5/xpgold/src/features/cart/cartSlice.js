import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Headphones", price: 150 },
  ],
  cart: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.cart.find(item => item.id === product.id);
      if (!existing) {
        state.cart.push({ ...product, quantity: 1 });
      } else {
        existing.quantity += 1;
      }
    }
  }
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
