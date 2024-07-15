import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  Contact,
  ProductDetail,
  ProductList,
  Header
} from "./components/";

function App() {
  return (
   <div>
    <Header/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="products" element={<ProductList />} />
      <Route path="products/999" element={<ProductDetail />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
   </div>
  );
}

export default App;
