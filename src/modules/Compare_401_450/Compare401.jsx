import { LocalConvenienceStoreOutlined } from "@mui/icons-material";
import { Container } from "@mui/material";
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
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { ComparePieLegend } from "../ComparePieLegend/ComparePieLegend";

export const Compare401 = (props) => {
  const dataPie1 = [
    {
      segment: "441-450",
      value: parseInt(
        props.filteredData[0].pool["401-450"].breakdown["441-450"]
      ),
    },
    {
      segment: "431-440",
      value: parseInt(
        props.filteredData[0].pool["401-450"].breakdown["431-440"]
      ),
    },
    {
      segment: "421-430",
      value: parseInt(
        props.filteredData[0].pool["401-450"].breakdown["421-430"]
      ),
    },
    {
      segment: "411-420",
      value: parseInt(
        props.filteredData[0].pool["401-450"].breakdown["411-420"]
      ),
    },
    {
      segment: "401-410",
      value: parseInt(
        props.filteredData[0].pool["401-450"].breakdown["401-410"]
      ),
    },
  ];
  const dataPie2 = [
    {
      segment: "441-450",
      value: parseInt(
        props.filteredData[1].pool["401-450"].breakdown["441-450"]
      ),
    },
    {
      segment: "431-440",
      value: parseInt(
        props.filteredData[1].pool["401-450"].breakdown["431-440"]
      ),
    },
    {
      segment: "421-430",
      value: parseInt(
        props.filteredData[1].pool["401-450"].breakdown["421-430"]
      ),
    },
    {
      segment: "411-420",
      value: parseInt(
        props.filteredData[1].pool["401-450"].breakdown["411-420"]
      ),
    },
    {
      segment: "401-410",
      value: parseInt(
        props.filteredData[1].pool["401-450"].breakdown["401-410"]
      ),
    },
  ];

  const barchartData = [];
  Object.keys(props.filteredData[0].pool["401-450"].breakdown).forEach(
    function (key, index) {
      const date1Label = props.filteredData[0].date;
      const date2Label = props.filteredData[1].date;
      const tempObj = {};
      tempObj["segment"] = key;
      tempObj[date1Label] =
        key === "401-450" || key === "401-450"
          ? props.filteredData[0].pool["401-450"].breakdown[key]
          : props.filteredData[0].pool["401-450"].breakdown[key];
      tempObj[date2Label] =
        key === "401-450" || key === "401-450"
          ? props.filteredData[1].pool["401-450"].breakdown[key]
          : props.filteredData[1].pool["401-450"].breakdown[key];
      barchartData.push(tempObj);
    }
  );

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

  return (
    <Container class="CompareOverall">
      <Container class="CompareOverall__Pie">
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
      </Container>
      <ComparePieLegend element={"401_450"} />
      <Container class="CompareOverall__Line">
        <BarChart
          width={1200}
          height={300}
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
          <YAxis domain={[0, 16000]} interval={0} />
          <Tooltip />
          <Legend />
          <Bar dataKey={props.filteredData[0].date} fill="#F72585" />
          <Bar dataKey={props.filteredData[1].date} fill="#4d36ce" />
        </BarChart>
      </Container>
    </Container>
  );
};
