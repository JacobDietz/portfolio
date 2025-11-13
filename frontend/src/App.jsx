import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeRough from "./HomeRough.jsx";
import DynamicBckg from "./background.jsx"; 
import Profile from "./profile.jsx";
import React from "react";
import Contact from "./contact.jsx";
import Projects from "./pages/projectsPage.jsx";
import { Outlet } from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  return (
    <AnimatePresence mode="wait"> 
    <BrowserRouter>
      <Routes>
        {/* Pages that use DynamicBckg */}
        <Route
          element={
            <div className="flex justify-center items-center relative min-h-screen no-scrollbar overflow-auto">
              <DynamicBckg />
              <Outlet />
            </div>
          }
        >
          <Route path="/" element={<HomeRough />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route
          path="/projects"
          element={
            <motion.div
            initial={{ scale: 1, filter: "blur(99px)", opacity: 1 }}
            animate={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
              <Projects />
            </motion.div>
          }
        />
      </Routes>
    </BrowserRouter>
    </AnimatePresence>
  );
}


export default App;
