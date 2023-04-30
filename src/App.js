import React, { useState } from "react";

import "./sass/main.scss";

import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Profile from "./components/Profile/Profile";
import SignupConfirm from "./components/SignupConfirm/SignupConfirm";

const App = () => {
  const [currentComponent, setCurrentComponent] = useState("Signup");
  const [loggedInAccount, setLoggedInAccount] = useState({});

  const handleAccountLogin = (obj) => {
    setLoggedInAccount(obj);
  };

  const changeComponent = (component) => {
    setCurrentComponent(component);
  };

  const components = {
    Signup: (
      <Signup
        onLoginClick={() => changeComponent("Login")}
        onSignupSubmit={() => changeComponent("SignupConfirm")}
        onAccountLogin={handleAccountLogin}
      />
    ),
    Login: (
      <Login
        onSignupClick={() => changeComponent("Signup")}
        onLoginSubmit={() => changeComponent("Profile")}
        onAccountLogin={handleAccountLogin}
      />
    ),
    SignupConfirm: (
      <SignupConfirm onProfileClick={() => changeComponent("Profile")} />
    ),
    Profile: (
      <Profile
        onLogoutClick={() => changeComponent("Login")}
        profileInfo={loggedInAccount}
      />
    ),
  };

  return <div className="app">{components[currentComponent]}</div>;
};

export default App;
