import { useState } from "react";
import axios from "axios";
import { Comment, Post } from "../../../types/Post";
import BlogComment from "./blog-comment";
import PostCommentForm from "./post-comment-form";

const { VITE_API_URL } = import.meta.env;

export default function BlogComments({ post }: { post: Post }) {
  const [comments, setComments] = useState(post.comments);

  const deleteComment = async (commentId: string) => {
    try {
      await axios.delete(
        `${VITE_API_URL}/api/posts/${post._id}/comments/${commentId}`
      );

      setComments((prev) => prev.filter((c) => commentId !== c._id));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  return (
    <div>
      <h2 className="flex items-center gap-2 my-4 pb-4 border-b border-zinc-600 border-dashed">
        <span className="text-muted">Comments</span>
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
              key={comment._id}
              comment={comment}
              onDelete={async () => deleteComment(comment._id)}
            />
          ))
        ) : (
          <p className="text-sm text-muted">no comments yet... be the first!</p>
        )}
      </div>
    </div>
  );
}
