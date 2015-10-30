'use strict'

// angular.module('parloteApp')
//   .config(function($mdThemingProvider) {
//     var customBlueMap = $mdThemingProvider.extendPalette('light-blue', {
//       'contrastDefaultColor': 'light',
//       'contrastDarkColors': ['50'],
//       '50': 'ffffff'
//     });
//     $mdThemingProvider.definePalette('customBlue', customBlueMap);
//     $mdThemingProvider.theme('default')
//       .primaryPalette('customBlue', {
//         'default': '500',
//         'hue-1': '50'
//       })
//       .accentPalette('pink');
//     $mdThemingProvider.theme('input', 'default')
//       .primaryPalette('grey')
//   });

angular.module('parloteApp')
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('deep-orange')
      .accentPalette('lime');
  });
