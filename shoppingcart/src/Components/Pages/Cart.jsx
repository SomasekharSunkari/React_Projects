import { Context } from "../Context";
import { CartItem } from "./Cart-item";
import { useContext } from "react";
export const Cart = () => {
  const { cartData, products } = useContext(Context);
  return (
    <div className="container">
      {cartData.map((item, index) => {
        let product = products.find((e) => (e.id = item.productId));
        console.log(product);
        return (
          <CartItem
            slno={index + 1}
            name={product.name}
            image={product.image}
            price={product.cost}
            quantity={item.quantity}
          />
        );
      })}
    </div>
  );
};
