import { createContext, useState } from "react";
import { Products } from "../products";
import CartItem from "../component/cart-item";
export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  // console.log(cart, "cart");
  // console.log(Products.length);

  //step one
  // Products.forEach((pro, index) => {
  //   cart[index] = 0;
  // });

  //step two
  for (let i = 1; i < Products.length + 1; i++) {
    cart[i] = 0;
  }
  //step three
  // Products.map((pro, index) => {
  //   cart[index] = 0;
  // });
  // console.log(cart);
  return cart;
};
// console.log(getDefaultCart());
export const ShopContextProvider = (props) => {
  // console.log(props.children);
  //create a usestate
  const [carts, setCarts] = useState(getDefaultCart());
  // console.log(carts);
  const addtoCart = (itemId) => {
    // console.log(itemId);
    setCarts((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    // setCarts((prev) => {
    //   return { ...prev, [itemId]: prev[itemId] };
    // });
  };

  const removeFromCart = (itemId) => {
    setCarts((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  // console.log(carts);

  const updateCartItem = (newAmount, itemId) => {
    setCarts((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    console.log(carts);
    for (const item in carts) {
      if (carts[item] > 0) {
        let itemInfo = Products.find(
          (prodcut) => prodcut.productId === Number(item)
        );
        totalAmount += carts[item] * itemInfo.price;
      }
    }

    return totalAmount;
  };

  return (
    <ShopContext.Provider
      value={{
        carts,
        addtoCart,
        removeFromCart,
        updateCartItem,
        getCartAmount,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};
