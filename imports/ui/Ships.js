import { CapitalShips } from "../api/capitalShips";
import { Lead, Box, Label, Text, Button } from "rebass";
import { withTracker } from "meteor/react-meteor-data";
import capitalShipsList from "../lib/capitalShips";
import Page from "./Page";
import React from "react";
import Editable from "./Editable";

const Ships = props => (
  <Page title="Ships">
    <Lead>Capital Ships</Lead>
    <Button
      onClick={() =>
        CapitalShips.insert({
          createdAt: Date.now(),
          name: `Unnamed ${Date.now()}`,
          type: "imperialIIStarDestroyer"
        })
      }
    >
      Build a captial ship
    </Button>
    {props.capitalShips.map(ship => (
      <Box key={ship._id}>
        <Label>Name</Label>
        <Editable
          value={ship.name}
          onSave={value => {
            CapitalShips.update(ship._id, { $set: { name: value } });
          }}
        />
        <Label>Type</Label>
        <Text>
          {
            capitalShipsList.find(capitalShip => capitalShip.stub === ship.type)
              .name
          }
        </Text>
      </Box>
    ))}
  </Page>
);

export default withTracker(props => {
  return {
    capitalShips: CapitalShips.find().fetch()
  };
})(Ships);
