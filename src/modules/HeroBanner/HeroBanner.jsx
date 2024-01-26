import { Box, Grid, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as React from "react";
import "./HeroBanner.css";
import axios from "axios";
import moment from "moment";

export const HeroBanner = () => {
  const [mockApiData, setMockApiData] = React.useState([]);
  const [nextDrawDate, setNextDrawDate] = React.useState();

  const isMobile = useMediaQuery("(max-width:450px)");
  const isTablet = useMediaQuery("(max-width:850px)");

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
      <Box className="HeroBanner">
        <Box item className="HeroBanner__ele">
          <img
            src={
              "https://media.giphy.com/media/MONvE9pT7jsEE/giphy-downsized-large.gif"
            }
            alt="logo"
            className="HeroBanner__flag"
          />
        </Box>
        <Box item className="HeroBanner__ele">
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
                <Typography variant={isMobile || isTablet ? "h2" : "h1"}>
                  {mockApiData[mockApiData.length - 1].cutoff}
                </Typography>
              </Box>
              <Box className="HeroBanner__Content__data__item">
                <Typography variant="h6">ITA's: </Typography>
                <Typography variant={isMobile || isTablet ? "h2" : "h1"}>
                  {mockApiData[mockApiData.length - 1].ITA}
                </Typography>
              </Box>
            </Box>
            <Typography className="HeroBanner__next" variant="caption">
              Next draw on:
              {` ${moment(nextDrawDate, "YYYY-MM-DD").format("DD MMM YYYY")}`}
            </Typography>
          </Box>
        </Box>
      </Box>
    )
  );
};
