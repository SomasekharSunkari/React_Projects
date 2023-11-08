import { useContext } from "react";
import { ShopContext } from "../Context/ContextPage";
import dropdown_icon from "../Assets/Ecommerce_Frontend_Assets/Assets/dropdown_icon.png";
import { Item } from "../Items/Item";
import "../Pages/Styles/ShopCatogery.css";
export const Shopcatagory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-catogary">
      <img src={props.banner} className="banner-img" />
      <div className="shopcatagory-sort">
        <span>
          <b>Showing 1-12 </b>
          out of 36 Products
        </span>
        <div className="sort-button">
          <button>
            Sort By <img src={dropdown_icon} alt="" className="dropdownimg" />{" "}
          </button>
        </div>
      </div>
      <div className="shopcatagory-products">
        {all_product.map((item, i) => {
          if (item.category === props.catogery) {
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
          } else {
            return null;
          }
        })}
      </div>
      <div className="loadmore-prodcts">
        <button className="exploreMore">Explore More</button>
      </div>
    </div>
  );
};
