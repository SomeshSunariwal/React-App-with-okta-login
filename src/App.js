import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import OktaAuthHandler from "./Component/OktaAuthHandler/OktaAuthHandler";

const App = () => (
  <Router>
    <OktaAuthHandler />
  </Router>
);

export default App;
