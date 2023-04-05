import { motion } from "framer-motion";
import ProjectItem from "./ProjectItem";
import projects from "../projectsArray";

function Projects() {
  return (
    <div id="projects" className="scroll-mt-20">
      <motion.h1
        initial={{
          filter: "blur(25px)",
          opacity: 0,
          y: -70,
        }}
        whileInView={{
          filter: "blur(0px)",
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 24,
          mass: 2,
        }}
        className="text-white font-bold text-3xl"
      >
        Projects
      </motion.h1>

      <div className="border-b border-b-zinc-600 my-7" />

      {projects.map((project) => (
        <ProjectItem project={project} key={project.title} />
      ))}
    </div>
  );
}

export default Projects;
