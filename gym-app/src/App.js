import React from "react";
import { Box } from "@mui/material";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import ExerciseDetails from "./pages/ExerciseDetails";
const App = () => {
  return (
    <Box
      sx={{
        width: { xs: "1000px", sm: "590px", l: "1330px" },
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
      </Routes>
    </Box>
  );
};

export default App;
