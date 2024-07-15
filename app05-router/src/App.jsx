import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  Contact,
  ProductDetail,
  ProductList,
} from "./components/";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="products" element={<ProductList />} />
      <Route path="products/999" element={<ProductDetail />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
