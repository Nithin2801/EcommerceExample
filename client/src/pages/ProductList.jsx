import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();


  // Fetch products when component loads
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Our Products</h2>
      {products.length === 0 ? (
        <p>No products available yet</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "1rem",
                textAlign: "center",
              }}
            >
              {product.image && (
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: "100%", height: "160px", objectFit: "cover" }}
                />
              )}
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>
                <strong>₹{product.price}</strong>
              </p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
