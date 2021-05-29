import React from "react";
import { getCurrentUser } from "../services/LoginService";

const Home = () => {
  const state = {
    currentUser: getCurrentUser(),
  };

  const { currentUser } = state;

  return (
    <div>
      <h1>Bienvenido Sr@.</h1>
      <p>{currentUser.username}</p>
      <p>{currentUser.accessToken.substring(0, 36)}</p>
    </div>
  );
};
export default Home;
