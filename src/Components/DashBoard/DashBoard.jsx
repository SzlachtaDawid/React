import React, { useState } from "react";
import { useAuth } from "../../Contexts/AuthContext";
import { useHistory } from "react-router-dom";
import {
  Button,
  DashboardContainer,
  Section,
  Moon,
  Mountains,
  Stars,
  H1,
  H2,
  ContainerText,
} from "./Style";
import stars from "../../zdj/stars.png";
import moon from "../../zdj/moon.png";
import mountains from "../../zdj/mountains_front.png";

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
    <DashboardContainer>
      <Section>
        <Stars src={stars} alt="stars" id="stars" />
        <Moon src={moon} alt="moon" id="moon" />
        <ContainerText>
          <H1>Welcome</H1>
          {error && "error"}
          <H2>{currentUser.email}</H2>
          <Button onClick={handleLogout}>Log Out</Button>
        </ContainerText>
        <Mountains src={mountains} alt="mountains" id="mountains" />
      </Section>
    </DashboardContainer>
  );
};

export default DashBoard;
