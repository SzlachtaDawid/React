import React, { useState } from "react";

const Register = () => {
  const [Login, setLogin] = useState("");
  const [Password, setPassword] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === "login") {
      setLogin(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setLogin("");
    setPassword("");
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <label>
        <h1>Rejestracja</h1>
        <p>Login</p>
        <input
          type="text"
          name="login"
          onChange={handleOnChange}
          value={Login}
        />
        <p>Hasło</p>
        <input
          type="text"
          name="password"
          onChange={handleOnChange}
          value={Password}
        />
        <button>Wyślij</button>
      </label>
    </form>
  );
};

export default Register;
