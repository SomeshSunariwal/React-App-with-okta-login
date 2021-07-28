import React from "react";
import { Route, useHistory, Switch } from "react-router-dom";
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import { OktaAuth } from "@okta/okta-auth-js";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Protected from "../ProtectedPage/ProtectedPage";
import { oktaAuthConfig, oktaSignInConfig } from "../../config";

const oktaAuth = new OktaAuth(oktaAuthConfig);

const OktaAuthHandler = () => {
  const history = useHistory();

  const customAuthHandler = () => {
    history.push("/login");
  };

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.push("/");
  };

  return (
    <Security
      oktaAuth={oktaAuth}
      onAuthRequired={customAuthHandler}
      restoreOriginalUri={restoreOriginalUri}
    >
      <Switch>
        <Route path="/" exact={true} component={Home} />
        {/* Every Secure Route is Secured with okta. It will be not accessable till login*/}
        <SecureRoute path="/protected" component={Protected} />

        {/* Normal Login Path */}
        <Route
          path="/login"
          render={() => <Login config={oktaSignInConfig} />}
        />

        {/* CallBack url which is same as set in okta application (sign in Redirect URI) */}
        <Route path="/login/callback" component={LoginCallback} />
      </Switch>
    </Security>
  );
};

export default OktaAuthHandler;
