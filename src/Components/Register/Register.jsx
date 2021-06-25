import React, { useState } from "react";
import { Form, Label, H1, Input, Button } from "./Style";

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
    <Form onSubmit={handleOnSubmit}>
      <Label>
        <H1>Rejestracja</H1>
        <div>
          <h2>Login</h2>
          <Input
            type="text"
            name="login"
            onChange={handleOnChange}
            value={Login}
          />
        </div>
        <div>
          <h2>Hasło</h2>
          <Input
            type="text"
            name="password"
            onChange={handleOnChange}
            value={Password}
          />
        </div>
        <Button>Wyślij</Button>
      </Label>
    </Form>
  );
};

export default Register;
