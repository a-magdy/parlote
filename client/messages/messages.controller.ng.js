'use strict'

angular.module('parloteApp')
.controller('MessagesController', ['$scope', '$meteor', '$stateParams', function($scope, $meteor, $stateParams) {
  $scope.room = $meteor.object(Rooms, $stateParams.roomId, false).subscribe('rooms');

  $scope.options = {};

  $scope.searchString = {};

  $meteor.autorun($scope, function() {
    $meteor.subscribe('messages', $scope.options, $scope.searchString, $stateParams.roomId);
  });
  $scope.messages = $meteor.collection(Messages, false);

  //$scope.users = $meteor.collection(Meteor.users, false).subscribe('users');
}]);
