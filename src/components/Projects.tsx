import ProjectItem from "./ProjectItem";
import projects from "../projectsArray";
import Heading from "./helper/Heading";

function Projects() {
  return (
    <div>
      <Heading id="projects">Projects</Heading>

      <div className="border-b border-b-zinc-600 my-7" />

      {projects.map((project) => (
        <ProjectItem project={project} key={project.title} />
      ))}
    </div>
  );
}

export default Projects;
