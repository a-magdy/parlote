Meteor.subscribe("rooms");

Session.setDefault("roomName", "Room1");

Template.rooms.helpers({
  rooms: function() {
    return Rooms.find();
  }
});

Template.rooms.events({
  'click li': function(e) {
    Session.set('roomName', e.target.innerText);
  }
});

Template.room.helpers({
  roomstyle: function(){
    return Session.get('roomName') == this.name ? "font-weight: bold;" : "";
  }
});
