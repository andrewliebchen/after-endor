import React from "react";
import { Heading, Flex } from "rebass";

const Page = props => (
  <Flex flexDirection="column" p={4}>
    <Heading>{props.title}</Heading>
    {props.children}
  </Flex>
);

export default Page;
