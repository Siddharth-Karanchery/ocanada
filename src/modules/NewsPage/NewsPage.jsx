import * as React from "react";
import "./NewsPage.css";
// import { newsAPiKey } from "../../data/constant";
import moment from "moment";
import { Typography, Box, Button, TextField } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import Masonry from "@mui/lab/Masonry";

import { NewsTile } from "../NewsTile/NewsTile";
import { ThemeProvider } from "@mui/material/styles";
import { appTheme } from "../../theme";

const axios = require("axios");

export const NewsPage = () => {
  const [newsData, setNewsData] = React.useState();
  const [fromDate, setFromDate] = React.useState(
    moment().subtract(1, "days").format("YYYY-MM-DD")
  );
  const [toDate, setToDate] = React.useState(
    moment().subtract(91, "days").format("YYYY-MM-DD")
  );

  React.useEffect(() => {
    getData();
  });

  const isMobile = useMediaQuery("(max-width:450px)");
  const isTablet = useMediaQuery("(max-width:850px)");

  const getData = () => {
    if (toDate > fromDate) {
      alert("To date cannot be greater then from date!");
      setFromDate(moment().subtract(1, "days").format("YYYY-MM-DD"));
      setToDate(moment().subtract(91, "days").format("YYYY-MM-DD"));
      return;
    }
    axios
      .get(
        `https://newsapi.org/v2/everything?q=Immigration%2C%20Refugees%20and%20Citizenship%20Canada&from=${fromDate}&to=${toDate}&sortBy=publishedAt&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
      )
      .then(function (response) {
        setNewsData(response.data.articles);
      });
  };

  return (
    <ThemeProvider theme={appTheme}>
      <Box className="NewsPage">
        <Typography
          variant="h4"
          sx={{
            marginTop: "1rem",
            marginBottom: "2rem",
          }}
        >
          News
        </Typography>
        <Box
          className="NewsPage__Filter"
          flexDirection={isMobile ? "column" : "row"}
        >
          <Box className="NewsPage__Filter__Date">
            <Typography sx={{ marginRight: "0.5rem" }}>From:</Typography>
            <TextField
              className="NewsPage__Filter__Date__Input"
              onChange={(e) => setToDate(e.target.value)}
              name="date"
              variant="standard"
              sx={{ marginLeft: "0.5rem", width: "14.2rem" }}
              type="date"
              value={toDate}
            />
          </Box>
          <Box className="NewsPage__Filter__Date">
            <Typography sx={{ marginRight: "0.5rem" }}>To:</Typography>

            <TextField
              className="NewsPage__Filter__Date__Input"
              onChange={(e) => setFromDate(e.target.value)}
              name="date"
              variant="standard"
              sx={{ marginLeft: "0.5rem", width: "14.2rem" }}
              type="date"
              value={fromDate}
            />
          </Box>
          <Button
            variant="outlined"
            className="NewsPage__Filter__Button"
            sx={{
              color: "#fff",
              border: "1px solid #fff",
              ":hover": { border: "1px solid #aaa", color: "#aaa" },
            }}
            onClick={getData}
          >
            Filter
          </Button>
        </Box>
        <Masonry columns={isMobile ? 1 : isTablet ? 2 : 4} spacing={2}>
          {newsData &&
            newsData.map((article, index) => (
              <NewsTile key={index} article={article} />
            ))}
        </Masonry>
      </Box>
    </ThemeProvider>
  );
};
