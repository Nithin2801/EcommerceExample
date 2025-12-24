const db = require("../db");

exports.createOrder = (req, res) => {
  const { user_email, items, total } = req.body;

  if (!user_email || !items || !total) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const sql = "INSERT INTO orders (user_email, items, total) VALUES (?, ?, ?)";
  db.query(sql, [user_email, JSON.stringify(items), total], (err, result) => {
    if (err) {
      console.error("Error saving order:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.json({ message: "Order saved successfully", orderId: result.insertId });
  });
};

exports.getOrders = (req, res) => {
  const { user_email } = req.query;
  const sql = "SELECT * FROM orders WHERE user_email = ?";
  db.query(sql, [user_email], (err, results) => {
    if (err) {
      console.error("Error fetching orders:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.json(results);
  });
};
