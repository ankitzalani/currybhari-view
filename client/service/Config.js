'use strict';

var appconfig = {
    host: 'https://currybhari-view.herokuapp.com'
};

angular.module('curryBhariApp').service('Config', ['$http', '$q', function($http, $q) {
    this.config = {};

    this.getConfig = function() {
        if (!this.config) {
            var promise = $http.get(appconfig.host + '/config').success(
                function(data) {
                    this.config = data;
                    return data;
                });

            return promise;
        } else {
            var defer = $q.defer();
            defer.resolve(this.config);
            return defer.promise;
        }
    };
}]);
