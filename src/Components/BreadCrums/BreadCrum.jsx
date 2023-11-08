import arrowIcon from "../Assets/Ecommerce_Frontend_Assets/Assets/breadcrum_arrow.png";
import "./BreadCrum.css";
export const BreadCrum = (props) => {
  return (
    <div className="breadcrum">
      Home <img src={arrowIcon} />
      Shop
      <img src={arrowIcon} />
      {props.product.category} <img src={arrowIcon} />
      {props.product.name}
    </div>
  );
};
