export default function BlogCommentReply({
  onOpenReply,
}: {
  onOpenReply: () => void;
}) {
  return (
    <div>
      <button
        type="button"
        className="flex items-center gap-2 text-muted hover:text-accent transition-colors font-mono text-sm"
        onClick={onOpenReply}
      >
        <span className="text-xs mt-1 hidden sm:block">
          <i className="fa-solid fa-reply" />
        </span>
        reply
      </button>
    </div>
  );
}
