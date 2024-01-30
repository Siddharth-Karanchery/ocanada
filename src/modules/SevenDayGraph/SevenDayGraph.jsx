import { Grid, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as React from "react";
import "./SevenDayGraph.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";
import moment from "moment";

export const SevenDayGraph = () => {
  const [inputData, setInputData] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(
        `https://ocanada-4d695-default-rtdb.asia-southeast1.firebasedatabase.app/.json?auth=${process.env.REACT_APP_DBSECRET}`
      )
      .then((response) => {
        const tempInputData = Object.values(response.data.data);
        setInputData(tempInputData.slice(-7));
      });
  }, []);

  const isMobile = useMediaQuery("(max-width:450px)");

  const cutoffData = inputData.map((item) => {
    return {
      date: moment(item.date, "YYYY-MM-DD").format("DD MMM YYYY"),
      Cutoff: item.cutoff,
    };
  });

  const itaData = inputData.map((item) => {
    return {
      date: moment(item.date, "YYYY-MM-DD").format("DD MMM YYYY"),
      ITA: item.ITA,
    };
  });
  const chartMargins = isMobile
    ? {
        top: 0,
        right: -10,
        left: -20,
        bottom: 0,
      }
    : {
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      };

  return (
    <Grid className="SevenDayGraph">
      <Grid container className="SevenDayGraph__graphs">
        <Grid item xs={12} lg={6}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={cutoffData}
              margin={chartMargins}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                padding={{
                  right: 20,
                  left: 20,
                }}
              />
              <YAxis
                padding={{
                  top: 20,
                  bottom: 20,
                }}
              />

              <Legend />
              <Line
                type="linear"
                dataKey="Cutoff"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Grid>
        <Grid item xs={12} lg={6}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={itaData}
              margin={chartMargins}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                padding={{
                  right: 20,
                  left: 20,
                }}
              />
              <YAxis
                padding={{
                  top: 20,
                  bottom: 20,
                }}
              />

              <Legend />
              <Line
                type="linear"
                dataKey="ITA"
                stroke="#82ca9d"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Grid>
      </Grid>
    </Grid>
  );
};
