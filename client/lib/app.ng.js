angular.module('parloteApp', [
  'angular-meteor',
   'ui.router',
   'ngMaterial',
   'angularUtils.directives.dirPagination'
 ])
 .constant('ITEMS_PER_PAGE', 10);

onReady = function() {
  angular.bootstrap(document, ['parloteApp']);
};

if(Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}
