import React from "react";
import { withRouter } from "react-router-dom";
import { Flex, Heading } from "rebass";

const System = props => (
  <Flex flexDirection="column">
    <Heading>{props.match.params.stub}</Heading>
    <img src="/images/systemDiagram.svg" width="100%" height="auto" />
  </Flex>
);

export default withRouter(System);
