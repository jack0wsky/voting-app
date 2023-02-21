import type { IOption, IPoll, PollId } from "@/types/poll";
import { POLLS } from "@/constants/polls";
import { v4 as uuid } from "uuid";

import { defineStore } from "pinia";

interface IGlobalState {
  polls: IPoll[];
}

export const usePollsStore = defineStore("polls", {
  state: (): IGlobalState => ({ polls: POLLS }),
  getters: {},
  actions: {
    addPoll(poll: IPoll) {
      this.polls.push(poll);
    },
    vote(pollId: PollId, optionId: string) {
      const foundPoll = this.polls.find((poll) => poll.id === pollId) as IPoll;

      const foundOption = foundPoll.options.find(
        (option) => option.id === optionId
      ) as IOption;

      foundOption.votes.push({ id: uuid(), user: "Francesco" });
    },
  },
});
