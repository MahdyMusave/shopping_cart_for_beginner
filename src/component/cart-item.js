import { useContext } from "react";
import { ShopContext } from "../context/shop-context";
const CartItem = (props) => {
  const { productName, productImage, description, productId, price } =
    props.data;
  const { carts, addtoCart, removeFromCart, updateCartItem } =
    useContext(ShopContext);
  return (
    <>
      <div className="product-cart-col">
        <div className="itemcart">
          <div className="body">
            <div className="product-img">
              <img src={productImage} alt="product-img" />
            </div>
          </div>
          <div className="cart-detail">
            <div className="head-title">
              <h3>{productName}</h3>
            </div>
            <div className="price">
              <h3>{price}</h3>
            </div>
            <div className="description">{description}</div>
            <div className="btn-container">
              <button
                onClick={() => {
                  removeFromCart(productId);
                }}
              >
                -
              </button>
              <input
                type="number"
                min={1}
                max={50}
                value={carts[productId]}
                onChange={(e) => {
                  updateCartItem(Number(e.target.value), productId);
                }}
              />
              <button
                onClick={() => {
                  addtoCart(productId);
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
