import { Comment } from "../types/Post";

export function checkRepliesPopulated(
  replies: Comment[] | string[]
): replies is Comment[] {
  return replies.length === 0 || !!(replies[0] as Comment)?._id;
}

// recursively filter out comment/reply by id
export function removeCommentById(comments: Comment[], id: string): Comment[] {
  return comments
    .filter((comment) => comment._id !== id)
    .map((comment) => {
      if (checkRepliesPopulated(comment.replies)) {
        return { ...comment, replies: removeCommentById(comment.replies, id) };
      }
      return comment;
    });
}

// recursively add a reply to the comment/reply that matches `parentId`
export function addReplyById(
  comments: Comment[],
  parentId: string,
  newReply: Comment
): Comment[] {
  return comments.map((comment) => {
    if (comment._id === parentId) {
      const replies = checkRepliesPopulated(comment.replies)
        ? comment.replies
        : [];
      return { ...comment, replies: [newReply, ...replies] };
    }

    if (!checkRepliesPopulated(comment.replies)) return comment;
    // recurse replies
    return {
      ...comment,
      replies: addReplyById(comment.replies, parentId, newReply),
    };
  });
}
