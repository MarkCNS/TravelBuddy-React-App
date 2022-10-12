import React from "react";
import DrawerAppBar from "../../components/Navbar";
import Banner from "../../components/Banner";
import Topvisit from "../../components/TopVisit";
import InTouch from "../../components/Form";
import Footer from "../../components/Footer";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import HomeIcon from "@mui/icons-material/Home";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";

import banner_bg from "../../assets/banner_bg.png";
import Rectangle from "../../assets/Rectangle.png";

const Contact = () => {
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
            Contact
          </Typography>
          <Typography variant="subtitle1" fontSize="20px" gutterBottom>
            Critics and recomendation for us
          </Typography>
        </Box>
      </Banner>
      <Banner
        image={Rectangle}
        height="600px"
        padding="100px"
        boxShadow={false}
      />
      <Topvisit>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "36px",
            lineHeight: "44px",
            textAlign: "left",
            letterSpacing: "0.05em",
            color: "#041562",
            paddingTop: "150px",
            paddingBottom: "40px",
          }}
        >
          Get in touch
        </Typography>

        <Grid container rowSpacing={5} columnSpacing={{ xs: 2, sm: 2, md: 5 }}>
          <Grid item xs={6}>
            <Box>
              <InTouch />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                color: "black",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "auto",
                  alignItems: "center",
                  alignContent: "center",
                  pl: "30px",
                }}
              >
                <HomeIcon fontSize="large" />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "auto",
                    alignItems: "left",
                    alignContent: "center",

                    pl: "30px",
                  }}
                >
                  <Typography
                    gutterBottom
                    fontWeight="bold"
                    letterSpacing="0.1em"
                  >
                    Semarang, Jawa Tengah
                  </Typography>
                  <Typography gutterBottom color="#606060">
                    Indonesia
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "auto",
                  alignItems: "center",
                  alignContent: "center",
                  mt: "15px",
                  pl: "30px",
                }}
              >
                <PhoneAndroidIcon fontSize="large" />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "auto",
                    alignItems: "left",
                    alignContent: "center",

                    pl: "30px",
                  }}
                >
                  <Typography
                    gutterBottom
                    fontWeight="bold"
                    letterSpacing="0.1em"
                  >
                    (024) 123981240
                  </Typography>
                  <Typography gutterBottom color="#606060">
                    Mon to Fri 9am to 6pm
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "auto",
                  alignItems: "center",
                  alignContent: "center",
                  mt: "15px",
                  pl: "30px",
                }}
              >
                <EmailIcon fontSize="large" />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "auto",
                    alignItems: "left",
                    alignContent: "center",

                    pl: "30px",
                  }}
                >
                  <Typography
                    gutterBottom
                    fontWeight="bold"
                    letterSpacing="0.1em"
                  >
                    TravelBuddy@gmail.com
                  </Typography>
                  <Typography gutterBottom color="#606060">
                    Send us your query anytime!
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Topvisit>
      <Footer gCol="6" />
    </>
  );
};

export default Contact;
