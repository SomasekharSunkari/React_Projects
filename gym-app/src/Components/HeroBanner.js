import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import Hero from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { sm: "70px", xs: "60px" },
        ml: { sm: "80px", xs: "30px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography
        color="red"
        fontWeight="550"
        mb="10px"
        fontSize="25px"
        fontFamily="Poppins,sans-serif"
      >
        Fitness Club
      </Typography>
      <Typography fontSize="35px">Sweat, Smile</Typography>
      <Typography fontSize="35px" mb="10px">
        And Repeat
      </Typography>
      <Typography fontWeight="600" lineHeight="40px">
        Checkout out the most Effective Exercises
      </Typography>
      <Button
        variant="contained"
        color="error"
        width="1000px"
        sx={{ backgroundColor: "#ff2625" }}
        style={{ marginTop: "20px" }}
      >
        Explore Exercises
      </Button>
      <img
        src={Hero}
        style={{
          position: "absolute",
          top: "30px",
          marginTop: "-150px",
          width: "500px",
          left: "350px",
          height: "500px",
          marginLeft: "150px",
        }}
      />
    </Box>
  );
};

export default HeroBanner;
