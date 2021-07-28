import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";

const Home = () => {
  const history = useHistory();
  const { oktaAuth, authState } = useOktaAuth();

  if (!authState) return null;

  const login = async () => history.push("/login");

  const logout = async () => oktaAuth.signOut();

  const button = authState.isAuthenticated ? (
    <button onClick={logout}>Logout</button>
  ) : (
    <button onClick={login}>Login</button>
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
            Data Center
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <button>
                  <Link to="/">Home</Link>
                </button>
              </li>
              <li className="nav-item">
                <button>
                  <Link to="/protected">Protected</Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {button}
    </div>
  );
};

export default Home;
