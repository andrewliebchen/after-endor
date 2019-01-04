import { Mongo } from "meteor/mongo";
import systemsList from "../../lib/systems";

export const Systems = new Mongo.Collection("systems");

Meteor.startup(() => {
  // Seed systems
  if (Systems.find().count() === 0) {
    Systems.insert(
      systemsList,
      (error, success) => success && console.log("Systems seeded!")
    );
  }
});
