'use strict';

var appconfig = {
    host: ''
};

angular.module('curryBhariApp').service('UserService', ['$http', '$q', '$auth', '$cookieStore', 'md5',
    function($http, $q, $auth, $cookieStore, md5) {
        this.user = $cookieStore.get('user');

        this.authenticate = function(provider) {
            var self = this;
            var authPromise = $auth.authenticate(provider);
            authPromise.then(function(res) {
                self.user = res.data.user;
                $cookieStore.put('user', self.user);
            });
        };

        this.login = function(username, password) {
            var self = this;
            var usrObject = {
                'user': username,
                'password': password
            };

            var promise = $http.get(appconfig.host + '/user', usrObject).success(
                function(data) {
                    self.user = data;
                    $cookieStore.put('user', self.user);
                    return data;
                });
            return promise;
        };

        this.register = function(usrObject) {
            var promise = $http.post(appconfig.host + '/user', usrObject).success(
                function(data) {
                    self.user = data;
                    $cookieStore.put('user', self.user);
                    return data;
                });
            return promise;
        }

        this.logout = function() {
            $cookieStore.remove('user');
            this.user = {};
        }
    }
]);
