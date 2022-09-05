import { Grid } from "@mui/material";
import * as React from "react";
import "./SevenDayGraph.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Typography } from "@mui/material";

import { mockApiData } from "../../data/mockApi";

export const SevenDayGraph = () => {
  const inputData =
    mockApiData.length < 7
      ? mockApiData.reverse()
      : mockApiData.slice(0, 7).reverse();

  const cutoffData = inputData.map((item) => {
    return {
      date: item.date,
      Cutoff: item.cutoff,
    };
  });

  const itaData = inputData.map((item) => {
    return { date: item.date, ITA: item.ITA };
  });

  return (
    <Grid container className="SevenDayGraph" lg={8}>
      <Grid item lg={6}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={cutoffData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
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
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Cutoff"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Grid>
      <Grid item lg={6}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={itaData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
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
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="ITA"
              stroke="#82ca9d"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Grid>
    </Grid>
  );
};
