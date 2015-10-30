'use strict'

Meteor.publish('rooms', function(options, searchString) {
  var where = {
    // 'name': {
    //   '$regex': '.*' + (searchString || '') + '.*',
    //   '$options': 'i'
    // }
  };

  Counts.publish(this, 'numberOfRooms', Rooms.find(where), {
    noReady: true
  });


  return Rooms.find(where, options);
});
