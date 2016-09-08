// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.all-apps', {
    url: '/all-apps',
    views: {
      'menuContent': {
        templateUrl: 'templates/apps/all-apps.html'
      }
    }
  })
    .state('app.top-rated', {
    url: '/top-rated',
    views: {
      'menuContent': {
        templateUrl: 'templates/top-rated.html'
      }
    }
  })
    .state('app.top-downloaded', {
    url: '/top-downloaded',
    views: {
      'menuContent': {
        templateUrl: 'templates/top-downloaded.html'
      }
    }
  })

  .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html'
        }
      }
    })
    .state('app.all-games', {
      url: '/all-games',
      views: {
        'menuContent': {
          templateUrl: 'templates/apps/all-games.html'
          // controller: 'AppsCtl'
        }
      }
    })

  .state('app.single-app', {
    url: '/apps/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/apps/single-app.html'
      }
    }
  })
    .state('app.guide', {
      url: '/guide',
      views: {
        'menuContent': {
          templateUrl: 'templates/guide.html'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
