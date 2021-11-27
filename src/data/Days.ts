import Day from "../schema/day";
import shrimp from "../icons/shrimp.png";
import deviled from "../icons/deviledhamtree.png";
import cranberrycandles from "../icons/cranberrycandles.png";

export const rows: Day[][] = [
  [
    {
      id: 1,
      title: "One the first day...",
      cssClasses: [],
      content: [],
      type: [],
    },
    {
      id: 2,
      content: [],
      type: [],
    },
    {
      id: 3,
      title: "Fun Fact!",
      content: [
        "When Christmas was cancelled: From 1659 to 1681, the celebration of Christmas was outlawed in Boston, and law-breakers were fined five shillings.",
      ],
    },
    {
      id: 4,
      content: [
        "Spice up your next holiday party with one of these vintage recipes: a shrimp and olive christmas tree, a deviled ham tree, or an instant classic- cranberry-mayo candles",
        shrimp,
        deviled,
        cranberrycandles,
      ],
      title: "Ah Yes, the Good 'Ol Days",
      type: ["text", "image", "image", "image"],
    },
  ],
  [
    {
      id: 5,
      title: "Challenge Day",
      content: [
        "In the spirit of the holidays, reach out to someone you haven't in awhile but have been meaning to catch up with.",
      ],
      type: ["text"],
    },
    {
      id: 6,
      title: "Happy Last Night of Hannukah!",
      content: ["https://www.dailymail.co.uk/embed/video/1369595.html"],
      type: ["video"],
      submitter: "Sarah Carroll"
    },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
  ],
  [
    {
      id: 11,
      title: "Fun Fact!",
      content: [
        "In the Middle Ages, Christmas celebrations were rowdy and raucous—a lot like today’s Mardi Gras parties.",
      ],
      type: ["text"],
    },
    {
      id: 12,
      title: "Challenge Day",
      content: [
        "How many presents total are given in the song the 12 Days of Christmas? ",
        "Bonus: model an eloquent equation to solve the problem OR for those programmers out there- write a function to return the total number of gifts given for n days assuming gifts are given in the same scheme as the song",
      ],
      type: ["text", "text"],
    },
    { id: 13 },
    {
      id: 14,
      title: "Riddle Day",
      content: [
        "Four elves Gustav, Merry, Wendy and Tinsel are each wearing tunics of a different colour. At least one of these elves is a liar. (A liar is someone who says only statements that are untrue). During a break at elf school, the following conversation is overheard \n \n Gustav: Merry wears green. \n Wendy: The elf in green is a liar. \n Tinsel: I wear blue. \n Gustav: I wear yellow. \n Merry: I’m in pink. \n Wendy: The elf in the red tunic beat Tinsel at the 2020 elf curling championship. I do not play curling. \n Tinsel: One of us is in yellow. \n Merry: Only one liar is among us. \n Wendy: I do not wear green. \n Tinsel: I was beaten by the elf in red at the 2020 elf curling championship. \n \n Who beat the elf in the blue tunic at the 2020 elf curling championship?",
      ],
      type: ["text"],
    },
    {
      id: 15,
      title: "A Douglas Family Classic Video",
      content: ["https://www.youtube.com/embed/jWnP2jO06gc"],
      type: ["video"],
    },
    { id: 16 },
    { id: 17 },
    {
      id: 18,
      title: "Fun Fact!",
      content: [
        "Iceland has got it right. People in Iceland will often exchange books on Christmas Eve, then spend the rest of the night reading them and eating chocolate. The tradition is part of a season called Jolabokaflod, or “The Christmas Book Flood.” Next year anyone?",
      ],
      type: ["text"],
    },
  ],
  [
    {
      id: 19,
      title: "A Festive Core Workout",
      content: ["https://www.youtube.com/embed/lxFJ1FetBvA"],
      type: ["video"],
    },
    {
      id: 20,
      title: "Challenge Day: You vs Anyone Else in the Room",
      content: [
        "Winner is the person who knows the most lyrics to Auld Lang Syne",
      ],
      type: ["text"],
    },
    { id: 21 },
    {
      id: 22,
      title: "Trivia",
      content: [
        "“Deck the Halls” was originally a pagan Yuletide drinking song. The melody was taken from a 16th century Welsh song (“Nos Galan”) and the “fa la la” repetition possibly dating back to medieval ballads.",
      ],
      type: ["text"],
    },
    { id: 23 },
    { id: 24 },
    { id: 25 },
  ],
];
