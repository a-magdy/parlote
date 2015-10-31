'use strict'

angular.module('parloteApp')
  .controller('RoomsController', [
    '$scope',
    '$meteor',
    '$stateParams',
    '$mdDialog',
    function($scope, $meteor, $stateParams, $mdDialog) {

      $scope.rooms = $meteor.collection(Rooms).subscribe('rooms');

      $scope.roomStyle = function(room) {
        return $stateParams.roomId == room._id ? {
          'font-weight': 'bold'
        } : {};
      };

      $scope.showAdd = function(ev) {
        $mdDialog.show({
            templateUrl: 'client/components/new-room/new-room.view.ng.html',
            targetEvent: ev,
            controller: NewRoomController
          })
          .then(function(room) {
            if (!room || s.isBlank(room.name)) {
              return;
            }

            Meteor.call("addRoom", room, function(error, result) {
              if (error) {
                console.log("error", error);
              }
              // if(result){ }
            });
          }, function() {
            // The dialong has been cancelled.
          });
      };
    }
  ]);
