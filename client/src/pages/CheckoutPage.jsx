import React, { useState } from "react";
import { useCart } from "../context/CartContext";

function CheckoutPage() {
  const { cart, clearCart, totalPrice } = useCart();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleCheckout = async () => {
    if (cart.length === 0) return alert("Your cart is empty!");

    setLoading(true);

    try {
      const orderData = {
        user_email: "demo@example.com", // later replace with logged-in user's email
        items: cart,
        total: totalPrice,
      };

      const response = await fetch("http://localhost:5000/api/orders/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      const data = await response.json();
      console.log("Order Response:", data);

      if (response.ok) {
        setSuccess(true);
        clearCart();
      } else {
        alert("Failed to place order!");
      }
    } catch (error) {
      console.error("Checkout Error:", error);
      alert("Server error!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Checkout</h2>

      {success ? (
        <div>
          <h3>Order placed successfully!</h3>
          <p>Your order has been saved in the database.</p>
        </div>
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
              <p>
                ₹{item.price}x{item.quantity}
              </p>
            </div>
          ))}

          <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
          <button onClick={handleCheckout} disabled={loading}>
            {loading ? "Processing..." : "Place Order"}
          </button>
        </>
      )}
    </div>
  );
}

export default CheckoutPage;
