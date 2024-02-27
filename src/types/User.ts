import { Image } from "./Image";

export type User = {
  displayName: string;
  email: string;
  role: "user" | "admin";
  _id: string;
  pfp: Image | null;
};
