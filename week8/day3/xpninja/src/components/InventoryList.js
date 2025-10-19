import React from "react";
import { useSelector } from "react-redux";
import UpdateQuantity from "./UpdateQuantity";
import RemoveProduct from "./RemoveProduct";

export default function InventoryList() {
  const products = useSelector((state) => state.inventory.products);

  return (
    <div>
      <h3>Inventory List</h3>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - Quantity: {product.quantity}
            <UpdateQuantity product={product} />
            <RemoveProduct productId={product.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}
