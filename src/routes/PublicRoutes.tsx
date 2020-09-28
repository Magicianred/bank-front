import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Login, Register } from "../pages";

// import { Container } from './styles';

const PublicRoutes: React.FC = () => {
  return (
    <>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Redirect to="/login" />
    </>
  );
};

export { PublicRoutes };
