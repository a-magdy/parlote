Messages = new Meteor.Collection('messages');

Messages.allow({
  insert: function(userId, message) {
    message.createdAt = new Date();
    return userId !== null;
  },
  update: function(userId, message, fields, modifier){
    return message.userId === userId;
  }
});

Messages.deny({
  insert: function(userId, message) {
    return userId === null;
  },
  update: function(userId, message, fields, modifier) {
   return message.userId !== userId;
  },
  remove: function(userId, message) {
    return true;
  }
});
