import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header , Footer , Contact } from "./sections/index";
import { Home, About, Skills, Portfolio } from "./Pages/index";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Contact/>
        <Footer/>
      </Router>
    </>
  );
};

export default App;
