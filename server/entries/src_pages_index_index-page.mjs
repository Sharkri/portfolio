import { a as jsxs, F as Fragment, j as jsx } from "../chunks/chunk-ac9dafa4.js";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { u as usePageContext } from "../chunks/chunk-7853a2c4.js";
import "react/jsx-runtime";
function Heading({ children, id }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      motion.h1,
      {
        initial: {
          filter: "blur(25px)",
          opacity: 0,
          y: -70
        },
        whileInView: {
          filter: "blur(0px)",
          opacity: 1,
          y: 0
        },
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 24,
          mass: 2
        },
        viewport: { once: true },
        id,
        className: "text-white font-bold sm:text-3xl text-2xl scroll-mt-20",
        children
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "border-b border-b-white/50 my-7" })
  ] });
}
function ContactFooter() {
  return /* @__PURE__ */ jsxs("footer", { className: "pb-16", children: [
    /* @__PURE__ */ jsx(Heading, { id: "contact", children: "Contact" }),
    /* @__PURE__ */ jsxs("div", { className: "flex-col-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-2xl max-sm:text-xl mb-4 font-bold", children: "Links" }),
      /* @__PURE__ */ jsxs("a", { href: "https://github.com/sharkri", target: "_blank", rel: "noreferrer", children: [
        /* @__PURE__ */ jsx("i", { className: "fa-brands fa-github mr-2", "aria-label": "github-icon" }),
        "Github"
      ] })
    ] })
  ] });
}
function Header() {
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    function handleScroll() {
      setIsTop(window.pageYOffset <= 25);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return /* @__PURE__ */ jsx(
    "header",
    {
      className: `w-full h-[56px] fixed top-0 z-10 px-8 py-4 ${isTop ? "translate-y-2" : "bg-black/40"} text-gray-300 font-bold transition-[color,transform] duration-200 flex justify-end`,
      children: /* @__PURE__ */ jsxs("nav", { className: "flex gap-4 child-hover:text-gray-200 child-hover:text-shadow-lg child:transition-colors child:duration-300", children: [
        /* @__PURE__ */ jsx("a", { href: "#about", children: "About" }),
        /* @__PURE__ */ jsx("a", { href: "#projects", children: "Projects" }),
        /* @__PURE__ */ jsx("a", { href: "#contact", children: "Contact" })
      ] })
    }
  );
}
function Hero() {
  return /* @__PURE__ */ jsx("div", { className: "flex-col-center max-w-[960px] mx-auto w-full", children: /* @__PURE__ */ jsxs("div", { className: "text-[min(10vw,128px)] w-full max-w-[70vw] child:leading-[1.05] uppercase", children: [
    /* @__PURE__ */ jsx("h1", { className: "overflow-hidden", children: /* @__PURE__ */ jsx("p", { className: "animate-text-slide-up", children: "Sharkri" }) }),
    /* @__PURE__ */ jsxs("h1", { className: "font-bold pl-[14%]", children: [
      /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx("p", { className: "animate-text-slide-up", children: "web" }) }),
      /* @__PURE__ */ jsx("div", { className: "overflow-hidden pl-[6%]", children: /* @__PURE__ */ jsx("p", { className: "animate-text-slide-up", children: "developer" }) })
    ] })
  ] }) });
}
function ProjectItem({ project }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-8 border-b border-b-white/50 last:border-b-0 last:pb-0 mb-7 pb-8", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-bold", children: project.title }),
    /* @__PURE__ */ jsxs("div", { className: "flex max-lg:flex-col gap-6", children: [
      /* @__PURE__ */ jsx("div", { className: "flex-[50%] overflow-hidden", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: project.image,
          className: "brightness-[0.8] hover:brightness-90 hover:scale-105 transition duration-300",
          alt: "",
          loading: "lazy"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "flex-[50%] flex flex-col gap-8", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { className: "text-lg font-bold", children: "Summary" }),
          /* @__PURE__ */ jsx("p", { className: "text-white/75", children: project.description })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { className: "text-lg font-bold", children: "Technologies" }),
          /* @__PURE__ */ jsx("span", { className: "text-white/75", children: project.technologies.join(", ") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-6 font-bold", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: project.livePreview,
              target: "_blank",
              rel: "noreferrer",
              className: "flex items-center gap-3 group",
              children: [
                /* @__PURE__ */ jsxs("span", { children: [
                  "LIVE PREVIEW",
                  /* @__PURE__ */ jsx("div", { className: "h-0.5 bg-white/75 origin-left translate-y-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" })
                ] }),
                /* @__PURE__ */ jsx(
                  "i",
                  {
                    className: "fa-solid fa-arrow-up rotate-45",
                    "aria-label": "open link icon"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: project.githubRepo,
              target: "_blank",
              rel: "noreferrer",
              className: "flex items-center gap-3 group",
              children: [
                /* @__PURE__ */ jsxs("span", { children: [
                  "VIEW CODE",
                  /* @__PURE__ */ jsx("div", { className: "h-0.5 bg-white/75 origin-left translate-y-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" })
                ] }),
                /* @__PURE__ */ jsx(
                  "i",
                  {
                    className: "fa-solid fa-arrow-up rotate-45",
                    "aria-label": "open link icon"
                  }
                )
              ]
            }
          )
        ] })
      ] })
    ] })
  ] });
}
const waldoImg = "/portfolio/assets/static/where-is-waldo.817f727c.webp";
const todoImg = "/portfolio/assets/static/todo-list.c5893cde.webp";
const mediumImg = "/portfolio/assets/static/medium-clone.01bf5865.webp";
const projects = [
  {
    title: "Medium Clone",
    description: "A platform for writers to share their articles (markdown supported) and read articles from other writers",
    githubRepo: "https://github.com/Sharkri/medium-clone",
    livePreview: "https://sharkri.github.io/medium-clone",
    image: mediumImg,
    technologies: ["ReactJS", "Typescript", "Firebase", "TailwindCSS"]
  },
  {
    title: "Todo List",
    description: "A responsive Todo List application that uses Firebase to store todos and projects. You can either create an account to use, or continue as a guest.",
    githubRepo: "https://github.com/Sharkri/todo-list",
    livePreview: "https://todo-list-4aa13.web.app/",
    image: todoImg,
    technologies: ["JavaScript", "Firebase", "Webpack", "date-fns"]
  },
  {
    title: "Where's Waldo",
    description: `An interactive version of "Where's Waldo?", a game where players try to find several characters hidden inside a picture. In this version, players are timed. Upon completion, the user may enter their name into a leaderboard stored in firebase.`,
    githubRepo: "https://github.com/Sharkri/where-is-waldo",
    livePreview: "https://where-is-waldo-3e672.web.app/",
    image: waldoImg,
    technologies: [
      "ReactJS",
      "React Router Dom",
      "Firebase",
      "React Testing Library"
    ]
  }
];
function Section({
  children,
  headingText,
  headingId,
  className
}) {
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsx(Heading, { id: headingId, children: headingText }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: {
          filter: "blur(2px)",
          opacity: 0
        },
        whileInView: {
          filter: "blur(0px)",
          opacity: 1
        },
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 24,
          mass: 2
        },
        viewport: { once: true },
        className,
        children
      }
    )
  ] });
}
Section.defaultProps = {
  className: ""
};
function Projects() {
  return /* @__PURE__ */ jsx(Section, { headingText: "Projects", headingId: "projects", children: projects.map((project) => /* @__PURE__ */ jsx(ProjectItem, { project }, project.title)) });
}
function getRandomParticles(particleCount) {
  const arr = new Float32Array(particleCount * 3);
  let i = particleCount;
  while (i) {
    arr[i] = (Math.random() - 0.5) * 10;
    i -= 1;
  }
  return arr;
}
function StarsScene() {
  const canvasRef = useRef(null);
  useEffect(() => {
    if (!canvasRef.current)
      return;
    let [mouseX, mouseY] = [0, 0];
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    const loader = new THREE.TextureLoader();
    const scene = new THREE.Scene();
    renderer.setClearColor(new THREE.Color("#1d2c33"));
    const light = new THREE.DirectionalLight(16777215, 1);
    light.position.set(-1, 2, 4);
    scene.add(light);
    const camera = new THREE.PerspectiveCamera(75, 2, 1.5, 5);
    camera.position.z = 2;
    const geometries = [new THREE.BufferGeometry(), new THREE.BufferGeometry()];
    geometries[0].setAttribute(
      "position",
      new THREE.BufferAttribute(getRandomParticles(450), 3)
    );
    geometries[1].setAttribute(
      "position",
      new THREE.BufferAttribute(getRandomParticles(1500), 3)
    );
    const materials = [
      new THREE.PointsMaterial({
        size: 0.075,
        map: loader.load("assets/images/stars/star1.png"),
        transparent: true
      }),
      new THREE.PointsMaterial({
        size: 0.1,
        map: loader.load("assets/images/stars/star2.png"),
        transparent: true
      })
    ];
    const starsT1 = new THREE.Points(geometries[0], materials[0]);
    const starsT2 = new THREE.Points(geometries[1], materials[1]);
    scene.add(starsT1);
    scene.add(starsT2);
    function render() {
      const canvas = renderer.domElement;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const resizeNeeded = canvas.width !== width || canvas.height !== height;
      if (resizeNeeded) {
        renderer.setSize(width, height, false);
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      }
      const [x, y] = [mouseX * 1e-4, mouseY * -1e-4];
      starsT1.position.x = x;
      starsT1.position.y = y;
      starsT2.position.x = x;
      starsT2.position.y = y;
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
    const handleMouseMove = (e) => {
      [mouseX, mouseY] = [e.clientX, e.clientY];
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      renderer.dispose();
      scene.remove(starsT1);
      scene.remove(starsT2);
      geometries.forEach((geometry) => geometry.dispose());
      materials.forEach((material) => {
        var _a;
        material.dispose();
        (_a = material.map) == null ? void 0 : _a.dispose();
      });
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return /* @__PURE__ */ jsx("canvas", { ref: canvasRef, className: "fixed w-full h-full" });
}
function TechnologyItem({ logo, name }) {
  return /* @__PURE__ */ jsxs("div", { className: "inline-flex flex-col items-center gap-2", children: [
    /* @__PURE__ */ jsx("img", { src: logo, alt: `${name} logo`, className: "w-[50px] h-[50px]" }),
    /* @__PURE__ */ jsx("p", { className: "text-sm", children: name })
  ] });
}
function About() {
  const technologies = [
    { name: "JavaScript", logo: "assets/images/logos/javascript-logo.svg" },
    { name: "Typescript", logo: "assets/images/logos/typescript-logo.svg" },
    { name: "React", logo: "assets/images/logos/react-logo.svg" },
    { name: "NextJS", logo: "assets/images/logos/nextjs-logo.svg" },
    { name: "TailwindCSS", logo: "assets/images/logos/tailwindcss-logo.svg" },
    { name: "Git", logo: "assets/images/logos/git-logo.svg" },
    { name: "Vite", logo: "assets/images/logos/vite-logo.svg" },
    { name: "Webpack", logo: "assets/images/logos/webpack-logo.svg" },
    { name: "NPM", logo: "assets/images/logos/npm-logo.svg" },
    { name: "Jest", logo: "assets/images/logos/jest-logo.svg" },
    { name: "Firebase", logo: "assets/images/logos/firebase-logo.svg" }
  ];
  return /* @__PURE__ */ jsxs(
    Section,
    {
      headingText: "About",
      headingId: "about",
      className: "flex flex-col justify-center items-center",
      children: [
        /* @__PURE__ */ jsx("h1", { className: "p-1 mb-4 text-2xl max-sm:text-xl font-bold", children: "Skills" }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center flex-wrap gap-6 max-w-[928px]", children: technologies.map((technology) => /* @__PURE__ */ jsx(
          TechnologyItem,
          {
            name: technology.name,
            logo: technology.logo
          },
          technology.name
        )) })
      ]
    }
  );
}
function App() {
  const pageContext = usePageContext();
  pageContext.exports.documentProps = { title: "Sharkri's Portfolio" };
  return /* @__PURE__ */ jsxs("div", { className: "text-white", children: [
    /* @__PURE__ */ jsx(StarsScene, {}),
    /* @__PURE__ */ jsxs("div", { className: "absolute w-full h-full flex flex-col justify-between", children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsxs("div", { className: "grow flex flex-col gap-8 px-10 max-w-[1440px] mx-auto pt-[92px]", children: [
        /* @__PURE__ */ jsx(Hero, {}),
        /* @__PURE__ */ jsx(About, {}),
        /* @__PURE__ */ jsx(Projects, {}),
        /* @__PURE__ */ jsx(ContactFooter, {})
      ] })
    ] })
  ] });
}
export {
  App as Page
};
