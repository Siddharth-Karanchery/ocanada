import { Paper, Box, Typography } from "@mui/material";
import * as React from "react";
import "./NewsTile.css";
import moment from "moment";

export const NewsTile = (props) => {
  return (
    <Paper
      className="NewsTile"
      key={props.index}
      sx={{ height: props.height, backgroundColor: "#eee", color: "black" }}
    >
      <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src={props.article.urlToImage}
      />
      <Typography variant="subtitle" class="NewsTile__Title">
        {props.article.title}
      </Typography>
      <Typography
        variant="subtitle"
        class="NewsTile__Date"
        sx={{ color: "#eb2d37" }}
      >
        {moment(props.article.publishedAt).format("DD MMM YYYY")}
      </Typography>
      <Typography variant="subtitle" class="NewsTile__Desc">
        {props.article.content.split("[")[0]}
      </Typography>
      <Typography
        variant="subtitle"
        class="NewsTile__Link"
        sx={{
          color: "#eb2d37",
          alignSelf: "flex-start",
          fontWeight: "bold",
          margin: "1rem",
        }}
        onClick={() => {
          window.open(props.article.url, "_blank");
        }}
      >
        Read More
      </Typography>
    </Paper>
  );
};
