import { differenceInYears } from "date-fns";
import Section from "./helper/Section";
import TechnologyItem from "./helper/TechnologyItem";

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
      <div className="flex flex-wrap gap-16 justify-center max-md:gap-8">
        <div className="space-y-6 max-w-[275px] max-lg:max-w-[225px] max-sm:max-w-[200px]">
          <img
            src="https://avatars.githubusercontent.com/u/95330865"
            alt=""
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-between gap-8">
          <div className="max-w-[400px] lg:text-lg">
            Hello! I&apos;m Shark. I usually develop websites and sometimes
            other stuff. I&apos;ve been programming for about {startYears} years
            now, and outside of coding, I like to play a bit of puzzle games and
            write blogs.
          </div>
          <div className="grid grid-cols-[repeat(4,65px)] gap-y-4">
            {technologies.map((technology) => (
              <TechnologyItem
                name={technology.name}
                logo={technology.logo}
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
