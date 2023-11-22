import { useEffect, useContext } from "react";
import "../Styles/CartItem.css";

export const CartItem = (props) => {
  return (
    <div className="cartitem  text-center   m-0 p-0 ">
      <div className="heading row row-cols-6 cart-item justify-content-center align-items-center ">
        <p className="sl_no fw-bold  ">{props.slno}</p>
        <p className="prouctname fw-bold ">{props.name}</p>
        <img src={props.image} className="img-cart  " />
        <p
          className="price 
           fw-bold"
        >
          ${Number(props.price) * Number(props.quantity)}
        </p>
        <p
          className="quantity 
          fw-bold "
        >
          {props.quantity}
        </p>
        <button
          type="button"
          className="btn-close  "
          data-bs-dismiss="cart-item"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
};
