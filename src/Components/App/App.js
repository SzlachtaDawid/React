import React from "react";
import { AuthProvider } from "../../Contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatedRoute } from "react-router-transition";
import SignUp from "../SignUp/SignUp";
import DashBoard from "../DashBoard/DashBoard";
import Login from "../Login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import WeatherApp from "../WeatherComponents/WeatherApp";
import ToDoList from "../ToDoList/ToDoList";
import ChatApp from "../ChatApp/Chat";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={DashBoard} />
            <AnimatedRoute path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route
              path="/forgot-password"
              component={ForgotPassword}
              atEnter={{ opacity: 0 }}
              atLeave={{ opacity: 0 }}
              atActive={{ opacity: 1 }}
            />
            <PrivateRoute path="/weather" component={WeatherApp} />
            <PrivateRoute path="/todo" component={ToDoList} />
            <PrivateRoute path="/chat" component={ChatApp} />
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
