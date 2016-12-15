'use strict';

var appconfig = {
    host: ''
};

angular.module('curryBhariApp').service('PostCodeService', ['$http', '$q',
    function($http, $q) {
        this.postCodes = [];

        this.getpostCodes = function() {
            var self = this;
            var promise = $http.get(appconfig.host + '/postCode').success(
                function(data) {
                    self.postCodes = data;
                    return data;
                });
            return promise;
        }
    }
]);
