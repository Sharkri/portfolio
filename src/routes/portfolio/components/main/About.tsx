import Section from "./helper/Section";
import TechnologyItem from "./helper/TechnologyItem";

const { BASE_URL } = import.meta.env;

const technologies = [
  { name: "TypeScript", logo: "assets/images/logos/typescript-logo.svg" },
  { name: "React", logo: "assets/images/logos/react-logo.svg" },
  { name: "Next.js", logo: "assets/images/logos/nextjs-logo.svg" },
  { name: "Tailwind CSS", logo: "assets/images/logos/tailwindcss-logo.svg" },
  { name: "Jest", logo: "assets/images/logos/jest-logo.svg" },
  { name: "Prisma", logo: "assets/images/logos/prisma-logo.svg" },
  { name: "PostgreSQL", logo: "assets/images/logos/postgresql-logo.svg" },
  { name: "NodeJS", logo: "assets/images/logos/nodejs-logo.svg" },
];

function About() {
  return (
    <Section
      headingText="A bit about me"
      headingId="about"
      className="flex flex-col justify-center items-center max-h-[1280px] gap-8"
    >
      <div className="flex flex-wrap gap-16 max-md:gap-8 justify-center">
        <div className="space-y-6 max-w-[275px] max-lg:max-w-[225px] max-sm:max-w-[200px]">
          <img
            src="/portfolio/assets/images/leafeon.png"
            alt="Leafeon"
            className="rounded-lg w-[250px]"
          />
          <span className="text-xs text-muted font-mono">my fav :3</span>
        </div>
        <div className="flex flex-col justify-between gap-8">
          <div className="max-w-[400px] lg:text-lg space-y-4">
            <div>
              hi! i&apos;m{" "}
              <ruby>
                <span className="text-accent">shark</span>
                <rt className="text-xs text-muted">シャーク</rt>
              </ruby>
              , a <span className="text-accent">fullstack developer</span>{" "}
              currently focused on building clean and accessible web apps.
            </div>
            <div>
              I also like learning languages, drawing, piano, markov chains,
              knot theory,{" "}
              <a
                className="text-foreground/80 underline underline-offset-2 hover:text-foreground"
                href="https://en.wikipedia.org/wiki/Simultaneous_perturbation_stochastic_approximation"
                target="_blank"
                rel="noreferrer"
              >
                spsa
              </a>
              , tetr.io, pokemon mystery dungeon, and other stuff!
            </div>
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

          <div className="ml-4 text-xs text-muted font-mono">
            and also: Docker, Python, Rust, Git
          </div>
        </div>
      </div>
    </Section>
  );
}

export default About;
