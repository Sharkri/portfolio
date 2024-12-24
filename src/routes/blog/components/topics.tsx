import { Post } from "../../../types/Post";

export default function Topics({ topics }: { topics: Post["topics"] }) {
  return (
    <div className="flex flex-wrap gap-3 items-end max-sm:gap-2">
      {topics?.map((topic) => (
        <div
          className="bg-zinc-800 rounded-full hover:brightness-110 transition py-1.5 px-3 text-sm cursor-pointer max-sm:px-2 max-sm:py-1 max-sm:text-xs"
          key={topic}
        >
          {topic}
        </div>
      ))}
    </div>
  );
}
