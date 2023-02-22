import type { User } from "firebase/auth";

export interface IVote {
  id: string;
  user: Pick<User, "displayName" | "photoURL" | "uid">;
}

export interface IOption {
  id: string;
  name: string;
  votes: IVote[];
}

export type PollId = string;

export interface IPoll {
  id: PollId;
  topic: string;
  author: string;
  options: IOption[];
}
