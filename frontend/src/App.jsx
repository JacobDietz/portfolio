import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeRough from "./HomeRough.jsx";
import DynamicBckg from "./background.jsx"; 
import Profile from "./profile.jsx";
import React from "react";
import Contact from "./contact.jsx";
import Projects from "./pages/projectsPage.jsx";


function App() {
  return (
    
    <div className="flex justify-center items-center relative min-h-screen no-scrollbar overflow-auto ">
        <DynamicBckg />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeRough />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/projects" element={<Projects/>} />
        </Routes>
      </BrowserRouter>
      </div> 
  );
}

export default App;
