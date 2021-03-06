'use strict'

angular.module('parloteApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('room', {
        url: '/room/:roomId',
        templateUrl: 'client/messages/messages.view.html',
        controller: 'MessagesController',
        resolve: {
          "currentUser": function($meteor) {
            return $meteor.requireUser();
          }
        }
      });
  });
