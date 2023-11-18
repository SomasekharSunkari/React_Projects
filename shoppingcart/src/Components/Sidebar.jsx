import "./Styles/Sidebar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
export const Sidebar = () => {
  const [menuItem, setMenuItem] = useState("");
  return (
    <div className="sidebar">
      <ul className="sidewidth">
        <Link
          to="/vegetables"
          className="border border-dark border-1  rounded-top-1"
          onClick={() => setMenuItem("vegetables")}
        >
          Vegetables
        </Link>
        <Link
          to="/fruites"
          className="border border-dark border-1 
         ps-4"
        >
          Fruites
        </Link>
        <Link to="/grocery" className="border border-dark border-1  ">
          Grocery
        </Link>
        <Link to="/footers" className="border border-dark border-1  ">
          Footers
        </Link>
        <Link to="/Jewellwery" className="border border-dark border-1  ">
          Jewellery
        </Link>
        <Link to="/diamonds" className="border border-dark border-1  ">
          Diamonds
        </Link>
        <Link to="/children" className="border border-dark border-1  ">
          Childern
        </Link>
        <Link to="/adult" className="border border-dark border-1  ">
          Adult
        </Link>
        <Link to="/women" className="border border-dark border-1  ">
          Women
        </Link>
        <Link to="/men" className="border border-dark border-1  ">
          Men
        </Link>
        <Link to="/old" className="border border-dark border-1  ">
          Old
        </Link>
        <Link
          to="/male"
          className="border border-dark border-1  rounded-bottom-1"
        >
          Male
        </Link>
      </ul>
    </div>
  );
};
