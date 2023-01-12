import React, { useState } from "react";

import "./App.css";
import AddUser from "./components/AddUser/AddUser";
import Users from "./components/Users/Users";

function App() {
  const [users, setUsers] = useState([{ id: "0", username: "Jim", age: "8" }]);
  const addUserHandler = (newUser) => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift(newUser);
      return updatedUsers;
    });
  };
  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <Users userArray={users} />
    </div>
  );
}

export default App;
