import { NavBar } from "./Components/Navbar/Navbar";
import { Home_page } from "./Components/Pages/Home_Page";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import { Cart } from "./Components/Pages/Cart";
import { Shop } from "./Components/Pages/Shop.jsx";
import { Shopcatagory } from "./Components/Pages/Shopcatagory";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { LoginSignup } from "./Components/Pages/Login_Signup";
// import { Products } from "./Components/Pages/Product";
import { Footer } from "./Components/Footer/Footer";
import { LoginOrSignup } from "./Components/Pages/Login_Signup";
import mens_banner from "./Components/Assets/Ecommerce_Frontend_Assets/Assets/banner_mens.png";
import womens_banner from "./Components/Assets/Ecommerce_Frontend_Assets/Assets/banner_women.png";
import kids_banner from "./Components/Assets/Ecommerce_Frontend_Assets/Assets/banner_kids.png";
import "./App.css";
import { Product } from "./Components/Pages/Products";
import { useContext } from "react";
import { ShopContext } from "./Components/Context/ContextPage";

function App() {
  const context = useContext(ShopContext);
  console.log(context);
  console.log(context);
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/login" element={<LoginOrSignup />} />
          <Route
            path="/mens"
            element={<Shopcatagory banner={mens_banner} catogery="men" />}
          />
          <Route
            path="/womens"
            element={<Shopcatagory banner={womens_banner} catogery="women" />}
          />
          <Route
            path="/kids"
            element={<Shopcatagory banner={kids_banner} catogery="kid" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
