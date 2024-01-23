import * as React from "react";

import "./Home.css";

import { HeroBanner } from "../HeroBanner/HeroBanner";
import { SevenDayGraph } from "../SevenDayGraph/SevenDayGraph";
import { Typography } from "@mui/material";

export const Home = () => {
  return (
    <div className="Home">
      <HeroBanner />
      <Typography variant="h5" className="Home__7dayTitle">
        Seven draw trends
      </Typography>
      <SevenDayGraph />
    </div>
  );
};
