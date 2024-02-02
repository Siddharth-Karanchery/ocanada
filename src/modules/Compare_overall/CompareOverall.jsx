import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { PieChart, Pie, Cell, BarChart, Bar } from "recharts";
import { ComparePieLegend } from "../ComparePieLegend/ComparePieLegend";

export const CompareOverall = (props) => {
  const dataPie1 = [
    {
      segment: "601-1200",
      value: parseInt(props.filteredData[0].pool["601-1200"]),
    },
    {
      segment: "501-600",
      value: parseInt(props.filteredData[0].pool["501-600"]),
    },
    {
      segment: "451-500",
      value: parseInt(props.filteredData[0].pool["451-500"].total),
    },
    {
      segment: "401-450",
      value: parseInt(props.filteredData[0].pool["401-450"].total),
    },
    {
      segment: "351-400",
      value: parseInt(props.filteredData[0].pool["351-400"]),
    },
    {
      segment: "301-350",
      value: parseInt(props.filteredData[0].pool["301-350"]),
    },
    { segment: "0-300", value: parseInt(props.filteredData[0].pool["0-300"]) },
  ];

  const dataPie2 = [
    {
      segment: "601-1200",
      value: parseInt(props.filteredData[1].pool["601-1200"]),
    },
    {
      segment: "501-600",
      value: parseInt(props.filteredData[1].pool["501-600"]),
    },
    {
      segment: "451-500",
      value: parseInt(props.filteredData[1].pool["451-500"].total),
    },
    {
      segment: "401-450",
      value: parseInt(props.filteredData[1].pool["401-450"].total),
    },
    {
      segment: "351-400",
      value: parseInt(props.filteredData[1].pool["351-400"]),
    },
    {
      segment: "301-350",
      value: parseInt(props.filteredData[1].pool["301-350"]),
    },
    { segment: "0-300", value: parseInt(props.filteredData[1].pool["0-300"]) },
  ];

  const barchartData = [];
  Object.keys(props.filteredData[0].pool).forEach(function (key, index) {
    const date1Label = props.filteredData[0].date;
    const date2Label = props.filteredData[1].date;
    const tempObj = {};
    tempObj["segment"] = key;
    tempObj[date1Label] =
      key === "451-500" || key === "401-450"
        ? props.filteredData[0].pool[key].total
        : props.filteredData[0].pool[key];
    tempObj[date2Label] =
      key === "451-500" || key === "401-450"
        ? props.filteredData[1].pool[key].total
        : props.filteredData[1].pool[key];
    barchartData.push(tempObj);
  });

  const COLORS = [
    "#F72585",
    "#b5179e",
    "#8127b6",
    "#4d36ce",
    "#4361ee",
    "#4895ef",
    "#4cc9f0",
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 1.1;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y + 1}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize="0.7rem"
        style={{ paddingTop: "1rem" }}
      >
        {`${(percent * 100).toFixed(2)}%`}
      </text>
    );
  };

  const isMobile = useMediaQuery("(max-width:450px)");
  const isTablet = useMediaQuery("(max-width:850px)");

  return (
    <Box class="CompareOverall">
      <Box class="CompareOverall__Pie">
        <PieChart width={600} height={350}>
          <Pie
            data={dataPie1}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {dataPie1.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>

        <PieChart width={600} height={350}>
          <Pie
            data={dataPie2}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {dataPie2.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </Box>
      <ComparePieLegend element={"overall"} />

      <ResponsiveContainer width={isMobile ? "50%" : "100%"} height={300}>
        <BarChart
          data={barchartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="segment" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={props.filteredData[0].date} fill="#F72585" />
          <Bar dataKey={props.filteredData[1].date} fill="#4d36ce" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};
