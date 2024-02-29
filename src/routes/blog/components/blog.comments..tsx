import { useState } from "react";
import { Comment, Post } from "../../../types/Post";
import BlogComment from "./blog-comment";
import PostCommentForm from "./post-comment-form";

export default function BlogComments({ post, ip }: { post: Post; ip: string }) {
  const [comments, setComments] = useState(post.comments);

  return (
    <div>
      <div>
        <h2 className="text-lg ml-1 mb-4 text-zinc-400">
          Comments ({comments.length})
        </h2>
        <PostCommentForm
          postId={post._id}
          onCommentAdd={(comment: Comment) =>
            setComments((prev) => [comment, ...prev])
          }
        />
      </div>

      <div className="mt-8 flex flex-col gap-8">
        {comments.map((comment) => (
          <BlogComment
            postId={post._id}
            comment={comment}
            key={comment._id}
            clientIp={ip}
            onDelete={() =>
              setComments((prev) => prev.filter((c) => comment._id !== c._id))
            }
          />
        ))}
      </div>
    </div>
  );
}
