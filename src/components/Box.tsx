import React from "react";
import "./Box.scss";

type BoxProps = {
  id: number;
};

export function Box(props: BoxProps) {
  return (
    <aside className="boxContainer">
      <h3>Box: {props.id}</h3>
    </aside>
  );
}
