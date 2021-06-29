import React, { useState } from "react";
import { useAuth } from "../../Contexts/AuthContext";
import { useHistory } from "react-router-dom";

const DashBoard = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.pushState("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <h1>Welcome</h1>
      {error && "problem"}
      <h2>{currentUser.email}</h2>
      <button onClick={handleLogout}>Log Out</button>
    </>
  );
};

export default DashBoard;
