angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('page2', {
    url: '/page2',
    templateUrl: 'templates/page2.html',
    controller: 'page2Ctrl'
  })

  .state('page4', {
    url: '/page3',
    templateUrl: 'templates/page4.html',
    controller: 'page4Ctrl'
  })

  .state('page5', {
    url: '/page5',
    templateUrl: 'templates/page5.html',
    controller: 'page5Ctrl'
  })

  .state('page6', {
    url: '/page6',
    templateUrl: 'templates/page6.html',
    controller: 'page6Ctrl'
  })

  .state('page7', {
    url: '/page7',
    templateUrl: 'templates/page7.html',
    controller: 'page7Ctrl'
  })

$urlRouterProvider.otherwise('/page2')


});