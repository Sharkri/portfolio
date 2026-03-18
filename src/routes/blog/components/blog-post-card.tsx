import { Link } from "react-router-dom";
import { Post } from "../../../types/Post";
import BlogTopics from "./blog-topics";
import BlogContent from "./blog-content";
import PostDate from "./post-date";

export default function BlogPostCard({ post }: { post: Post }) {
  return (
    <div className="flex flex-col pt-5 bg-zinc-900 rounded-lg brightness">
      <div className="flex flex-wrap justify-between gap-4 px-6 pb-4">
        <div>
          <h1 className="text-2xl mb-1 font-bold">
            <Link to={`/blog/${post._id}`}>{post.title}</Link>
          </h1>

          <p className="text-gray-400">
            by <b className="text-accent">{post.author.displayName}</b> at{" "}
            <PostDate date={post.createdAt} />
          </p>
        </div>

        <BlogTopics topics={post.topics} />
      </div>

      <BlogContent
        className="blog-post-card-content relative overflow-hidden max-h-60 brightness-90 rounded-b-lg"
        blogContents={post.blogContents}
      />
    </div>
  );
}
