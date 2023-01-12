import React, { useState } from "react";
import Card from "../UI/Card";
import UserForm from "./UserForm";

const AddUser = (props) => {
  //   const [user, setUser] = useState(null);
  const submitHandler = (userDetails) => {
    props.onAddUser(userDetails);
  };
  return (
    <Card>
      <UserForm onSubmit={submitHandler} />
    </Card>
  );
};

export default AddUser;
