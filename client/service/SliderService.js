'use strict';

var appconfig = {
    host: ''
};

angular.module('curryBhariApp').service('SliderService', ['$http', '$q', '$rootScope', function($http, $q, $rootScope) {
    this.list = function() {
        var promise = $http.get(appconfig.host + '/slider').success(
            function(data) {
                return data;
            });
        return promise;
    };
}]);
