import { useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";
import clsx from "clsx";
import { FormComment } from "../../../types/Post";
import PokemonCombobox from "../../../components/PokemonCombobox";
import Checkbox from "../../../components/ui/Checkbox";

export default function PostCommentForm({
  onSubmit,
  isReply = false,
}: {
  onSubmit: (data: FormComment) => Promise<void>;
  isReply?: boolean;
}) {
  const [pokemon, setPokemon] = useState("");
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [expanded, setExpanded] = useState(isReply);
  const [loading, setLoading] = useState(false);

  const resetInputs = () => {
    setText("");
    setName("");
    setPokemon("");
  };

  const handleSubmit = async () => {
    if (!text || !name) return;

    setLoading(true);

    try {
      const body = { name, text, pokemon };
      await onSubmit(body);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    } finally {
      resetInputs();
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="flex flex-col gap-2"
    >
      <div className="flex flex-col gap-1">
        <label className="sr-only" htmlFor="comment">
          {isReply ? "Reply" : "Comment"}
        </label>
        <ReactTextareaAutosize
          placeholder={isReply ? "Write a reply" : "Write a comment"}
          id="comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full rounded-lg shadow-sm bg-zinc-950/60 border-transparent focus:border-zinc-800 focus:ring-0 min-h-[4.5em] text-sm disabled:brightness-[0.8]"
          onFocus={() => setExpanded(true)}
          maxLength={1500}
          disabled={loading}
          required
        />
      </div>

      <div
        className={clsx(
          "flex flex-col gap-2 md:flex-row md:flex-wrap md:items-center",
          !expanded && "hidden"
        )}
      >
        <div className="flex-1 min-w-[150px]">
          <label className="sr-only" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            autoComplete="off"
            className="w-full rounded-lg bg-zinc-950/60 border-transparent focus:border-zinc-800 focus:ring-0 text-sm disabled:brightness-[0.8]"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={30}
            disabled={loading}
            required
          />
        </div>

        <div className="flex-1 min-w-[160px]">
          <PokemonCombobox
            value={pokemon}
            onChange={setPokemon}
            disabled={loading}
          />
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <Checkbox label="remember me" />
          <button
            type="submit"
            disabled={loading}
            className="rounded-lg text-xs md:text-sm bg-zinc-800 px-3 py-2 disabled:brightness-[0.8] text-muted hover:text-accent disabled:pointer-events-none font-mono whitespace-nowrap transition-colors"
          >
            {isReply && (
              <span className="max-sm:hidden">
                <i className="fa-solid fa-reply mr-2 text-xs" />
              </span>
            )}
            {isReply ? "reply" : "post comment"}
          </button>
        </div>
      </div>
    </form>
  );
}
