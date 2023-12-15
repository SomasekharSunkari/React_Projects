import React from "react";

import { Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
const Navbar = () => {
  return (
    <Stack
      direction="row"
      fontFamily="Poppins , sans-serif"
      gap="40px"
      alignItems="center"
      justifyContent="space-around"
      sx={{
        gap: { sm: "222px", xs: "60px" },
        mt: { sm: "20px", xs: "10px" },
        ml: "80px",
        justifyContent: "none",
      }}
    >
      <Link to="/">
        <img src={Logo} style={{ width: "50px" }} />
      </Link>
      <Stack direction="row" gap="25px" justifyContent="flex-end">
        <Link
          to="/"
          style={{
            color: "#3A1212",
            textDecoration: "none",

            borderBottom: "3px solid #3A1212",
          }}
        >
          Home
        </Link>
        <a
          href="#exercies"
          style={{
            textDecoration: "none",
            color: "#3A1212",
          }}
        >
          Exercise
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
