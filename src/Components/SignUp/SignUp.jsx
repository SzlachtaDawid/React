import React, { useState } from "react";
import { Form, Label, H1, Input, Button } from "./Style";
import { useAuth } from "../../Contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

const SignUp = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [PasswordConfirm, setPasswordConfirm] = useState("");
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "passwordConfirm") {
      setPasswordConfirm(value);
    }
  };

  async function handleOnSubmit(e) {
    e.preventDefault();

    if (Password !== PasswordConfirm) {
      console.log(error);
      return setError("Password do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(Email, Password);
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);

    setEmail("");
    setPassword("");
    setPasswordConfirm("");
  }

  return (
    <Form onSubmit={handleOnSubmit}>
      <Label>
        <H1>Sign Up</H1>
        {error && "problem"}
        <div>
          <h2>Email</h2>
          <Input
            type="email"
            name="email"
            onChange={handleOnChange}
            value={Email}
          />
        </div>
        <div>
          <h2>Password</h2>
          <Input
            type="password"
            name="password"
            onChange={handleOnChange}
            value={Password}
          />
        </div>
        <div>
          <h2>Password Confirm</h2>
          <Input
            type="password"
            name="passwordConfirm"
            onChange={handleOnChange}
            value={PasswordConfirm}
          />
        </div>
        <Button disabled={loading} type="submit">
          Sign Up
        </Button>
        <div>
          Already have an accout ? <Link to="/login">Log In</Link>
        </div>
      </Label>
    </Form>
  );
};

export default SignUp;
