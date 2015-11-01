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

        var loggedInUser = Meteor.user();

        var roomId = $stateParams.roomId;

        if (s.isBlank($scope.message) == false && s.isBlank(roomId) == false) {

          var username = (loggedInUser.profile && loggedInUser.profile.name) || (loggedInUser.username);

          Messages.insert({
            userId: Meteor.userId(),
            name: username,
            room: roomId,
            message: $scope.message,
            isImage: false,
            imageData: null
          });

          $scope.message = '';
        }
      }

      $scope.sendPicture = function() {
        $meteor.getPicture().then(function(imageData) {
          $scope.imageData = imageData;

          if (!$rootScope.currentUser) return;

          var loggedInUser = Meteor.user();

          var roomId = $stateParams.roomId;

          if (!s.isBlank($scope.imageData) && $scope.room) {

            var username = (loggedInUser.profile && loggedInUser.profile.name) || (loggedInUser.username);

            Messages.insert({
              userId: Meteor.userId(),
              name: username,
              room: roomId,
              message: '',
              isImage: true,
              imageData: imageData
            });

            $scope.message = '';
          }
        });
      };
    }
  ]);
