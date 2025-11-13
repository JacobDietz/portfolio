import React from "react";
import NavBar from "./components/NavBar";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Fluid } from "@whatisjery/react-fluid-distortion";
import { EffectComposer } from "@react-three/postprocessing";

function HomeRough() {
  return (
    <>

      {/* Static UI Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <NavBar />
        </motion.div>
      </div>
    </>
  );
}

export default HomeRough;
