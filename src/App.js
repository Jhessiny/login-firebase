import { useState, useEffect } from "react";
import { Redirect } from "react-router";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import fire from "./firebase";

import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup";

const App = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(true);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const loginHandler = (e) => {
    e.preventDefault();
    console.log("login");
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const signupHandler = (e) => {
    e.preventDefault();
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const logoutHandler = () => {
    console.log(user);
    fire.auth().signOut();
    console.log(user);
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  console.log(user, "oi");

  useEffect(() => {
    authListener();
    setUser(user);
    console.log(user);
  }, [user]);

  return (
    <BrowserRouter>
      <div>Hello</div>
      {user ? <Redirect to="/" /> : null}
      <Switch>
        <Route
          exact
          path="/login"
          render={() => (
            <Login
              email={email}
              password={password}
              setEmail={setEmail}
              setPassword={setPassword}
              loginHandler={loginHandler}
              signupHandler={signupHandler}
              setHasAccount={setHasAccount}
              hasAccount={hasAccount}
              emailError={emailError}
              passwordError={passwordError}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={() => <Home logoutHandler={logoutHandler} user={user} />}
        />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
