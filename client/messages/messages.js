Meteor.subscribe("messages");

Template.messages.helpers({
  messages: function() {
    return Messages.find({
      room: Session.get('roomName')
    }, {
      sort: {
        time: -1
      }
    });
  },
  roomName: function() {
    return Session.get('roomName');
  }
});
