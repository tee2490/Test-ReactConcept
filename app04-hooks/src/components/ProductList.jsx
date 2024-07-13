import React, { useState, useEffect } from "react";
import "./ProductList.css";

function ProductList() {
  const [Products, setProducts] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/products/")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((e) => console.log("Failed"));
  }, []);

  return (
    <div>
      {Products &&
        Products.map((item) => (
          <div className="product-list">
            <div className="product-card">
              <div className="product-id">{item.id}</div>
              <div className="product-title">{item.name.length > 30 ? item.name.slice(0,30)+"...":item.name}</div>
              <div className="product-row">
                <div className="product-price">{item.price}</div>
                <div className="product-stock">{item.in_stock ? "In Stock" : "Unavailable"}</div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ProductList;
