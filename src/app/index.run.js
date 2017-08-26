(function() {
  'use strict';

  angular
    .module('stratpointWeb')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
