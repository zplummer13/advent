import React from "react";
import xIcon from "../icons/times-circle-solid.svg";
import Day from "../schema/day";
import "./Modal.scss";
type ModalProps = {
  contentType: string;
  day: Day;
  onModalClose: React.MouseEventHandler<HTMLElement>;
};
export function Modal(props: ModalProps) {
  return (
    <div className="modalWrapper">
      <div className="modal">
        <div className="row">
          <div>
            {props.day.title && props.day.title !== ""
              ? props.day.title
              : "Day: " + props.day.id}
          </div>

          <img
            className="exitIcon rotate"
            onClick={props.onModalClose}
            alt="buttonForClosingModal"
            src={xIcon}
          />
        </div>
      </div>
    </div>
  );
}
