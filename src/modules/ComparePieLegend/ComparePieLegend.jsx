import { Box, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as React from "react";

import "./ComparePieLegend.css";
export const ComparePieLegend = (props) => {
  const isMobile = useMediaQuery("(max-width:450px)");

  const OverallColors = [
    "#F72585",
    "#b5179e",
    "#8127b6",
    "#4d36ce",
    "#4361ee",
    "#4895ef",
    "#4cc9f0",
  ];
  const OverallText = [
    "601-1200",
    "501-600",
    "451-500",
    "401-450",
    "351-400",
    "301-350",
    "0-300",
  ];

  const segmentColors = ["#F72585", "#b5179e", "#8127b6", "#4d36ce", "#4361ee"];
  const Text_451_500 = ["491-500", "481-490", "471-480", "461-470", "451-460"];
  const Text_401_450 = ["441-450", "431-440", "421-430", "411-420", "401-410"];
  let legendEle = null;
  if (props.element === "overall") {
    legendEle = OverallColors.map((item, index) => {
      return (
        <Box className="ComparePieLegend__ele__panel" key={index + 30}>
          <Box
            className="ComparePieLegend__ele__panel__box"
            style={{ backgroundColor: item }}
          ></Box>
          <Typography
            variant={isMobile ? "subtitle2" : "h6"}
            style={{ color: item }}
          >
            {OverallText[index]}
          </Typography>
        </Box>
      );
    });
  } else if (props.element === "451_500") {
    legendEle = segmentColors.map((item, index) => {
      return (
        <Box className="ComparePieLegend__ele__panel" key={index + 20}>
          <Box
            className="ComparePieLegend__ele__panel__box"
            style={{ backgroundColor: item }}
          ></Box>
          <Typography
            variant={isMobile ? "subtitle2" : "h6"}
            style={{ color: item }}
          >
            {Text_451_500[index]}
          </Typography>
        </Box>
      );
    });
  } else if (props.element === "401_450") {
    legendEle = segmentColors.map((item, index) => {
      return (
        <Box className="ComparePieLegend__ele__panel" key={index + 10}>
          <Box
            className="ComparePieLegend__ele__panel__box"
            style={{ backgroundColor: item }}
          ></Box>
          <Typography
            variant={isMobile ? "subtitle2" : "h6"}
            style={{ color: item }}
          >
            {Text_401_450[index]}
          </Typography>
        </Box>
      );
    });
  }
  return (
    <Box className="ComparePieLegend">
      <Box className="ComparePieLegend__ele">{legendEle}</Box>
    </Box>
  );
};
