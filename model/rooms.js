Rooms = new Meteor.Collection('rooms');

Rooms.allow({
  insert: function(userId, room) {
    room.createdAt = new Date();

    return userId !== null;
  },
  update: function(userId, room, fields, modifier) {
    return room.userId === userId;
  }
});

Rooms.deny({
  insert: function(userId, room) {
    return userId === null;
  },
  update: function(userId, room, fields, modifier) {
    return room.userId !== userId;
  },
  remove: function(userId, room) {
    return true;
  }
});
