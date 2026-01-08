/* eslint-disable no-console */
import { useEffect, useState } from "react";
import axios from "axios";
import Project from "../../../../../types/Project";

function ProjectItem({ project }: { project: Project }) {
  const [stars, setStars] = useState(0);

  useEffect(() => {
    axios
      .get(`https://api.github.com/repos/${project.githubRepo}`)
      .then((res) => setStars(res.data.stargazers_count))
      .catch(console.error);
  }, [project.githubRepo]);

  return (
    <div className="flex flex-col border-b border-b-white/50 border-dashed last:border-b-0 mb-7 pb-8">
      <div className="flex max-lg:flex-col gap-6">
        <div className="flex-[40%] overflow-hidden">
          <img
            src={project.image}
            className="brightness-90 hover:brightness-100 hover:scale-105 transition duration-300"
            alt=""
            loading="lazy"
          />
        </div>

        <div className="flex-[60%] flex flex-col">
          <div>
            <div className="flex gap-2 items-center">
              <h2 className="text-lg font-bold">{project.title}</h2>
              {stars > 0 && (
                <>
                  <div className="text-muted">—</div>
                  <div
                    className="flex items-center gap-1.5"
                    title={`${stars} Stargazers on GitHub`}
                  >
                    <i className="fa-solid fa-star text-yellow-500 text-sm" />
                    <span className="font-semibold">{stars}</span>
                    <span className="sr-only">stars</span>
                  </div>
                </>
              )}
            </div>

            <p className="text-white/70 whitespace-pre-wrap">
              {project.description}
            </p>

            <div className="text-white/60 text-[13px] flex flex-wrap gap-2 mt-2 mb-6">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="py-0.5 px-2.5 bg-neutral-800 rounded-full"
                >
                  {technology}
                </span>
              ))}
            </div>

            {project.learnings.length ? (
              <div>
                <p className="text-xs uppercase tracking-wide text-white/60 mb-2">
                  Challenges & Learnings
                </p>
                <ul className="text-sm text-muted space-y-1">
                  {project.learnings.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          <div className="mt-6 flex gap-6 font-bold">
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
