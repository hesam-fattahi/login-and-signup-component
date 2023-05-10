import "./Input.scss";
import { useState } from "react";

const Input = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className={`input ${props.error && "error"}`}>
      <label className="input__label">{props.label}</label>
      <div className="input__field-wrapper">
        <ion-icon
          name={`${props.error ? "alert-circle" : props.icon}-outline`}
          class="input__icon"
        ></ion-icon>
        <input
          type={props.type === "password" && showPassword ? "text" : props.type}
          className="input__field"
          placeholder={props.placeholder}
          onChange={props.onChange}
          onBlur={props.onBlur}
          value={props.value}
        />
        {props.type === "password" && (
          <button
            type="button"
            className="input__toggle"
            onClick={handleTogglePasswordVisibility}
            aria-label={`${showPassword ? "Hide" : "Show"} password`}
          >
            <ion-icon
              name={`${showPassword ? "eye-off" : "eye"}-outline`}
              class="input__icon input__icon--toggle"
            ></ion-icon>
          </button>
        )}
      </div>

      {props.error && <p className="input__error">{props.error}</p>}
    </div>
  );
};

export default Input;
