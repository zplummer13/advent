import React from "react";
import xIcon from "../icons/times-circle-solid.svg";
import "./Modal.scss";

type ModalProps = {
  title: string;
  content: string[];
  type: string[];
  submitter?: string;
  onModalClose: React.MouseEventHandler<HTMLElement>;
};
export function Modal(props: ModalProps) {
  let contents: any[] = [];

  if (!props.type) {
    props.type = ["text"];
  }

  if (props.content) {
    for (let i = 0; i < props.content.length; i++) {
      if (props.type[i] === "image") {
        contents.push(
          <img
            alt={props.type[i]}
            src={props.content[i]}
            className="modalImage"
          />
        );
      } else if (props.type[i] === "video") {
        contents.push(
          <iframe
            title={props.type[i]}
            className="video"
            src={props.content[i]}
          />
        );
      } else {
        contents.push(
          <div className="modalText" style={{ whiteSpace: "pre-line" }}>
            {props.content[i]}
          </div>
        );
      }
    }
  }

  return (
    <div className="modalWrapper">
      <div className="modal">
        <div className="header">
          <div className="row">
            <span>
              <h1 className="title">{props.title}</h1>
              {props.submitter &&
                <h2 className="submitter">Submitted by: {props.submitter}</h2>
              } 
            </span>
            <img
              className="exitIcon rotate"
              onClick={props.onModalClose}
              alt="buttonForClosingModal"
              src={xIcon}
            />
          </div>
        </div>
        <div className="body">
          {contents.map((content) => (
            <div className="row">{content}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
