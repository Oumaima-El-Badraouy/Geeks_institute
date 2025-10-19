import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { selectProducts, selectCartItems, calculateTotalPrice } from "../features/cart/cartSelectors";

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(calculateTotalPrice);

  const handleAddToCart = useCallback(
    (product) => {
      dispatch(addToCart(product));
    },
    [dispatch]
  );

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button style={{ marginLeft: "1rem" }} onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>

      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} x {item.quantity} = ${item.price * item.quantity}
            </li>
          ))}
        </ul>
      )}

      <h3>Total: ${totalPrice}</h3>
    </div>
  );
}
