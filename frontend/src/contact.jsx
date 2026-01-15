import { HomeTunnel } from "./threeTunnel";
import { EffectComposer } from "@react-three/postprocessing";
import { motion } from "framer-motion";
import { useState } from "react";

import rightArrow from "./assets/rightArrow.svg";
import leftArrow from "./assets/leftArrow.svg";
export default function Contact() {
  return (
    <>
      <HomeTunnel.In>
        <EffectComposer>
          {/* <Fluid
            showBackground={false}
            blend={30}
            intensity={20}
            swirl={5}
            distortion={10}
            pressure={0.05}
            radius={0.3}
            fluidColor="#FFC0CB"
          /> */}
        </EffectComposer>
      </HomeTunnel.In>
      <img
        className="w-[2svw] rounded-full hover:bg-white bg-opacity-25"
        src={rightArrow}
      />
      <button
        className="w-[2svw] rounded-full hover:bg-white bg-opacity-25"
        src={leftArrow}
        onClick={() => {
          console.log("clicked");
        }}
      />
      <div className="min-h-screen flex  items-center justify-center overflow-hidden">
        <ul className="w-[50svw] h-[10svh] flex ">
          <Email text={"jacobdietz2383@gmail.com"}></Email>
        </ul>
      </div>
    </>
  );
}

function Email({ text, children }) {
  const [hovered, setHovered] = useState(false);

  return (
    <li className="inline-flex items-center text-white font-roboto text-lg md:text-xl lg:text-3xl font-bold gap-3">
      <motion.img
        src="./src/assets/mailIcon.svg"
        className="invert w-[2svw] md:w-[5svw] cursor-pointer"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => {
          setTimeout(() => {
            setHovered(false);
          }, 0);
        }}
      />

      <motion.a
        className="underline hover:text-blue-300 cursor-pointer"
        href="mailto:jacobdietz2383@gmail.com?subject=Portfolio&Site"
        initial={{ opacity: 0, x: -20 }}
        animate={{
          opacity: hovered ? 1 : 0,
          x: hovered ? 0 : -20,
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        {text}
      </motion.a>
    </li>
  );
}
