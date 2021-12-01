import Day from "../schema/day";
import shrimp from "../icons/shrimp.png";
import deviled from "../icons/deviledhamtree.png";
import cranberrycandles from "../icons/cranberrycandles.png";
import elves from "../icons/elves.jpg";
import grinch from "../icons/grinch.png";
import crossword from "../icons/crossword.png";
import plum from "../icons/plum.jpg";
import sudoku from "../icons/sudoku.png";
import intro from "../icons/front.png";
import michel from "../icons/michel.png";
import monty from "../icons/monty.gif";
import jola from "../icons/jola.png";
import bracket from "../icons/bracket.png";
import milkshake from "../icons/bayeux.jpg";
import forbidden from "../icons/forbidden.jpg";
import whamageddon from "../icons/whamageddon.png";

export const rows: Day[][] = [
  [
    {
      id: 1,
      title: "On the first day, let there be music!",
      cssClasses: [],
      content: [
        "Here are our music recommendations for the holiday season",
        "https://open.spotify.com/embed/playlist/1zKTL2mKASOC2qtFEhZln4?utm_source=generator"
      ],
      type: [
        "text",
        "spotify"
      ],
    },
    {
      id: 2,
      title: "Whamageddon",
      content: [
        whamageddon,
        "https://www.whamageddon.com/",
      ],
      type: ["largeImage", "link"],
    },
    {
      id: 3,
      title: "Logical Presents",
      // Original puzzle notes: Alice = Mrs. Claus, Caroline = Rudolph, Susan = Frosty
      content: [
        "Mrs. Claus has invited her friends Rudolph and Frosty to her home, and she has placed several boxes on the table before them. They are all perfectly logical.",
        "    small red box\n\n    medium red box\n\n    large black box\n\n    small blue box\n\n    large blue box",
        "Mrs. Claus tells her friends that she has placed a gift into one of the boxes, and she has privately told Rudolph the color of the box and Frosty the size of the box, and they both know this. The following conversation ensues.",
        "Rudolph: I don’t know which box contains the gift, and I also know that Frosty doesn’t know.",
        "Frosty: I already knew before you spoke that you didn’t know which box contains the gift.",
        "Rudolph: Ah, now that you say that, it suddenly occurs to me which box must contain the gift.",
        "\nNow a question for you. Which box contains the gift?",
        "The gift is in the small blue box.",
        "Bonus questions: After the conversion, does Frosty also know which box contains the gift? If so, who came to the knowledge first, Rudolph or Frosty?",
      ],
      type: [
        "text",
        "text",
        "text",
        "text",
        "text",
        "text",
        "text",
        "hidden",
        "hidden",
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
      title: "Spread Some Christmas Cheer",
      content: [
        "In the spirit of the holidays, reach out to someone you haven't talked to in awhile but have been meaning to catch up with.",
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
    {
      id: 7,
      title: "Christmas Crossword",
      content: [crossword],
      type: ["image"],
    },
    {
      id: 8,
      title: "Tom's Christmas Challenge",
      submitter: "Thomas Douglas",
      content: [
        intro,
        "Your challenge, if you choose to accept it, is to bring a little artistic christmas cheer to the picture below. Draw over it, photoshop it, print it out and hang it on your tree (then send us a picture)- whatever you want! \nIf you want to draw it digitally and don’t have a paint tool, this is free: https://kleki.com",
        "Any submissions can be sent to zackpdouglas@gmail.com or tjdouglas.che@gmail.com. Best submission will get a prize.",
        "Your muse (aka the picture to art-upon):",
        michel,
      ],
      type: ["image", "text", "text", "text", "largeImage"],
    },
    {
      id: 9,
      title: "Fun fact!",
      content: [
        "“Deck the Halls” was originally a pagan Yuletide drinking song. The melody was taken from a 16th century Welsh song (“Nos Galan”) and the “fa la la” repetition possibly dating back to medieval ballads.",
        "A little like this:",
        milkshake,
      ],
      type: ["text", "text", "image"],
    },
    {
      id: 10,
      title: "Badvent Calendar",
      cssClasses: [],
      content: [
        "Here are 10 slightly stranger song recommendations for the holiday season",
        "https://open.spotify.com/embed/playlist/3UCUAYOvNJLwmKa6ZpMckW?utm_source=generator",
      ],
      type: [
        "text",
        "spotify",
      ],
    },
  ],
  [
    {
      id: 11,
      title: "Elves Who Code",
      submitter: "Jim Calabro",
      content: [elves],
      type: ["largeImage"],
    },
    {
      id: 12,
      title: "On the 12th Day of Xmas...",
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
      type: ["image", "video"],
    },
    {
      id: 14,
      title: "Riddle Day",
      content: [
        "Four elves Gustav, Merry, Wendy and Tinsel are each wearing tunics of a different colour. At least one of these elves is a liar. (A liar is someone who says only statements that are untrue). During a break at elf school, the following conversation is overheard \n \n Gustav: Merry wears green. \n Wendy: The elf in green is a liar. \n Tinsel: I wear blue. \n Gustav: I wear yellow. \n Merry: I’m in pink. \n Wendy: The elf in the red tunic beat Tinsel at the 2020 elf curling championship. I do not play curling. \n Tinsel: One of us is in yellow. \n Merry: Only one liar is among us. \n Wendy: I do not wear green. \n Tinsel: I was beaten by the elf in red at the 2020 elf curling championship. \n \n Who beat the elf in the blue tunic at the 2020 elf curling championship?",
        "Merry beat the elf in the blue tunic at the 2020 elf curling championship",
      ],
      type: ["text", "hidden"],
    },
    {
      id: 15,

      title: "Fun Fact!",
      content: [
        "In the Middle Ages, Christmas celebrations were rowdy and raucous—a lot like today’s Mardi Gras parties.",
        monty,
      ],
      type: ["text", "image"],
    },
    {
      id: 16,
      title: "Roll Initiative!",
      submitter: "Zack Plummer",
      content: [grinch],
      type: ["image"],
    },
    {
      id: 17,
      title: "Christmas Tree Sudoku",
      content: [
        sudoku,
        "Click the link below to play the puzzle",
        "https://cracking-the-cryptic.web.app/sudoku/nB8n6qjRfQ",
        "If you get stumped, want help, or want to watch a goofy guy solve it, watch the video",
        "https://www.youtube.com/embed/U7eIBuo8v3M",
      ],
      type: ["image", "text", "link", "text", "video"],
    },
    {
      id: 18,
      title: "Iceland Here I Come",
      content: [
        "Iceland has got it right. People in Iceland will often exchange books on Christmas Eve, then spend the rest of the night reading them and eating chocolate. The tradition is part of a season called Jolabokaflod, or “The Christmas Book Flood.” Next year anyone?",
        jola,
      ],
      type: ["text", "image"],
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
      title: "You vs Anyone Else in the Room",
      content: [
        "Winner is the person who knows the most lyrics to Auld Lang Syne",
      ],
      type: ["text"],
    },
    {
      id: 21,
      title: "Christmas Cranberry Chutney Recipe",
      submitter: "Zack Douglas (inspired by Edie Douglas's Recipe)",
      content: [
        "Ingredients:",
        "2 Navel Oranges \n2 lbs Fresh Cranberries \n1/2 cup Water \n2 tablespoons balsamic vinegar\n3/4 cup granulated sugar\n3/4 cup light brown sugar\n1/4 cup minced fresh ginger (or more- I like it spicy)\n1/2 yellow onion\nsalt and pepper to taste",
        "Directions: \n1. Using a sharp knife, peel the oranges, removing all of the bitter white pith. Working over a bowl, cut in between the membranes to release the sections. Squeeze the juice from the membranes into the bowl. Cut the orange sections into 1-inch pieces.",
        "2.Finely chop your onion, cook with a little oil over medium heat until the onions begin to turn translucent",
        "3. In a large saucepan, combine the cranberries and water with 1/4 cup of orange juice from the bowl and bring to a simmer over moderate heat. Cover and cook over moderately low heat, stirring occasionally, until the cranberries have popped, about 10 minutes. Add the vinegar, both sugars, onion, the ginger and orange pieces and cook over moderate heat, stirring occasionally, until thick, about 5 minutes. Let cool slightly, then season with salt and pepper. Serve warm or at room temperature. Or eat it cold, right from the container with a spoon, while standing in front of the open fridge.",
      ],
    },
    {
      id: 22,
      title: "Fun Fact!",
      content: [
        "When Christmas was cancelled: From 1659 to 1681, the celebration of Christmas was outlawed in Boston, and law-breakers were fined five shillings.",
        forbidden,
      ],
      type: ["text", "image"],
    },
    {
      id: 23,
      title: "Ultimate Showdown",
      content: [bracket],
      type: ["largeImage"],
    },
    { id: 24 },
    { id: 25 },
  ],
];
