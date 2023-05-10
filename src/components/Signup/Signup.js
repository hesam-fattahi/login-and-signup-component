import "./Signup.scss";
import Card from "../UI/Card/Card";
import Form from "../UI/Form/Form";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import { useState } from "react";

const saveAccount = (obj) => {
  let allAccounts = JSON.parse(localStorage.getItem("accounts")) || [];
  allAccounts.push(obj);
  localStorage.setItem("accounts", JSON.stringify(allAccounts));
};

const initialState = { value: "", isValid: false, error: "" };

const Signup = (props) => {
  const [fullName, setFullName] = useState(initialState);
  const [email, setEmail] = useState(initialState);
  const [password, setPassword] = useState(initialState);

  const handleFullNameChange = (event) => {
    const value = event.target.value;
    const isValid = value.trim().length > 1;
    setFullName((prevState) => ({
      value: value,
      isValid: isValid,
      error: isValid ? "" : prevState.error,
    }));
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    const isValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value);
    setEmail((prevState) => ({
      value: value,
      isValid: isValid,
      error: isValid ? "" : prevState.error,
    }));
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    const isValid = value.trim().length >= 8;
    setPassword((prevState) => ({
      value: value,
      isValid: isValid,
      error: isValid ? "" : prevState.error,
    }));
  };

  const handleFullNameBlur = () => {
    if (fullName.error.length > 0) {
      setFullName((state) => ({
        ...state,
        error: state.isValid ? "" : state.error,
      }));
    }
  };

  const handleEmailBlur = () => {
    if (email.error.length > 0) {
      setEmail((state) => ({
        ...state,
        error: state.isValid ? "" : state.error,
      }));
    }
  };

  const handlePasswordBlur = () => {
    if (password.error.length > 0) {
      setPassword((state) => ({
        ...state,
        error: state.isValid ? "" : state.error,
      }));
    }
  };

  const isAccountRegistered = (obj) => {
    let allAccounts = JSON.parse(localStorage.getItem("accounts")) || [];
    const registeredAccount = allAccounts.find(
      (acc) => acc.email === obj.email
    );

    if (registeredAccount) {
      setEmail((state) => ({
        ...state,
        error:
          "This email address is already registered. Please try logging in or use a different email address to sign up.",
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let isFormValid = true;

    const newAccount = {
      fullName: fullName.value,
      email: email.value,
      password: password.value,
    };

    isAccountRegistered(newAccount);

    if (!fullName.isValid) {
      setFullName((state) => ({
        ...state,
        error: "Please enter your full name.",
      }));
      isFormValid = false;
    }
    if (!email.isValid) {
      setEmail((state) => ({
        ...state,
        error: "Invalid email address.",
      }));
      isFormValid = false;
    }
    if (!password.isValid) {
      setPassword((state) => ({
        ...state,
        error: "Password must be at least 8 characters long.",
      }));
      isFormValid = false;
    }

    if (!isFormValid) return;

    saveAccount(newAccount);

    props.onAccountLogin(newAccount);
    props.onSignupSubmit();

    setFullName(initialState);
    setEmail(initialState);
    setPassword(initialState);
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
          value={fullName.value}
          onChange={handleFullNameChange}
          onBlur={handleFullNameBlur}
          error={fullName.error}
        />
        <Input
          type="email"
          label="Email"
          placeholder="Enter your email"
          icon="mail"
          value={email.value}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          error={email.error}
        />
        <Input
          type="password"
          label="Password"
          placeholder="Enter your password"
          icon="lock-closed"
          value={password.value}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          error={password.error}
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
