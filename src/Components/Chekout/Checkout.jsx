import "./Checkout.css";
import { ShopContext } from "../Context/ContextPage";
import { useContext, useEffect, useState } from "react";

export const Checkout = () => {
  const { cartitem, all_product } = useContext(ShopContext);
  const [subTotal, setSubTotal] = useState(0);
  const [shippingCost, setShippingCost] = useState(20);

  useEffect(() => {
    let sub_total_cost = 0;
    all_product.forEach((e) => {
      if (cartitem[e.id] > 0) {
        sub_total_cost += e.new_price * cartitem[e.id];
      }
    });
    setSubTotal(sub_total_cost);
  }, [cartitem, all_product]);

  const total = subTotal + shippingCost;

  // let sub_total_cost = 0;
  // all_product.forEach((e) => {
  //   if (cartitem[e.id] > 0) {
  //     sub_total_cost += e.new_price * cartitem[e.id];
  //   }
  //   console.log(sub_total_cost);
  // });

  return (
    <div className="checkout">
      <div className="cart-checkout">
        <div className="sub-total">
          <h1 className="main-h">Cart Totals</h1>
          <div className="amount-total">
            <div className="one">
              <span className="sub-heading">Subtotal</span>
              <span className="sub-cost">${subTotal}</span>
            </div>
            <div className="shipping">
              <span className="sub-heading">Shipping Fee</span>
              <span className="shipping-cost">${shippingCost}</span>
            </div>
            <hr />
            <div className="total-main">
              <span className="sub-headingmain">Total</span>
              <span className="cost">${total}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="promo-card">
        <p className="promo-h">If you have a promo card .Enter it Here </p>
        <div className="input">
          <input type="text" />
          <button className="submit" role="button">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
