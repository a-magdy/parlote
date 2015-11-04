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

  // if(!options)
  // {
  //   options = {};
  // }
  //
  // options.fields = {
  //     _id: 1,
  //     message: 1,
  //     userId: 1,
  //     isImage: 1,
  //     imageData: 1,
  //     room: 1,
  //     createdAt: 1
  // }

  return Messages.find(where, options);
});
