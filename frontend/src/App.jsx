import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import DynamicBckg from "./background.jsx"; 
import Profile from "./profile.jsx";
import React from "react";


function App() {
  return (
    <div class="relative min-h-[100svh] no-scrollbar">
        <DynamicBckg />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
      </div> 
  );
}

export default App;
