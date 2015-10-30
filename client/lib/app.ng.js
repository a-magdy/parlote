angular.module('parloteApp', [
  'angular-meteor',
   'ui.router',
   'ngMaterial',
   'angularUtils.directives.dirPagination'
 ]);

onReady = function() {
  angular.bootstrap(document, ['parloteApp']);
};

if(Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}
