interface INpc {
  name: string;
  description: string;
  mannerisms: string;
  placeOfBirth: string;
  race: string;
  backstory: string;
  tags: string[];
}

type NpcArray = INpc[];

const npcArray: NpcArray = [
  {
    name: "Lyra Oberon",
    description: "A mysterious character with unknown intentions.",
    mannerisms: "Often speaks in riddles and avoids direct eye contact.",
    placeOfBirth: "Frostvale",
    race: "Goblin",
    backstory:
      "Shrouded in mystery, this character has a past full of secrets and untold stories.",
    tags: ["rogue", "sorcerer", "mage"],
  },
  {
    name: "Zara Lyra",
    description: "A mysterious character with unknown intentions.",
    mannerisms: "Often speaks in riddles and avoids direct eye contact.",
    placeOfBirth: "Mystic Mountains",
    race: "Halfling",
    backstory:
      "Shrouded in mystery, this character has a past full of secrets and untold stories.",
    tags: ["warrior", "sorcerer", "priest"],
  },
  {
    name: "Thorn Thorn",
    description: "A mysterious character with unknown intentions.",
    mannerisms: "Often speaks in riddles and avoids direct eye contact.",
    placeOfBirth: "Abyssal Depths",
    race: "Fairy",
    backstory:
      "Shrouded in mystery, this character has a past full of secrets and untold stories.",
    tags: ["bard", "warrior", "monk"],
  },
  {
    name: "Elara Lyra",
    description: "A mysterious character with unknown intentions.",
    mannerisms: "Often speaks in riddles and avoids direct eye contact.",
    placeOfBirth: "Frostvale",
    race: "Dwarf",
    backstory:
      "Shrouded in mystery, this character has a past full of secrets and untold stories.",
    tags: ["alchemist", "sorcerer", "ranger"],
  },
  {
    name: "Thorn Alden",
    description: "A mysterious character with unknown intentions.",
    mannerisms: "Often speaks in riddles and avoids direct eye contact.",
    placeOfBirth: "Ravenloft",
    race: "Fairy",
    backstory:
      "Shrouded in mystery, this character has a past full of secrets and untold stories.",
    tags: ["monk", "alchemist", "warrior"],
  },
];

export { npcArray };
