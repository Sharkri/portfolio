import { Link } from "react-router-dom";
import { Post } from "../../../types/Post";
import Topics from "./topics";
import BlogContent from "./blog-content";

export default function BlogPostCard({ post }: { post: Post }) {
  const createdAt = new Date(post.createdAt);

  return (
    <div className="flex flex-col pt-5 bg-zinc-900 rounded-lg border border-gray-800">
      <div className="flex justify-between gap-4 px-6 pb-4">
        <div>
          <h1 className="text-2xl mb-1 font-bold">
            <Link to={`/blog/${post._id}`}>{post.title}</Link>
          </h1>
          <p className="text-gray-400 text-sm">
            by <b className="text-indigo-400">{post.author.displayName}</b> at{" "}
            <span title={createdAt.toUTCString()}>
              {createdAt.toLocaleDateString()}
            </span>
          </p>
        </div>

        <Topics topics={post.topics} />
      </div>

      <BlogContent
        className="blog-post-card-content relative overflow-hidden max-h-60"
        blogContents={post.blogContents}
      />
    </div>
  );
}
