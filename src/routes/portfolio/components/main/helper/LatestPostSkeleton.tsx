import clsx from "clsx";

export default function LatestPostSkeleton({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={clsx("border-b border-gray-800 p-5 animate-pulse", className)}
    >
      <div className="mb-2 h-7 w-full rounded bg-white/10" />
      <div className="h-5 w-20 rounded bg-white/10" />
    </div>
  );
}
