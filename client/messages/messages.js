Meteor.subscribe("messages");

angular.module('parlote')
.controller('MessagesController', ['$scope', '$meteor', '$stateParams', function($scope, $meteor, $stateParams) {
  $scope.room = $meteor.object(Rooms, $stateParams.roomId, false).subscribe('rooms');

  $meteor.autorun($scope, function() {
    $meteor.subscribe('messages', $stateParams.roomId);
  });
  $scope.messages = $meteor.collection(Messages, false);

  //$scope.users = $meteor.collection(Meteor.users, false).subscribe('users');
}]);
