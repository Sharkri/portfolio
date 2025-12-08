import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";
import BlogPostCard from "./blog-post-card";
import { Post } from "../../../types/Post";
import Spinner from "../../../components/Spinner";

const { VITE_API_URL } = import.meta.env;

export default function BlogPosts() {
  const [searchParams] = useSearchParams();
  const topic = searchParams.get("t");

  const [posts, setPosts] = useState<null | Post[]>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`${VITE_API_URL}/api/posts`);
        setPosts(res.data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        setPosts([]);
      }
    };
    fetchPosts();
  }, []);

  if (posts == null)
    return (
      <div className="flex justify-center text-gray-200 items-center">
        <Spinner /> Loading blogs...
      </div>
    );

  if (posts.length === 0) {
    return (
      <div>
        <p className="text-lg text-muted">No blog posts yet...</p>
      </div>
    );
  }

  const filteredPosts = topic
    ? posts.filter((post) => post.topics?.includes(topic))
    : posts;

  return (
    <div className="flex flex-col gap-8">
      {topic !== null && (
        <div>
          <Link
            to="/blog"
            className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
          >
            Reset filters
          </Link>
        </div>
      )}

      {filteredPosts.length ? (
        filteredPosts.map((post) => <BlogPostCard post={post} key={post._id} />)
      ) : (
        <div>
          <p className="text-xl">No results found with that topic...</p>
        </div>
      )}
    </div>
  );
}
