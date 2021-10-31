import React from "react";
import xIco from "../icons/times-circle-solid.svg";
import "./Modal.scss";
type ModalProps = {
  contentType: string;
  state: number;
};

export function Modal(props: ModalProps) {
  return (
    <div className="modalWrapper">
      <div className="modal">
        <div className="row">
          <div>Day: {props.state}</div>
          <img
            className="exitIcon rotate"
            alt="buttonForClosingModal"
            src={xIco}
          />
        </div>
      </div>
    </div>
  );
}
