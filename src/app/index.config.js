(function() {
  'use strict';

  angular
    .module('stratpointWeb')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
