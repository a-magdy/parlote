Rooms.allow({
  insert: function(userId) {
    return userId !== null;
  }
});

Rooms.deny({
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

Meteor.publish("rooms", function() {
  return Rooms.find();
});
