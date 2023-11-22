import "./Header.css";
import cartimage from "../Assets/cart-removebg-preview.png";
import { Link } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import { Context } from "../Context";
export const HeaderPart = () => {
  const cartref = useRef(null);
  const { cartItem, setCartItem } = useContext(Context);
  useEffect(() => {
    if (cartref.current) {
      if (cartItem === 0) {
        cartref.current.classList.remove("d-inline-block");
        cartref.current.style.display = "none";
      } else {
        cartref.current.classList.add("d-inline-block");
        cartref.current.innerHTML = cartItem;
        cartref.current.style.display = "block";
      }
    }
  }, [cartItem]);
  return (
    <div className="headerpart m-0 p-0 ">
      <div className=" header-part bg-info d-flex justify-content-between">
        <p className="fs-4 text-dark fw-bold ps-3">Logo</p>

        <div className="login-cart pe-5  pt-1 ">
          <button className="btn btn-outline-dark me-3 ">Login</button>

          <span
            ref={cartref}
            className="d-inline-block rounded-circle"
            style={{
              height: "15px",
              width: "15px",
              backgroundColor: "red",
              overflow: "hidden",
              fontSize: "10px",
              textAlign: "center",
              position: "relative",
              color: "white",
              top: "-10px",
              right: "-35px",
              zIndex: "100",
            }}
          ></span>
          <Link to="/cart" className="cart-route">
            <img src={cartimage} className="cart-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};
