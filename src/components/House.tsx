import React, { useState } from "react";
import { Box } from "./Box";
import { Modal } from "./Modal";
import { rows } from "../data/Days";
import "./House.scss";
import Day from "../schema/day";
import { DateTime } from "luxon";

// Manual date override
const currentDate = DateTime.local(2021, 12, 25);
// const currentDate = DateTime.now();

type HouseProps = {};

export function House(props: HouseProps) {
  const [modalState, setModalState] = useState<Day>();

  return (
    <aside className="houseContainer">
      {modalState !== undefined && (
        <Modal
          title={modalState.title ? modalState.title : "Day " + modalState.id}
          content={modalState.content ? modalState.content : []}
          type={modalState.type ? modalState.type : []}
          submitter={modalState.submitter ? modalState.submitter : ""}
          onModalClose={() => setModalState(undefined)}
        />
      )}
      {rows.map((row) => (
        <div className="dayContainer">
          {row.map((day) => (
            <Box
              openDayModal={() => setModalState(day)}
              day={day}
              locked={isDayLocked(day)}
            />
          ))}
        </div>
      ))}
    </aside>
  );
}

function isDayLocked(day: Day): boolean {
  let dayDiff = currentDate
    .diff(DateTime.local(2021, 11, 30), "days")
    .toObject().days;
  if (typeof dayDiff == "number") {
    return day.id > dayDiff;
  }
  return true;
}
