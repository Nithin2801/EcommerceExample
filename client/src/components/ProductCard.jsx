import React from "react";
import "../styles/products.css";

const ProductCard = ({ product }) => {

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="product-card">
      {product.image && <img src={product.image} alt={product.name} />}
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><b>₹{product.price}</b></p>
      <button onClick={addToCart} className="btn-add">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
