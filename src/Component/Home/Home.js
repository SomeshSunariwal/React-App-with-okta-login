import React from "react";

export default function Home() {
  return (
    <div className="container">
      <div class="p-5 mb-4 bg-light rounded-3">
        <div class="container-fluid py-5">
          <h1 class="display-5 fw-bold">Okta Login Test App</h1>
          <p class="col-md-8 fs-4">
            This is the example application of okta login. To test this
            application please update the follwing information.
            <h4>- REACT_APP_CLIENT_ID</h4>
            <h4>- REACT_APP_ISSUER </h4>
            <h4>- REACT_APP_BASE_URL</h4>
          </p>
          <button class="btn btn-primary btn-lg" type="button">
            Example button
          </button>
        </div>
      </div>
    </div>
  );
}
