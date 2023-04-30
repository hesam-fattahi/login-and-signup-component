import "./SignupConfirm.scss";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

const SignupConfirm = (props) => {
  const handleProfileBtnClick = () => {
    props.onProfileClick();
  };

  return (
    <Card className="signup-confirm" title="Done!">
      <h2>Thank you for signing up.</h2>
      <p className="note">
        Please note that this frontend project is only a test for a login and
        sign up form validation and does not have any other functionality.
      </p>
      <Button className="btn--inline" onClick={handleProfileBtnClick}>
        Go to profile
      </Button>
    </Card>
  );
};

export default SignupConfirm;
