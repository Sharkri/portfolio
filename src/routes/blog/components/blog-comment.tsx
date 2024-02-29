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
      className={`rounded-md flex flex-col gap-4 bg-zinc-950/30 border border-zinc-800 ${
        firstClick ? "animate-shudder" : ""
      }`}
    >
      <div
        className={`py-2 px-4 flex justify-between duration-200 ${
          firstClick ? "bg-[#441818]" : "bg-zinc-800"
        }`}
      >
        <span>
          <span className="font-bold">{comment.name} </span>
          <span className="text-gray-300">at {createdAt.toLocaleString()}</span>
        </span>
        {comment.clientIp === clientIp && (
          <DeleteCommentButton
            firstClick={firstClick}
            deleting={deleting}
            onClick={handleDeleteClick}
            onMouseLeave={() => setFirstClick(false)}
          />
        )}
      </div>

      <div className="px-4 pt-1 pb-5 text-[#ddd] whitespace-pre-wrap">
        {comment.text}
      </div>
    </div>
  );
}
