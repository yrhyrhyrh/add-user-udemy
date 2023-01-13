import React, { useState } from "react";
import Card from "../UI/Card";
import UserForm from "./UserForm";
import InvalidModal from "../InvalidModal/InvalidModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  //   const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const submitHandler = (userDetails) => {
    props.onAddUser(userDetails);
  };

  const errorHandler = (error) => {
    setError(error);
  };

  const confirmHandler = () => {
    console.log("confirm");
    setError(null);
  };

  return (
    <Wrapper>
      {error && <InvalidModal error={error} onConfirm={confirmHandler} />}
      <Card>
        <UserForm onSubmit={submitHandler} onError={errorHandler} />
      </Card>
    </Wrapper>
  );
};

export default AddUser;
