import "./Styles/Header.css";
import "./Styles/strap.css";
import cartimage from "../Components/Assets/cart-removebg-preview.png";
import { Link } from "react-router-dom";
import { Context, useContext, useRef } from "react";
export const HeaderPart = () => {
  const cartref = useRef(null);

  cartref.current.innerHTML = "0"; // const { cartItem, setCartItem } = useContext(Context);
  // console.log("Cart Item are  -->  " + cartItem);
  return (
    <div className="headerpart m-0 p-0 ">
      <div className=" header-part bg-info d-flex justify-content-between">
        <p className="fs-4 text-dark fw-bold ps-3">Logo</p>

        <div className="login-cart pe-5  pt-1 ">
          <button className="btn btn-outline-dark me-3 ">Login</button>

          <img src={cartimage} alt="cart-image-icon" className="cart-icon " />
          <span
            className="rounded-circle d-inline-block p-2"
            ref={cartref}
            style={{
              height: "7px",
              width: "5px",
              backgroundColor: "red",
            }}
          ></span>
        </div>
      </div>
    </div>
  );
};
