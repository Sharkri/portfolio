import { Link } from "react-router-dom";
import LatestPosts from "./helper/LatestPosts";

function Hero() {
  return (
    <div className="flex-col-center max-w-[960px] mx-auto w-full min-h-[95vh] relative z-20">
      <div>
        <h1 className="text-7xl max-md:text-6xl font-bold text-center mb-8">
          hi, i&apos;m <span className="text-emerald-200">shark</span>.
        </h1>

        <div className="flex flex-col border border-gray-800/80 px-5 py-6 pb-0 rounded-sm w-[90%] mx-auto">
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

      <a href="#about" className="absolute bottom-8 animate-bounce">
        <i className="fa-solid fa-arrow-down text-3xl" />
      </a>
    </div>
  );
}

export default Hero;
