import * as React from "react";
import "./NewsPage.css";
import { newsAPiKey } from "../../data/constant";

const axios = require("axios");

export const NewsPage = () => {
  React.useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=ircc&from=2022-08-04&sortBy=publishedAt&apiKey=" +
          newsAPiKey
      )
      .then(function (response) {
        console.log(response.data.articles);
      });
  }, []);
  return <div className="NewsPage">NewsPage</div>;
};
