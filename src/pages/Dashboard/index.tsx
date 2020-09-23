import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { useCountRenders } from "src/hooks";
import { authActions } from '../../store/actions'

const Dashboard: React.FC = ({ children }) => {
  useCountRenders("Dashboard")
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authActions.getMe())
  }, [dispatch])

  return (
    <>
      <Link className="btn btn-primary" to="/home">
        home
      </Link>
      <Link className="btn btn-warning" to="/debtlist">
        debtlist
      </Link>
      {children}
    </>
  );
};

export { Dashboard };
