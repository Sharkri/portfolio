import { useEffect, useState } from "react";
import axios from "axios";
import BlogPostCard from "./blog-post-card";
import { Post } from "../../../types/Post";

const { VITE_API_URL } = import.meta.env;

export default function BlogPosts() {
  const [posts, setPosts] = useState<null | Post[]>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`${VITE_API_URL}/api/posts`);
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  if (posts == null)
    return (
      <div className="flex justify-center text-lg items-center gap-3">
        Fetching blog posts...
      </div>
    );

  return (
    <div className="flex flex-col gap-8">
      {posts.map((post) => (
        <BlogPostCard post={post} key={post._id} />
      ))}
    </div>
  );
}
