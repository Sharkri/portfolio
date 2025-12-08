// this rule is so bs lol
/* eslint-disable jsx-a11y/label-has-associated-control */
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
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const resetInputs = () => {
    setText("");
    setName("");
  };

  const handleSubmit = async () => {
    if (!text || !name) return;
    const body = { name, text };

    setLoading(true);

    try {
      const res = await axios.post(
        `${VITE_API_URL}/api/posts/${postId}/comments`,
        body
      );

      onCommentAdd(res.data);

      resetInputs();
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
      className="flex flex-col max-w-sm gap-4"
    >
      <div className="flex flex-col space-y-1">
        <label className="text-sm font-medium text-zinc-400" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Enter a name"
          className="rounded-lg bg-zinc-950/60 border-transparent focus:border-zinc-800 focus:ring-0 disabled:brightness-[0.8]"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={30}
          disabled={loading}
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-zinc-400" htmlFor="comment">
          Comment
        </label>
        <div className="flex">
          <ReactTextareaAutosize
            placeholder="Write a comment"
            id="comment"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="grow rounded-lg rounded-r-none shadow-sm bg-zinc-950/60 border-transparent focus:border-zinc-800 focus:ring-0 min-h-[3em] disabled:brightness-[0.8]"
            maxLength={1500}
            disabled={loading}
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-lg rounded-l-none text-sm bg-zinc-800 p-2 disabled:brightness-[0.8] text-muted hover:text-foreground disabled:pointer-events-none"
          >
            submit
          </button>
        </div>
      </div>
    </form>
  );
}
