import React, { useState } from "react";
import { Form, Label, H1, Input, Button } from "./Style";
import { useAuth } from "../../Contexts/AuthContext";

const Register = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const { signup } = useAuth();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === "login") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    signup(Email, Password);
    setEmail("");
    setPassword("");
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <Label>
        <H1>Rejestracja</H1>
        <div>
          <h2>Login</h2>
          <Input
            type="email"
            required
            onChange={handleOnChange}
            value={Email}
          />
        </div>
        <div>
          <h2>Hasło</h2>
          <Input
            type="password"
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
