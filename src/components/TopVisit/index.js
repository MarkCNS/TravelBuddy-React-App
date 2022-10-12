import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";

import React from "react";

const Topvisit = (props) => {
  return (
    <Container maxWidth={false} sx={{ maxWidth: "90%" }} {...props}>
      {props.children}
    </Container>
  );
};
export default Topvisit;
