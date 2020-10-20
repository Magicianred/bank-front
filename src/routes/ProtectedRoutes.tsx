import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { authActions } from "src/store/actions";

import { Dashboard } from "../components";
import { Debt, Debts, Home, Expenses } from "../pages";

const ProtectedRoutes: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authActions.getMe());
  }, [dispatch]);

  return (
    <Dashboard>
      <Route exact path="/home" component={Home} />
      <Route exact path="/dividas" component={Debts} />
      <Route exact path="/dividas/:id" component={Debt} />
      <Route exact path="/despesas" component={Expenses} />
      <Redirect to="/home" />
    </Dashboard>
  );
};

export { ProtectedRoutes };
