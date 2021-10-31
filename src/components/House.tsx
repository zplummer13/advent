import React from "react";
import { Box } from "./Box";
import { Modal } from "./Modal";

import "./House.scss";

const boxes = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
  { id: 11 },
  { id: 12 },
  { id: 13 },
  { id: 14 },
  { id: 15 },
  { id: 16 },
  { id: 17 },
  { id: 18 },
  { id: 19 },
  { id: 20 },
  { id: 21 },
  { id: 22 },
  { id: 23 },
  { id: 24 },
  { id: 25 },
];

type HouseProps = {};

const openModal = (id: number) => {
  console.log(`Box ${id} has been clicked`);
  return <Modal contentType="day" />;
};

export function House(props: HouseProps) {
  const days = boxes.map((box) => (
    <Box openDayModal={() => openModal(box.id)} id={box.id} />
  ));

  return (
    <aside className="houseContainer">
      <h1>House</h1>
      <div className="dayContainer">{days}</div>
    </aside>
  );
}
