const express = require("express");
const router = express.Router();
const { addProduct, getProducts } = require("../controllers/productController");
// const { getAllProducts } = require("../controllers/productController"); if I want add more products

// Routes
router.post("/", addProduct);  // Add product
router.get("/", getProducts);  // Get all products
// router.get("/", getAllProducts);

module.exports = router;
