import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";

import HomeRough from "./HomeRough.jsx";
import DynamicBckg from "./background.jsx";
import Profile from "./profile.jsx";
import Contact from "./contact.jsx";
import Projects from "./pages/projectsPage.jsx";
import Canvas from "./Canvas.jsx";

function App() {
  return (
    <BrowserRouter>
      {/* Canvas is always present for every route */}
      <Canvas />
      <Routes>
        {/* Routes that should HAVE DynamicBckg */}
        <Route
          element={
            <div className="relative min-h-screen">
              {/* <DynamicBckg /> */}
              <Outlet />
            </div>
          }
        >
          <Route path="/" element={<HomeRough />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route path="/profile" element={<Profile />} />

         <Route
          path="/projects"
          element={
            <motion.div
              initial={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
              animate={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 0.2, ease: "linear" }}
            >
              <Projects />
            </motion.div>
          }
        />
      </Routes>
      <Canvas />
    </BrowserRouter>
  );
}

export default App;
