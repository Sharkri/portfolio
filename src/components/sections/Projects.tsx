import ProjectItem from "../helper/ProjectItem";
import projects from "../../projectsArray";
import Heading from "../helper/Heading";

function Projects() {
  return (
    <div>
      <Heading id="projects">Projects</Heading>

      {projects.map((project) => (
        <ProjectItem project={project} key={project.title} />
      ))}
    </div>
  );
}

export default Projects;
