Messages = new Meteor.Collection('messages');

Messages.allow({
  insert: function(userId, message) {
    message.createdAt = new Date();
    return userId !== null;
  }
});

Messages.deny({
  insert: function(userId, message) {
    return userId === null;
  },
  update: function(userId, message, fields, modifier) {
    return true;
  },
  remove: function(userId, message) {
    return true;
  }
});
