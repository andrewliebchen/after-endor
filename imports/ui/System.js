import { Text } from "rebass";
import { Systems } from "../api/systems";
import { withRouter } from "react-router-dom";
import { withTracker } from "meteor/react-meteor-data";
import PropTypes from "prop-types";
import React from "react";
import Page from "./Page";
import { isInRange } from "../utils/helpers";

const System = props => (
  <Page title={props.system.name}>
    <img src="/images/systemDiagram.svg" width="800px" height="auto" />
    {console.log(isInRange([0, 4, 0], [1, 4, 3], 1))}
  </Page>
);

System.propTypes = {
  system: PropTypes.object
};

export default withTracker(props => {
  return {
    system: Systems.findOne({ stub: props.match.params.stub })
  };
})(withRouter(System));
