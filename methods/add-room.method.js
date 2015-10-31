'use strict';

Meteor.methods({
  addRoom: function(room) {

    if(!Meteor.userId() || !room || s.isBlank(room.name)){
      return;
    }

    if(Rooms.find({name: room.name}).count() > 0){
      return;
    }

    var loggedInUser = Meteor.user();

    room.userId = loggedInUser._id;
    room.username =(loggedInUser.profile && loggedInUser.profile.name) || (loggedInUser.username);
    room.createdAt = new Date();

    Rooms.insert(room);

    return room;
  }
});
