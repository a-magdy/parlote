angular.module('parloteApp', [
  'angular-meteor',
  'ui.router',
  'ngMaterial',
  //'ngMdIcons',  // //cdn.jsdelivr.net/angular-material-icons/0.4.0/angular-material-icons.min.js
  'angularUtils.directives.dirPagination',
  "ngEmoticons"
  //"dbaq.emoji"
])

.constant('ITEMS_PER_PAGE', 8);

onReady = function() {
  angular.bootstrap(document, ['parloteApp']);
};

if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}
