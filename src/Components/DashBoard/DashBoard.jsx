import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import { useSpring } from "react-spring";
import { useHistory } from "react-router-dom";
import {
  Button,
  DashboardContainer,
  Section,
  Moon,
  Mountains,
  Stars,
  H2,
  ContainerText,
  ContainerApp,
  Img,
  Sun,
  P,
} from "./Style";
import stars from "../../zdj/stars.png";
import moon from "../../zdj/moon.png";
import mountains from "../../zdj/mountains_front.png";
import cloudy from "../../zdj/cloudy.png";
import checklist from "../../zdj/checklist.png";
import chat from "../../zdj/chat.png";
import sun from "../../zdj/sunn.png";
import mountainsDay from "../../zdj/mountains_front_day.png";

const DashBoard = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const [theme, setTheme] = useState(true);
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

  function handleTheme() {
    setTheme(!theme);
  }

  const starsAnimation = useSpring({
    to: { opacity: 1, marginTop: "0px" },
    from: { opacity: 0, marginTop: "-200px" },
    config: { duration: 300 },
    delay: 200,
  });
  const moonAnimation = useSpring({
    to: { opacity: 1, marginTop: "0px" },
    from: { opacity: 0, marginTop: "-200px" },
    config: { duration: 300 },
    delay: 400,
  });
  const mountainsAnimation = useSpring({
    to: { opacity: 1, marginBottom: "0px" },
    from: { opacity: 0, marginBottom: "-400px" },
    config: { duration: 400 },
    delay: 600,
  });
  const textAnimation = useSpring({
    to: { opacity: 1, marginBottom: "0px" },
    from: { opacity: 0, marginBottom: "-400px" },
    config: { duration: 400 },
    delay: 1000,
  });

  const iconAnimation = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 600 },
    delay: 1000,
  });

  return (
    <DashboardContainer>
      <Section>
        {theme && <Stars src={stars} alt="stars" style={starsAnimation} />}
        {theme ? (
          <Moon
            src={moon}
            alt="moon"
            style={moonAnimation}
            onClick={handleTheme}
          />
        ) : (
          <Sun src={sun} alt="sun" onClick={handleTheme} />
        )}
        <ContainerApp>
          <Link style={iconAnimation} to="/todo">
            <Img src={checklist} alt="checklist" style={iconAnimation} />
          </Link>
          <Link style={iconAnimation} to="/weather">
            <Img src={cloudy} alt="cloudy" style={iconAnimation} />
          </Link>
          <Link style={iconAnimation} to="/chat">
            <Img src={chat} alt="chat" style={iconAnimation} />
          </Link>
        </ContainerApp>
        <ContainerText>
          {error && "error"}
          <Button onClick={handleLogout} style={textAnimation}>
            Log Out
          </Button>
          <H2 style={textAnimation}>{currentUser.email}</H2>
        </ContainerText>
        {theme ? (
          <Mountains
            src={mountains}
            alt="mountains"
            style={mountainsAnimation}
          />
        ) : (
          <Mountains
            src={mountainsDay}
            alt="mountains"
            style={mountainsAnimation}
          />
        )}
        <P>click on the sun/moon to change the time of day</P>
      </Section>
    </DashboardContainer>
  );
};

export default DashBoard;
