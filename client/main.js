import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { Provider } from "rebass";

import App from "../imports/ui/App.js";

Meteor.startup(() => {
  render(
    <Provider>
      <App />
    </Provider>,
    document.getElementById("render-target")
  );
});
