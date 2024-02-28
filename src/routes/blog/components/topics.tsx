import { Post } from "../../../types/Post";

export default function Topics({ topics }: { topics: Post["topics"] }) {
  return (
    <div className="flex flex-wrap gap-3.5 items-end">
      {topics?.map((topic) => (
        <div
          className="bg-zinc-800 rounded-full hover:brightness-110 transition py-2 px-5 text-sm cursor-pointer"
          key={topic}
        >
          {topic}
        </div>
      ))}
    </div>
  );
}
