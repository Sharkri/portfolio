import { useState } from "react";
import clsx from "clsx";
import { Comment, FormComment } from "../../../types/Post";
import PostCommentForm from "./post-comment-form";
import { checkRepliesPopulated } from "../../../lib/comment-helpers";
import BlogCommentCard from "./blog-comment-card";

const MAX_INDENT = 4;
const INDENT_PX = 16;

export default function BlogComment({
  comment,
  onDelete,
  onReply,
  level = 0,
}: {
  comment: Comment;
  onDelete: (commentId: string) => Promise<void>;
  onReply: (commentId: string, data: FormComment) => Promise<void>;
  level?: number;
}) {
  const [replyOpen, setReplyOpen] = useState(false);

  const handleReplySubmit = async (data: FormComment) => {
    await onReply(comment._id, data);
    setReplyOpen(false);
  };

  const marginLeftPx = level > MAX_INDENT ? 0 : level * INDENT_PX;

  return (
    <div
      className="flex flex-col gap-4"
      style={{ marginLeft: `${marginLeftPx}px` }}
    >
      {/* Comment Card */}
      <BlogCommentCard
        comment={comment}
        onToggleReply={() => setReplyOpen(!replyOpen)}
        onDelete={onDelete}
      />

      {/* Replies */}
      <div className={clsx(!replyOpen && "hidden")}>
        <PostCommentForm onSubmit={handleReplySubmit} isReply />
      </div>

      <div>
        {checkRepliesPopulated(comment.replies) &&
          // sort from oldest to newest
          [...comment.replies]
            .sort((a, b) => +new Date(a.createdAt) - +new Date(b.createdAt))
            .map((reply) => (
              <BlogComment
                comment={reply}
                onDelete={onDelete}
                onReply={onReply}
                level={level + 1}
                key={reply._id}
              />
            ))}
      </div>
    </div>
  );
}
