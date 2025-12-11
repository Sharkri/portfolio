import { Link } from "react-router-dom";
import { Post } from "../../../types/Post";
import getColorFromString from "../../../lib/color-from-string";

export default function Topics({ topics }: { topics: Post["topics"] }) {
  return (
    <div className="flex flex-wrap gap-2.5 items-end">
      {topics?.map((topic) => (
        <Link
          className="bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors py-1 px-2.5 text-sm font-mono lowercase"
          key={topic}
          to={`/blog?t=${topic}`}
          style={{ color: getColorFromString(topic) }}
        >
          {topic}
        </Link>
      ))}
    </div>
  );
}
