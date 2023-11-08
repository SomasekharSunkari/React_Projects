import { ShopContext } from "../Context/ContextPage";
import { useContext } from "react";
import { BreadCrum } from "../BreadCrums/BreadCrum";
import { useParams } from "react-router-dom";
import all_product from "../Assets/Ecommerce_Frontend_Assets/Assets/all_product";
import { ProudctDisplay } from "../ProductDisplay/ProductDisplay";
import { RelatedPRoducts } from "./RelatedProudcts";
import "./Styles/Product.css";
export const Product = () => {
  const allproducts = all_product;
  console.log(all_product);
  const { productId } = useParams();

  const product = allproducts.find((e) => e.id === Number(productId));

  return (
    <div className="product">
      <BreadCrum product={product} />
      <ProudctDisplay product={product} />
      <RelatedPRoducts />
    </div>
  );
};
