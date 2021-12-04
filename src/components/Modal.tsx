import React, { useState } from "react";
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
  const [reveal, setReveal] = useState<boolean>();

  let contents: any[] = [];

  if (!props.type) {
    props.type = ["text"];
  }

  if (props.content) {
    let hasHidden = false;
    for (let i = 0; i < props.content.length; i++) {
      if (props.type[i] === "image") {
        contents.push(
          <img
            alt={props.type[i]}
            src={props.content[i]}
            className="modalImage"
          />
        );
      } else if (props.type[i] === "smallImage") {
        contents.push(
          <img
            alt={props.type[i]}
            src={props.content[i]}
            className="modalSmallImage"
          />
        );
      } else if (props.type[i] === "largeImage") {
        contents.push(
          <img
            alt={props.type[i]}
            src={props.content[i]}
            className="modalLargeImage"
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
      } else if (props.type[i] === "spotify") {
        contents.push(
          <iframe 
            src={props.content[i]}
            width="100%" height="380" frameBorder="0" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
          </iframe>
        );
      } else if (props.type[i] === "link") {
        contents.push(<a href={props.content[i]}>{props.content[i]}</a>);
      } else if (props.type[i] === "hidden") {
        hasHidden = true;

        contents.push(
          reveal && (
            <div
              className="modalText answer"
              style={{ whiteSpace: "pre-wrap" }}
            >
              {props.content[i]}
            </div>
          )
        );
      } else {
        contents.push(
          <div className="modalText" style={{ whiteSpace: "pre-wrap" }}>
            {props.content[i]}
          </div>
        );
      }
    }
    if (hasHidden) {
      contents.push(
        !reveal && (
          <a href="javascript:void(0)" onClick={() => setReveal(true)}>
            Click to reveal answers
          </a>
        )
      );
    }
  }

  return (
    <div className="modalWrapper">
      <div className="modal">
        <div className="header">
          <div className="row">
            <span>
              <h1 className="title">{props.title}</h1>
              {props.submitter && (
                <h2 className="submitter">Submitted by: {props.submitter}</h2>
              )}
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
