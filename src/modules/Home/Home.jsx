import * as React from "react";

import "./Home.css";

import { HeroBanner } from "../HeroBanner/HeroBanner";
import { SevenDayGraph } from "../SevenDayGraph/SevenDayGraph";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

export const Home = () => {
  const isMobile = useMediaQuery("(max-width:450px)");

  return (
    <div className="Home">
      <HeroBanner />
      <Typography
        variant="h5"
        className="Home__7dayTitle"
        marginTop={isMobile ? "5rem" : "10rem"}
      >
        Seven draw trends
      </Typography>
      <SevenDayGraph />
    </div>
  );
};
