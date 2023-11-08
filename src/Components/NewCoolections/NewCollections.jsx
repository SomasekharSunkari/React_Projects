import "./NewCoolections.css";
import new_collections from "../Assets/Ecommerce_Frontend_Assets/Assets/new_collections";
import { Item } from "../Items/Item";
export const NewCollections = () => {
  return (
    <div className="newcollections">
      <div className="heading">
        <h1>NEW COLLECTIONS</h1>
        <hr />
      </div>

      <div className="collections">
        {new_collections.map((item, i) => {
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
