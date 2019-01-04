import React from "react";
import { withRouter } from "react-router-dom";

const System = props => <div>{props.match.params.stub}</div>;

export default withRouter(System);
