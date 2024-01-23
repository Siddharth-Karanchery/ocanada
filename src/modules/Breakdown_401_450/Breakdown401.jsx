import * as React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export const Breakdown401 = (props) => {
  return (
    <LineChart
      width={1500}
      height={500}
      data={props.data401}
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
        type="linear"
        dataKey="401-410"
        stroke="#F72585"
        activeDot={{ r: 8 }}
      />
      <Line
        type="linear"
        dataKey="411-420"
        stroke="#b5179e"
        activeDot={{ r: 8 }}
      />
      <Line
        type="linear"
        dataKey="421-430"
        stroke="#8127b6"
        activeDot={{ r: 8 }}
      />
      <Line
        type="linear"
        dataKey="431-440"
        stroke="#4d36ce"
        activeDot={{ r: 8 }}
      />
      <Line
        type="linear"
        dataKey="441-450"
        stroke="#4361ee"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
};
