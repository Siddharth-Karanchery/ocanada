import * as React from "react";
import { AppBar, Grid, Typography, IconButton } from "@mui/material";

import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.css";
import { Drawer } from "../Drawer/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { mobileBreakpoint } from "../../data/constant";

export const Navbar = () => {
  const [drawerStatus, setDrawerStatus] = React.useState(false);
  const isMobile = useMediaQuery(`(max-width:${mobileBreakpoint}px)`);

  let navigate = useNavigate();

  const toggleDrawer = () => {
    setDrawerStatus((prevState) => !prevState);
  };
  return (
    <>
      <AppBar
        position="relative"
        color="transparent"
        className="Navbar"
        // sx={{ boxShadow: "none" }}
      >
        <Grid container>
          <Grid
            className="Navbar__logo"
            item
            xs={11}
            md={11}
            onClick={() => {
              navigate("/");
            }}
          >
            <img
              src={
                "https://seeklogo.com/images/F/flag-of-canada-logo-2AE5525B50-seeklogo.com.png"
              }
              alt="logo"
              className="Navbar__logo__flag"
            />
            <h1 className="Navbar__logo__text">Canada Draw Analysis</h1>
            <img
              src={
                "https://seeklogo.com/images/F/flag-of-canada-logo-2AE5525B50-seeklogo.com.png"
              }
              alt="logo"
              hidden={isMobile}
              className="Navbar__logo__flag"
            />
          </Grid>
          <Grid item xs={1} md={1}>
            <IconButton
              size="large"
              edge="start"
              color={"inherit"}
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </Grid>
        </Grid>
      </AppBar>
      <Drawer drawerStatus={drawerStatus} setDrawerStatus={setDrawerStatus} />
    </>
  );
};
