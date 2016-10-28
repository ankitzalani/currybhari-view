var app = angular.module("curryBhariApp", []);
app.controller("mainController", function($scope) {
    $scope.printWelcome = function() {
        console.log('welcome');
    }
});
