import React, { useState } from "react";
import {
  Form,
  Label,
  H1,
  H2,
  Input,
  Button,
  Container,
  Background,
} from "../GlobalStyle/LogAndSignStyle";
import ParticlesComp from "../GlobalStyle/ParticlesComp";
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
    <Background>
      <Container>
        <ParticlesComp />
        <Form onSubmit={handleOnSubmit}>
          <Label>
            <H1>Sign Up</H1>
            {error &&
              "The email or password/confirm password you entered was invalid."}
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
            <div>
              <H2>Password Confirm</H2>
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
      </Container>
    </Background>
  );
};

export default SignUp;
