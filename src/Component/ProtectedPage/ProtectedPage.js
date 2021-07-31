import React from "react";

const Protected = () => {
  const data = JSON.parse(localStorage.getItem("okta-token-storage"));

  const accessToken = data.accessToken.value;

  const idToken = data.idToken.value;

  console.log("Here", data);
  return (
    <div className="container">
      <div>
        <h1 className="display-1">Okta Token Details</h1>
      </div>
      <div className="mt-2">
        <div className="form-floating">
          <textarea
            className="form-control shadow-none mb-4"
            placeholder="Access Token"
            id="floatingTextarea2"
            style={{ height: "250px" }}
            value={accessToken}
          ></textarea>
          <label for="floatingTextarea2">Access Token</label>
        </div>
        <div className="form-floating">
          <textarea
            className="form-control shadow-none mb-4"
            placeholder="idToken"
            id="floatingTextarea2"
            style={{ height: "300px" }}
            value={idToken}
          ></textarea>
          <label for="floatingTextarea2">idToken</label>
        </div>
      </div>
    </div>
  );
};

export default Protected;
