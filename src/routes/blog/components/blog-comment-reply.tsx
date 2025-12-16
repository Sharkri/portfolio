export default function BlogCommentReply({
  onOpenReply,
}: {
  onOpenReply: () => void;
}) {
  return (
    <div>
      <button
        type="button"
        className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
        onClick={onOpenReply}
      >
        <span className="text-xs hidden sm:block">
          <i className="fa-solid fa-reply" />
        </span>
        reply
      </button>
    </div>
  );
}
