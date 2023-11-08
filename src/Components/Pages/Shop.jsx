import { Home_page } from "./Home_Page";
import { Popular } from "../Popular/Popular";
import { Offer_container } from "../Offers/Offer";
import { NewCollections } from "../NewCoolections/NewCollections";
import { NewsLetter } from "../NewsLetter/NewsLetter";
import { Footer } from "../Footer/Footer";

export const Shop = () => {
  return (
    <>
      <Home_page />
      <Popular />
      <Offer_container />
      <NewCollections />
      <NewsLetter />
    </>
  );
};
