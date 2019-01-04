import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Systems from "./Systems";
import systemsList from "../../lib/systems";
import System from "./System";

const App = props => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Systems} />
      <Route path="/systems/:stub" component={System} />
    </div>
  </BrowserRouter>
);

export default App;
