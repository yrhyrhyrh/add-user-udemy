import React, { useState } from "react";

import "./App.css";
import AddUser from "./components/AddUser/AddUser";
import Users from "./components/Users/Users";
import InvalidModal from "./components/InvalidModal/InvalidModal";

function App() {
  const [users, setUsers] = useState([{ id: "0", username: "Jim", age: "8" }]);
  const [error, setError] = useState("");

  const addUserHandler = (newUser) => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift(newUser);
      return updatedUsers;
    });
  };

  const errorHandler = (error) => {
    setError(error);
  };

  return (
    <div className="App">
      {error && <InvalidModal error={error} />}
      <AddUser onAddUser={addUserHandler} onError={errorHandler} />
      <Users userArray={users} />
    </div>
  );
}

export default App;
