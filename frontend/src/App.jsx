import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">TechShop</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h2>Upgrade Your Tech Life</h2>
        <p>Your one-stop shop for premium tech gadgets.</p>
        <div className="hero-buttons">
          <Link to="/products" className="btn primary">Shop Now</Link>
          <Link to="/cart" className="btn secondary">View Cart</Link>
        </div>
      </div>
    </div>
  );
}

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then(res => setProducts(res.data));
  }, []);

  return (
    <div className="products">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map(p => (
          <div key={p._id} className="product-card">
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <span>₦{p.price}</span>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function Cart() {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <p>Cart functionality coming soon.</p>
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
