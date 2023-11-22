import ice01 from "../Assets/ice01.jpg";
import { useContext } from "react";
import { Context } from "../Context";
export const Item = (props) => {
  let { cartItem, setCartItem, cartData, setCartData } = useContext(Context);
  return (
    <div className="card w-100 m-2">
      <img
        src={props.image}
        alt="Image"
        className="card-img-top"
        style={{ maxHeight: "50%", height: "250px" }}
      />
      <div className="card-body">
        <h5 className="card-title">Ice Creame</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
          officia.
        </p>
        <h3>Cost :${props.cost}</h3>
        <a
          href="#"
          className="btn btn-outline-primary d-block mb-2"
          onClick={(e) => {
            setCartItem((cartItem = cartItem + 1));
            const id = e.currentTarget.dataset.productId;
            let iteminCart = cartData.find((item) => item.productId === id);
            if (iteminCart) {
              iteminCart.quantity += 1;
              setCartData([...cartData]);
            } else {
              setCartData([...cartData, { productId: id, quantity: 1 }]);
            }
            console.log(cartData);
          }}
          data-product-id={props.id}
        >
          Add to Cart
        </a>
        <a href="#" className="btn btn-primary d-block mx-auto">
          Buy Now
        </a>
      </div>
    </div>
  );
};
