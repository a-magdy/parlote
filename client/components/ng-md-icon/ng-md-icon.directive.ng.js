angular.module('parloteApp')
  .directive('ngMdIcon', function() {
    return {
      restrict: 'EA',
      templateUrl: 'client/components/ng-md-icon/ng-md-icon.view.ng.html',
      replace: true,
      link: function(scope, elem, attrs) {
        scope.icon = attrs.icon;
      }
    };
  });
