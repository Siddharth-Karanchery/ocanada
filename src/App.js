import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Home } from "./modules/Home/Home";
import { Navbar } from "./modules/Navbar/Navbar";
import { About } from "./modules/About/About";
import { Footer } from "./modules/Footer/Footer";
import { NewsPage } from "./modules/NewsPage/NewsPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<NewsPage />} />
        {/* <Route exact path="/rosary" component={Rosary} />
  <Route path="/prayers" component={Prayers} />
  <Route path="/about" component={About} />
  <Route path="/contact" component={Contact} />
  <Route path="/rosary/mystery/:mysterytype" component={Mystery} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
