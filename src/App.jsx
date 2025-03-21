import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; 
import LandingPage from "./LandingPage";
import SpaceHeart from "./SpaceHeart";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen w-full bg-[#04121A]">
              <LandingPage />
              <SpaceHeart />
            </div>
          }
        />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
