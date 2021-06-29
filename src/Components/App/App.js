import React from "react";
import { Container, ParticlesGround, SignUpComp } from "./Style";
import { AuthProvider } from "../../Contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashBoard from "../DashBoard/DashBoard";
import Login from "../Login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ForgotPassword from "../ForgotPassword/ForgotPassword";

function App() {
  return (
    <Container>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={DashBoard} />
            <Route path="/signup" component={SignUpComp} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>
      <ParticlesGround
        params={{
          particles: {
            number: {
              value: 150,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            line_linked: {
              enable: true,
              opacity: 0.2,
            },
            move: {
              speed: 1,
            },
            size: {
              value: 0,
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.05,
              },
            },
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              repulse: {
                distance: 200,
                duration: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </Container>
  );
}

export default App;
