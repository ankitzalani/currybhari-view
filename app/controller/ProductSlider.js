var app = angular.module("curryBhariApp", []);
app.controller("productSliderController",['$scope', function($scope) {
    $scope.getProducts = function () {
        return [{"name":"Khaman23131"}];
    };
}]);
