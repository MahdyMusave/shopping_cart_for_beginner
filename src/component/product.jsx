import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";

const Product = ({ data }) => {
  // console.log(data);
  // console.log(ShopContext);
  const { addtoCart, carts } = useContext(ShopContext);
  const cartitemAmount = carts[data.productId];
  // console.log(cartitemAmount);
  return (
    <>
      <div>
        <div className="head-title">
          <h3>{data.productName}</h3>
        </div>
        <div className="body">
          <div className="product-img">
            <img src={data.productImage} alt="product-img" />
          </div>
        </div>
        <div className="price">
          <h3>{data.price}</h3>
        </div>
        <div className="description">{data.description}</div>

        <button
          onClick={() => {
            addtoCart(data.productId);
          }}
          className="btn-shop"
        >
          Shop Now
          {cartitemAmount > 0 && (
            <>
              <span
                style={{ color: "white", fontSize: "21px", marginLeft: "10px" }}
              >
                ({cartitemAmount})
              </span>
            </>
          )}
        </button>
      </div>
    </>
  );
};

export default Product;
