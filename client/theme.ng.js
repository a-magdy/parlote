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



// angular.module('parloteApp')
//   .config(function($mdThemingProvider) {
//     $mdThemingProvider.theme('default')
//       .primaryPalette('deep-orange')
//       .accentPalette('lime');
//   });


angular.module('parloteApp')
  .config([
    '$mdThemingProvider',
    '$mdIconProvider',
    function($mdThemingProvider, $mdIconProvider) {

      $mdThemingProvider
        .theme('default')
        .primaryPalette('grey', {
          'default': '600'
        })
        .accentPalette('teal', {
          'default': '500'
        })
        .warnPalette('defaultPrimary');

      $mdThemingProvider.theme('dark', 'default')
        .primaryPalette('defaultPrimary')
        .dark();

      $mdThemingProvider.theme('grey', 'default')
        .primaryPalette('grey');

      $mdThemingProvider.theme('custom', 'default')
        .primaryPalette('defaultPrimary', {
          'hue-1': '50'
        });

      $mdThemingProvider.definePalette('defaultPrimary', {
        '50': '#FFFFFF',
        '100': 'rgb(255, 198, 197)',
        '200': '#E75753',
        '300': '#E75753',
        '400': '#E75753',
        '500': '#E75753',
        '600': '#E75753',
        '700': '#E75753',
        '800': '#E75753',
        '900': '#E75753',
        'A100': '#E75753',
        'A200': '#E75753',
        'A400': '#E75753',
        'A700': '#E75753'
      });

      $mdIconProvider.icon('user', 'assets/images/user.svg', 64);

      // var customBlueMap = $mdThemingProvider.extendPalette('light-blue', {
      //   'contrastDefaultColor': 'light',
      //   'contrastDarkColors': ['50'],
      //   '50': 'ffffff'
      // });
      // $mdThemingProvider.definePalette('customBlue', customBlueMap);
      // $mdThemingProvider.theme('default')
      //   .primaryPalette('customBlue', {
      //     'default': '500',
      //     'hue-1': '50'
      //   })
      //   .accentPalette('pink');
      // $mdThemingProvider.theme('input', 'default')
      //   .primaryPalette('grey')

    }
  ]);
