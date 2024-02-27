import { Image } from "./Image";
import { User } from "./User";

export type Comment = {
  name: string;
  text: string;
  replies: Comment[];
};

export type Post = {
  author: User;
  comments: Comment[];
  createdAt: string;
  title: string;
  topics?: string[];
  isPublished?: boolean;
  blogContents: string;
  description: string;
  image: Image | null;
  _id: string;
};
