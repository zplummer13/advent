import Day from "../schema/day";
import shrimp from "../icons/shrimp.png";
import deviled from "../icons/deviledhamtree.png";
import cranberrycandles from "../icons/cranberrycandles.png";
import elves from "../icons/elves.jpg";
import grinch from "../icons/grinch.png";
import crossword from "../icons/crossword.png";
import plum from "../icons/plum.jpg";
import sudoku from "../icons/sudoku.png";

export const rows: Day[][] = [
  [
    {
      id: 1,
      title: "On the first day...",
      cssClasses: [],
      content: ["Here are our music recommendations for the holiday season"],
      type: ["text"],
    },
    {
      id: 2,
      title: "Logical Presents",
      // Original puzzle notes: Alice = Mrs. Claus, Caroline = Rudolph, Susan = Frosty
      content: [
        "Mrs. Claus has invited her friends Rudolph and Frosty to her home, and she has placed several boxes on the table before them. They are all perfectly logical.",
        "    small red box\n\n    medium red box\n\n    large black box\n\n    small blue box\n\n    large blue box",
        "Mrs. Claus tells her friends that she has placed a gift into one of the boxes, and she has privately told Rudolph the color of the box and Frosty the size of the box, and they both know this. The following conversation ensues.",
        "Rudolph: I don’t know which box contains the gift, and I also know that Frosty doesn’t know.",
        "Frosty: I already knew before you spoke that you didn’t know which box contains the gift.",
        "Rudolph: Ah, now that you say that, it suddenly occurs to me which box must contain the gift.",
        "Question. Which box contains the gift?",
        "Follow up: After the conversation, does Frosty also know which box contains the gift? If so, who came to the knowledge first, Rudolph or Frosty?",
        "Answer is here"
      ],
      type: ["text", "text", "text", "text", "text", "text", "text", "text", "hidden"],
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
      submitter: "Sarah Carroll",
    },
    { id: 7,
      title: "Christmas Crossword",
      content: [crossword],
      type: ["image"]
    },
    { id: 8 },
    { id: 9 },
    { id: 10,
      title: "Now you get the other music",
      cssClasses: [],
      content: ["Here are our slightly stranger music recommendations for the holiday season"],
      type: ["text"],
    },
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
    { 
      id: 13,
      title: "Happy Birthday to Matthew Plummer!",
      submitter: "Matthew Plummer (Photo)",
      content: [plum, "https://www.youtube.com/embed/pexTMbwkxM4"],
      type: ["image", "video"]
    },
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
      title: "Elves Who Code",
      submitter: "Jim Calabro",
      content: [elves],
      type: ["image"],
    },
    { 
      id: 16,
      title: "Roll Initiative!",
      submitter: "Zack Plummer",
      content: [grinch],
      type: ["image"]
    },
    { 
      id: 17,
      title: "Christmas Tree Sudoku",
      content: [
        sudoku,
        "Click the link below to play the puzzle", 
        "https://cracking-the-cryptic.web.app/sudoku/nB8n6qjRfQ",
        "If you get stumped, want help, or want to watch a goofy guy solve it, watch the video",
        "https://www.youtube.com/embed/U7eIBuo8v3M"
      ],
      type: [
        "image",
        "text", 
        "link",
        "text",
        "video"
      ]
    },
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
