import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../features/cart/cartSlice";

export default function ShoppingCart() {
  const { items } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const total = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {items.length === 0 ? <p>Cart is empty</p> : (
        <ul>
          {items.map(item => (
            <li key={item.product.id}>
              <span>{item.product.title} - ${item.product.price} x </span>
              <input 
                type="number" 
                value={item.quantity} 
                min={1} 
                onChange={e => dispatch(updateQuantity({ productId: item.product.id, quantity: Number(e.target.value) }))}
              />
              <button onClick={() => dispatch(removeFromCart(item.product.id))}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}
