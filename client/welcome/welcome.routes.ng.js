'use strict'

angular.module('parloteApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('welcome', {
        url: '/welcome',
        templateUrl: 'client/welcome/welcome.view.ng.html',
        controller: 'WelcomeController'
      });
  });
