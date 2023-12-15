import React from "react";
import { Box } from "@mui/material";
import HeroBanner from "../Components/HeroBanner";
import SearchPlace from "../Components/SearchPlace";
import Footer from "../Components/Footer";
import "../App.css";

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchPlace />
      <Footer />
    </Box>
  );
};

export default Home;
