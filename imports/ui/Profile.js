import { Meteor } from "meteor/meteor";
import { Text } from "rebass";
import { withRouter } from "react-router-dom";
import { withTracker } from "meteor/react-meteor-data";
import Page from "./Page";
import React from "react";

const Profile = props =>
  props.player ? (
    <Page title={props.player.profile.name}>Player</Page>
  ) : (
    <Text>Loading...</Text>
  );

export default withTracker(props => {
  return { player: Meteor.user(props.match.params.id) };
})(withRouter(Profile));
