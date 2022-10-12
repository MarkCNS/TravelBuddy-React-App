import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate, useHistory, useLocation } from "react-router-dom";

const drawerWidth = "50vw";
const navItems = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Packages", path: "/packages" },
  { title: "Place", path: "/places" },
  { title: "Contact", path: "/contact" },
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = (path) => {
    navigate(`${path}`);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography sx={{ color: "#696969" }} />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item}>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{ backgroundColor: "#FFFFFF", position: "inherit" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "#041562" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              //   flexGrow: 1,
              display: { xs: "none", sm: "block", textAlign: "left" },
              color: "#041562",
              fontFamily: "Inter",
              fontWeight: "bold",
            }}
          >
            TravelBuddy
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item, index) => (
              <Button
                key={index}
                onClick={() => handleClick(item.path)}
                sx={{
                  color: "#696969",
                  textTransform: "capitalize",
                  fontSize: "16px",
                  px: "30px",
                  fontFamily: "Inter",
                }}
              >
                {item.title}
              </Button>
            ))}
          </Box>
          <Button
            variant="contained"
            sx={{
              color: "#FFFFFF",
              backgroundColor: "#ff5403",
              fontFamily: "Inter",
              textTransform: "capitalize",
              px: "20px",
            }}
          >
            Book Now
          </Button>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          //   ModalProps={{
          //     keepMounted: true, // Better open performance on mobile.
          //   }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
