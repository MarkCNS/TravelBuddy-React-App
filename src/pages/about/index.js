import React from "react";
import DrawerAppBar from "../../components/Navbar";
import Banner from "../../components/Banner";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import banner_bg from "../../assets/banner_bg.png";

const About = () => {
  return (
    <>
      <DrawerAppBar />
      <Banner image={banner_bg} height="400px" filter="brightness(100%)">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Typography
            variant="h2"
            gutterBottom
            fontWeight="bold"
            letterSpacing="0.1em"
            fontSize="96px"
            color="#fff"
            sx={{ mb: "0px" }}
          >
            About Us
          </Typography>
          <Typography variant="subtitle1" fontSize="20px" gutterBottom>
            TravelBuddy The best service travel
          </Typography>
        </Box>
      </Banner>
    </>
  );
};

export default About;
