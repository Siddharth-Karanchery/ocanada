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

export const BreakdownCutoff = (props) => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <LineChart
        data={props.cutoffData}
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
          dataKey="Cutoff"
          stroke="#4361ee"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
