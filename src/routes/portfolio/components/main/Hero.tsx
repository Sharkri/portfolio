import axios from "axios";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PreviewPost } from "../../../../types/Post";

const { VITE_API_URL } = import.meta.env;

function Hero() {
  const [posts, setPosts] = useState<null | PreviewPost[]>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`${VITE_API_URL}/api/posts/preview`);
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="flex-col-center max-w-[960px] mx-auto w-full min-h-[95vh] relative z-20">
      <div>
        <h1 className="text-7xl max-md:text-6xl font-bold text-center mb-8">
          hi, i&apos;m Shark.
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
          {posts
            ? posts.slice(0, 3).map((post) => {
                const postDate = new Date(post.createdAt);
                const formattedDate = format(postDate, "MMM d, yyyy");
                return (
                  <Link
                    to={`/blog/${post._id}`}
                    key={post._id}
                    className="border-b pt-5 pb-5 border-gray-800"
                  >
                    <p className="font-bold mb-0.5">{post.title}</p>
                    <p className="text-sm text-gray-300">{formattedDate}</p>
                  </Link>
                );
              })
            : "Loading..."}
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 animate-bounce">
        <i className="fa-solid fa-arrow-down text-3xl" />
      </a>
    </div>
  );
}

export default Hero;
