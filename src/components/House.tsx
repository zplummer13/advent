import React, { useState } from "react";
import { Box } from "./Box";
import { Modal } from "./Modal";

import "./House.scss";
import Day from "../schema/day";

const rows: Day[][] = [
  [
    { id: 1, title: "One the first day...", cssClasses: ["boxLarge"] },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ],
  [{ id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }],
  [
    { id: 11 },
    { id: 12 },
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

type HouseProps = {};

export function House(props: HouseProps) {
  const [modalState, setModalState] = useState<Day>();

  return (
    <aside className="houseContainer">
      {modalState !== undefined && (
        <Modal
          contentType="days"
          day={modalState}
          onModalClose={() => setModalState(undefined)}
        />
      )}

      {rows.map((row) => (
        <div className="dayContainer">
          {row.map((day) => (
            <Box openDayModal={() => setModalState(day)} day={day} />
          ))}
        </div>
      ))}
    </aside>
  );
}
