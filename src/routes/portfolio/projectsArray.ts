import Project from "../../types/Project";

import achieverTestImg from "./project-screenshots/achiever-test.png?w=567&format=webp&imagetools";
import todoImg from "./project-screenshots/shopping-cart.png?w=567&format=webp&imagetools";
import mediumImg from "./project-screenshots/medium-clone.png?w=567&format=webp&imagetools";
import cvAppImg from "./project-screenshots/cv-application.png?w=567&format=webp&imagetools";
import pokeMemoImg from "./project-screenshots/pokememo.png?w=567&format=webp&imagetools";

const projects: Project[] = [
  {
    title: "Achiever Test",
    description:
      "A Digital SAT prep platform built solo end-to-end, featuring a full-length test simulation engine and performance analytics to help students pinpoint weaknesses and improve scores.",
    livePreview: "https://achievertest.com",
    image: achieverTestImg,
    technologies: ["Next.js", "TypeScript", "MongoDB", "Stripe", "TailwindCSS"],
    learnings: [
      "Replicating the Digital SAT experience with accurate timing and question formatting",
      "Building an analytics dashboard with per-category accuracy, percentile benchmarking, and personalized insights",
      "Integrating auth and Stripe subscription-based billing",
    ],
  },

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
    title: "PokeMemo",
    description:
      "A retro Pokemon-themed memory game featuring over 1,000 Pokemon via PokeAPI, including levels, sfx, and bgm. If you're lucky, you might find a shiny too!",
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
