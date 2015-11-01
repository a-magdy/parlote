'use strict';

Meteor.methods({
  addMessage: function(message) {

    let success = false;

    if (Meteor.userId()) {

      let room = Rooms.findOne(message.room);

      if (room) {

        let loggedInUser = Meteor.user();

        message.userId = Meteor.userId();
        message.username = (loggedInUser.profile && loggedInUser.profile.name) || (loggedInUser.username);
        message.createdAt = new Date();

        if (
          (message.isImage && !s.isBlank(message.imageData)) ||
          (!message.isImage && !s.isBlank(message.message))
        ) {

          Messages.insert(message);

          success = true;
        }
      }
    }

    return success;
  },

  removeMessage: function(messageId) {
    let result = false;

    if (Meteor.userId()) {

      let message = Messages.findOne(messageId);

      if (message && message.userId == Meteor.userId() && !message.isDeleted) {
        Messages.update({
          _id: message._id
        }, {
          $set: {
            isDeleted: true
          }
        });

        result = true;
      }
    }

    return result;
  }
});
