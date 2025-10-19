import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import AuthForm from "./components/AuthForm";
import ProductListing from "./components/ProductListing";
import ShoppingCart from "./components/ShoppingCart";

export default function App() {
  return (
    <Provider store={store}>
      <div style={{ padding: "2rem" }}>
        <h1>🛒 Simulated E-Commerce Platform</h1>
        <AuthForm />
        <ProductListing />
        <ShoppingCart />
      </div>
    </Provider>
  );
}
