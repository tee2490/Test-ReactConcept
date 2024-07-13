import React, { useEffect, useState } from "react";
import "./ProductList.css";
import { useFetch } from "../hooks/useFetch";
import BounceLoader  from "react-spinners/BounceLoader";

function ProductList() {
  const [Url, setUrl] = useState("http://localhost:3000/products/");
  const { data: Products,Loading } = useFetch(Url);

  if (Loading) return  <BounceLoader color="green"/> 

  return (
    <div>
      <div className="product-row">
        <h2>{Products && Products.length}</h2>
        <button onClick={() => setUrl("http://localhost:3000/products/")}>
          Load All
        </button>
        <button
          onClick={() => setUrl("http://localhost:3000/products?in_stock=true")}
        >
          Load In Stock
        </button>
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
                  {item.in_stock == "true" ? "In Stock" : "Unavailable"}
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ProductList;
