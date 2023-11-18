import { useContext, createContext, useState } from "react";
export const ContextPage = ({ children }) => {
  const Context = createContext(null);
  const [cartItem, setCartItem] = useState(0);
  return (
    <Context.Provider value={{ cartItem, setCartItem }}>
      {children}
    </Context.Provider>
  );
};
