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

export const Breakdown451 = (props) => {
  return (
    <LineChart
      width={1500}
      height={500}
      data={props.data451}
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
        dataKey="451-460"
        stroke="#F72585"
        activeDot={{ r: 8 }}
      />
      <Line
        type="linear"
        dataKey="461-470"
        stroke="#b5179e"
        activeDot={{ r: 8 }}
      />
      <Line
        type="linear"
        dataKey="471-480"
        stroke="#8127b6"
        activeDot={{ r: 8 }}
      />
      <Line
        type="linear"
        dataKey="481-490"
        stroke="#4d36ce"
        activeDot={{ r: 8 }}
      />
      <Line
        type="linear"
        dataKey="491-500"
        stroke="#4361ee"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
};
