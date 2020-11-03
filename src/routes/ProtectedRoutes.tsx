import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { useTypedSelector } from "src/store";
import { authActions } from "src/store/actions";

import { Dashboard } from "../components";
import { Debt, Debts, Home, Expenses, Expense } from "../pages";

const ProtectedRoutes: React.FC = () => {
  const dispatch = useDispatch();
  const auth = useTypedSelector(({ authReducer }) => authReducer.user._id)

  useEffect(() => {
    if (auth === '') {
      dispatch(authActions.getMe());
    }
  }, [dispatch]);

  return (
    <Dashboard>
      <Route exact path="/home" component={Home} />
      <Route exact path="/dividas" component={Debts} />
      <Route exact path="/dividas/:id" component={Debt} />
      <Route exact path="/despesas" component={Expenses} />
      <Route exact path="/despesas/:id" component={Expense} />
      <Redirect to="/home" />
    </Dashboard>
  );
};

export { ProtectedRoutes };
