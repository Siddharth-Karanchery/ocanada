import * as React from "react";
import "./Footer.css";
import { Box, Grid, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

import { useNavigate } from "react-router-dom";

export const Footer = () => {
  let navigate = useNavigate();
  return (
    <Grid
      container
      justifyContent="center"
      direction="column"
      className="Footer"
      columnGap={1}
      sx={{ padding: "1rem" }}
    >
      <Grid container justifyContent="center" direction="row">
        <Grid item className="Footer__column" lg={3}>
          <Box
            onClick={() => {
              navigate("/");
            }}
          >
            <Typography variant="h4">Canada Draw Analysis</Typography>
            <Typography variant="caption">
              Providing insight into the Canada Express Entry draws
            </Typography>
          </Box>
        </Grid>
        <Grid item className="Footer__column" lg={3}>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ marginBottom: "0.5rem" }}
          >
            Menu
          </Typography>
          <Typography
            variant="h6"
            className="Footer__column__link"
            onClick={() => {
              navigate("/breakdown");
            }}
          >
            Breakdown
          </Typography>
          <Typography
            variant="h6"
            className="Footer__column__link"
            onClick={() => {
              navigate("/compare");
            }}
          >
            Compare
          </Typography>
          <Typography
            variant="h6"
            className="Footer__column__link"
            onClick={() => {
              navigate("/news");
            }}
          >
            News
          </Typography>
          <Typography
            variant="h6"
            className="Footer__column__link"
            onClick={() => {
              navigate("/about");
            }}
          >
            About
          </Typography>
          <Typography
            variant="h6"
            className="Footer__column__link"
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contact
          </Typography>
        </Grid>
        <Grid item className="Footer__column" lg={3}>
          <Box>
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ marginBottom: "0.5rem" }}
            >
              Contact
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <EmailIcon sx={{ marginRight: "1rem" }} />
              <Typography variant="caption">
                siddharthkaranchery.official@gmail.com
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid item sx={{ marginTop: "1rem" }}>
        <Typography variant="caption" className="Footer__copyright">
          Canada Draw Analysis (Version 1) (c) 2022
        </Typography>
      </Grid>
    </Grid>
  );
};
