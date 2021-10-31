import React from "react";
import "./Modal.scss";
type ModalProps = {
  contentType: String;
};

export function Modal(props: ModalProps) {
  return (
    <div className="modalWrapper">
      <div className="modal">
        <h3>{props.contentType}</h3>
      </div>
    </div>
  );
}
