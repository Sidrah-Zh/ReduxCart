import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import CheckoutPage from "./pages/checkOutPage";
import HomePage from "./pages/homePage";
import ProductPage from "./pages/productPage";
import Header from "../src/components/header";
function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
