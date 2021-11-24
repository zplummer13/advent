import "./Tracker.scss";
export function Tracker() {
  let santadata = require("../data/santadata.json");

  function shuffleArray(arrayToShuffle: Array<string>) {
    for (let i = arrayToShuffle.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arrayToShuffle[i], arrayToShuffle[j]] = [
        arrayToShuffle[j],
        arrayToShuffle[i],
      ];
    }
    return arrayToShuffle;
  }
  const sentenceConstructor = () => {
    let locations: string[] = shuffleArray(santadata.location);
    let activities: string[] = shuffleArray(santadata.activity);
    let ticker: string = "";
    let actIt = 0;
    locations.forEach((element) => {
      ticker += `        ❄ ALERT! Santa found ${
        activities[actIt % activities.length]
      } ${element} ❄`;
      actIt++;
    });
    return ticker;
  };
  return (
    <p className="trackerWrapper marquee">
      <span>
        <pre>{sentenceConstructor()}</pre>
      </span>
    </p>
  );
}
