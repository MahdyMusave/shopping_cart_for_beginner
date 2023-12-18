import React, { useContext } from "react";
import { Products } from "../products";
import CartItem from "../component/cart-item";
import { ShopContext } from "../context/shop-context";

const Cart = () => {
  const { carts, getCartAmount } = useContext(ShopContext);
  // console.log(carts);
  return (
    <>
      <div className="cart-container">
        <div className="product-cart-row">
          {Products.map(
            (product, index) =>
              carts[product.productId] !== 0 && (
                <CartItem data={product} key={index} />
              )
          )}
          <div
            className="total_prise"
            style={{ padding: "10px", fontSize: "21px" }}
          >
            Total: ${getCartAmount()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
