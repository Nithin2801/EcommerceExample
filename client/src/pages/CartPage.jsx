import React from "react";
import { useNavigate } from "react-router-dom";  //for navigation
import { useCart } from "../context/CartContext";

function CartPage() {
  const { cart, removeFromCart, clearCart, totalPrice } = useCart();
  const navigate = useNavigate(); //to navigate to checkout

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                borderBottom: "1px solid #ddd",
                marginBottom: "1rem",
                paddingBottom: "1rem",
              }}
            >
              <h3>{item.name}</h3>
              <p>₹{item.price} × {item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}

          <h3>Total: ₹{totalPrice.toFixed(2)}</h3>

          <div style={{ marginTop: "1rem" }}>
            <button
              onClick={clearCart}
              style={{
                marginRight: "10px",
                backgroundColor: "#dc3545",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Clear Cart
            </button>

            {/*Proceed to Checkout button */}
            <button
              onClick={() => navigate("/checkout")}
              style={{
                backgroundColor: "#007bff",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
