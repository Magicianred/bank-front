import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Login } from "../pages";

// import { Container } from './styles';

const PublicRoutes: React.FC = () => {
  return (
    <>
      <Route exact path="/login" component={Login} />
      <Redirect to="/login" />
    </>
  );
};

export { PublicRoutes };
