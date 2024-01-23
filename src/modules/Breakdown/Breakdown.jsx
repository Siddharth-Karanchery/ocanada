import { Container, Typography, Box, Button, TextField } from "@mui/material";
import * as React from "react";
import "./Breakdown.css";
import { ThemeProvider, styled } from "@mui/material/styles";
import { BreakdownOverall } from "../Breakdown_overall/BreakdownOverall";
import { Breakdown451 } from "../Breakdown_451_500/Breakdown451.jsx";
import { Breakdown401 } from "../Breakdown_401_450/Breakdown401";
import { BreakdownCutoff } from "../Breakdown_Cutoff/BreakdownCutoff";
import { BreakdownITA } from "../Breakdown_ITA/BreakdownITA";
import axios from "axios";
import { appTheme } from "../../theme";
import moment from "moment";

export const Breakdown = () => {
  const [inputData, setInputData] = React.useState([]);
  const [fromDate, setFromDate] = React.useState();
  const [toDate, setToDate] = React.useState();
  const [filteredData, setFilteredData] = React.useState(inputData);

  React.useEffect(() => {
    filterData();
    axios
      .get(
        `https://ocanada-4d695-default-rtdb.asia-southeast1.firebasedatabase.app/.json?auth=${process.env.REACT_APP_DBSECRET}`
      )
      .then((response) => {
        const tempInputData = Object.values(response.data.data);
        setInputData(tempInputData);
        setFilteredData(tempInputData);
        setFromDate(tempInputData[0].date);
        setToDate(tempInputData[tempInputData.length - 1].date);
      });
  }, []);

  const filterData = () => {
    if (fromDate > toDate) {
      alert("From date cannot be greater than to date!");
      return;
    }
    const temp = [];
    inputData.map((item) => {
      if (item.date >= fromDate && item.date <= toDate) {
        temp.push(item);
        setFilteredData(temp);
      }
    });
  };

  const overAllData = filteredData.map((item) => {
    return {
      "601-1200": item.pool["601-1200"],
      "501-600": item.pool["501-600"],
      "451-500": item.pool["451-500"].total,
      "401-450": item.pool["401-450"].total,
      "351-400": item.pool["351-400"],
      "301-350": item.pool["301-350"],
      "0-300": item.pool["0-300"],
      date: moment(item.date, "YYYY-MM-DD").format("DD MMM YYYY"),
    };
  });

  const data451 = filteredData.map((item) => {
    return {
      "451-460": item.pool["451-500"].breakdown["451-460"],
      "461-470": item.pool["451-500"].breakdown["461-470"],
      "471-480": item.pool["451-500"].breakdown["471-480"],
      "481-490": item.pool["451-500"].breakdown["481-490"],
      "491-500": item.pool["451-500"].breakdown["491-500"],
      date: moment(item.date, "YYYY-MM-DD").format("DD MMM YYYY"),
    };
  });

  const data401 = filteredData.map((item) => {
    return {
      "401-410": item.pool["401-450"].breakdown["401-410"],
      "411-420": item.pool["401-450"].breakdown["411-420"],
      "421-430": item.pool["401-450"].breakdown["421-430"],
      "431-440": item.pool["401-450"].breakdown["431-440"],
      "441-450": item.pool["401-450"].breakdown["441-450"],
      date: moment(item.date, "YYYY-MM-DD").format("DD MMM YYYY"),
    };
  });

  const cutoffData = filteredData.map((item) => {
    return {
      date: moment(item.date, "YYYY-MM-DD").format("DD MMM YYYY"),
      Cutoff: item.cutoff,
    };
  });

  const itaData = filteredData.map((item) => {
    return {
      date: moment(item.date, "YYYY-MM-DD").format("DD MMM YYYY"),
      ITA: item.ITA,
    };
  });

  return (
    <ThemeProvider theme={appTheme}>
      <Container class="Breakdown">
        <Typography
          variant="h4"
          sx={{
            marginTop: "1rem",
            marginBottom: "2rem",
          }}
        >
          Breakdown
        </Typography>
        <Container class="Breakdown__Filter">
          <Box class="Breakdown__Filter__Date">
            <Typography sx={{ marginRight: "0.5rem" }}>From:</Typography>
            <TextField
              className="Breakdown__Filter__Date__Input"
              onChange={(e) => setFromDate(e.target.value)}
              name="date"
              variant="standard"
              sx={{ marginLeft: "0.5rem", width: "14.2rem" }}
              type="date"
              value={fromDate}
            />
          </Box>
          <Box class="Breakdown__Filter__Date">
            <Typography sx={{ marginRight: "0.5rem" }}>To:</Typography>

            <TextField
              className="Breakdown__Filter__Date__Input"
              onChange={(e) => setToDate(e.target.value)}
              name="date"
              variant="standard"
              sx={{ marginLeft: "0.5rem", width: "14.2rem" }}
              type="date"
              value={toDate}
            />
          </Box>
          <Button
            variant="outlined"
            className="Breakdown__Filter__Button"
            sx={{
              color: "#fff",
              border: "1px solid #fff",
              ":hover": { border: "1px solid #aaa", color: "#aaa" },
            }}
            onClick={filterData}
          >
            Filter
          </Button>
        </Container>
        <Container class="Breakdown__Chart">
          <Typography
            variant="h5"
            sx={{
              marginTop: "0.5rem",
              marginBottom: "2rem",
            }}
          >
            Overall
          </Typography>
          <BreakdownOverall overAllData={overAllData} />
        </Container>
        <Container class="Breakdown__Chart">
          <Typography
            variant="h5"
            sx={{
              marginTop: "0.5rem",
              marginBottom: "2rem",
            }}
          >
            451 - 500
          </Typography>
          <Breakdown451 data451={data451} />
        </Container>
        <Container class="Breakdown__Chart">
          <Typography
            variant="h5"
            sx={{
              marginTop: "0.5rem",
              marginBottom: "2rem",
            }}
          >
            401 - 450
          </Typography>
          <Breakdown401 data401={data401} />
        </Container>
        <Container class="Breakdown__Chart">
          <Typography
            variant="h5"
            sx={{
              marginTop: "0.5rem",
              marginBottom: "2rem",
            }}
          >
            Cutoff
          </Typography>
          <BreakdownCutoff cutoffData={cutoffData} />
        </Container>
        <Container class="Breakdown__Chart">
          <Typography
            variant="h5"
            sx={{
              marginTop: "0.5rem",
              marginBottom: "2rem",
            }}
          >
            ITA
          </Typography>
          <BreakdownITA itaData={itaData} />
        </Container>
      </Container>
    </ThemeProvider>
  );
};
