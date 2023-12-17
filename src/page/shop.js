import React from "react";
import Product from "../component/product";
const Shop = () => {
  return (
    <>
      <div className="shop">
        <div className="shopTitle">
          <h1>PedroTech Shop</h1>
        </div>
        <div className="products">
          <Product />
        </div>
      </div>
    </>
  );
};

export default Shop;
