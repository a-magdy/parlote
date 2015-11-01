Meteor.startup(function() {
  if (Rooms.find().count() === 0) {
    ["General", "Weather", "Books", "Movies"].forEach(function(r) {
      Rooms.insert({
        name: r,
        createdAt: new Date()
      });
    })
  }
});
