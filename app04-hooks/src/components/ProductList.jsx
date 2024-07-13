import React, { useState, useEffect } from "react";
import "./ProductList.css";

function ProductList() {
  const [Products, setProducts] = useState();
  const [Count, setCount] = useState(0);
  const [Url, setUrl] = useState("http://localhost:3000/products/");

const fetchUrl =()=>{
    fetch(Url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setCount(data.length);
      })
      .catch((e) => console.log("Failed"));
}

  useEffect(() => {
    fetchUrl()
    console.log(55555555555)
  }, [fetchUrl]);

  return (
    <div>
      <div className="product-row">
        <h2>{Count}</h2>
        <button onClick={() => setUrl("http://localhost:3000/products/")}>
          Load All
        </button>
        <button onClick={()=>setUrl("http://localhost:3000/products?in_stock=true")}>Load In Stock</button>
      </div>

      {Products &&
        Products.map((item) => (
          <div key={item.id} className="product-list">
            <div className="product-card">
              <div className="product-id">{item.id}</div>
              <div className="product-title">
                {item.name.length > 30
                  ? item.name.slice(0, 30) + "..."
                  : item.name}
              </div>
              <div className="product-row">
                <div className="product-price">{item.price}</div>
                <div className="product-stock">
                  {item.in_stock=="true" ? "In Stock" : "Unavailable"}
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ProductList;
