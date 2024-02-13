import { useEffect, useState } from "react";
import { differenceInYears } from "date-fns";
import Section from "./helper/Section";
import TechnologyItem from "./helper/TechnologyItem";

type Repo = {
  size: number;
};

function About() {
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
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    async function initializeData() {
      const res = await fetch("https://api.github.com/users/sharkri/repos");
      const data = await res.json();
      setRepos(data);
    }

    initializeData();
  }, []);

  const startYears = differenceInYears(new Date(), new Date("1/12/2020"));

  // Find cumulative size of repository code
  let size = repos
    .map((repository) => repository.size)
    .reduce((prev, curr) => prev + curr, 0);

  // Divide for KB and MB
  let suffix = "";
  if (size >= 1e6) {
    size /= 1e6;
    suffix = "MB";
  } else if (size >= 1000) {
    size /= 1000;
    suffix = "KB";
  }

  return (
    <Section
      headingText="About me"
      headingId="about"
      className="flex justify-center items-center min-h-[420px]"
    >
      <div className="flex flex-wrap items-start gap-16">
        <div className="space-y-6 max-w-[275px]">
          <img
            src="https://avatars.githubusercontent.com/u/95330865"
            alt=""
            height={275}
            width={275}
            className="rounded-lg"
          />
          <div className="grid grid-cols-4 gap-y-4">
            {technologies.map((technology) => (
              <TechnologyItem
                name={technology.name}
                logo={technology.logo}
                key={technology.name}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between gap-8">
          <div className="tracking-wide text-3xl">
            <div>
              <b>{repos.length}</b>{" "}
              <span className="text-white/80">GitHub repos</span>
            </div>
            <div>
              <b>
                {size.toFixed()} {suffix}
              </b>{" "}
              <span className="text-white/80">of stuff committed</span>
            </div>
          </div>
          <div className="max-w-[400px]">
            Hello! I&apos;m Shark. I like to develop websites and sometimes
            other stuff.. I&apos;ve been programming for about {startYears}{" "}
            years now, and outside of coding, I like to play Tetris!
          </div>
        </div>
      </div>
    </Section>
  );
}

export default About;
