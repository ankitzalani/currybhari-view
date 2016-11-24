'use strict';

var appconfig = {
    host: 'https://currybhari-view.herokuapp.com'
};

angular.module('curryBhariApp').service('UserService', ['$http', '$q', '$auth', function($http, $q, $auth) {
    this.user = {};

    this.authenticate = function(provider) {
        var self = this;
        var authPromise = $auth.authenticate(provider);
        authPromise.then(function(res) {
            self.user = res.data.user;
        });
    };
}]);
