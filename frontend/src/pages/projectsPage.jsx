import * as motion from "motion/react-client";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { EffectComposer } from "@react-three/postprocessing";
import { Fluid } from "@whatisjery/react-fluid-distortion";

import { ProjectsTunnel } from "../threeTunnel";

export default function Projects() {
  // const navigate = useNavigate();

  return (
    <>
     <ProjectsTunnel.In>
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
            </ProjectsTunnel.In>
      <div className="relative w-screen h-screen overflow-hidden">
        <div className="absolute inset-0 z-10 w-full h-full bg-customWhite overflow-hidden">
          <div className="absolute inset-4 border-2 border-customBlue bg-transparent p-4 flex flex-col">
            <Link
              to="/"
              className="absolute self-end text-customGreen text-lg md:text-4xl hover:text-green-800"
            >
              Home
            </Link>

            <section className="h-[15%] md:h-[35%]">
              <motion.h1
                initial={{ x: -300, opacity: 1 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
                className="text-6xl md:text-9xl text-customGreen [text-shadow:_2px_5px_17px_#2341]"
              >
                Projects
              </motion.h1>
              <motion.h1
                initial={{ y: -200, opacity: 1 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
                className="text-4xl md:text-8xl text-customBlue"
              >
                Web
              </motion.h1>
            </section>

            <section className="flex flex-col md:flex-row h-[90%] relative items-center">
              <div className="flex mb-none flex-col justify-center md:items-center w-1/2 h-2/5 w-full items-center">
                <motion.img
                  whileHover={{ scale: 1.02 }}
                  initial={{ x: -300, opacity: 1 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 50, damping: 20 }}
                  whileInView={{ opacity: 1 }}
                  alt="Pony Express"
                  className="h-1/4 md:h-3/5 shadow-[0px_0px_42px_8px_#d5e7f2] rounded-xl absolute"
                  src="/ponyExpress.png"
                  onClick={() => {
                    console.log("express clicked");
                    navigate("/ponyExpress");
                  }}
                />
              </div>

              {/* Tech Card */}
              <motion.div
                initial={{ x: 300, opacity: 1 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
                className="w-4/5 flex h-1/2 justify-center items-center"
              >
                <div className="w-full h-9/10 md:w-4/5 md:w-9/10 md:h-full border-2 flex flex-col border-customRed bg-noteCardColor rounded-xl shadow-[0px_0px_10px_0.1px_#154731] ">
                  <div className="w-full h-1/6 border-2 border-t-0 border-customRed  border-x-0 flex justify-start items-center">
                    <p className="text-2xl text-projectsBG ml-2 text-red-900 font-bold">
                      Pony Express
                    </p>
                  </div>

                  <p className="p-5 text-lgfont-Satoshi">
                    Full stack web application
                  </p>

                  <div className="border-2 border-b-0 border-x-0 border-customRed h-1/8 mt-auto flex">
                    <ul className="flex items-center">
                      <a
                        href="/ponyExpress"
                        className="text-gray-300 text:md md:text-2xl mx-5 underline hover:text-green-800"
                      >
                        View More
                      </a>
                      <a
                        href="https://github.com/JacobDietz/pony-express"
                        target="blank"
                        className="text-gray-300 text-md md:text-2xl mx-5 underline hover:text-green-800"
                      >
                        Github
                      </a>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}


