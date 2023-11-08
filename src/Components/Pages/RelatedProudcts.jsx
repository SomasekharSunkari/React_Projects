import React from "react";
import data from "../Assets/Ecommerce_Frontend_Assets/Assets/data";
import { Item } from "../Items/Item.jsx";
import "./Styles/RelatedProducts.css";
export const RelatedPRoducts = () => {
  return (
    <div className="relatedproudcts">
      <h1 className="heading">
        <p>Related Products</p>
        <hr />
      </h1>

      <div className="re-products">
        {data.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              image={item.image}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};
