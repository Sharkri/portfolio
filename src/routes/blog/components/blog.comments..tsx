import { useState } from "react";
import { Comment, Post } from "../../../types/Post";
import BlogComment from "./blog-comment";
import PostCommentForm from "./post-comment-form";

export default function BlogComments({ post }: { post: Post }) {
  const [comments, setComments] = useState(post.comments);

  return (
    <div className="space-y-8">
      <h2 className="font-bold text-2xl">Comments ({post.comments.length})</h2>

      <PostCommentForm
        postId={post._id}
        onCommentAdd={(comment: Comment) =>
          setComments((prev) => [comment, ...prev])
        }
      />

      <div className="flex flex-col gap-8">
        {comments.map((comment) => (
          <BlogComment comment={comment} key={comment._id} />
        ))}
      </div>
    </div>
  );
}
