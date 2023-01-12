import React, { useState } from "react";
import Card from "../UI/Card";
import UserForm from "./UserForm";

const AddUser = (props) => {
  //   const [user, setUser] = useState(null);
  const submitHandler = (userDetails) => {
    props.onAddUser(userDetails);
  };

  const errorHandler = (error) => {
    props.onError(error);
  };

  return (
    <Card>
      <UserForm onSubmit={submitHandler} onError={errorHandler} />
    </Card>
  );
};

export default AddUser;
