import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../features/products/productSlice";
import { addToCart } from "../features/cart/cartSlice";

export default function ProductListing() {
  const { items, loading, error } = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      {items.map(product => (
        <div key={product.id} style={{ border: "1px solid #ccc", padding: "1rem", width: "200px" }}>
          <img src={product.image} alt={product.title} style={{ width: "100%", height: "150px", objectFit: "contain" }} />
          <h4>{product.title}</h4>
          <p>${product.price}</p>
          <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
