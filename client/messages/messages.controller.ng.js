'use strict'

angular.module('parloteApp')
  .controller('MessagesController', [
    '$scope',
    '$meteor',
    '$stateParams',
    'ITEMS_PER_PAGE',
    function($scope, $meteor, $stateParams, itemsPerPage) {
      // Get current room from $stateParams.
      $scope.room = $meteor.object(Rooms, $stateParams.roomId, false).subscribe('rooms');

      $scope.page = 1;
      $scope.perPage = itemsPerPage;

      // $scope.sort = {
      //   name_sort: 1
      // };
      // $scope.orderProperty = '1';

      $scope.messages = $meteor.collection(Messages, false);

      $meteor.autorun($scope, function() {
        $meteor.subscribe('messages', {
            limit: parseInt($scope.getReactively('perPage')),
            skip: parseInt(($scope.getReactively('page') - 1)) * $scope.getReactively('perPage'),
            //sort: $scope.getReactively('sort')
          }, $scope.getReactively('search'), $stateParams.roomId)
          .then(function() {
            $scope.messagesCount = $meteor.object(Counts, 'numberOfMessagesIn_' + $stateParams.roomId, false);
          });
      });

      $meteor.session('messagesCounter').bind($scope, 'page');

      $scope.pageChanged = function(newPage) {
        $scope.page = newPage;
      }

      // $scope.$watch('orderProperty', function() {
      //   if ($scope.orderProperty) {
      //     $scope.sort = {
      //       name_sort: parseInt($scope.orderProperty)
      //     };
      //   }
      // })

      //$scope.users = $meteor.collection(Meteor.users, false).subscribe('users');
    }
  ]);
