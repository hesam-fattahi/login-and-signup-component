import "./Checkbox.scss";

const Checkbox = (props) => {
  return (
    <label htmlFor={`checkbox--${props.name}`} className="checkbox__wrapper">
      <input
        type="checkbox"
        name={props.name}
        id={`checkbox--${props.name}`}
        className="checkbox__input"
        checked={props.checked}
        onChange={props.onChange}
      />
      <div className="checkbox__checkmark"></div>
      <p className="checkbox__title">{props.title}</p>
    </label>
  );
};

export default Checkbox;
