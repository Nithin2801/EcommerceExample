// server/routes/userRoutes.js
const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/userController");
const verifyToken = require("../middleware/authMiddleWare");

// Public routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected route (requires valid token)
router.get("/protected", verifyToken, (req, res) => {
  res.json({ message: "Access granted to protected route" });
});

module.exports = router;
