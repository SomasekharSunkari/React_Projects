import { createContext, useState } from "react";
import all_product from "../Assets/Ecommerce_Frontend_Assets/Assets/all_product";
export const ShopContext = createContext(null);
export const cart = createContext(null);

const ShopContextProvider = (props) => {
  function getcart() {
    let cart = {};
    for (let i = 0; i < all_product.length; i++) {
      cart[i] = 0;
    }

    return cart;
  }
  const [cartitem, setcartItems] = useState(getcart());
  const getTotalCartItems = () => {
    let totaItem = 0;
    for (const item in cartitem) {
      if (cartitem[item] > 0) {
        totaItem += cartitem[item];
      }
    }
    return totaItem;
  };

  const addTocart = (id) => {
    setcartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };
  const removeFromcart = (id) => {
    setcartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };
  const contextvalue = {
    getTotalCartItems,
    all_product,
    cartitem,
    addTocart,
    removeFromcart,
  };
  return (
    <ShopContext.Provider value={contextvalue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
