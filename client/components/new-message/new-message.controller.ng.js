angular.module('parloteApp')
  .controller('NewMessageController', [
    '$scope',
    '$meteor',
    '$stateParams',
    '$location',
    function($scope, $meteor, $stateParams, $location) {

      $scope.showInput = function() {
        return s.startsWith($location.path(), '/room/');
      }

      $scope.AddMessage = function() {
        var loggedInUser = Meteor.user();

        if (!loggedInUser) {
          return;
        }

        var message = document.getElementById('message');
        var roomId = $stateParams.roomId;

        if (s.isBlank(message.value) == false && s.isBlank(roomId) == false) {

          var username = (loggedInUser.profile && loggedInUser.profile.name) || (loggedInUser.username);

          Messages.insert({
            userId: Meteor.userId(),
            name: username,
            room: roomId,
            message: message.value,
          })

          document.getElementById('message').value = '';
          message.value = '';
        }
      }
    }
  ]);
