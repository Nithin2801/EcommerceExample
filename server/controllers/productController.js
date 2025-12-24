const db = require("../db"); 

// Add Product
exports.addProduct = (req, res) => {
  const { name, description, price, image } = req.body;
  if (!name || !description || !price) {
    return res.status(400).json({ message: "All fields required" });
  }

  const sql = "INSERT INTO products (name, description, price, image) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, description, price, image], (err, result) => {
    if (err) {
      console.error("Error adding product:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.status(201).json({ message: "Product added successfully!" });
  });
};

// Get All Products
exports.getProducts = (req, res) => {
  const sql = "SELECT * FROM products ORDER BY id DESC";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching products:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.status(200).json(results);
  });
};
