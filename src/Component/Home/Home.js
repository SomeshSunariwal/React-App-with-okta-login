import React from "react";
import { Link } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";

export default function Home() {
  const { oktaAuth } = useOktaAuth();
  const data = JSON.parse(localStorage.getItem("okta-token-storage"));

  // Data Null means no auth token set by okta
  const button =
    data === null ? (
      <Link to="/login">
        <button className="btn btn-primary shadow-none">Login</button>
      </Link>
    ) : (
      <button
        className="btn btn-secondary shadow-none"
        onClick={async () => oktaAuth.signOut()}
      >
        Logout
      </button>
    );

  return (
    <div className="container">
      <div className="mt-5">
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Okta Login Test App</h1>
            <div className="col-md-8 fs-4">
              <p>
                This is the example application of okta login. To test this
                application please update the follwing information.
              </p>
              <h4>- REACT_APP_CLIENT_ID</h4>
              <h4>- REACT_APP_ISSUER </h4>
              <h4>- REACT_APP_BASE_URL</h4>
            </div>
            {button}
          </div>
        </div>
      </div>
    </div>
  );
}
