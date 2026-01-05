import { Link } from "react-router-dom";
import clsx from "clsx";
import LatestPosts from "./helper/LatestPosts";

const socials = [
  {
    icon: "fa-brands fa-github",
    link: "https://github.com/Sharkri",
    name: "github",
  },
  {
    icon: "fa-solid fa-envelope",
    link: "mailto:snowyshark@proton.me",
    name: "contact",
  },
];

function Hero() {
  return (
    <div
      className="flex-col-center max-w-[960px] mx-auto h-[95dvh] w-full relative z-20"
      id="hero"
    >
      <div>
        <h1 className="text-7xl max-md:text-6xl font-bold text-center mb-8">
          hi, i&apos;m <span className="text-accent">shark</span>.
        </h1>

        <div className="w-[90%] mx-auto">
          <div className="flex justify-center flex-wrap gap-4 mb-8 font-mono">
            {socials.map((social) => (
              <a
                href={social.link}
                key={social.name}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-1.5 border border-zinc-700 rounded-sm text-sm text-zinc-300 hover:border-accent hover:text-accent transition group"
              >
                <i
                  className={clsx(
                    social.icon,
                    "text-sm text-muted group-hover:text-accent transition"
                  )}
                  aria-hidden="true"
                />
                <span>{social.name}</span>
              </a>
            ))}
          </div>

          <div className="flex flex-col border border-gray-800/80 py-6 pb-0 rounded-sm mx-auto">
            <div className="px-5 pb-4 border-b border-gray-800 flex justify-between items-center gap-4 font-mono">
              <h1>latest blogs</h1>
              <div className="border-b grow border-gray-700" />
              <Link
                to="/blog"
                className="hover:underline underline-offset-2 text-zinc-300 hover:text-accent transition text-sm"
              >
                view all
              </Link>
            </div>

            <LatestPosts />
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 animate-bounce"
        aria-label="Scroll to About section"
      >
        <i className="fa-solid fa-arrow-down text-3xl" />
      </a>
    </div>
  );
}

export default Hero;
