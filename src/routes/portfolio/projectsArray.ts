import Project from "../../types/Project";

import waldoImg from "./project-screenshots/where-is-waldo.png?w=668&format=webp&imagetools";
import todoImg from "./project-screenshots/shopping-cart.png?w=668&format=webp&imagetools";
import mediumImg from "./project-screenshots/medium-clone.png?w=668&format=webp&imagetools";
import cvAppImg from "./project-screenshots/cv-application.png?w=668&format=webp&imagetools";
import pokeMemoImg from "./project-screenshots/pokememo.png?w=668&format=webp&imagetools";

const projects: Project[] = [
  {
    title: "Medium Clone",
    description:
      "A platform for writers to share articles using markdown and read posts from other writers. Articles are stored in Firebase with real-time updates.",
    githubRepo: "Sharkri/medium-clone",
    livePreview: "https://sharkri.github.io/medium-clone",
    image: mediumImg,
    technologies: ["ReactJS", "Typescript", "Firebase", "TailwindCSS"],
    learnings: [
      "Handling nested replies using recursion",
      "Handling real-time updates with Firebase",
      "Parsing and rendering markdown safely",
    ],
  },

  {
    title: "CV Application",
    description:
      "An interactive resume builder with customizable layouts, fonts, and colors. Built entirely with React.",
    githubRepo: "Sharkri/cv-application",
    livePreview: "https://sharkri.github.io/cv-application",
    image: cvAppImg,
    technologies: ["ReactJS"],
    learnings: [
      "Managing complex shared state across components",
      "Designing reusable, composable UI sections",
    ],
  },

  {
    title: "PokéMemo",
    description:
      "A retro Pokémon-themed memory game featuring over 1,000 Pokémon via PokeAPI, including levels, sfx, and bgm. If you're lucky, you might find a shiny too!",
    githubRepo: "Sharkri/pokememo",
    livePreview: "https://sharkri.github.io/pokememo",
    image: pokeMemoImg,
    technologies: ["ReactJS", "howler.js", "PokeAPI", "nes.css"],
    learnings: [
      "Efficiently handling large API datasets",
      "Game state management and reset logic",
      "Audio control using Howler.js",
    ],
  },

  {
    title: "Where's Waldo",
    description:
      'An interactive and timed "Where\'s Waldo?" game where players find hidden characters, including a global leaderboard stored in Firebase.',
    githubRepo: "Sharkri/where-is-waldo",
    livePreview: "https://where-is-waldo-3e672.web.app/",
    image: waldoImg,
    technologies: [
      "ReactJS",
      "React Router Dom",
      "Firebase",
      "React Testing Library",
    ],
    learnings: [
      "Mapping the coordinates of a character relative to an image",
      "Writing TDD component tests and mocks",
      "Saving user scores to a leaderboard",
    ],
  },

  {
    title: "Home Furnishing",
    description:
      "An e-commerce store, imitating a furniture store, built with React. Includes dedicated product pages, search functionality, and more. Responsive and tested with Jest & TDD.",
    githubRepo: "Sharkri/shopping-cart",
    livePreview: "https://sharkri.github.io/shopping-cart/",
    image: todoImg,
    technologies: ["React", "React Testing Library"],
    learnings: [
      "Practiced test-driven development with RTL",
      "Creating a responsive mobile design",
    ],
  },
];

export default projects;
