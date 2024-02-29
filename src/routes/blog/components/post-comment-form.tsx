import axios from "axios";
import { useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";
import { Comment } from "../../../types/Post";

const { VITE_API_URL } = import.meta.env;

export default function PostCommentForm({
  postId,
  onCommentAdd,
}: {
  postId: string;
  onCommentAdd: (comment: Comment) => void;
}) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!text) return;

    setLoading(true);

    try {
      const res = await axios.post(
        `${VITE_API_URL}/api/posts/${postId}/comments`,
        { text }
      );
      setText("");
      onCommentAdd(res.data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="flex flex-col max-w-sm"
    >
      <ReactTextareaAutosize
        placeholder="Write a comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="rounded-t-lg shadow-sm bg-zinc-950/60 border-transparent resize-none min-h-[4em] focus:border-zinc-800 focus:ring-0"
        maxLength={1500}
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="rounded-b-lg text-sm bg-zinc-800 p-2 focus:border-zinc-600 disabled:brightness-[0.8]"
      >
        Submit
      </button>
    </form>
  );
}
