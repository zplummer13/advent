import React from "react";
import Day from "../schema/day";
import "./Box.scss";

type BoxProps = {
  day: Day;
  locked: boolean;
  openDayModal: React.MouseEventHandler<HTMLElement>;
};

export function Box(props: BoxProps) {
  const locked = props.locked;

  const cssClasses = props.day.cssClasses?.join(" ");
  return (
    <aside>
      {locked && (
        <div
          className={"box border boxLocked " + cssClasses}
          onClick={props.openDayModal}
        >
          <h2>{props.day.id}</h2>
        </div>
      )}
      {!locked && (
        <div
          className={"box border boxUnlocked " + cssClasses}
          onClick={props.openDayModal}
        >
          <h2>{props.day.id}</h2>
        </div>
      )}
    </aside>
  );
}
