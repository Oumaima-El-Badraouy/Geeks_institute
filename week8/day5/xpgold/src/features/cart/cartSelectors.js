import { createSelector } from "@reduxjs/toolkit";

export const selectProducts = state => state.cart.products;
export const selectCartItems = state => state.cart.cart;

export const calculateTotalPrice = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
);
