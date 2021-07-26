import React from 'react';
import { BrowserRouter ,Route, useHistory, Switch } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Protected from './Component/ProtectedPage/ProtectedPage';
import { oktaAuthConfig, oktaSignInConfig } from './config';

console.log(oktaAuthConfig.issuer);

const oktaAuth = new OktaAuth(oktaAuthConfig);

const App = () => {

  const history = useHistory();

  const customAuthHandler = () => {
    history.push("/login")
  };

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri, window.location.origin));
  };

  return (
    <BrowserRouter>
      <Security
        oktaAuth={oktaAuth}
        onAuthRequired={customAuthHandler}
        restoreOriginalUri={restoreOriginalUri}
      >
        <Switch>
          <Route path='/' exact={true} component={Home} />
          <SecureRoute path='/protected' component={Protected} />
          <Route path='/login' render={() => <Login config={oktaSignInConfig} />} />
          <Route path='/login/callback' component={LoginCallback} />
        </Switch>
      </Security>
    </BrowserRouter>
  );
};

export default App;