'use strict'

angular.module('parloteApp')
  .controller('RoomsController', ['$scope', '$meteor', '$stateParams', function($scope, $meteor, $stateParams) {

    $scope.rooms = $meteor.collection(Rooms).subscribe('rooms');

    $scope.roomStyle = function(room) {
      return $stateParams.roomId == room._id ? {
        'font-weight': 'bold'
      } : {};
    }
  }]);
