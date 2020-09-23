import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { authActions } from "../../../store/actions";
import './style.css'

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(authActions.logout());
    history.push("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex">
      <ul className="navbar-nav align-items-center justify-content-between w-100">
        <div className="d-flex">
          <li className="nav-item hover-item">
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>
        </div>
        <div>
          <li>
            <div id="logout" className="nav-link align-self-end" onClick={() => handleLogout()}>
              logout
            </div>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export { Navbar };
