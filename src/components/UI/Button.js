import "./Button.css";

const Button = (props) => {
  const classes = "button " + props.className;
  return (
    <button type={props.type} className={classes} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
