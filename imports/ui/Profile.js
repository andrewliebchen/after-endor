import React from "react";
import { Meteor } from "meteor/meteor";
import { withRouter } from "react-router-dom";
import { withTracker } from "meteor/react-meteor-data";
import { Text } from "rebass";
import Page from "./Page";

const Profile = props =>
  props.player ? (
    <Page title={props.player.profile.name}>Player</Page>
  ) : (
    <Text>Loading...</Text>
  );

export default withTracker(props => {
  return { player: Meteor.user(props.match.params.id) };
})(withRouter(Profile));
