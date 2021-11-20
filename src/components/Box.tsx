import React from "react";
import Day from "../schema/day";
import "./Box.scss";

type BoxProps = {
  day: Day;
  openDayModal: React.MouseEventHandler<HTMLElement>;
};

export function Box(props: BoxProps) {
  const cssClasses = props.day.cssClasses?.join(" ");
  return (
    <div className={"box border " + cssClasses} onClick={props.openDayModal}>
      <h3>Day: {props.day.id}</h3>
    </div>
  );
}
