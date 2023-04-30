import "./Form.scss";

const Form = (props) => {
  return (
    <form className={`form ${props.className}`} onSubmit={props.onSubmit}>
      {props.children}
    </form>
  );
};

export default Form;
