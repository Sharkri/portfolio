import { User } from "./User";

export type Comment = {
  name: string;
  text: string;
  replies: Comment[];
  _id: string;
  clientIp: string;
  createdAt: string;
};

export type Post = {
  author: User;
  comments: Comment[];
  createdAt: string;
  title: string;
  topics?: string[];
  isPublished?: boolean;
  blogContents: string;
  _id: string;
};
