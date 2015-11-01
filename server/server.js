Meteor.startup(function() {
  if (Rooms.find().count() === 0) {
    ["Room1", "Room2", "Room3", "Room4"].forEach(function(r) {
      Rooms.insert({
        name: r,
        createdAt: new Date()
      });
    })
  }
});
