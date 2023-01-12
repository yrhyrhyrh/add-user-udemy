import Card from "../UI/Card";
import User from "./User";

const Users = (props) => {
  return (
    <Card>
      <ul>
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
