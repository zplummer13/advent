import React from "react";
import "./Box.scss";

type BoxProps = {
  id: number;
  openDayModal: React.MouseEventHandler<HTMLElement>;
};

export function Box(props: BoxProps) {
  return (
    <aside className="boxContainer" onClick={props.openDayModal}>
      <h3>Box: {props.id}</h3>
    </aside>
  );
}
