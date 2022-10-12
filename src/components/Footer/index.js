// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  Link,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import VectorLast from "../../assets/Vectorlast.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = (props) => {
  return (
    <>
      <Box sx={{ mt: "200px" }}>
        <Box sx={{ backgroundColor: "#19224D" }}>
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              flexDirection: "row",
              padding: "90px",
              // alignItems: "center",
              // alignContent: "center",
              justifyContent: "space-between",
              fontFamily: "Inter",
            }}
          >
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <CardMedia
                component="img"
                sx={{ display: "flex", width: "155px", height: "162px" }}
                image={VectorLast}
                alt="green iguana"
                // sx={{ width: `{false}` }}
              />
              <Typography
                sx={{
                  fontSize: "44px",
                  fontWeight: "bold",
                  color: "white",
                  mt: "10px",
                  fontFamily: "Inter",
                  display: "flex",
                  flexWrap: "wrap",
                  textAlign: "center",
                }}
                gutterBottom
              >
                Travel Buddy
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Box
                sx={{
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  gutterBottom
                >
                  DISCOVER DESTINATION
                </Typography>
                <List
                  sx={{
                    color: "#FFFFFF",
                    fontFamily: "Inter",
                  }}
                >
                  <ListItem
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      webKitAlignItems: "flex-start",
                      alignItems: "flex-start",
                      pl: "0px",
                    }}
                  >
                    <ListItemText>Bali</ListItemText>
                    <ListItemText>Karimun Jawa</ListItemText>
                    <ListItemText>Jepara</ListItemText>
                    <ListItemText>Lombok</ListItemText>
                    <ListItemText>Yogyakarta</ListItemText>
                    <ListItemText>Flores</ListItemText>
                  </ListItem>
                </List>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box
                sx={{
                  display: "flex",

                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{ fontSize: "24px", color: "white", fontWeight: "bold" }}
                  gutterBottom
                >
                  CONTACT US
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "auto",
                    alignItems: "left",
                    alignContent: "center",

                    color: "#FFFFFF",
                    fontFamily: "Inter",

                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "18px",
                    lineHeight: "22px",
                    letterSpacing: "0.02em",
                  }}
                >
                  <Typography gutterBottom color="lightgrey">
                    24 Shipley St.Arvada, CO 80003
                  </Typography>
                  <Typography gutterBottom color="lightgrey">
                    09378493810
                  </Typography>
                  <Typography gutterBottom>
                    <Link href="#" underline="none">
                      TravelBuddy@gmail.com
                    </Link>
                  </Typography>
                </Box>
                <Box
                  sx={{
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    width: "auto",
                    alignItems: "left",
                    alignContent: "center",
                    // fontSize: 14,
                    color: "#FFFFFF",
                    fontFamily: "Inter",
                    width: "287px",
                    height: "22px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "18px",
                    lineHeight: "22px",
                    letterSpacing: "0.02em",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 14,
                      color: "orange",
                      fontFamily: "Inter",
                      letterSpacing: "0.05em",
                      mt: 2,
                    }}
                    gutterBottom
                  >
                    Social media
                  </Typography>
                  <Box flexDirection={"row"}>
                    <Link href="http://intagram.com" underline="none">
                      <InstagramIcon sx={{ color: "white", mr: 1 }} />
                    </Link>
                    <Link href="http://facebook.com" underline="none">
                      <FacebookIcon sx={{ color: "white", mr: 1 }} />
                    </Link>
                    <Link href="http://twitter.com" underline="none">
                      <TwitterIcon sx={{ color: "white" }} />
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            backgroundColor: "#000B3E",
            display: "flex",
            justifyContent: "center",
            height: "60px",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: 14,
              color: "#C4C4C4",
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "19px",
              textAlign: "center",
              letterSpacing: "0.05em",
            }}
            gutterBottom
          >
            &#169; Copyright 2022 TravelBuddy
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default Footer;
