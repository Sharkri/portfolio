import { useState } from "react";
import clsx from "clsx";
import { Comment } from "../../../types/Post";
import DeleteCommentButton from "./delete-comment-button";
import useAccentColor from "../../../components/hooks/useAccentColor";
import BlogCommentReply from "./blog-comment-reply";

export default function BlogCommentCard({
  comment,
  onDelete,
  onToggleReply,
}: {
  comment: Comment;
  onDelete: (commentId: string) => Promise<void>;
  onToggleReply: () => void;
}) {
  const formattedDate = new Date(comment.createdAt).toLocaleString(undefined, {
    dateStyle: "short",
    timeStyle: "short",
  });

  const [firstClick, setFirstClick] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const accentColor = useAccentColor(comment.pokemonSpriteUrl);

  const handleDeleteClick = async () => {
    if (!firstClick) {
      setFirstClick(true);
      return;
    }

    setDeleting(true);
    await onDelete(comment._id);
    setDeleting(false);
  };

  return (
    <div
      className={clsx(
        "font-mono rounded-lg flex flex-col bg-zinc-900/60 border border-zinc-800 overflow-hidden",
        firstClick && "animate-shudder"
      )}
    >
      <div
        className={clsx(
          "flex flex-wrap items-center justify-between gap-2 px-4 py-2 text-sm border-b border-zinc-800/80 transition-colors",
          firstClick ? "bg-[#3a1818]" : "bg-zinc-900/80"
        )}
      >
        <div className="flex items-baseline gap-2">
          <span
            className="font-semibold transition-colors"
            style={accentColor ? { color: accentColor } : undefined}
          >
            {comment.name}
          </span>
          <span className="text-xs text-muted">at {formattedDate}</span>
        </div>

        {comment.canDelete && (
          <DeleteCommentButton
            firstClick={firstClick}
            deleting={deleting}
            onClick={handleDeleteClick}
            onMouseLeave={() => setFirstClick(false)}
          />
        )}
      </div>

      <div className="px-4 py-3 flex flex-wrap gap-4">
        {comment.pokemonSpriteUrl && (
          <img
            src={comment.pokemonSpriteUrl}
            alt={comment.pokemon}
            className="sm:h-28 sm:w-28 object-contain brightness-90 hover:brightness-100"
            loading="lazy"
            title={comment.pokemon}
          />
        )}

        <div className="flex flex-col gap-2 grow">
          <div className="flex-1 text-sm text-foreground/80 whitespace-pre-wrap mt-2.5">
            {comment.text}
          </div>

          <div className="flex flex-col gap-4 items-end">
            <BlogCommentReply onOpenReply={onToggleReply} />
          </div>
        </div>
      </div>
    </div>
  );
}
