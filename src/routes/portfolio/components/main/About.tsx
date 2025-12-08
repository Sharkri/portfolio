import { differenceInYears } from "date-fns";
import Section from "./helper/Section";
import TechnologyItem from "./helper/TechnologyItem";

const { BASE_URL } = import.meta.env;

const technologies = [
  { name: "JavaScript", logo: "assets/images/logos/javascript-logo.svg" },
  { name: "Typescript", logo: "assets/images/logos/typescript-logo.svg" },
  { name: "React", logo: "assets/images/logos/react-logo.svg" },
  { name: "NextJS", logo: "assets/images/logos/nextjs-logo.svg" },
  { name: "TailwindCSS", logo: "assets/images/logos/tailwindcss-logo.svg" },
  { name: "Git", logo: "assets/images/logos/git-logo.svg" },
  { name: "Vite", logo: "assets/images/logos/vite-logo.svg" },
  { name: "Jest", logo: "assets/images/logos/jest-logo.svg" },
];
const startYears = differenceInYears(new Date(), new Date("1/12/2020"));

function About() {
  return (
    <Section
      headingText="A bit about me"
      headingId="about"
      className="flex flex-col justify-center items-center h-[70vh] max-h-[1280px] gap-8"
    >
      <div className="flex flex-wrap gap-16 max-md:gap-8 justify-center">
        <div className="space-y-6 max-w-[275px] max-lg:max-w-[225px] max-sm:max-w-[200px]">
          <img
            src="/portfolio/assets/images/leafeon.png"
            alt=""
            className="rounded-lg w-[250px]"
          />
          <span className="text-xs text-muted">the best pokemon ^^^</span>
        </div>
        <div className="flex flex-col justify-between gap-8">
          <div className="max-w-[400px] lg:text-lg">
            hi! i&apos;m{" "}
            <ruby>
              <span className="text-emerald-200">shark</span>
              <rt className="text-xs text-muted">シャーク</rt>
            </ruby>
            . I am a{" "}
            <span className="text-emerald-200">fullstack developer</span> and
            I&apos;ve been programming for about {startYears} years now. Outside
            of coding, I like learning languages, drawing things, stoats, piano,
            chess, knot theory,{" "}
            <a
              className="text-muted underline underline-offset-2 hover:text-foreground"
              href="https://en.wikipedia.org/wiki/Simultaneous_perturbation_stochastic_approximation"
              target="_blank"
              rel="noreferrer"
            >
              spsa
            </a>
            , tetr.io, pokemon mystery dungeon, and other stuff!
          </div>

          <div className="grid grid-cols-[repeat(4,65px)] gap-y-4">
            {technologies.map((technology) => (
              <TechnologyItem
                name={technology.name}
                logo={BASE_URL + technology.logo}
                key={technology.name}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default About;
