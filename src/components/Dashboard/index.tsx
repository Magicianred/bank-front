import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useCountRenders } from "src/hooks";
import { authActions } from "../../store/actions";
import { Navbar } from './Navbar'

const Dashboard: React.FC = ({ children }) => {
  useCountRenders("Dashboard");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authActions.getMe());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export { Dashboard };
