import { products } from "../Assets/Proucts";
import { Item } from "./Item";
export const ProductsDisplay = (props) => {
  return (
    <div
      className="products row  px-3  justify-content-center"
      style={{
        height: "500px",
        width: "1300px",
        backgroundColor: "lightwhite",
      }}
    >
      {products.map((e, index) => {
        return (
          <div className="col-4" key={index}>
            <Item name={e.name} image={e.image} cost={e.cost} />
          </div>
        );
      })}
    </div>
  );
};
