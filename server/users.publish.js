'use strict'

Meteor.publish("users", function() {

  //Counts.publish(this, 'numberOfUsers', Meteor.users.find({}));

  return Meteor.users.find({}, {
    fields: {
      emails: 1,
      profile: 1
    }
  });
});
