import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";

const LoginHandler = () => {
  const history = useHistory();
  const { oktaAuth, authState } = useOktaAuth();

  if (!authState) return null;

  const login = async () => history.push("/login");

  const logout = async () => oktaAuth.signOut();

  const button = authState.isAuthenticated ? (
    <button className="btn btn-secondary me-2 shadow-none" onClick={logout}>
      Logout
    </button>
  ) : (
    <button className="btn btn-primary me-2 shadow-none" onClick={login}>
      Login
    </button>
  );

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="img.png"
              alt=""
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            Okta Auth
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  <button className="btn btn-primary me-2 shadow-none">
                    Home
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/protected"
                >
                  <button className="btn btn-primary me-2 shadow-none">
                    Protected
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <span className="navbar-text">{button}</span>
      </nav>
    </div>
  );
};

export default LoginHandler;
