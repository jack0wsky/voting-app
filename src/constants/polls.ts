import {
  PollBuilder,
  OptionBuilder,
  VoterBuilder,
} from "@/builders/voter.builder";
import type { IPoll } from "@/modules/votes/poll.types";

const pizzaPoll = new PollBuilder();
const travelPoll = new PollBuilder();
const bestCarPoll = new PollBuilder();

export const USERS = [
  new VoterBuilder("1", "James", ""),
  new VoterBuilder("2", "Brad", ""),
  new VoterBuilder("3", "Jack", ""),
  new VoterBuilder("4", "Anna", ""),
  new VoterBuilder("5", "Camille", ""),
  new VoterBuilder("6", "Victoria", ""),
];

export const POLLS: IPoll[] = [
  pizzaPoll
    .withTopic("Which pizza?")
    .createdBy("Jack")
    .withOptions([
      new OptionBuilder("Margherita", [USERS[0], USERS[1]]),
      new OptionBuilder("Capricciosa", [USERS[2], USERS[1], USERS[5]]),
    ]),
  travelPoll
    .withTopic("Where to go?")
    .createdBy("Brandon")
    .withOptions([
      new OptionBuilder("Fuertaventura", [USERS[2], USERS[4], USERS[5]]),
      new OptionBuilder("Dubai", [USERS[3]]),
    ]),
  bestCarPoll
    .withTopic("Which car brand is the best?")
    .createdBy("Mike")
    .withOptions([
      new OptionBuilder("Lamborghini", [
        USERS[0],
        USERS[1],
        USERS[2],
        USERS[3],
      ]),
      new OptionBuilder("McLaren", [USERS[0], USERS[1], USERS[2], USERS[3]]),
    ]),
];
