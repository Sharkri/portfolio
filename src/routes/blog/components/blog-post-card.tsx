import { sanitize } from "isomorphic-dompurify";
import { Post } from "../../../types/Post";

export default function BlogPostCard({ post }: { post: Post }) {
  const createdAt = new Date(post.createdAt);

  return (
    <div className="flex flex-col pt-5 bg-zinc-900 rounded-lg border border-gray-800">
      <div className="px-6 pb-4">
        <h1 className="text-3xl mb-1 font-bold">{post.title}</h1>
        <p className="text-gray-400 text-sm">
          by {post.author.displayName} at{" "}
          <span title={createdAt.toUTCString()}>
            {createdAt.toLocaleDateString()}
          </span>
        </p>
      </div>

      <div
        className="blog-post-card-content max-w-none prose prose-invert bg-neutral-950 relative p-6 text-[#ccc] overflow-hidden max-h-60"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: sanitize(post.blogContents) }}
      />
    </div>
  );
}
