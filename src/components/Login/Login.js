import "./Login.scss";

import { useState } from "react";

import Card from "../UI/Card/Card";
import Form from "../UI/Form/Form";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    let newErrors = {};
    let allAccounts = JSON.parse(localStorage.getItem("accounts")) || [];
    let account = allAccounts.find((acc) => acc.email === email);

    if (!account) {
      newErrors["email"] = "Email not found.";
      setErrors(newErrors);
      return;
    } else if (account.password !== password) {
      newErrors["password"] = "Invalid password.";
      setErrors(newErrors);
      return;
    }
    return account;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!handleLogin()) return;

    props.onAccountLogin(handleLogin());
    props.onLoginSubmit();

    setEmail("");
    setPassword("");
  };

  const handleSignupClick = () => {
    props.onSignupClick();
  };

  return (
    <Card className="login" title="Log in">
      <Form onSubmit={handleSubmit}>
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
          Log In
        </Button>
      </Form>
      <p className="login__text">
        Don't have an account?
        <Button className="btn--inline" onClick={handleSignupClick}>
          Sign up
        </Button>
      </p>
    </Card>
  );
};

export default Login;
