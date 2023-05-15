import Project from "./interfaces/ProjectInterface";

import waldoImg from "./project-screenshots/where-is-waldo.png?w=668&format=webp&imagetools";
import todoImg from "./project-screenshots/todo-list.png?w=668&format=webp&imagetools";
import mediumImg from "./project-screenshots/medium-clone.png?w=668&format=webp&imagetools";

const projects: Project[] = [
  {
    title: "Medium Clone",
    description:
      "A platform for writers to share their articles (markdown supported) and read articles from other writers",
    githubRepo: "https://github.com/Sharkri/medium-clone",
    livePreview: "https://sharkri.github.io/medium-clone",
    image: mediumImg,
    technologies: ["ReactJS", "Typescript", "Firebase", "TailwindCSS"],
  },
  {
    title: "Todo List",
    description:
      "A responsive Todo List application that uses Firebase to store todos and projects. You can either create an account to use, or continue as a guest.",
    githubRepo: "https://github.com/Sharkri/todo-list",
    livePreview: "https://todo-list-4aa13.web.app/",
    image: todoImg,
    technologies: ["JavaScript", "Firebase", "Webpack", "date-fns"],
  },

  {
    title: "Where's Waldo",
    description:
      'An interactive version of "Where\'s Waldo?", a game where players try to find several characters hidden inside a picture. In this version, players are timed. Upon completion, the user may enter their name into a leaderboard stored in firebase.',
    githubRepo: "https://github.com/Sharkri/where-is-waldo",
    livePreview: "https://where-is-waldo-3e672.web.app/",
    image: waldoImg,
    technologies: [
      "ReactJS",
      "React Router Dom",
      "Firebase",
      "React Testing Library",
    ],
  },
];

export default projects;
