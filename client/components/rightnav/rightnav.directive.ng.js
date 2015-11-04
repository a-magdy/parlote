'use strict';

angular.module('parloteApp')
  .directive('rightnav', function() {
    return {
      restrict: 'EA',
      templateUrl: 'client/components/rightnav/rightnav.view.ng.html',
      replace: true
    };
  });
