import React from "react";
import { Products } from "../products";
const Product = () => {
  return (
    <>
      <div className="product-row">
        {Products.map((product) => {
          return (
            <div key={product.id} className="product-col">
              <div className="head-title">
                <h3>{product.productName}</h3>
              </div>
              <div className="body">
                <div className="product-img">
                  <img src={product.productImage} alt="product-img" />
                </div>
              </div>
              <div className="price">
                <h3>{product.price}</h3>
              </div>
              <div className="description">{product.description}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Product;
