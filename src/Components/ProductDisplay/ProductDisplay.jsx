import React from "react";
import "./ProudctDisplay.css";
import staricon from "../Assets/Ecommerce_Frontend_Assets/Assets/star_icon.png";
import stardull from "../Assets/Ecommerce_Frontend_Assets/Assets/star_dull_icon.png";
import cartItem from "../Pages/Cart.jsx";
import { useContext } from "react";
import { ShopContext } from "../Context/ContextPage";
export const ProudctDisplay = (props) => {
  const { addTocart } = useContext(ShopContext);
  const product = props.product;
  //console.log("Product ID is : " + item.dataset.productId);

  return (
    <div className="productDisplay">
      <div className="product-left-part">
        <div className="image-list">
          <img src={product.image} alt="Image" />
          <img src={product.image} alt="Image" />
          <img src={product.image} alt="Image" />
          <img src={product.image} alt="Image" />
        </div>
        <div className="main-image">
          <img src={product.image} alt="image" />
        </div>
      </div>
      <div className="prodct-display-right">
        <div className="header">
          <h1 className="product-name">{product.name}</h1>
          <div className="rating-stars">
            <img src={staricon} />
            <img src={staricon} />
            <img src={staricon} />
            <img src={staricon} />
            <img src={stardull} />
            <span>(122)</span>
          </div>
        </div>
        <div className="costs">
          <span className="oldprice">${product.old_price}</span>
          <span className="newprice">${product.new_price}</span>
        </div>
        <div className="product-discrpition">
          <p>
            {product.name} Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Quos aspernatur rerum, modi eligendi dolorum nulla!
          </p>
        </div>
        <div className="select-sizes">
          <h1 className="sizeheading">Select Size</h1>
          <div className="sizes">
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>Xl</button>
            <button>XXl</button>
          </div>
        </div>
        <div className="add-to-cart-btn">
          <button
            className="add-tocart"
            onClick={() => {
              addTocart(product.id);
            }}
          >
            Add to Cart
          </button>
          <button className="buyitnow">Buy it Now</button>
        </div>
      </div>
    </div>
  );
};
