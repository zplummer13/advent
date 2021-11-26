import React, { useState } from "react";
import { Box } from "./Box";
import { Modal } from "./Modal";
import { rows } from "../data/Days";
import "./House.scss";
import Day from "../schema/day";
import { DateTime } from "luxon";

// Manual date override
const currentDate = DateTime.local(2021, 12, 10);
// const currentDate = DateTime.now();

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
