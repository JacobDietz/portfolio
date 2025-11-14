


import * as motion from "motion/react-client";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { EffectComposer } from "@react-three/postprocessing";
import { Fluid } from "@whatisjery/react-fluid-distortion";

import { ProjectsTunnel, ThreeTunnel } from "../../../threeTunnel";




export default function Projects() {
  const navigate = useNavigate();

  return (
    <>
    <ProjectsTunnel.In>
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
            </ProjectsTunnel.In>
    <div className="relative w-screen h-screen overflow-hidden">      
      <div className="absolute inset-0 z-10 w-full h-full bg-customGreen overflow-hidden">
        <div className="absolute inset-4 border-2 border-customBlue bg-transparent box-border p-4 flex flex-col">
          <Link
            to="/"
            className="absolute self-end text-projectsBG text-lg md:text-4xl hover:text-red-100"
          >
            Home
          </Link>

          <section className="h-[35%]">
            <h1 className="text-6xl md:text-9xl text-projectsBG">Projects</h1>
            <h2 className="text-4xl md:text-8xl text-customBlue">Web</h2>
          </section>

          <section className="flex flex-row h-[90%] relative">
            <div className="flex flex-col justify-center items-center w-1/2 gap-10">
              <motion.img
                whileHover={{ scale: 1.02 }}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                whileInView={{ opacity: 1 }}
                alt="Pony Express"
                className="w-1/3 shadow-[0px_0px_10px_0.1px_#ffffff] rounded-xl absolute"
                src="/ponyExpress.png"
                onClick={() => {
                  console.log("express clicked");
                  navigate("/ponyExpress");
                }}
              />
            </div>
            <div className="w-1/2 flex justify-center items-center">
              <p className="text-2xl text-projectsBG">Your project info here</p>
            </div>
          </section>
        </div>
      </div>
    </div>
    </>
  );
}
