import logo from "./logo.svg";
import "./App.css";
import "../../tic-toc-toe/node_modules/bootstrap/dist/css/bootstrap.css";
import { HeaderPart } from "./Components/Header";
import React from "react";
import { Homepage } from "./Components/Pages/Homepage";
import { Cart } from "./Components/Pages/Cart";
import { Sidebar } from "./Components/Sidebar";
import { ProductsDisplay } from "./Components/Pages/ProductsDisplay";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DyamicRoutes } from "./Dynamic";
import { NotFound } from "./NotFOund";

function App() {
  return (
    <React.Fragment>
      <HeaderPart />

      <BrowserRouter>
        <div className="d-flex flex-row">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route
              path="/vegetables"
              element={<ProductsDisplay name="Vegetables" />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/fruites"
              element={<ProductsDisplay name="Fruites" />}
            />
            <Route
              path="/grocery"
              element={<ProductsDisplay name="Grocery" />}
            />
            <Route
              path="/footers"
              element={<ProductsDisplay name="Footers" />}
            />
            <Route
              path="/Jewellwery"
              element={<ProductsDisplay name="Jewellwery" />}
            />
            <Route
              path="/diamonds"
              element={<ProductsDisplay name="Diamonds " />}
            />
            <Route
              path="/children"
              element={<ProductsDisplay name="CHildern Products" />}
            />
            <Route path="*" element={<NotFound />} />
            <Route path="/adult/:id" element={<DyamicRoutes id="$200 " />}>
              {/* <Route path=":id" element={<DyamicRoutes id="100" />} /> */}

              {/* export in this file and import in another file html,css,javascrpit,react js ,dsa,open source,javafx,java unit */}
            </Route>
            <Route
              path="/women"
              element={<ProductsDisplay name="Women Products" />}
            />
            <Route
              path="/men"
              element={<ProductsDisplay name="Men products" />}
            />
            <Route
              path="/old"
              element={<ProductsDisplay name="Old Products" />}
            />
            <Route
              path="/male"
              element={<ProductsDisplay name="Male Products" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
