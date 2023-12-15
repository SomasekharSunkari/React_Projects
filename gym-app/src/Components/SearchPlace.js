import React from "react";
import { Box, Typography, TextField, Button, Stack } from "@mui/material";
import { useState, useEffect } from "react";
const SearchPlace = () => {
  const [Search, setSearch] = useState("");
  useEffect(() => {});
  const fetchData = async (url, options) => {
    const response = await fetchData(url, options);
    const data = await response.json();
    return data;
  };
  const handleSearch = async (url, options) => {
    const response = await fetchData(url, options);
    console.log(response);
  };
  return (
    <Box
      sx={{ width: "100vw", marginLeft: "none", padding: "0" }}
      textAlign="center"
      mt="150px"
    >
      <Typography fontWeight="700" fontSize="25px">
        Awesome Exercises You
      </Typography>
      <Typography fontWeight="700" fontSize="25px">
        Should Know
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        lineHeight="25px"
        alignItems="center"
        gap="0"
        mt="10px"
      >
        <TextField
          value={Search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search "
          sx={{
            width: { lg: "60%", sm: "30%" },
            height: "0",
            margin: "10px",
            fontFamily: "Poppins sans-serif",
            input: { height: "9px", border: "none", outline: "none" },
          }}
        />
        <Button
          onClick={handleSearch}
          variant="contained"
          sx={{
            bgcolor: "#ff2625",
            height: "40px",
            width: "130px",
          }}
        >
          Search
        </Button>
      </Stack>
    </Box>
  );
};

export default SearchPlace;
