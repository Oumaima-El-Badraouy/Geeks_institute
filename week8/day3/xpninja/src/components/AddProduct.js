import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/inventorySlice";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!name || !quantity) return alert("Fill in all fields!");
    dispatch(addProduct({ name, quantity: Number(quantity) }));
    setName("");
    setQuantity("");
  };

  return (
    <div>
      <h3>Add Product</h3>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
