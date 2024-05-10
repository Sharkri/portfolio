/* eslint-disable no-console */
import { useEffect, useState } from "react";
import axios from "axios";
import { StarIcon } from "@heroicons/react/24/solid";
import Project from "../../../../../types/Project";

function ProjectItem({ project }: { project: Project }) {
  const [stars, setStars] = useState(0);

  useEffect(() => {
    const getRepoInfo = () =>
      axios.get(`https://api.github.com/repos/${project.githubRepo}`);

    getRepoInfo()
      .then((res) => setStars(res.data.stargazers_count))
      .catch(console.error);
  }, [project.githubRepo]);

  return (
    <div className="flex flex-col gap-8 border-b border-b-white/50 last:border-b-0 last:pb-0 mb-7 pb-8">
      <h1 className="text-xl font-bold">{project.title}</h1>

      <div className="flex max-lg:flex-col gap-6">
        <div className="flex-[50%] overflow-hidden">
          <img
            src={project.image}
            className="brightness-90 hover:brightness-100 hover:scale-105 transition duration-300"
            alt=""
            loading="lazy"
          />
        </div>

        <div className="flex-[50%] flex flex-col gap-6">
          <div>
            <h1 className="text-lg font-bold">Summary</h1>
            <p className="text-white/80 whitespace-pre-wrap">
              {project.description}
            </p>

            {stars > 0 && (
              <div
                className="flex items-center gap-1 mt-2"
                title={`${stars} Stargazers`}
              >
                <StarIcon className="w-6 h-6 text-yellow-600" />
                <p className="text-white/90 text-lg">
                  <span className="font-bold">{stars}</span>
                </p>
              </div>
            )}
          </div>

          <div>
            <h1 className="text-lg font-bold">Technologies</h1>
            <span className="text-white/80">
              {project.technologies.join(", ")}
            </span>
          </div>

          <div className="flex gap-6 font-bold">
            <a
              href={project.livePreview}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 group"
            >
              <span>
                LIVE PREVIEW
                <div className="h-0.5 bg-white/75 origin-left translate-y-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </span>
              <i
                className="fa-solid fa-arrow-up rotate-45"
                aria-hidden="true"
              />
            </a>

            <a
              href={`https://github.com/${project.githubRepo}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 group"
            >
              <span>
                VIEW CODE
                <div className="h-0.5 bg-white/75 origin-left translate-y-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </span>
              <i
                className="fa-solid fa-arrow-up rotate-45"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
