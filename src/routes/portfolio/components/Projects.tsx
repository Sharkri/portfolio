import ProjectItem from "./helper/ProjectItem";
import projects from "../projectsArray";
import Section from "./helper/Section";

function Projects() {
  return (
    <Section headingText="Projects" headingId="projects">
      {projects.map((project) => (
        <ProjectItem project={project} key={project.title} />
      ))}
    </Section>
  );
}

export default Projects;
