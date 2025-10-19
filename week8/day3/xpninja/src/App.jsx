import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import AddProduct from "./components/AddProduct";
import InventoryList from "./components/InventoryList";

export default function App() {
  return (
    <Provider store={store}>
      <div style={{ padding: "2rem" }}>
        <h1>🏬 Store Inventory Management</h1>
        <AddProduct />
        <InventoryList />
      </div>
    </Provider>
  );
}
