import img from "../Assets/Ecommerce_Frontend_Assets/Assets/exclusive_image.png";
import "./Offer_styles.css";
export const Offer_container = () => {
  return (
    <div className="offer-container">
      <div className="content-offers">
        <h2>Exclusive </h2>
        <h2>offers For You</h2>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button className="popular-btn">Check Now</button>
      </div>
      <div className="image">
        <img src={img} className="offersimg" alt="" />
      </div>
    </div>
  );
};
