(function() {
    'use strict';

    angular
        .module('stratpointWeb')
        .factory('ProfileService', ProfileService);

        ProfileService.$inject = ["$http", "$log"]

    /** @ngInject */
    function ProfileService($http, $log) {
        var serviceUri = "http://localhost:8080/profile";

        var service = {
            getProfiles: getProfiles,
            getProfile: getProfile
        };

        return service;

        function getProfiles() {
            return $http.get(serviceUri)
                .then(success)
                .catch(failed);

            function success(response) {
                return response.data;
            }

            function failed(error) {
                $log.error('XHR Failed for getProfiles.' + error.data);
            }
        }

        function getProfile(id) {
            return $http.get(serviceUri + "/" + id)
                .then(success)
                .catch(failed);

            function success(response) {
                return response.data;
            }

            function failed(error) {
                $log.error('XHR Failed for getProfile(' + id + ').' + error.data);
            }
        }
    }
})();