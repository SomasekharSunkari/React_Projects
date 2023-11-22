import { Context } from "../Context";
import { CartItem } from "./Cart-item";
import "../Styles/Cart.css";
import { useContext } from "react";

export const Cart = () => {
  const { cartData, products } = useContext(Context);

  return (
    <div className="container mt-3">
      {cartData.length === 0 ? (
        <h1 className="text-center min-vh-100 d-flex justify-content-center align-items-center bg-danger">
          Your Cart is Empty
        </h1>
      ) : (
        <>
          <div className="heading row row-cols-6 text-center">
            <h3 className="fs-5">Sl.NO</h3>
            <h3 className="fs-5">Product Name</h3>
            <h3 className="fs-5">Image</h3>
            <h3 className="fs-5">Price</h3>
            <h3 className="fs-5">Quantity</h3>
            <h3 className="fs-5">Cancel</h3>
          </div>
          {cartData.map((item, index) => {
            const product = products.find(
              (e) => e.id === Number(item.productId)
            );

            return (
              <CartItem
                key={index}
                className=""
                slno={index + 1}
                name={product.name}
                image={product.image}
                price={product.cost}
                quantity={item.quantity}
              />
            );
          })}
        </>
      )}
    </div>
  );
};
