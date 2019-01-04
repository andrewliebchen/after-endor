import React from "react";
import { Link } from "react-router-dom";
import systemsList from "../../lib/systems";

const Systems = props => (
  <ul>
    {systemsList.map(system => (
      <li key={system.stub}>
        <Link to={`/systems/${system.stub}`}>{system.name}</Link>
      </li>
    ))}
  </ul>
);

export default Systems;
