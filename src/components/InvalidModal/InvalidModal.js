import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import "./InvalidModal.css";
import Wrapper from "../Helpers/Wrapper";

const InvalidModal = (props) => {
  let errMsg = props.error;

  return (
    <Wrapper>
      <div className="backdrop" onClick={props.onConfirm} />
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
    </Wrapper>
  );
};

export default InvalidModal;
