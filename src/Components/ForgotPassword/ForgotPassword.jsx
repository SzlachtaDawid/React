import React, { useState } from "react";
import { Form, Label, H1, Input, Button } from "./Style";
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
      setMessage("Password Reset. Let's try Log In");
    } catch {
      setError("Failed to reset password");
    }
    setLoading(false);

    setEmail("");
  }

  return (
    <Form onSubmit={handleOnSubmit}>
      <Label>
        <H1>Password Reset</H1>
        {error && "problem"}
        {message && <p>{message}</p>}
        <div>
          <h2>Email</h2>
          <Input
            type="email"
            name="email"
            onChange={handleOnChange}
            value={Email}
          />
        </div>
        <Button disabled={loading} type="submit">
          Reset Password
        </Button>
        <div>
          <Link to="/login">Login</Link>
        </div>
        <div>
          Need an account ? <Link to="/signup">Sign Up</Link>
        </div>
      </Label>
    </Form>
  );
};

export default ForgotPassword;
