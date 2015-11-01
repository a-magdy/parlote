'use strict'

angular.module('parloteApp')
  .controller('NewMessageController', [
    '$scope',
    '$meteor',
    '$stateParams',
    '$location',
    '$rootScope',
    function($scope, $meteor, $stateParams, $location, $rootScope) {

      $scope.showInput = function() {
        return s.startsWith($location.path(), '/room/');
      }

      $scope.addMessage = function() {

        if (!$rootScope.currentUser) return;

        let loggedInUser = Meteor.user();

        if (!s.isBlank($scope.message) && $scope.room) {

          let username = (loggedInUser.profile && loggedInUser.profile.name) || (loggedInUser.username);

          Meteor.call("addMessage", {
            room: $stateParams.roomId,
            message: $scope.message
          }, function(error, result) {
            if (error) {
              console.log("error", error);
            }
            if (result) {
              $scope.message = '';
            }
          });
        }
      }

      $scope.sendPicture = function() {
        $meteor.getPicture().then(function(imageData) {

          if (!$rootScope.currentUser) return;

          if (!s.isBlank(imageData) && $scope.room) {

            Meteor.call("addMessage", {
              room: $stateParams.roomId,
              isImage: true,
              imageData: imageData
            }, function(error, result) {
              if (error) {
                console.log("error", error);
              }
              if (result) {
              }
            });
          }
        });
      };
    }
  ]);
