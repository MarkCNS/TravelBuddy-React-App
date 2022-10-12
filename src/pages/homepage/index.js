import React from "react";
// import { useStyles } from "./styles";
import DrawerAppBar from "../../components/Navbar";
import Banner from "../../components/Banner";
import Subnav from "../../components/SubNav";
import Topvisit from "../../components/TopVisit";
import Whattheysaid from "../../components/What";
import Footer from "../../components/Footer";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { Card, CardMedia, Grid } from "@mui/material";

import banner_bg from "../../assets/banner_bg.png";
import event_bg from "../../assets/event_bg.png";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import hotel1 from "../../assets/img-card-hotel-03.png";
import hotel2 from "../../assets/img-card-hotel-03(1).png";
import hotel3 from "../../assets/img-card-hotel-03(2).png";
import offer1 from "../../assets/img-card-tsp-01.png";
import offer2 from "../../assets/img-card-tsp-02.png";
import offer3 from "../../assets/img-card-tsp-03.png";

function Home() {
  return (
    <>
      <div>
        <DrawerAppBar />
      </div>
      <div>
        <Banner image={banner_bg} height="722px">
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
              Travel Buddy
            </Typography>
            <Typography variant="subtitle1" fontSize="20px" gutterBottom>
              Let’s start your journey with us, your dream will come true
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ff5733",
                padding: "15px 30px",
                mt: "40px",
              }}
            >
              Discover Now
            </Button>
          </Box>
        </Banner>
      </div>
      <div>
        <Subnav />
      </div>
      <div>
        <Topvisit>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "36px",
              lineHeight: "44px",
              textAlign: "center",
              letterSpacing: "0.05em",
              color: "#041562",
              paddingTop: "150px",
            }}
          >
            Top Places To Visit
          </Typography>

          <Typography
            variant="caption"
            display="block"
            gutterBottom
            sx={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "22px",
              textAlign: "center",
              letterSpacing: "0.05em",
              color: "#626262",
              paddingBottom: "80px",
            }}
          >
            The Best Place to Stay in Indonesia
          </Typography>
          <Grid
            container
            rowSpacing={5}
            columnSpacing={{ xs: 2, sm: 2, md: 5 }}
          >
            <Grid item xs={6}>
              <Card sx={{}}>
                <CardMedia
                  component="img"
                  width="631px"
                  height="415px"
                  image={img1}
                />
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card>
                <CardMedia
                  component="img"
                  width="631px"
                  height="415px"
                  image={img2}
                />
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card>
                <CardMedia
                  component="img"
                  width="631px"
                  height="415px"
                  image={img3}
                />
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card>
                <CardMedia
                  component="img"
                  width="631px"
                  height="415px"
                  image={img4}
                />
              </Card>
            </Grid>
          </Grid>
        </Topvisit>
      </div>
      <div>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
            padding: "100px",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ff5733",
              padding: "15px 30px",
            }}
          >
            Discover More
          </Button>
        </Box>
      </div>
      <div>
        <Banner image={event_bg} marginTop="100px" height="879px">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              backgroundColor: "white",
              padding: "50px",
            }}
          >
            <Box
              sx={{
                color: "black",
              }}
            >
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{ color: "#FF5403", fontFamily: "Inter" }}
              >
                Upcoming Event
              </Typography>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  color: "#041562",
                  letterSpacing: "1px",
                  fontFamily: "Inter",
                }}
              >
                Bali - Indonesia
              </Typography>
              <Box
                sx={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "18px",
                  lineHeight: "170%",

                  letterSpacing: "0.02em",
                }}
              >
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{ color: "#626262" }}
                >
                  Waters make fish every without firmament saw had. Morning
                  <br />
                  air subdue. Our, air very one. Whales grass is fish whales
                  <br />
                  winged.
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{ color: "#606060" }}
                >
                  date :
                  <span style={{ color: "#434343", fontWeight: "600" }}>
                    12 Aug 2020
                  </span>
                </Typography>
                <Typography variant="body2" gutterBottom>
                  cost :{" "}
                  <span style={{ color: "#434343", fontWeight: "600" }}>
                    Start from Rp3000.000,00
                  </span>
                </Typography>
                <Typography variant="body2" gutterBottom>
                  organizer :{" "}
                  <span style={{ color: "#434343", fontWeight: "600" }}>
                    TravelBuddy
                  </span>
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "inline-flex",
                }}
              >
                <Typography>Rating : </Typography>
                <Rating name="read-only" value={5} readOnly />
              </Box>
              <Box
                sx={{
                  paddingTop: "20px",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#ff5733",
                    padding: "15px 30px",
                  }}
                >
                  Plan Details
                </Button>
              </Box>
            </Box>
          </Box>
        </Banner>
      </div>
      <div>
        <Topvisit>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "36px",
              lineHeight: "44px",
              textAlign: "center",
              letterSpacing: "0.05em",
              color: "#041562",
              paddingTop: "150px",
            }}
          >
            Top Hotels & Restorants
          </Typography>

          <Typography
            variant="caption"
            display="block"
            gutterBottom
            sx={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "22px",
              textAlign: "center",
              letterSpacing: "0.05em",
              color: "#626262",
              paddingBottom: "80px",
            }}
          >
            The Best Hotel & Restorants in Indonesia
          </Typography>
          <Grid
            container
            rowSpacing={5}
            columnSpacing={{ xs: 1, sm: 2, md: 5 }}
          >
            <Grid item xs={4}>
              <Card sx={{}}>
                <CardMedia
                  component="img"
                  width="404px"
                  height="338px"
                  image={hotel1}
                />
              </Card>
              <Box
                sx={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "18px",
                  lineHeight: "170%",
                  /* or 31px */
                  letterSpacing: "0.02em",
                  color: "#626262",
                  paddingTop: "20px",
                }}
              >
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{
                    color: "#000000",
                    width: "277px",
                    height: "29px",
                    fontSize: "24px",
                    lineHeight: "29px",
                    /* identical to box height */
                    letterSpacing: "0.05em",
                  }}
                >
                  Hotel Grand Indonesia
                </Typography>
                <Box
                  sx={{
                    display: "inline-flex",
                  }}
                >
                  <Rating name="read-only" value={5} readOnly />
                  <Typography>(200 review) </Typography>
                </Box>
                <Typography variant="body2" gutterBottom>
                  Jakarta, Indonesia
                </Typography>
                <Typography variant="body2" gutterBottom>
                  From{" "}
                  <span style={{ color: "red", paddingLeft: "5px" }}>
                    Rp1.500.000,00
                  </span>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Card>
                <CardMedia
                  component="img"
                  width="404px"
                  height="338px"
                  image={hotel2}
                />
              </Card>
              <Box
                sx={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "18px",
                  lineHeight: "170%",
                  /* or 31px */
                  letterSpacing: "0.02em",
                  color: "#626262",
                  paddingTop: "20px",
                }}
              >
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{
                    color: "#000000",
                    width: "277px",
                    height: "29px",
                    fontSize: "24px",
                    lineHeight: "29px",
                    /* identical to box height */
                    letterSpacing: "0.05em",
                  }}
                >
                  Hotel Grand Indonesia
                </Typography>
                <Box
                  sx={{
                    display: "inline-flex",
                  }}
                >
                  <Rating name="read-only" value={5} readOnly />
                  <Typography>(200 review) </Typography>
                </Box>
                <Typography variant="body2" gutterBottom>
                  Jakarta, Indonesia
                </Typography>
                <Typography variant="body2" gutterBottom>
                  From{" "}
                  <span style={{ color: "red", paddingLeft: "5px" }}>
                    Rp1.500.000,00
                  </span>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Card>
                <CardMedia
                  component="img"
                  width="404px"
                  height="338px"
                  image={hotel3}
                />
              </Card>
              <Box
                sx={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "18px",
                  lineHeight: "170%",
                  /* or 31px */
                  letterSpacing: "0.02em",
                  color: "#626262",
                  paddingTop: "20px",
                }}
              >
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{
                    color: "#000000",
                    width: "277px",
                    height: "29px",
                    fontSize: "24px",
                    lineHeight: "29px",
                    /* identical to box height */
                    letterSpacing: "0.05em",
                  }}
                >
                  Hotel Grand Indonesia
                </Typography>
                <Box
                  sx={{
                    display: "inline-flex",
                  }}
                >
                  <Rating name="read-only" value={5} readOnly />
                  <Typography>(200 review) </Typography>
                </Box>
                <Typography variant="body2" gutterBottom>
                  Jakarta, Indonesia
                </Typography>
                <Typography variant="body2" gutterBottom>
                  From{" "}
                  <span style={{ color: "red", paddingLeft: "5px" }}>
                    Rp1.500.000,00
                  </span>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Topvisit>
      </div>

      <div>
        <Whattheysaid />
      </div>
      <div>
        <Topvisit>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "36px",
              lineHeight: "44px",
              textAlign: "center",
              letterSpacing: "0.05em",
              color: "#041562",
              paddingTop: "150px",
            }}
          >
            We offer best services
          </Typography>

          <Typography
            variant="caption"
            display="block"
            gutterBottom
            sx={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "22px",
              textAlign: "center",
              letterSpacing: "0.05em",
              color: "#626262",
              paddingBottom: "80px",
            }}
          >
            The Best Service
          </Typography>
          <Grid
            container
            rowSpacing={5}
            columnSpacing={{ xs: 1, sm: 2, md: 5 }}
          >
            <Grid item xs={4}>
              <Card sx={{}}>
                <CardMedia
                  component="img"
                  width="404px"
                  height="338px"
                  image={offer1}
                />
              </Card>
              <Box
                sx={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "18px",
                  lineHeight: "170%",
                  /* or 31px */
                  letterSpacing: "0.02em",
                  color: "#626262",
                  paddingTop: "20px",
                }}
              >
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{
                    color: "#000000",
                    width: "277px",
                    height: "29px",
                    fontSize: "24px",
                    lineHeight: "29px",
                    /* identical to box height */
                    letterSpacing: "0.05em",
                  }}
                >
                  Transportation
                </Typography>
                <Typography variant="body2" gutterBottom>
                  All transportation cost we bear
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Card>
                <CardMedia
                  component="img"
                  width="404px"
                  height="338px"
                  image={offer2}
                />
              </Card>
              <Box
                sx={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "18px",
                  lineHeight: "170%",
                  /* or 31px */
                  letterSpacing: "0.02em",
                  color: "#626262",
                  paddingTop: "20px",
                }}
              >
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{
                    color: "#000000",
                    width: "277px",
                    height: "29px",
                    fontSize: "24px",
                    lineHeight: "29px",
                    /* identical to box height */
                    letterSpacing: "0.05em",
                  }}
                >
                  Guidence
                </Typography>
                <Typography variant="body2" gutterBottom>
                  We offer the best guidence for you
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Card>
                <CardMedia
                  component="img"
                  width="404px"
                  height="338px"
                  image={offer3}
                />
              </Card>
              <Box
                sx={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "18px",
                  lineHeight: "170%",
                  /* or 31px */
                  letterSpacing: "0.02em",
                  color: "#626262",
                  paddingTop: "20px",
                }}
              >
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{
                    color: "#000000",
                    width: "277px",
                    height: "29px",
                    fontSize: "24px",
                    lineHeight: "29px",
                    /* identical to box height */
                    letterSpacing: "0.05em",
                  }}
                >
                  Accomodation
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Luxarious and comfortable
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Topvisit>
      </div>
      <div>
        <Footer gCol="6" />
      </div>
    </>
  );
}

export default Home;
