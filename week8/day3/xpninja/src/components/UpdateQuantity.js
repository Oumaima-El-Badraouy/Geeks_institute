import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateQuantity } from "../redux/inventorySlice";

export default function UpdateQuantity({ product }) {
  const [quantity, setQuantity] = useState(product.quantity);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(updateQuantity({ id: product.id, quantity: Number(quantity) }));
  };

  return (
    <div>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}
