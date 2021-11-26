import Day from "../schema/day";
import shrimp from "../icons/shrimp.png";
import deviled from "../icons/deviledhamtree.png";
import cranberrycandles from "../icons/cranberrycandles.png";

export const rows: Day[][] = [
  [
    {
      id: 1,
      title: "One the first day...",
      cssClasses: ["boxLarge"],
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
      title: "Fun Fact",
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
    { id: 14 },
    { id: 15 },
    { id: 16 },
    { id: 17 },
    { id: 18 },
  ],
  [
    { id: 19 },
    { id: 20 },
    { id: 21 },
    { id: 22 },
    { id: 23 },
    { id: 24 },
    { id: 25 },
  ],
];
