import React from "react";
import { AuthProvider } from "../../Contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "../SignUp/SignUp";
import DashBoard from "../DashBoard/DashBoard";
import Login from "../Login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ForgotPassword from "../ForgotPassword/ForgotPassword";

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
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
