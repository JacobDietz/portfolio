import * as motion from "motion/react-client";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { EffectComposer } from "@react-three/postprocessing";
import { Fluid } from "@whatisjery/react-fluid-distortion";
import ProjectDescription from "../components/ProjectDescription";
import ProjectInfo from "../components/ProjectInfo";
import { ProjectsTunnel } from "../threeTunnel";

const projects = [
  {
    title: "Pony Express",
    description: "Full stack web application",
    imageSrc: "/ponyExpress.png",
    route: "/ponyExpress",
    github: "https://github.com/JacobDietz/pony-express",
  },
];

const desktopAppProjects = [
  {
    title: "Spreadsheet",
    description: "Full stack web application",
    imageSrc: "/ponyExpress.png",
    route: "/ponyExpress",
    github: "https://github.com/JacobDietz/pony-express",
  },
];

export default function Projects() {
  return (
    <>
      <ProjectsTunnel.In>
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
      </ProjectsTunnel.In>

      <div className="absolute inset-9 bg-transparent p-4 flex flex-col">
        <nav className="flex flex-col h-[25svh] mb-2  ">
          <Link
            to="/"
            className="self-end text-customGreen text-lg md:text-4xl hover:text-green-800"
          >
            Home
          </Link>

          <motion.h1
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            className="text-6xl md:text-9xl text-customGreen [text-shadow:_2px_5px_17px_#2341]"
          >
            Projects
          </motion.h1>
        </nav>

        <section className="overflow-scroll no-scrollbar">
          <motion.h1
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            className="text-4xl md:text-8xl text-customBlue"
          >
            Web
          </motion.h1>
          {projects.map((project) => (
            <ProjectInfo key={project.title} project={project} />
          ))}

          <h2 className="text-4xl md:text-8xl text-customBlue">Desktop Apps</h2>
          {desktopAppProjects.map((project) => (
            <ProjectInfo key={project.title} project={project} />
          ))}
        </section>
      </div>
    </>
  );
}