import { useState } from "react";
import { Comment, Post } from "../../../types/Post";
import BlogComment from "./blog-comment";
import PostCommentForm from "./post-comment-form";

export default function BlogComments({ post, ip }: { post: Post; ip: string }) {
  const [comments, setComments] = useState(post.comments);

  return (
    <div>
      <h2 className="flex items-center gap-2 my-4 pb-4 border-b border-zinc-600 border-dashed">
        <span className="text-zinc-400">Comments</span>
        <span className="text-sm text-zinc-500">({comments.length})</span>
      </h2>

      <div className="border-b mb-6 pb-4 border-zinc-600 border-dashed">
        <PostCommentForm
          postId={post._id}
          onCommentAdd={(comment: Comment) =>
            setComments((prev) => [comment, ...prev])
          }
        />
      </div>

      <div className="flex flex-col gap-8">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <BlogComment
              postId={post._id}
              comment={comment}
              key={comment._id}
              clientIp={ip}
              onDelete={() =>
                setComments((prev) => prev.filter((c) => comment._id !== c._id))
              }
            />
          ))
        ) : (
          <p className="text-sm text-zinc-400">
            no comments yet... be the first!
          </p>
        )}
      </div>
    </div>
  );
}
