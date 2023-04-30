import "./Input.scss";

const Input = ({ type, label, icon, placeholder, value, onChange, error }) => {
  return (
    <div className={`input ${error && "error"}`}>
      <label className="input__label">{label}</label>
      <div className="input__field-wrapper">
        <ion-icon
          name={`${error ? "alert-circle" : icon}-outline`}
          class="input__icon"
        ></ion-icon>
        <input
          type={type}
          className="input__field"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </div>

      {error && <p className="input__error">{error}</p>}
    </div>
  );
};

export default Input;
