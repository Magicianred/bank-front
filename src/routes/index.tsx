import React from "react";
import { useTypedSelector } from "../store";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { BrowserRouter as Router, Switch } from "react-router-dom";

// import { Container } from './styles';

const Routes: React.FC = () => {
  const auth = useTypedSelector(({ authReducer }) => authReducer.auth);

  return (
    <>
      <Router>
        <Switch>{auth ? <ProtectedRoutes /> : <PublicRoutes />}</Switch>
      </Router>
    </>
  );
};

export { Routes };
