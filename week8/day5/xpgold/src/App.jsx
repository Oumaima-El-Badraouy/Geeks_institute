import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import ShoppingCart from "./components/ShoppingCart";

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>🛒 Shopping Cart Selector</h1>
        <ShoppingCart />
      </div>
    </Provider>
  );
}
