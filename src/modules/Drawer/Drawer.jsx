import "./Drawer.css";
import {
  SwipeableDrawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import InfoIcon from "@mui/icons-material/Info";
import SendIcon from "@mui/icons-material/Send";
import CompareIcon from "@mui/icons-material/Compare";
import SsidChartIcon from "@mui/icons-material/SsidChart";
import NewspaperIcon from "@mui/icons-material/Newspaper";

import { updatedDate } from "../../data/constant";

import { useNavigate } from "react-router-dom";

export const Drawer = ({ drawerStatus, setDrawerStatus }) => {
  let navigate = useNavigate();

  const clickHandler = (path) => {
    navigate(path);
    setDrawerStatus(false);
  };
  return (
    <SwipeableDrawer
      anchor={"right"}
      open={drawerStatus}
      onClose={() => setDrawerStatus(false)}
      onOpen={() => setDrawerStatus(true)}
      // sx={{ marginTop: "10rem", backgroundColor: "#282c34" }}
      className="Drawer"
    >
      <Box className="Drawer__content">
        <Typography className="Drawer__content__title">Menu</Typography>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                clickHandler("/breakdown");
              }}
            >
              <ListItemIcon>
                <SsidChartIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Breakdown" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                clickHandler("/compare");
              }}
            >
              <ListItemIcon>
                <CompareIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Compare" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                clickHandler("/news");
              }}
            >
              <ListItemIcon>
                <NewspaperIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="News" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                clickHandler("/about");
              }}
            >
              <ListItemIcon>
                <InfoIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                clickHandler("/contact");
              }}
            >
              <ListItemIcon>
                <SendIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Contact" />
            </ListItemButton>
          </ListItem>
        </List>

        <Typography className="Drawer__content__update">
          Last Updated: {updatedDate}
        </Typography>
      </Box>
    </SwipeableDrawer>
  );
};
