import { createContext, useState } from "react";
import { products } from "./Assets/Proucts";
export const Context = createContext(null);
export const ContextPage = ({ children }) => {
  const [cartItem, setCartItem] = useState(0);

  const [cartData, setCartData] = useState([]);
  return (
    <Context.Provider
      value={{ cartItem, setCartItem, cartData, setCartData, products }}
    >
      {children}
    </Context.Provider>
  );
};
