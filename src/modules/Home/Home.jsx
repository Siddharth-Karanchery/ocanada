import * as React from "react";

import "./Home.css";

import { HeroBanner } from "../HeroBanner/HeroBanner";
import { SevenDayGraph } from "../SevenDayGraph/SevenDayGraph";

export const Home = () => {
  return (
    // <>
    //   <Box className="Home" flexGrow={1}>
    //     HomePage
    //     <img
    //       className="Home__image"
    //       alt="BannerImage"
    //       src="https://www.teahub.io/photos/full/129-1293145_cross-jesus-christ-wallpaper-high-resolution-33rd-sunday.jpg"
    //     />
    //   </Box>
    // </>
    <div className="Home">
      <HeroBanner />
      <SevenDayGraph />
    </div>
  );
};
