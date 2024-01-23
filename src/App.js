import "./App.css";
import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

import { Home } from "./modules/Home/Home";
import { Navbar } from "./modules/Navbar/Navbar";
import { About } from "./modules/About/About";
import { Footer } from "./modules/Footer/Footer";
import { NewsPage } from "./modules/NewsPage/NewsPage";
import { Breakdown } from "./modules/Breakdown/Breakdown";
import { Compare } from "./modules/Compare/Compare";
import { Contact } from "./modules/Contact/Contact";
import RouteGuard from "./modules/RouteGuard/RouteGuard";
import { LoginPage } from "./modules/LoginPage/LoginPage";
import { AddData } from "./modules/AddData/AddData";
import { useState } from "react";

function App() {
  const [userDetails, setUserDetails] = useState();
  const THEME = createTheme({
    typography: {
      fontFamily: `"Poppins", "Helvetica", "Arial", sans-serif`,
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={THEME}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/breakdown" element={<Breakdown />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/login"
            element={<LoginPage setUserDetails={setUserDetails} />}
          />
          <Route
            exact
            path="/adddata"
            element={<RouteGuard userDetails={userDetails} />}
          />
        </Routes>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
