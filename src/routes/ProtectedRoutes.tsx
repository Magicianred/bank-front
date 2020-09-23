import React from "react";
import { Route, Redirect } from "react-router-dom";

import { Dashboard } from '../components'
import { DebtList, Home } from "../pages";

// import { Container } from './styles';

const ProtectedRoutes: React.FC = () => {
  return (
    <Dashboard>
      <Route exact path="/home" component={Home} />
      <Route exact path="/debtlist" component={DebtList} />
      <Redirect to="/home" />
    </Dashboard>
  );
};

export { ProtectedRoutes };
