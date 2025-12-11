import axios from "axios";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PreviewPost } from "../../../../../types/Post";
import Spinner from "../../../../../components/ui/Spinner";

const { VITE_API_URL } = import.meta.env;

export default function LatestPosts() {
  const [posts, setPosts] = useState<null | PreviewPost[]>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`${VITE_API_URL}/api/posts/preview`);
        setPosts(res.data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        setPosts([]);
      }
    };
    fetchPosts();
  }, []);

  if (!posts) {
    return (
      <div className="flex items-center gap-4 py-5">
        Loading blogs... <Spinner />
      </div>
    );
  }

  if (posts.length === 0) {
    return <div className="py-5 text-muted">No blogs yet...</div>;
  }

  const latestPosts = posts.slice(0, 3);

  return (
    <>
      {latestPosts.map((post, index) => {
        const postDate = new Date(post.createdAt);
        const formattedDate = format(postDate, "MMM d, yyyy");
        return (
          <Link
            to={`/blog/${post._id}`}
            key={post._id}
            className={`border-b py-5 border-gray-800
        ${index >= 2 ? "max-sm:hidden" : ""}
      `}
          >
            <p className="font-bold mb-0.5 font-mono">{post.title}</p>
            <p className="text-sm text-gray-300 font-mono">{formattedDate}</p>
          </Link>
        );
      })}
    </>
  );
}
