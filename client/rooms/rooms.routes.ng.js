'use strict'

angular.module('parloteApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('rooms', {
        url: '/rooms',
        templateUrl: 'client/rooms/rooms.view.ng.html',
        controller: 'RoomsController'
      });
  });
