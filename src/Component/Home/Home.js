import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import axios from "axios";
import Spinner from "../Spinner/Spinner";

export default function Home() {
  const { oktaAuth } = useOktaAuth();
  const data = JSON.parse(localStorage.getItem("okta-token-storage"));
  let ResponseData = null;

  const [ApiData, setApiData] = useState({
    response: undefined,
    loading: true,
    error: null,
  });

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

  useEffect(() => {
    // Pre-Check
    if (
      ApiData.response === undefined &&
      ApiData.error === null &&
      data !== null
    ) {
      // backend call
      axios
        .get(process.env.REACT_APP_HOST + "/data", {
          headers: { Authorization: "bearer " + data.accessToken.value },
        })
        .then((response) =>
          setApiData((prev) => ({
            ...prev,
            loading: false,
            response: response.data,
          }))
        )
        .catch((error) => {
          let errorMessage;
          if (error.message === "Network Error") {
            errorMessage = error.message;
          } else {
            errorMessage = error;
          }
          setApiData((prev) => ({
            ...prev,
            loading: false,
            error: errorMessage,
          }));
        });
    }
  }, [ApiData, data]);

  ResponseData =
    data === null ? (
      <h2>Not Logged IN</h2>
    ) : ApiData.response !== undefined &&
      ApiData.error === null &&
      ApiData.loading === false ? (
      ApiData.response.map((value, key) => {
        return (
          <div key={key}>
            <h6>{value.Name}</h6>
          </div>
        );
      })
    ) : ApiData.loading === true ? (
      <Spinner />
    ) : null;

  console.log(ApiData);

  return (
    <div className="container">
      <div className="mt-5">
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Okta Login Test App</h1>
            <div className="col-md-8 fs-4">
              <p>
                This is the example application of okta login. To test this
                application please update the following information.
              </p>
              <h4>- REACT_APP_CLIENT_ID</h4>
              <h4>- REACT_APP_ISSUER </h4>
              <h4>- REACT_APP_BASE_URL</h4>
            </div>
            {button}
          </div>
        </div>
      </div>
      <h5>Auth API Response</h5>
      <div>
        <div
          className="form-floating container"
          style={{ border: "solid 6px black" }}
        >
          {ResponseData === null && ApiData.error !== null ? (
            <h4>{ApiData.error}</h4>
          ) : (
            ResponseData
          )}
        </div>
      </div>
    </div>
  );
}
