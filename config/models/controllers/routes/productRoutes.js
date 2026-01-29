const express = require("express");
const router = express.Router();
const { getProducts, addProduct } = require("../controllers/productController");

// Public routes
router.get("/", getProducts);

// Admin routes
router.post("/", addProduct);

module.exports = router;
