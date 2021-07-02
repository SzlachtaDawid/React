import React, { useState } from "react";
import { useAuth } from "../../Contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  Label,
  H1,
  Input,
  Button,
  Option,
  H2,
  Container,
  Background,
} from "../GlobalStyle/LogAndSignStyle";
import ParticlesComp from "../GlobalStyle/ParticlesComp";

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
    <Background>
      <Container>
        <ParticlesComp />
        <Form onSubmit={handleOnSubmit}>
          <Label>
            <H1>Log In</H1>
            {error && <p>The email or password you entered was invalid.</p>}
            <div>
              <H2>Email</H2>
              <Input
                type="email"
                name="email"
                onChange={handleOnChange}
                value={Email}
              />
            </div>
            <div>
              <H2>Password</H2>
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
              <Option>
                <Link to="/forgot-password">Forgot Password ?</Link>
              </Option>
              <Option>
                Need an account ? <Link to="/signup">Sign Up</Link>
              </Option>
            </div>
          </Label>
        </Form>
      </Container>
    </Background>
  );
};

export default Login;
