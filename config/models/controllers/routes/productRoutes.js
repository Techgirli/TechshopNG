const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const { getProducts, addProduct } = require("../controllers/productController");

// Public routes
router.get("/", productController.getProducts);

// Admin routes
router.post("/", productController.addProduct);

module.exports = router;
