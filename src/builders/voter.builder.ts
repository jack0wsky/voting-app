import type { IVote, IOption, IPoll } from "@/types/poll";
import { v4 as uuid } from "uuid";

export class VoterBuilder implements IVote {
  constructor(username: string) {
    this.id = uuid();
    this.user = username;
  }

  id: string;
  user: string;
}

export class OptionBuilder implements IOption {
  constructor(name: string, votes: VoterBuilder[]) {
    this.id = uuid();
    this.name = name;
    this.votes = votes;
  }

  id: string;
  name: string;
  votes: VoterBuilder[];
}

export class PollBuilder implements IPoll {
  constructor() {
    this.id = uuid();
    this.topic = "";
    this.author = "";
    this.options = [];
  }

  id: string;
  topic: string;
  author: string;
  options: IOption[];

  withTopic(topic: string) {
    this.topic = topic;
    return this;
  }

  createdBy(author: string) {
    this.author = author;
    return this;
  }

  withOptions(options: OptionBuilder[]) {
    this.options = options;
    return this;
  }
}
