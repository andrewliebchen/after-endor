import { BrowserRouter, Route } from "react-router-dom";
import AccountsWrapper from "./AccountsWrapper";
import Profile from "./Profile";
import React from "react";
import Ships from "./Ships";
import System from "./System";
import Systems from "./Systems";

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
