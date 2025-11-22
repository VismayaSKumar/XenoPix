import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; 
import LandingPage from "./LandingPage";
import MainPage from "./MainPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
            <div className="min-h-screen w-full bg-[#04121A]">
              <LandingPage />
            </div>
          }
        />
        <Route path="/mainPage" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
