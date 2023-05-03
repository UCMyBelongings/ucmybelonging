import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Aboutus from "./Aboutus";
import Login from "./Login";
import Donate from "./Donate";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/login" element={<Login />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
