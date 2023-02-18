import { reactive } from "vue";
import type { IOption, IPoll, PollId } from "@/types/poll";
import { POLLS } from "@/constants/polls";
import { v4 as uuid } from "uuid";

export const store = reactive<{
  polls: IPoll[];
  addPoll: (poll: IPoll) => void;
  vote: (pollId: PollId, optionId: string) => void;
}>({
  polls: POLLS,
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
});
