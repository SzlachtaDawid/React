import React from "react";
import { AuthProvider } from "../../Contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "../SignUp/SignUp";
import DashBoard from "../DashBoard/DashBoard";
import Login from "../Login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import WeatherApp from "../WeatherComponents/WeatherApp";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={DashBoard} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/weather" component={WeatherApp} />
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
