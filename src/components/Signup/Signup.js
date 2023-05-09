import "./Signup.scss";
import Card from "../UI/Card/Card";
import Form from "../UI/Form/Form";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import useState from "react";

const Signup = (props) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const validateForm = (account) => {
    let errorMessages = {};

    if (account.fullName.trim().length <= 0)
      errorMessages["fullName"] = "Please enter your full name.";

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(account.email))
      errorMessages["email"] = "Invalid email address.";

    if (account.password.trim().length < 8)
      errorMessages["password"] =
        "Password must be at least 8 characters long.";

    return errorMessages;
  };

  const isAccountRegistered = (obj) => {
    let allAccounts = JSON.parse(localStorage.getItem("accounts")) || [];
    const registeredAccount = allAccounts.find(
      (acc) => acc.email === obj.email
    );
    if (registeredAccount)
      setErrors((prevErr) => ({
        ...prevErr,
        email:
          "This email address is already registered. Please try logging in or use a different email address to sign up.",
      }));

    return registeredAccount;
  };

  const saveAccount = (obj) => {
    let allAccounts = JSON.parse(localStorage.getItem("accounts")) || [];
    allAccounts.push(obj);
    localStorage.setItem("accounts", JSON.stringify(allAccounts));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newAccount = {
      fullName: fullName,
      email: email,
      password: password,
    };

    const err = validateForm(newAccount);
    setErrors(err);

    if (Object.keys(err) > 0) return;
    if (isAccountRegistered(newAccount)) return;

    saveAccount(newAccount);

    props.onAccountLogin(newAccount);
    props.onSignupSubmit();

    setFullName("");
    setEmail("");
    setPassword("");
  };

  const handleLoginClick = () => {
    props.onLoginClick();
  };

  return (
    <Card className="signup" title="Sign up">
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          label="Full name"
          placeholder="Enter your full name"
          icon="person"
          value={fullName}
          onChange={handleFullNameChange}
          error={errors["fullName"]}
        />
        <Input
          type="email"
          label="Email"
          placeholder="Enter your email"
          icon="mail"
          value={email}
          onChange={handleEmailChange}
          error={errors["email"]}
        />
        <Input
          type="password"
          label="Password"
          placeholder="Enter your password"
          icon="lock-closed"
          value={password}
          onChange={handlePasswordChange}
          error={errors["password"]}
        />
        <Button type="submit" className="btn--submit">
          Sign Up
        </Button>
      </Form>
      <p className="login__text">
        Already have an account?
        <Button className="btn--inline" onClick={handleLoginClick}>
          Log in
        </Button>
      </p>
    </Card>
  );
};

export default Signup;
