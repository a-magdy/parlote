'use strict';

Meteor.methods({
  addRoom: function(room) {

    var result = false;

    if (Meteor.userId() && room && !s.isBlank(room.name)) {

      if (Rooms.find({
          name: room.name
        }).count() === 0) {

        var loggedInUser = Meteor.user();

        room.userId = loggedInUser._id;
        room.username = (loggedInUser.profile && loggedInUser.profile.name) || (loggedInUser.username);
        room.createdAt = new Date();

        Rooms.insert(room);

        result = true;
      }
    }

    return result;
  },

  removeRoom: function(roomId) {

    var result = false;

    var room = Rooms.findOne(roomId);

    if (room && room.userId == Meteor.userId() && !room.isDeleted) {
      Rooms.update({
        _id: room._id
      }, {
        $set: {
          isDeleted: true
        }
      });

      result = true;
    }

    return result;
  }
});
