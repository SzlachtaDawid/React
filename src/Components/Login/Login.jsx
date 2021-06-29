import React, { useState } from "react";
import { Form, Label, H1, Input, Button } from "./Style";
import { useAuth } from "../../Contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  async function handleOnSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(Email, Password);
      history.push("/");
    } catch {
      setError("Failed to Login");
    }
    setLoading(false);

    setEmail("");
    setPassword("");
  }

  return (
    <Form onSubmit={handleOnSubmit}>
      <Label>
        <H1>Log In</H1>
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
        <Button disabled={loading} type="submit">
          Log In
        </Button>
        <div>
          <Link to="/forgot-password">Forgot Password ?</Link>
        </div>
        <div>
          Need an account ? <Link to="/signup">Sign Up</Link>
        </div>
      </Label>
    </Form>
  );
};

export default Login;
