import { Comment } from "../../../types/Post";

export default function BlogComment({ comment }: { comment: Comment }) {
  const createdAt = new Date(comment.createdAt);

  return (
    <div className="rounded-md flex flex-col gap-4 bg-zinc-950/30 border border-zinc-800">
      <div className="bg-zinc-800 py-2 px-4">
        <span>
          <span className="font-bold">{comment.name} </span>
          <span className="text-gray-300">at {createdAt.toLocaleString()}</span>
        </span>
      </div>

      <div className="px-4 pt-1 pb-5 text-[#ddd] whitespace-pre-wrap">
        {comment.text}
      </div>
    </div>
  );
}
