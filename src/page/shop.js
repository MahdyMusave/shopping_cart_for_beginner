import React from "react";
import { Products } from "../products";
import Product from "../component/product";
const Shop = () => {
  return (
    <>
      <div className="shop">
        <div className="shopTitle">
          <h1>PedroTech Shop</h1>
        </div>
        <div className="products">
          <div className="product-row">
            {Products.map((pro) => (
              <div className="product-col" key={pro.productId}>
                <Product data={pro} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
