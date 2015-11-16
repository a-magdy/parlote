'use strict';

angular.module('parloteApp')
.directive('leftnav', function() {
  return {
    restrict: 'EA',
    templateUrl: 'client/components/leftnav/leftnav.view.html',
    replace: true
    // link: function(scope, elem, attrs) {
    //   scope.property = 'leftnav';
    // }
  };
});
