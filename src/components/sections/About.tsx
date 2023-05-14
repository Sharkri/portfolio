import TechnologyItem from "../helper/TechnologyItem";
import Section from "../helper/Section";

function About() {
  const technologies = [
    { name: "JavaScript", logo: "/assets/images/logos/javascript-logo.svg" },
    { name: "Typescript", logo: "/assets/images/logos/typescript-logo.svg" },
    { name: "React", logo: "/assets/images/logos/react-logo.svg" },
    { name: "NextJS", logo: "/assets/images/logos/nextjs-logo.svg" },
    { name: "TailwindCSS", logo: "/assets/images/logos/tailwindcss-logo.svg" },
    { name: "Git", logo: "/assets/images/logos/git-logo.svg" },
    { name: "Vite", logo: "/assets/images/logos/vite-logo.svg" },
    { name: "Webpack", logo: "/assets/images/logos/webpack-logo.svg" },
    { name: "NPM", logo: "/assets/images/logos/npm-logo.svg" },
    { name: "Jest", logo: "/assets/images/logos/jest-logo.svg" },
    { name: "Firebase", logo: "/assets/images/logos/firebase-logo.svg" },
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
