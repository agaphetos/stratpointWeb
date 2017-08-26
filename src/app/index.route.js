(function() {
  'use strict';

  angular
    .module('stratpointWeb')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/profile/profiles.html',
        controller: 'ProfileController',
        controllerAs: 'profile'
      })
      .when('/profile/:id', {
        templateUrl: 'app/profile/profile.html',
        controller: 'ProfileController',
        controllerAs: 'profile'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
