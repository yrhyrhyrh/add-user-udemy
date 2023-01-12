import "./User.css";

const User = (props) => {
  return (
    <li className="user">{`${props.username} (${props.age} years old)`}</li>
  );
};

export default User;
