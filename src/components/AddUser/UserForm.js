import React, { useState } from "react";

import Button from "../UI/Button";
import "./UserForm.css";

const UserForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const ageHandler = (e) => {
    setAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const userDetails = {
      username: username,
      age: age,
      id: Math.random().toString,
    };
    props.onSubmit(userDetails);
  };

  return (
    <form className="user-form">
      <h2 className="title">Username</h2>
      <input
        className="userform-input"
        name="username"
        onChange={usernameHandler}
      ></input>
      <h2 className="title">Age (Years)</h2>
      <input
        className="userform-input"
        name="age"
        onChange={ageHandler}
      ></input>
      <Button type="submit" onClick={submitHandler}>
        Add User
      </Button>
    </form>
  );
};

export default UserForm;
