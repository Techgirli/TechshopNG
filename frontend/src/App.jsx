import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Navbar() {
  return (
    <nav className="p-4 shadow flex justify-between">
      <h1 className="text-xl font-bold">TechShop</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <div className="p-8 text-center">
      <h2 className="text-3xl font-semibold">Welcome to TechShop</h2>
      <p className="mt-4">Your one-stop shop for tech gadgets.</p>
    </div>
  );
}

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then(res => setProducts(res.data));
  }, []);

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map(p => (
        <div key={p._id} className="border p-4 rounded shadow">
          <h3 className="font-semibold">{p.name}</h3>
          <p className="text-sm">{p.description}</p>
          <p className="mt-2 font-bold">₦{p.price}</p>
          <button className="mt-3 bg-black text-white px-4 py-2 rounded">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

function Cart() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold">Your Cart</h2>
      <p className="mt-4">Cart functionality coming soon.</p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}
