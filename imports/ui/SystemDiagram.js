import React from "react";
import styled from "styled-components";
import shapes from "../utils/systemDiagramShapes";
import PropTypes from "prop-types";
import { isInRange } from "../utils/helpers";
import _ from "lodash";

const Path = styled.path`
  fill: ${props => (props.isLocatedIn ? "purple" : "white")};
  stroke: black;

  &:hover {
    cursor: pointer;
    fill: ${props => props.isInRange && "blue"};
  }
`;

const SystemDiagram = props => (
  <svg width="100%" viewBox="0 0 1401 1401">
    {shapes.map((shape, i) => (
      <Path
        key={i}
        d={shape.path}
        onClick={() => console.log(shape.coordinates)}
        isInRange={isInRange(props.location, shape.coordinates, props.range)}
        isLocatedIn={_.isEqual(props.location, shape.coordinates)}
      />
    ))}
  </svg>
);

SystemDiagram.propTypes = {
  location: PropTypes.array,
  range: PropTypes.number
};

export default SystemDiagram;
