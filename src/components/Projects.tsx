import { motion } from "framer-motion";
import ProjectItem from "./ProjectItem";
import projects from "../projectsArray";

function Projects() {
  return (
    <div id="projects" className="scroll-mt-16">
      <motion.h1
        initial={{
          opacity: 0,
          filter: "blur(3px)",
          transform: "translateY(-5px)",
        }}
        whileInView={{
          opacity: 1,
          filter: "blur(0px)",
          transform: "translateY(0)",
        }}
        transition={{ duration: 0.38 }}
        className="text-white font-bold text-3xl origin-top"
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
