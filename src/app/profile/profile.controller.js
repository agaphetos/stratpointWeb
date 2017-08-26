(function() {
    'use strict';

    angular
        .module('stratpointWeb')
        .controller('ProfileController', ProfileController);

        ProfileController.$inject = ['$scope', 'ProfileService', 'filterFilter', '$routeParams', '$log'];

    /** @ngInject */
    function ProfileController($scope, ProfileService, filterFilter, $routeParams, $log) {
        var vm = this;
        
        vm.profile = {};
        vm.profiles = [];

        vm.pagination = {
            order: 'name',
            limit: 5,
            options: [5, 10],
            pageNo: 1,
            itemCount: 0
        };
        
        vm.getProfiles = getProfiles;

        if (angular.isUndefined($routeParams.id)) {
            getProfiles();
        } else {
            $log.debug("here");
            $log.debug($routeParams.id);
            getProfile($routeParams.id);
        }
        
        $scope.$watch('profile.search', function (newValue, oldValue) {
            if (newValue != oldValue) {
                $log.debug('here');
                vm.filtered = filterFilter(vm.profiles, newValue);
                vm.pagination.itemCount=vm.filtered.length;
                vm.pagination.pageNo=1;
            }
        });

        function getProfiles() {
            return ProfileService.getProfiles()
                .then(function(data) {
                    vm.profiles = data;
                    vm.pagination.itemCount = vm.profiles.length;
                    return vm.profiles;
                });
        }

        function getProfile(id) {
            return ProfileService.getProfile(id)
                .then(function(data) {
                    vm.profile = data;
                    return vm.profile;
                });
        }
    }
})();