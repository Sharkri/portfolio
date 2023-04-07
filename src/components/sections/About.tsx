import JSLogo from "../../images/logos/javascript-logo.svg";
import TSLogo from "../../images/logos/typescript-logo.svg";
import ReactLogo from "../../images/logos/react-logo.svg";
import NextJSLogo from "../../images/logos/nextjs-logo.svg";
import TailwindLogo from "../../images/logos/tailwindcss-logo.svg";
import GitLogo from "../../images/logos/git-logo.svg";
import ViteLogo from "../../images/logos/vite-logo.svg";
import WebpackLogo from "../../images/logos/webpack-logo.svg";
import NPMLogo from "../../images/logos/npm-logo.svg";
import JestLogo from "../../images/logos/jest-logo.svg";
import FirebaseLogo from "../../images/logos/firebase-logo.svg";

import TechnologyItem from "../helper/TechnologyItem";
import Section from "../helper/Section";

function About() {
  const technologies = [
    { name: "JavaScript", logo: JSLogo },
    { name: "Typescript", logo: TSLogo },
    { name: "React", logo: ReactLogo },
    { name: "NextJS", logo: NextJSLogo },
    { name: "TailwindCSS", logo: TailwindLogo },
    { name: "Git", logo: GitLogo },
    { name: "Vite", logo: ViteLogo },
    { name: "Webpack", logo: WebpackLogo },
    { name: "NPM", logo: NPMLogo },
    { name: "Jest", logo: JestLogo },
    { name: "Firebase", logo: FirebaseLogo },
  ];

  return (
    <Section
      headingText="About"
      headingId="about"
      className="flex flex-col justify-center items-center"
    >
      <h1 className="p-1 mb-4 text-2xl max-sm:text-xl font-bold">Skills</h1>

      <div className="flex justify-center flex-wrap gap-6 max-w-[928px]">
        {technologies.map((technology) => (
          <TechnologyItem
            name={technology.name}
            logo={technology.logo}
            key={technology.name}
          />
        ))}
      </div>
    </Section>
  );
}

export default About;
