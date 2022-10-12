import * as React from "react";
import Card from "@mui/material/Card";
import { Box, Button, CardActionArea, Typography } from "@mui/material";

const Banner = (props) => {
  return (
    <Card
      sx={{
        height: `${props.height}`,
        width: `${props.width}`,
        padding: `${props.padding}`,
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${props.image})`,
          backgroundSize: "100% 100%",
          height: "100%",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
          color: "white",
          justifyContent: "center",
          filter: `${props.filter}`,
        }}
      >
        {props.children}
      </Box>
    </Card>
  );
};
export default Banner;
