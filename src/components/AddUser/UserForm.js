import React, { useState, useRef } from "react";

import Button from "../UI/Button";
import "./UserForm.css";

const UserForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      props.onError("empty");
      return;
    }
    if (Number(enteredAge) <= 0 || !Number(enteredAge)) {
      props.onError("age err");
      return;
    }
    const userDetails = {
      username: enteredName,
      age: enteredAge,
      id: Math.random().toString(),
    };
    props.onSubmit(userDetails);

    props.onError(null);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  return (
    <form className="user-form">
      <label htmlFor="username" className="title">
        Username
      </label>
      {/* input type="number" */}
      <input
        className="userform-input"
        name="username"
        ref={nameInputRef}
      ></input>
      <label htmlFor="username" className="title">
        Age (Years)
      </label>
      <input className="userform-input" name="age" ref={ageInputRef}></input>
      <Button type="submit" onClick={submitHandler}>
        Add User
      </Button>
    </form>
  );
};

export default UserForm;
