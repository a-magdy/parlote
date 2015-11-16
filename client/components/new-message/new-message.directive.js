'use strict'

angular.module('parloteApp')
.directive('newMessage', function() {
  return {
    restrict: 'AE',
    templateUrl: 'client/components/new-message/new-message.view.html',
    replace: true
  };
});
