import { useEffect, useContext } from "react";

export const CartItem = (props) => {
  return (
    <div className="cartitem row">
      <div className="heading row cart-item">
        <p className="sl_no">{props.slno}</p>
        <p className="prouctname">{props.name}</p>
        <img src={props.image} />
        <p className="price">{props.price}</p>
        <p className="quantity">{props.quanitiy}</p>
      </div>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="cart-item"
        aria-label="Close"
      ></button>
    </div>
  );
};
