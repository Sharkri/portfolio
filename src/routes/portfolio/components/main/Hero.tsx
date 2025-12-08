import { Link } from "react-router-dom";
import LatestPosts from "./helper/LatestPosts";

const socials = [
  {
    icon: "/portfolio/assets/images/logos/github-logo.svg",
    link: "https://github.com/Sharkri",
    name: "GitHub",
  },
  {
    icon: "/portfolio/assets/images/logos/mail-logo.svg",
    link: "mailto:snowyshark@proton.me",
    name: "Email",
  },
  {
    icon: "/portfolio/assets/images/logos/tetrio-logo.svg",
    link: "https://ch.tetr.io/u/flyingdiarrhea",
    name: "tetr.io",
  },
];

function Hero() {
  return (
    <div className="flex-col-center max-w-[960px] mx-auto w-full min-h-[95vh] relative z-20">
      <div>
        <h1 className="text-7xl max-md:text-6xl font-bold text-center mb-8">
          hi, i&apos;m <span className="text-emerald-200">shark</span>.
        </h1>

        <div className="w-[90%]">
          <div className="flex justify-center flex-wrap gap-4 mb-8">
            {socials.map((social) => (
              <a
                href={social.link}
                key={social.name}
                title={social.name}
                target="_blank"
                rel="noreferrer"
                className="hover:brightness-100 brightness-75 transition"
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  width={24}
                  height={24}
                />
              </a>
            ))}
          </div>

          <div className="flex flex-col border border-gray-800/80 px-5 py-6 pb-0 rounded-sm mx-auto">
            <div className="pb-4 border-b border-gray-800 flex justify-between items-center gap-4">
              <h1 className="text-lg font-bold">Latest Blogs</h1>
              <div className="border-b grow border-gray-700" />
              <Link
                to="/blog"
                className="hover:underline underline-offset-2 font-bold"
              >
                View all
              </Link>
            </div>

            <LatestPosts />
          </div>
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 animate-bounce">
        <i className="fa-solid fa-arrow-down text-3xl" />
      </a>
    </div>
  );
}

export default Hero;
