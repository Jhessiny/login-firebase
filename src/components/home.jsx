import { useEffect } from "react";
import { Redirect } from "react-router";

const Home = ({ logoutHandler, user }) => {
  return (
    <div>
      {!user ? <Redirect to="/login" /> : null}
      <h2>Welcome, Name! your are logged in!</h2>
      <p>Your data: </p>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default Home;
