const oktaAuthConfig = {
  issuer: process.env.REACT_APP_ISSUER,
  clientId: process.env.REACT_APP_CLIENT_ID,
  redirectUri: window.location.origin + "/login/callback",
};

const oktaSignInConfig = {
  baseUrl: process.env.REACT_APP_BASE_URL,
  clientId: process.env.REACT_APP_CLIENT_ID,
  redirectUri: window.location.origin + "/login/callback",
  logo: "/img.png",
};

export { oktaAuthConfig, oktaSignInConfig };
