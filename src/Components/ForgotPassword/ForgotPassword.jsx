import React, { useState } from "react";
import {
  Form,
  Label,
  H1,
  H2,
  Input,
  Button,
  Option,
  Container,
  Background,
} from "../GlobalStyle/LogAndSignStyle";
import ParticlesComp from "../GlobalStyle/ParticlesComp";
import { useAuth } from "../../Contexts/AuthContext";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [Email, setEmail] = useState("");
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    }
  };

  async function handleOnSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(Email);
      setMessage("Check your inbox email for further instructions");
    } catch {
      setError("Failed to reset password");
    }
    setLoading(false);

    setEmail("");
  }

  return (
    <Background>
      <Container>
        <ParticlesComp />
        <Form onSubmit={handleOnSubmit}>
          <Label>
            <H1>Password Reset</H1>
            {error && "problem"}
            {message && <p>{message}</p>}
            <div>
              <H2>Email</H2>
              <Input
                type="email"
                name="email"
                onChange={handleOnChange}
                value={Email}
              />
            </div>
            <Button disabled={loading} type="submit">
              Send
            </Button>
            <div>
              <Option>
                <Link to="/login">Login</Link>
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

export default ForgotPassword;
