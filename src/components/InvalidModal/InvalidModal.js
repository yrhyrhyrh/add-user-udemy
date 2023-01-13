import React, { useState } from "react";
import ReactDOM from "react-dom";

import Card from "../UI/Card";
import Button from "../UI/Button";
import "./InvalidModal.css";
import Wrapper from "../Helpers/Wrapper";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  let errMsg = props.error;

  return (
    <Card className="invalid-modal">
      <h2 className="invalid-input">Invalid Input</h2>
      {errMsg === "empty" && (
        <span className="error-message">
          Please enter a valid name and age (non-empty values).
        </span>
      )}
      {errMsg === "age err" && (
        <p className="error-message">Please enter a valid age ({">"}0).</p>
      )}
      <Button className="okay" onClick={props.onConfirm}>
        Okay
      </Button>
    </Card>
  );
};

const InvalidModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay error={props.error} onConfirm={props.onConfirm} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default InvalidModal;
