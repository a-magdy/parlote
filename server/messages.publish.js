'use strict'

Meteor.publish('messages', function(options, searchString, roomId) {
  var where = {
    // 'message': {
    //   '$regex': '.*' + (searchString || '') + '.*',
    //   '$options': 'i'
    // },
    room: roomId,
    isDeleted: {$ne: true}
  };

  Counts.publish(this, 'numberOfMessagesIn_' + roomId, Messages.find(where), {
    noReady: true
  });

  return Messages.find(where, options);
});
