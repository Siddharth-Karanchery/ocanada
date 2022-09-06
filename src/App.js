import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Home } from "./modules/Home/Home";
import { Navbar } from "./modules/Navbar/Navbar";
import { About } from "./modules/About/About";
import { Footer } from "./modules/Footer/Footer";
import { NewsPage } from "./modules/NewsPage/NewsPage";
import { Breakdown } from "./modules/Breakdown/Breakdown";
import { Compare } from "./modules/Compare/Compare";
import { Contact } from "./modules/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/breakdown" element={<Breakdown />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
