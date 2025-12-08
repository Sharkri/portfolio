export default function DeleteCommentButton({
  firstClick,
  deleting,
  onClick,
  onMouseLeave,
}: {
  firstClick: boolean;
  deleting: boolean;
  onClick: () => void;
  onMouseLeave: () => void;
}) {
  let text = "";
  if (deleting) text = "kaboom!";
  else if (firstClick) text = "really delete?";
  else text = "delete";

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseLeave={onMouseLeave}
      className="text-muted hover:text-red-400 transition"
      title="Delete this comment (click twice)"
    >
      {text}
    </button>
  );
}
