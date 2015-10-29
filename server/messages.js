Messages.allow({
  insert: function(userId) {
    return userId !== null;
  }
});

Messages.deny({
  insert: function(userId) {
    return userId === null;
  },
  update: function() {
    return true;
  },
  remove: function() {
    return true;
  }
});

Meteor.publish("messages", function(roomId) {
  return Messages.find({
    room: roomId
  });
});