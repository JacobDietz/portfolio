import React from "react";
import NavBar from "./components/NavBar";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Fluid } from "@whatisjery/react-fluid-distortion";
import { EffectComposer } from "@react-three/postprocessing";
import { HomeTunnel } from "./threeTunnel";
import DynamicBckg from "./background";

function HomeRough() {
  return (
    <>
      <DynamicBckg /> 
      <HomeTunnel.In>
        <EffectComposer>
          <Fluid
            showBackground={false}
            blend={30}
            intensity={20}
            swirl={10}
            distortion={10}
            pressure={0.05}
            radius={0.3}
            fluidColor="#FFC0CB"
            />
        </EffectComposer>
      </HomeTunnel.In>

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
