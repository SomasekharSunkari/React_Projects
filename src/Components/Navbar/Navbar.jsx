import logo from "../Assets/Ecommerce_Frontend_Assets/Assets/logo.png";
import carticon from "../Assets/Ecommerce_Frontend_Assets/Assets/cart_icon.png";
import { useContext, useState } from "react";
import { ShopContext } from "../Context/ContextPage";
import { Link } from "react-router-dom";
import "./navbar.css";
export const NavBar = () => {
  const [menu, setmenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <div className="navbar">
      <div className="logopart">
        <img src={logo} alt="Logo Image for the website" />
        <p>SHOPPERS</p>
      </div>
      <div className="nav-links">
        <nav>
          <ul>
            <li
              onClick={() => {
                setmenu("shop");
              }}
            >
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                {" "}
                Shop
              </Link>{" "}
              {menu === "shop" ? <hr /> : <></>}
            </li>
            <li
              onClick={() => {
                setmenu("mens");
              }}
            >
              <Link
                to="/mens"
                style={{ textDecoration: "none", color: "black" }}
              >
                Men
              </Link>{" "}
              {menu === "mens" ? <hr /> : <></>}
            </li>
            <li
              onClick={() => {
                setmenu("womens");
              }}
            >
              <Link
                to="/womens"
                style={{ textDecoration: "none", color: "black" }}
              >
                Women
              </Link>{" "}
              {menu === "womens" ? <hr /> : <></>}{" "}
            </li>
            <li
              onClick={() => {
                setmenu("kids");
              }}
            >
              <Link
                to="/kids"
                style={{ textDecoration: "none", color: "black" }}
              >
                Kids
              </Link>
              {menu === "kids" ? <hr /> : <></>}
            </li>
          </ul>
        </nav>
      </div>
      <div className="login-button">
        <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
          <button
            type="button"
            className="login-button-main"
            onClick={() => {
              setmenu("login");
            }}
          >
            Login
          </button>
        </Link>
        <span>
          <Link to="/cart">
            <img src={carticon} alt="Cart Icon " />
          </Link>
          <div className="nav-cart-count">
            <p>{getTotalCartItems()}</p>
          </div>
        </span>
      </div>
    </div>
  );
};
