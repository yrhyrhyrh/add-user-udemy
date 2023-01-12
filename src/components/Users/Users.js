import Card from "../UI/Card";
import User from "./User";
import "./Users.css";

const Users = (props) => {
  return (
    <Card>
      <ul className="user-list">
        {props.userArray.map((user) => (
          <User
            key={user.id}
            id={user.id}
            username={user.username}
            age={user.age}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Users;
