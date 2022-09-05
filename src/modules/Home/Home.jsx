import * as React from "react";

import "./Home.css";

import { HeroBanner } from "../HeroBanner/HeroBanner";
import { SevenDayGraph } from "../SevenDayGraph/SevenDayGraph";
import { Typography } from "@mui/material";

export const Home = () => {
  return (
    <div className="Home">
      <HeroBanner />
      <SevenDayGraph />
      <Typography variant="caption">
        Note: Data available from 06 July 2022
      </Typography>
    </div>
  );
};
