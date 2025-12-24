import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cart } = useCart();

  // Count total items (including quantity)
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        background: "#333",
        color: "white",
        position: "relative",
      }}
    >
      <h2>E-Commerce</h2>

      <div style={{ display: "flex", alignItems: "center" }}>
        <Link to="/" style={{ color: "white", marginRight: "1rem" }}>
          Home
        </Link>

        {/* Cart Link with Badge */}
        <div style={{ position: "relative", marginRight: "1rem" }}>
          <Link to="/cart" style={{ color: "white" }}>
            Cart
          </Link>
          {cartCount > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-8px",
                right: "-10px",
                background: "red",
                color: "white",
                borderRadius: "50%",
                padding: "2px 6px",
                fontSize: "12px",
              }}
            >
              {cartCount}
            </span>
          )}
        </div>

        <Link to="/admin" style={{ color: "white", marginRight: "1rem" }}>
          Admin
        </Link>
        <Link to="/login" style={{ color: "white", marginRight: "1rem" }}>
          Login
        </Link>
        <Link to="/register" style={{ color: "white" }}>
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
