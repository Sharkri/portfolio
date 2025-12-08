import { sanitize } from "isomorphic-dompurify";

export default function BlogContent({
  blogContents,
  className = "",
}: {
  blogContents: string;
  className?: string;
}) {
  return (
    <div
      className={`max-w-none prose prose-invert prose-accent bg-[#0D0D0D] p-8 ${className}`}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: sanitize(blogContents) }}
    />
  );
}
