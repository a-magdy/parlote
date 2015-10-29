angular.module('parlote').run(function($rootScope, $state) {
  $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
    if (error === 'AUTH_REQUIRED') {
      $state.go('rooms');
    }
  })
});

angular.module('parlote').config(function($urlRouterProvider, $stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('rooms', {
      url: '/rooms',
      //templateUrl: '<h3>Please select a room</h3>',
      controller: 'RoomsController'
        // resolve: {
        //   "currentUser": function($meteor) {
        //     return $meteor.requireUser();
        //   }
        //}
    })
    .state('room', {
      url: '/room/:roomId',
      templateUrl: 'client/messages/messages.ng.html',
      controller: 'MessagesController',
      resolve: {
        "currentUser": function($meteor) {
          return $meteor.requireUser();
        }
      }
    })

  $urlRouterProvider.otherwise("/rooms");
});
