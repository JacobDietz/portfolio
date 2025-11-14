import React from "react";
import NavBar from "./components/NavBar";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Fluid } from "@whatisjery/react-fluid-distortion";
import { EffectComposer } from "@react-three/postprocessing";
import { HomeTunnel } from "../../threeTunnel";
import DynamicBckg from "./background";

function HomeRough() {
  return (
    <>
      <DynamicBckg /> 
      <HomeTunnel.In>
        <EffectComposer>
          <Fluid
            showBackground={false}
            blend={10}
            intensity={15}
            swirl={60}
            distortion={3}
            pressure={0.05}
            radius={0.2}
            fluidColor="#3BF74E"
            />
        </EffectComposer>
      </HomeTunnel.In>

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
