const db = require("../config/db");

const Product = {
  getAll: async () => {
    const [rows] = await db.query("SELECT * FROM products");
    return rows;
  },
  create: async (product) => {
    const { name, price, description } = product;
    const [result] = await db.query(
      "INSERT INTO products (name, price, description) VALUES (?, ?, ?)",
      [name, price, description]
    );
    return result.insertId;
  }
};

module.exports = Product;
