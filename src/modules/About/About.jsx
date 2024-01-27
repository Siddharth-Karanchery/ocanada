import * as React from "react";
import { Typography, Box } from "@mui/material";

import "./About.css";

export const About = () => {
  return (
    <Box className="About">
      <img
        className="About__Banner"
        alt="banner"
        src="https://media.istockphoto.com/photos/wide-canadian-flag-picture-id184935009?k=20&m=184935009&s=170667a&w=0&h=ysLNnFLbXuQW4nY_ild4UlCrdpyFqflm7KS8foEpIug="
      />
      <div class="custom-shape-divider-bottom-1664370838">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <Box>
        <Typography variant="h4" className="PageTitle">
          About
        </Typography>
        <Box className="About__section">
          <img
            src="https://images.unsplash.com/photo-1637441781712-75967b90ac39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt=""
            className="About__section__image"
          />
          <Box className="About__section__text">
            <Typography variant="h6" className="About__section__text__title">
              Who are we?
            </Typography>
            <Typography
              variant="subtitle2"
              className="About__section__text__body"
            >
              Currently the team consists only of me, Sid. I am a frontend
              developer web developer. I am interested in coding, building
              projects and solving all kinds of problems. I am working towards
              becoming a fullstack engineer in the near future.
            </Typography>
          </Box>
        </Box>
        <Box className="About__section flip">
          <img
            src="https://images.pexels.com/photos/3744703/pexels-photo-3744703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="About__section__image"
          />
          <Box className="About__section__text">
            <Typography variant="h6" className="About__section__text__title">
              Why Canada draw Analysis?
            </Typography>
            <Typography
              variant="subtitle2"
              className="About__section__text__body"
            >
              Canada is one of the most sought after countries to live in, in
              recent times. Many people have set their hopes on being able to
              relocate their and build better futures. However, the process of
              making the shortlist is quite long and daunting. Canada Draw
              Analysis(CDA) hopes to provide some analytics to better understand
              the process, pool size and thereby one's chances at getting an
              Expression of Interest (EOI).
            </Typography>
          </Box>
        </Box>
        <Box className="About__section">
          <img
            src="https://images.unsplash.com/photo-1615226858206-3fdd73fbc851?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt=""
            className="About__section__image"
          />
          <Box className="About__section__text">
            <Typography variant="h6" className="About__section__text__title">
              Disclaimer
            </Typography>
            <Typography
              variant="subtitle2"
              className="About__section__text__body"
            >
              The current web app is in its infancy and will continue to grow
              and evolve to provide better insights. CDA does not do any kind of
              user tracking/data logging, nor is it sponspored by anybody. This
              is a passion project for Sid, to hone his skills at Web dev, and
              in the process, help others.
              <br />
              <br />
              No money is being made from the web app currently. However if you
              do feel like supporting us, You can buy us a coffee IRL.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
