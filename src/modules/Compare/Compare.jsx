import { Typography, Box, Button, TextField } from "@mui/material";
import * as React from "react";
import { Compare401 } from "../Compare_401_450/Compare401";
import { Compare451 } from "../Compare_451_500/Compare451";
import { CompareOverall } from "../Compare_overall/CompareOverall";
import "./Compare.css";
import axios from "axios";
import { ThemeProvider } from "@mui/material/styles";
import { appTheme } from "../../theme";

export const Compare = () => {
  const [inputData, setInputData] = React.useState([]);
  const [date1, setDate1] = React.useState();
  const [date2, setDate2] = React.useState();
  const [filteredData, setFilteredData] = React.useState(inputData);

  const filterData = () => {
    const temp = [];

    inputData.map((item) => {
      if (item.date === date1 || item.date === date2) {
        temp.push(item);
      }
      setFilteredData(temp);
    });
  };

  React.useEffect(() => {
    axios
      .get(
        `https://ocanada-4d695-default-rtdb.asia-southeast1.firebasedatabase.app/.json?auth=${process.env.REACT_APP_DBSECRET}`
      )
      .then((response) => {
        const tempInputData = Object.values(response.data.data);

        setInputData(tempInputData);
        setFilteredData(tempInputData);

        setDate1(tempInputData[0].date);
        setDate2(tempInputData[tempInputData.length - 1].date);
      });
  }, []);

  React.useEffect(() => {
    filterData();
  }, [date1, date2]);

  return (
    filteredData.length !== 0 && (
      <ThemeProvider theme={appTheme}>
        <Box class="Compare">
          <Typography
            variant="h4"
            sx={{
              marginTop: "1rem",
              marginBottom: "2rem",
            }}
          >
            Compare
          </Typography>
          <Box class="Compare__Filter">
            <Box class="Compare__Filter__Date">
              <Typography sx={{ marginRight: "0.5rem" }}>Date 1:</Typography>

              <TextField
                className="Compare__Filter__Date__Input"
                onChange={(e) => setDate1(e.target.value)}
                name="date"
                variant="standard"
                sx={{ marginLeft: "0.5rem", width: "14.2rem" }}
                type="date"
                value={date1}
              />
            </Box>
            <Box class="Compare__Filter__Date">
              <Typography sx={{ marginRight: "0.5rem" }}>Date 2:</Typography>

              <TextField
                className="Compare__Filter__Date__Input"
                onChange={(e) => setDate1(e.target.value)}
                name="date"
                variant="standard"
                sx={{ marginLeft: "0.5rem", width: "14.2rem" }}
                type="date"
                value={date2}
              />
            </Box>
            <Button
              variant="outlined"
              className="Compare__Filter__Button"
              sx={{
                color: "#fff",
                border: "1px solid #fff",
                ":hover": { border: "1px solid #aaa", color: "#aaa" },
              }}
              onClick={filterData}
            >
              Filter
            </Button>
          </Box>
          <Box class="Compare__Chart">
            <Typography
              variant="h5"
              sx={{
                marginTop: "0.5rem",
                marginBottom: "2rem",
              }}
            >
              Overall
            </Typography>
            <CompareOverall filteredData={filteredData} />
          </Box>
          <Box class="Compare__Chart">
            <Typography
              variant="h5"
              sx={{
                marginTop: "0.5rem",
                marginBottom: "2rem",
              }}
            >
              451 - 500
            </Typography>
            <Compare451 filteredData={filteredData} />
            {/* <Breakdown451 data451={data451} /> */}
          </Box>
          <Box class="Compare__Chart">
            <Typography
              variant="h5"
              sx={{
                marginTop: "0.5rem",
                marginBottom: "2rem",
              }}
            >
              401 - 450
            </Typography>
            <Compare401 filteredData={filteredData} />
            {/* <Breakdown401 data401={data401} /> */}
          </Box>
        </Box>
      </ThemeProvider>
    )
  );
};
