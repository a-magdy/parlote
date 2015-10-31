'use strict'

angular.module('parloteApp')
  .controller('WelcomeController', [
    '$scope',
    '$meteor',
    '$stateParams',
    '$mdSidenav',
    function($scope, $meteor, $stateParams, $mdSidenav) {
      $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
      };
    }
  ]);
