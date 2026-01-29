const Product = require("../models/productModel");

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.getAll();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

exports.addProduct = async (req, res) => {
  try {
    const id = await Product.create(req.body);
    res.status(201).json({ message: "Product added", id });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};
