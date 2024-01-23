import { Box, Grid, Typography } from "@mui/material";
import * as React from "react";
import "./HeroBanner.css";
import axios from "axios";
import moment from "moment";

export const HeroBanner = () => {
  const [mockApiData, setMockApiData] = React.useState([]);
  const [nextDrawDate, setNextDrawDate] = React.useState();

  React.useEffect(() => {
    axios
      .get(
        `https://ocanada-4d695-default-rtdb.asia-southeast1.firebasedatabase.app/.json?auth=${process.env.REACT_APP_DBSECRET}`
      )
      .then((response) => {
        const tempInputData = Object.values(response.data.data);
        setMockApiData(tempInputData);
        setNextDrawDate(
          moment(
            tempInputData[tempInputData.length - 1].date,
            "YYYY-MM-DD"
          ).add(14, "days")
        );
      });
  }, []);

  return (
    mockApiData.length !== 0 && (
      <Grid
        container
        justifyContent="center"
        direction="row"
        sx={{ margin: "1rem 0" }}
      >
        <Grid item className="root" lg={8}>
          <Grid item className="HeroBanner" lg={6}>
            <img
              src={
                "https://media.giphy.com/media/MONvE9pT7jsEE/giphy-downsized-large.gif"
              }
              alt="logo"
              className="HeroBanner__flag"
            />
          </Grid>
          <Grid item className="HeroBanner" lg={6}>
            <Box className="HeroBanner__Content">
              <Typography sx={{ fontWeight: "bold" }}>
                Draw No:
                {`${mockApiData[mockApiData.length - 1].drawNum} (${moment(
                  mockApiData[mockApiData.length - 1].date
                ).format("DD MMM YYYY")})`}
              </Typography>
              <Box className="HeroBanner__Content__data" flexGrow={1}>
                <Box className="HeroBanner__Content__data__item">
                  <Typography variant="h6">Cutoff: </Typography>
                  <Typography variant="h1">
                    {mockApiData[mockApiData.length - 1].cutoff}{" "}
                  </Typography>
                </Box>
                <Box className="HeroBanner__Content__data__item">
                  <Typography variant="h6">ITA's: </Typography>
                  <Typography variant="h1">
                    {mockApiData[mockApiData.length - 1].ITA}{" "}
                  </Typography>
                </Box>
              </Box>
              <Typography className="HeroBanner__next" variant="caption">
                Next draw on:
                {` ${moment(nextDrawDate, "YYYY-MM-DD").format("DD MMM YYYY")}`}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    )
  );
};
