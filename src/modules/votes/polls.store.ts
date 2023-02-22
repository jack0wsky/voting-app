import type { IOption, IPoll, PollId } from "@/modules/votes/poll.types";
import { POLLS } from "@/constants/polls";
import { v4 as uuid } from "uuid";

import { defineStore } from "pinia";
import { useUserStore } from "@/modules/user/user.store";

interface IPollsStore {
  polls: IPoll[];
}

export const usePollsStore = defineStore("polls", {
  state: (): IPollsStore => ({ polls: POLLS }),
  getters: {},
  actions: {
    addPoll(poll: IPoll) {
      this.polls.push(poll);
    },
    vote(pollId: PollId, optionId: string) {
      const currentUser = useUserStore();

      if (!currentUser.user) return;

      const foundPoll = this.polls.find((poll) => poll.id === pollId) as IPoll;

      const foundOption = foundPoll.options.find(
        (option) => option.id === optionId
      ) as IOption;

      foundOption.votes.push({
        id: uuid(),
        user: {
          uid: currentUser.user.uid,
          photoURL: currentUser.user.photoURL,
          displayName: currentUser.user.displayName,
        },
      });
    },
  },
});
