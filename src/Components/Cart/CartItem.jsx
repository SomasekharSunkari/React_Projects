import { useContext, useEffect, useRef, useState } from "react";
import "./CartItem.css";
import { ShopContext } from "../Context/ContextPage";
import all_products from "../Assets/Ecommerce_Frontend_Assets/Assets/all_product";
import remove_icon from "../Assets/Ecommerce_Frontend_Assets/Assets/cart_cross_icon.png";

export const CartItem = () => {
  const { cartitem, removeFromcart, addTocart } = useContext(ShopContext);
  const cartRef = useRef(null);
  const [cartContent, setcartContent] = useState("");
  useEffect(() => {
    if (cartRef.current) {
      localStorage.setItem("content", cartRef.current.innerHTML);
      cartRef.current.innerHTML = localStorage.getItem("content");
      let contentcart = localStorage.getItem("content");
    }
    console.log(cartRef.current.innerHTML);
  }, []);

  return (
    <div className="main-cart" ref={cartRef}>
      <div className="cartitems">
        <div className="cartItems-main-menu">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />

        {all_products.map((e) => {
          if (cartitem[e.id] > 0) {
            return (
              <>
                <div className="cartmainone cartItems-main-menu">
                  <img src={e.image} alt="Image" className="cartitem-img" />
                  <p className="title">{e.name}</p>
                  <p className="price-item aligin-baseline">${e.new_price}</p>
                  <div className="buttons">
                    <button
                      className="increase py-1 border-1 me-1 rounded shadow px-3"
                      onClick={() => {
                        addTocart(e.id);
                      }}
                      key={e.id}
                    >
                      +
                    </button>
                    <button className="cart-quantity border-0 rounded px-2">
                      {cartitem[e.id]}
                    </button>
                    <button
                      className="decrease py-1 border-1 ms-1 rounded shadow px-3"
                      onClick={() => {
                        removeFromcart(e.id);
                      }}
                    >
                      -
                    </button>
                  </div>
                  <p className="total-cart ">${cartitem[e.id] * e.new_price}</p>
                  <img
                    src={remove_icon}
                    alt=""
                    className="cart-remove-item pt-3 d-block mx-auto "
                    onClick={() => {
                      removeFromcart();
                    }}
                  />
                  <hr className="items-one" />
                </div>
              </>
            );
          }
        })}
      </div>
    </div>
  );
};
