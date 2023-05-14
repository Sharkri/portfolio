import Project from "../../interfaces/ProjectInterface";

function ProjectItem({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-8 border-b border-b-white/50 last:border-b-0 last:pb-0 mb-7 pb-8">
      <h1 className="text-xl font-bold">{project.title}</h1>

      <div className="flex max-lg:flex-col gap-6">
        <div className="flex-[50%] overflow-hidden">
          <img
            src={project.image}
            className="brightness-[0.8] hover:brightness-90 hover:scale-105 transition duration-300"
            alt=""
            loading="lazy"
          />
        </div>

        <div className="flex-[50%] flex flex-col gap-8">
          <div>
            <h1 className="text-lg font-bold">Summary</h1>
            <p className="text-white/75">{project.description}</p>
          </div>

          <div>
            <h1 className="text-lg font-bold">Technologies</h1>
            <span className="text-white/75">
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
                aria-label="open link icon"
              />
            </a>

            <a
              href={project.githubRepo}
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
                aria-label="open link icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
