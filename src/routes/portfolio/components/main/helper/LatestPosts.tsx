import axios from "axios";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { PreviewPost } from "../../../../../types/Post";
import LatestPostSkeleton from "./LatestPostSkeleton";

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
      <div>
        {/* 91px is the height of each post */}
        <LatestPostSkeleton className="h-[91px]" />
        <LatestPostSkeleton className="h-[91px]" />
        <LatestPostSkeleton className="h-[91px] max-sm:hidden" />
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      // to prevent layout shift: 91px * 3 = 273px or 91px * 2 = 182px
      <div className="p-5 text-muted h-[273px] max-sm:h-[182px] flex items-center flex-col text-lg">
        <p className="text-center">no blogs yet... have a mew instead:</p>
        <img src="/portfolio/assets/animated/mew.gif" className="h-28" alt="" />
      </div>
    );
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
            className={clsx(
              "h-[91px] block border-b p-5 border-gray-800 hover:bg-emerald-200/5 transition",
              index >= 2 && "max-sm:hidden"
            )}
          >
            <p className="font-bold mb-0.5 text-lg line-clamp-1">
              {post.title}
            </p>
            <p className="text-sm text-muted">{formattedDate}</p>
          </Link>
        );
      })}
    </>
  );
}
