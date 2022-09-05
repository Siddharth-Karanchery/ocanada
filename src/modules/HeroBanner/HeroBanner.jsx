import { Box, Grid, Typography } from "@mui/material";
import * as React from "react";
import "./HeroBanner.css";

import { mockApiData } from "../../data/mockApi";
import moment from "moment";

export const HeroBanner = () => {
  console.log("mockApiData: ", mockApiData[0]);
  return (
    <Grid container justifyContent="center" direction="row">
      <Grid item className="root" lg={8}>
        <Grid item className="HeroBanner" lg={6}>
          <img
            src={
              "https://media.giphy.com/media/MONvE9pT7jsEE/giphy-downsized-large.gif"
            }
            alt="logo"
            className="HeroBanner__flag"
          />
          {/* <Box className="HeroBanner__Content">
          <Typography>Draw No:-{mockApiData[0].drawNum}</Typography>
          <Box className="HeroBanner__Content">{mockApiData[0].cutoff}</Box>
          <Box className="HeroBanner__Content">{mockApiData[0].ITA}</Box>
        </Box> */}
        </Grid>
        <Grid item className="HeroBanner" lg={6}>
          <Box className="HeroBanner__Content">
            <Typography sx={{ fontWeight: "bold" }}>
              Draw No:{" "}
              {`${mockApiData[0].drawNum} (${moment(mockApiData[0].date).format(
                "DD MMM YYYY"
              )})`}
            </Typography>
            <Box className="HeroBanner__Content__data" flexGrow={1}>
              <Box className="HeroBanner__Content__data__item">
                <Typography variant="h6">Cutoff: </Typography>
                <Typography variant="h1">{mockApiData[0].cutoff} </Typography>
              </Box>
              <Box className="HeroBanner__Content__data__item">
                <Typography variant="h6">ITA's: </Typography>
                <Typography variant="h1">{mockApiData[0].ITA} </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
