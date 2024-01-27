import * as React from "react";
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

export const BreakdownOverall = (props) => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <LineChart
        data={props.overAllData}
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
          dataKey="601-1200"
          stroke="#F72585"
          activeDot={{ r: 8 }}
        />
        <Line
          type="linear"
          dataKey="501-600"
          stroke="#b5179e"
          activeDot={{ r: 8 }}
        />
        <Line
          type="linear"
          dataKey="451-500"
          stroke="#8127b6"
          activeDot={{ r: 8 }}
        />
        <Line
          type="linear"
          dataKey="401-450"
          stroke="#4d36ce"
          activeDot={{ r: 8 }}
        />
        <Line
          type="linear"
          dataKey="351-400"
          stroke="#4361ee"
          activeDot={{ r: 8 }}
        />
        <Line
          type="linear"
          dataKey="301-350"
          stroke="#4895ef"
          activeDot={{ r: 8 }}
        />
        <Line
          type="linear"
          dataKey="0-300"
          stroke="#4cc9f0"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
