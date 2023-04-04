import mediumImage from "../assets/images/project-screenshots/medium-clone.png";
import todoImage from "../assets/images/project-screenshots/todo-list.png";
import waldoImage from "../assets/images/project-screenshots/where-is-waldo.png";
import Project from "../interfaces/ProjectInterface";
import ProjectItem from "./ProjectItem";

function Projects() {
  const projects: Project[] = [
    {
      title: "Medium Clone",
      description:
        "A platform for writers to share their articles (markdown supported) and read articles from other writers",
      githubRepo: "https://github.com/Sharkri/medium-clone",
      livePreview: "https://sharkri.github.io/medium-clone",
      image: mediumImage,
      technologies: ["ReactJS", "Typescript", "Firebase", "TailwindCSS"],
    },
    {
      title: "Todo List",
      description:
        "A responsive Todo List application that uses Firebase to store todos and projects. You can either create an account to use, or continue as a guest.",
      githubRepo: "https://github.com/Sharkri/todo-list",
      livePreview: "todo-list-4aa13.web.app/",
      image: todoImage,
      technologies: ["JavaScript", "Firebase", "Webpack", "date-fns"],
    },

    {
      title: "Where's Waldo",
      description:
        'An interactive version of "Where\'s Waldo?", a game where players try to find several characters hidden inside a picture. In this version, players are timed. Upon completion, the user may enter their name into a leaderboard stored in firebase.',
      githubRepo: "https://github.com/Sharkri/where-is-waldo",
      livePreview: "where-is-waldo-3e672.web.app/",
      image: waldoImage,
      technologies: [
        "ReactJS",
        "React Router Dom",
        "Firebase",
        "React Testing Library",
      ],
    },
  ];

  return (
    <div id="projects" className="pt-20">
      <h1 className="text-white font-bold text-3xl border-b border-b-zinc-600 mb-7 pb-7">
        Projects
      </h1>

      {projects.map((project) => (
        <ProjectItem project={project} key={project.title} />
      ))}
    </div>
  );
}

export default Projects;
