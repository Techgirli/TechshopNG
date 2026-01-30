import React, { useState, useEffect } from "react";
import { getProducts } from "../api";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await getProducts();
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ₦{p.price} <br />
            {p.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
