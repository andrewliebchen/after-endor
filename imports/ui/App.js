import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Systems from "./Systems";
import systemsList from "../../lib/systems";
import System from "./System";
import AccountsWrapper from "./AccountsWrapper";
import Profile from "./Profile";
import Ships from "./Ships";

const App = props => (
  <BrowserRouter>
    <div>
      <AccountsWrapper />
      <Route exact path="/" component={Systems} />
      <Route exact path="/ships" component={Ships} />
      <Route path="/systems/:stub" component={System} />
      <Route path="/players/:id" component={Profile} />
    </div>
  </BrowserRouter>
);

export default App;
