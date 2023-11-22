import { Link } from "react-router-dom";
import { Context } from "./Components/Context";
import { useContext } from "react";
export const NotFound = () => {
  const { cartData } = useContext(Context);
  return (
    <div className="notfound">
      <Link to="/cart">
        <p>Cart</p>
      </Link>
      <h1>Page Not FOund</h1>
    </div>
  );
};
