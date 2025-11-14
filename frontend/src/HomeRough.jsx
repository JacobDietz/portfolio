import React from "react";
import NavBar from "./components/NavBar";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Fluid } from "@whatisjery/react-fluid-distortion";
import { EffectComposer } from "@react-three/postprocessing";
import { HomeTunnel } from "../../threeTunnel";

function HomeRough() {
  return (
    <>
      <HomeTunnel.In>
        <EffectComposer>
          <Fluid
          showBackground={false}
                intensity={9}
                swirl={50}
                fluidColor="#6E1B09"
                rainbow={true}
                blend={5}
                distortion={2}
                pressure={0.2}
                velocityDissipation={0.45}
                densitionDissipatio={0}
                curl={10}
                radius={0.25}
                vorticity={30}
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
