'use strict'

Meteor.publish('rooms', function(options, searchString) {
  var where = {
    // 'name': {
    //   '$regex': '.*' + (searchString || '') + '.*',
    //   '$options': 'i'
    // }
    isDeleted: {$ne: true}
  };

  Counts.publish(this, 'numberOfRooms', Rooms.find(where), {
    noReady: true
  });


  return Rooms.find(where, options);
});
