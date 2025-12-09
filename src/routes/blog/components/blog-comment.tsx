import { useState } from "react";
import axios from "axios";
import { Comment } from "../../../types/Post";
import DeleteCommentButton from "./delete-comment-button";

const { VITE_API_URL } = import.meta.env;

export default function BlogComment({
  postId,
  comment,
  clientIp,
  onDelete,
}: {
  postId: string;
  comment: Comment;
  clientIp: string;
  onDelete: () => void;
}) {
  const createdAt = new Date(comment.createdAt);
  const formattedDate = createdAt.toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
  const [firstClick, setFirstClick] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const deleteComment = async () => {
    try {
      await axios.delete(
        `${VITE_API_URL}/api/posts/${postId}/comments/${comment._id}`
      );
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  const handleDeleteClick = async () => {
    // only delete if clicked twice
    if (!firstClick) {
      setFirstClick(true);
    } else {
      setDeleting(true);

      await deleteComment();
      onDelete();

      setDeleting(false);
    }
  };

  return (
    <div
      className={`font-mono rounded-lg flex flex-col bg-zinc-900/60 border border-zinc-800 overflow-hidden ${
        firstClick ? "animate-shudder" : ""
      }`}
    >
      {/* Header */}
      <div
        className={`flex items-center justify-between px-4 py-2 text-sm border-b border-zinc-800/80 ${
          firstClick ? "bg-[#3a1818]" : "bg-zinc-900/80"
        }`}
      >
        <div className="flex items-baseline gap-2">
          <span className="font-semibold">{comment.name}</span>
          <span className="text-xs text-muted">at {formattedDate}</span>
        </div>

        {(comment.clientIp === clientIp || true) && (
          <DeleteCommentButton
            firstClick={firstClick}
            deleting={deleting}
            onClick={handleDeleteClick}
            onMouseLeave={() => setFirstClick(false)}
          />
        )}
      </div>

      <div className="px-4 py-3 flex gap-4">
        {comment.pokemonSpriteUrl && (
          <div className="flex flex-col items-center gap-1">
            <img
              src={comment.pokemonSpriteUrl}
              alt={comment.pokemon}
              className="sm:h-28 sm:w-28 object-contain brightness-90 hover:brightness-100"
              loading="lazy"
              title={comment.pokemon}
            />
          </div>
        )}

        <div className="flex-1 text-sm text-foreground/80 whitespace-pre-wrap mt-2.5">
          {comment.text}
        </div>
      </div>
    </div>
  );
}
