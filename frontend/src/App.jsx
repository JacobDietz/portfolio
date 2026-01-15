import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";

import Home from "./Home.jsx";
import DynamicBckg from "./background.jsx";
import Profile from "./profile.jsx";
import Contact from "./contact.jsx";

import ProjectDetail from "./pages/projects/ProjectDetail"
import Canvas from "./Canvas.jsx";
import { useParams } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      {/* <Canvas /> */}
      <Routes>
        <Route
          element={
            <div className="relative min-h-screen">
              {/* <Canvas /> */}
              <DynamicBckg />
              <Outlet />
            </div>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="ponyExpress/:id" element={<ProjectDetail />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
        {/* <Route path="/profile" element={<Profile />} /> */}
        {/* <Route path="/ponyExpress" element={<PonyExpress />} />
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
        /> */}
      </Routes>
      <Canvas />
    </BrowserRouter>
  );
}

function NotFound() {
  return <h1>404: Not Found</h1>;
}

export default App;
