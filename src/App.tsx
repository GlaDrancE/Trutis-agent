import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<div>Features Page</div>} />
        <Route path="/pricing" element={<div>Pricing Page</div>} />
      </Routes>
    </Router>
  );
};

export default App;