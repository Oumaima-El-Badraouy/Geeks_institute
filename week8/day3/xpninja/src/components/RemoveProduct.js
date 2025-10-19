import React from "react";
import { useDispatch } from "react-redux";
import { removeProduct } from "../redux/inventorySlice";

export default function RemoveProduct({ productId }) {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(removeProduct(productId))}>Remove</button>;
}
