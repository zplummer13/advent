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
  let contents: any[] = [];

  if (!props.day.type) {
    props.day.type = ["text"];
  }

  if (props.day.content) {
    for (let i = 0; i < props.day.content?.length; i++) {
      if (props.day.type[i] === "image") {
        contents.push(
          <img
            alt={props.day.type[i]}
            src={props.day.content[i]}
            className="modalImage"
          />
        );
      } else if (props.day.type[i] === "video") {
        contents.push(
          <iframe
            title={props.day.type[i]}
            className="video"
            src={props.day.content[i]}
          />
        );
      } else {
        contents.push(<p>{props.day.content[i]}</p>);
      }
    }
  }

  return (
    <div className="modalWrapper">
      <div className="modal">
        <div className="row">
          <div className="header">
            <h1>
              {props.day.title && props.day.title !== ""
                ? props.day.title
                : "Day: " + props.day.id}{" "}
            </h1>
          </div>

          <img
            className="exitIcon rotate"
            onClick={props.onModalClose}
            alt="buttonForClosingModal"
            src={xIcon}
          />
        </div>
        {contents.map((content) => (
          <div className="row">{content}</div>
        ))}
      </div>
    </div>
  );
}
